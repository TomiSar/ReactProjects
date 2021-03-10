import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { ConnectedDashboard } from './Dashboard';
import { Route, Router } from 'react-router-dom';
import { history } from '../store/history';
import { ConnectedNavigation } from '../components/Navigation';
import { ConnectTaskDetail } from './TaskDetails';

export const Main = () => (
    <Router history={history}>
        <Provider store={store}>
            <div>
                <ConnectedNavigation />
                {/* ConnectedDashboard only appears URL localhost/dashboard */}
                <Route exact path="/dashboard" render={() => (<ConnectedDashboard />)} />
                <Route exact path="/task/:id" render={({match}) =>(<ConnectTaskDetail match={match} />)}/>
            </div>
        </Provider>
    </Router>
)