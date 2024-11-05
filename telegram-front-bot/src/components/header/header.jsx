import React from 'react';

const Header = () => {
    
    const tg = window.Telegram ? window.Telegram.WebApp : null;
    
    const close = () => {
        if (tg) {
            tg.close()
        } else {
            console.error("Telegram WebApp API is not available");
        }
    }
    
    return (
        <div className={'header'}>
            <button>закрыть</button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    );
};

export default Header;