/* Stirling Sound — studio availability calendar
   Shows Open / Limited / Booked days. Visitors never see why a day is blocked.

   Setup lives on the element:
     <div class="availability" data-availability
          data-calendar-id="[GOOGLE_CALENDAR_ID]"
          data-api-key="[GOOGLE_API_KEY]"
          data-months-ahead="6"
          data-book-url="contact.html"></div>

   SAMPLE MODE: while calendar-id or api-key is still a [PLACEHOLDER], the calendar
   shows made-up sample dates and a visible "sample" notice.

   LIVE MODE (once Nathan's calendar exists):
   1. Nathan creates a Google Calendar called "Studio Availability" and adds an
      all-day event (or a timed event for a half day) for every day he can't record.
   2. Settings > Access permissions: "Make available to public" > "See only free/busy".
   3. Copy the Calendar ID (Settings > Integrate calendar) into data-calendar-id.
   4. Create a Google Cloud API key with only the Google Calendar API enabled and
      restrict it to the site's domain (HTTP referrer). Put it in data-api-key.
      A referrer-restricted browser key is meant to be public; never commit
      account passwords or OAuth secrets.
   The script reads busy blocks from the Calendar API's freeBusy endpoint, so event
   titles and notes never reach the browser. */
(() => {
  const el = document.querySelector('[data-availability]');
  if (!el) return;

  const isSet = (v) => v && !v.startsWith('[');
  const calendarId = el.dataset.calendarId || '';
  const apiKey = el.dataset.apiKey || '';
  const live = isSet(calendarId) && isSet(apiKey);
  const monthsAhead = parseInt(el.dataset.monthsAhead || '6', 10);
  const bookUrl = el.dataset.bookUrl || 'contact.html';

  const today = new Date(); today.setHours(0, 0, 0, 0);
  const firstMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastMonth = new Date(today.getFullYear(), today.getMonth() + monthsAhead - 1, 1);
  // Late in the month, open on next month so the first view isn't mostly past days
  const daysLeft = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate() - today.getDate();
  let view = daysLeft < 7 ? new Date(today.getFullYear(), today.getMonth() + 1, 1) : new Date(firstMonth);

  const pad = (n) => String(n).padStart(2, '0');
  const ymd = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const fmtMonth = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' });
  const fmtDay = new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  // status per day: 'booked' | 'limited'; anything missing is open
  const status = new Map();

  // ---- Sample data (placeholder only, not real bookings) -----------------
  function loadSample() {
    // A believable pattern relative to today: mix/master blocks, a few tracking
    // days and some half days. Swapped out automatically once live.
    const add = (offset, s) => { const d = new Date(today); d.setDate(d.getDate() + offset); status.set(ymd(d), s); };
    [2, 3, 4, 9, 10, 16, 17, 18, 19, 23, 30, 31, 32, 38, 44, 45, 46, 52, 53, 60, 61, 62, 63, 74, 75, 88, 89, 90, 102, 103]
      .forEach((o) => add(o, 'booked'));
    [6, 13, 26, 41, 57, 68, 81, 95].forEach((o) => add(o, 'limited'));
  }

  // ---- Live data: Google Calendar freeBusy --------------------------------
  async function loadLive() {
    const timeMin = new Date(firstMonth);
    const timeMax = new Date(lastMonth.getFullYear(), lastMonth.getMonth() + 1, 1);
    const res = await fetch(`https://www.googleapis.com/calendar/v3/freeBusy?key=${encodeURIComponent(apiKey)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        timeMin: timeMin.toISOString(), timeMax: timeMax.toISOString(),
        timeZone: 'America/Chicago', items: [{ id: calendarId }]
      })
    });
    if (!res.ok) throw new Error(res.status);
    const data = await res.json();
    const cal = data.calendars && data.calendars[calendarId];
    if (!cal || (cal.errors && cal.errors.length)) throw new Error('calendar not public');

    // Total busy minutes per day; 6+ hours (or an all-day block) = booked, less = limited
    const minutes = new Map();
    cal.busy.forEach(({ start, end }) => {
      let s = new Date(start); const e = new Date(end);
      while (s < e) {
        const dayEnd = new Date(s.getFullYear(), s.getMonth(), s.getDate() + 1);
        const stop = e < dayEnd ? e : dayEnd;
        const k = ymd(s);
        minutes.set(k, (minutes.get(k) || 0) + (stop - s) / 60000);
        s = stop;
      }
    });
    minutes.forEach((m, k) => status.set(k, m >= 360 ? 'booked' : 'limited'));
  }

  // ---- Render ------------------------------------------------------------
  const LABEL = { open: 'Open', limited: 'Limited (part of the day is booked)', booked: 'Booked', past: 'Past' };

  function render() {
    const y = view.getFullYear(), m = view.getMonth();
    const start = new Date(y, m, 1);
    const days = new Date(y, m + 1, 0).getDate();
    const lead = start.getDay(); // Sunday-first

    let rows = '', cells = '';
    for (let i = 0; i < lead; i++) cells += '<td class="cal-empty"></td>';
    for (let d = 1; d <= days; d++) {
      const date = new Date(y, m, d);
      const key = ymd(date);
      const state = date < today ? 'past' : (status.get(key) || 'open');
      const label = `${fmtDay.format(date)}: ${LABEL[state]}`;
      const inner = state === 'open' || state === 'limited'
        ? `<a href="${bookUrl}?date=${key}" aria-label="${label}. Send an inquiry for this date.">${d}</a>`
        : `<span aria-label="${label}">${d}</span>`;
      cells += `<td class="cal-day is-${state}${key === ymd(today) ? ' is-today' : ''}">${inner}</td>`;
      if ((lead + d) % 7 === 0) { rows += `<tr>${cells}</tr>`; cells = ''; }
    }
    if (cells) rows += `<tr>${cells}${'<td class="cal-empty"></td>'.repeat(7 - ((lead + days) % 7))}</tr>`;

    const atStart = view <= firstMonth, atEnd = view >= lastMonth;
    el.querySelector('.cal-title').textContent = fmtMonth.format(view);
    el.querySelector('.cal-prev').disabled = atStart;
    el.querySelector('.cal-next').disabled = atEnd;
    el.querySelector('tbody').innerHTML = rows;
  }

  el.innerHTML = `
    ${live ? '' : '<p class="cal-sample"><strong>Sample dates.</strong> This calendar isn\'t connected yet. Booked days below are examples, not real bookings.</p>'}
    <div class="cal-head">
      <button type="button" class="cal-nav cal-prev" aria-label="Previous month">&larr;</button>
      <h3 class="cal-title" aria-live="polite"></h3>
      <button type="button" class="cal-nav cal-next" aria-label="Next month">&rarr;</button>
    </div>
    <table class="cal-grid">
      <thead><tr>${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => `<th scope="col"><abbr title="${d}">${d[0]}</abbr></th>`).join('')}</tr></thead>
      <tbody></tbody>
    </table>
    <ul class="cal-key" aria-label="Key">
      <li><span class="swatch is-open"></span>Open</li>
      <li><span class="swatch is-limited"></span>Limited</li>
      <li><span class="swatch is-booked"></span>Booked</li>
    </ul>
    <p class="cal-error" hidden></p>`;

  el.querySelector('.cal-prev').addEventListener('click', () => { view = new Date(view.getFullYear(), view.getMonth() - 1, 1); render(); });
  el.querySelector('.cal-next').addEventListener('click', () => { view = new Date(view.getFullYear(), view.getMonth() + 1, 1); render(); });

  (live ? loadLive() : Promise.resolve(loadSample()))
    .catch(() => {
      const err = el.querySelector('.cal-error');
      err.hidden = false;
      err.textContent = 'We couldn\'t load the calendar right now. Send an inquiry with your dates and we\'ll check for you.';
    })
    .finally(render);
})();
