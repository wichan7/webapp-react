import {useState, useEffect} from 'react';

function SettingPage() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = (e) => setToggle(!toggle);

  useEffect(() => {
    if (!toggle) return;
    const timer = setInterval(() => console.log("clock!"), 1000);
    
    return () => clearInterval(timer);
  }, [toggle]);

  return (
    <section>
      {toggle ? <div>Timer is running</div> : <></>}
      <button onClick={handleToggle}>Toggle Timer</button>
    </section>
  )
}

export default SettingPage;