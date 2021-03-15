import React, { useState, useEffect} from 'react';
import "../styles/main.css";

export default function Theme () {
  const [lightTheme, setLightTheme] = useState(true);

  useEffect(()=>{
    console.log(lightTheme)
  }, [lightTheme])

  return (
    <div className={lightTheme ? 'theme-light' : 'theme-dark'}>
      <input
        type="checkbox"
        checked={lightTheme}
        onChange={() => setLightTheme(!lightTheme)}
      />
      {/* The rest of the app goes in here. */}
    </div>
  );
}

