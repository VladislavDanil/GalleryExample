import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import { routes } from './routes'
import  {Router, browserHistory}  from  'react-router'

import './styles/app.css'

const store = configureStore();

render(
    <Provider store={store}>
        <Router  history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root')
);