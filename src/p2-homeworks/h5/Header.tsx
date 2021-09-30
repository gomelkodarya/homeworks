import React from 'react';
import { NavLink } from "react-router-dom";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.container}>
            <ul className={s.navMenu}>
                <li className={s.item}>
                    <NavLink to={'/pre-junior'}>pre-junior</NavLink>
                </li>

                <li className={s.item}>
                    <NavLink to={'/junior'}>junior</NavLink>
                </li>

                <li className={s.item}>
                    <NavLink to={'/junior+'}>junior+</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header
