import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './actions/user.js';


import Navbar from './componets/navbar/Navbar';
import Auth from './componets/authorization/Auth';
import TopicList from './componets/topicsList/TopicList';
import TopicDetails from './componets/topicDetails/TopicDetails';

function App() {
    const isAuth = useSelector((state) => state.user.isAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(auth());
    }, [dispatch]);
    return (
        <BrowserRouter>
            <div>
                <Navbar/>
                <div>
                    {!isAuth ?
                        <Switch>
                            <Route path='/auth' component={Auth}/>
                            <Redirect to='/auth'/>
                        </Switch>                        :
                        <Switch>
                            <Route exact path={'/'} component={ TopicList }/>
                            <Route path='/topic/:id' component={TopicDetails}/>
                            <Redirect to='/'/>
                        </Switch>
                    }
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
