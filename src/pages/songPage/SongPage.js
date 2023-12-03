import React from 'react';
import { useLocation } from 'react-router-dom';
import progrss from '../../images/progress bar4.png';

function SongPage(props) {
    const state = useLocation().state
    return (
        <div className='mainpage d-flex flex-column p-3 text-center justify-content-center align-items-center'>
            <div className='topImage'>
                <img src={progrss} />
            </div>
            <div className='lirics mt-5'>
                {state}
            </div>
        </div>
    );
}

export default SongPage;