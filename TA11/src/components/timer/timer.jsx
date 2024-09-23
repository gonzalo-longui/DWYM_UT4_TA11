import { useState, useEffect } from 'react';
import style from './timer.module.css';

export function Timer() {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setContador((counter) => counter + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <h1 className={style.Timer}>{Math.floor(contador/60)}:{contador % 60 < 10 ? `0${contador % 60}` : contador % 60}</h1>
        </div>
    )

}