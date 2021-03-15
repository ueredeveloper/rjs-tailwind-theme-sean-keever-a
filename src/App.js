import React, { useState, useEffect} from 'react';
import './styles/main.css'

export default function App () {
  const [lightTheme, setLightTheme] = useState(true);

  useEffect(()=>{
    console.log(lightTheme)
  }, [lightTheme])

  return (
    <h1 className="text-primary">Learn Reac 1</h1>
  );
}

/*
 <div className={lightTheme ? 'theme-light' : 'theme-dark'}>
    <input
        type="checkbox"
        checked={lightTheme}
        onChange={() => setLightTheme(!lightTheme)}
      />
      
      <p className="text-red-200">Hello World</p>
    </div>
    */