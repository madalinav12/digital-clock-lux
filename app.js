function updateClocks() {
  const timeZones = {
    "ro": "Europe/Bucharest",
    "us": "America/New_York",
    "uk": "Europe/London",
    "jp": "Asia/Tokyo",
    "za": "Africa/Johannesburg",
  };

  for (const [key, zone] of Object.entries(timeZones)) {
    // Ora în format 24h
    const nowTime = new Date().toLocaleTimeString('ro-RO', {
      timeZone: zone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });

    // Data în format zi.lună.an (ex: 08.07.2025)
    const nowDate = new Date().toLocaleDateString('ro-RO', {
      timeZone: zone,
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    document.getElementById(`${key}-clock`).textContent = nowTime;
    document.getElementById(`${key}-date`).textContent = nowDate;
  }
}

setInterval(updateClocks, 1000);
updateClocks();
