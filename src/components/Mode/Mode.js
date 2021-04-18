import { useState, useEffect } from 'react';
import { FormCheck } from 'react-bootstrap';

export default function Mode() {
    const [mode, setMode] = useState(false);

    useEffect(initMode);

    function changeMode() {
        initMode();
        setMode(!mode);
    }

    function initMode() {
        let root = document.getElementById('root');
        if (mode)
            root.classList.toggle('dark');
    }

    return (
        <FormCheck id="mode" type="switch" checked={mode} onChange={changeMode} />
    );
}