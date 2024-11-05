import './App.css';
import React from "react";

function App() {
    
    
    React.useEffect(() => {
        if (tg) {
            tg.ready()
        } else {
            console.error("Telegram WebApp API is not available");
        }
    }, []);
    
    return (
        <div className="App">
            hello world
            <button onClick={close}>close</button>
        </div>
    );
}

export default App;
