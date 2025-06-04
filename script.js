 function updateDateTime() {
    const now = new Date();

    // const weekday = now.toLocaleString('en-US', { weekday: 'long' });
    const month = now.toLocaleString('en-US', { month: 'long' });
    const day = now.getDate();
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const formatted = `${month} ${day} ${year} | ${hours}:${minutes}:${seconds}`;
    document.getElementById('datetime').textContent = formatted;
  }

  setInterval(updateDateTime, 1000);
  updateDateTime();
