import React, {PropTypes, Component} from 'react'
import {Link} from 'react-router'

export function NotFound() {
    return (
        <div>
            Страница не найдена.
            <Link to='/'>Вернуться на главную</Link>
        </div>
    );
}
