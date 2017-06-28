import React from 'react'
import {Route, IndexRoute} from 'react-router'

import Gallery from './containers/Gallery'

export const routes = (
    <Route path='/' component={Gallery}>
        <IndexRoute component={Gallery}/>
    </Route>
);
