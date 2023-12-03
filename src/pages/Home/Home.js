import React from 'react';
import './Home.css'
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import hashtag from '../../images/Celebrations(Bg) - hashtag.png'

export const Home = (props) => {
    const navigate= useNavigate()
    useEffect(() => {
        let timeOut = setTimeout(() => {
            navigate("/registration")
        }, 3000);
        return () => {
            if (timeOut)
                clearTimeout(timeOut)
        }
    }, [])
    return (
        <div className='homepage h-100' >
        </div>
    );
}
