import React, { useState, useEffect } from 'react';

function ThemeSwitcher() {
  const [theme, setTheme] = useState('forest');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className="select select-bordered w-full max-w-xs"
    >
      <option value="forest">Forest</option>
      <option value="dracula">Dracula</option>
      <option value="night">Night</option>
      <option value="lofi">Lofi</option>
      <option value="light">Light</option>
    </select>
  );
}

export default ThemeSwitcher;
