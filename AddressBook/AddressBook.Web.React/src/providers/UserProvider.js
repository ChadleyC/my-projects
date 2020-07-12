import React, { createContext } from 'react';
import {auth} from '../configuration/firebaseconfig';

export const UserContext = createContext({ user: {} });

export default class UserProvider extends React.Component {
    state= {
      user: null
    };

    componentDidMount = () => {
        auth.onAuthStateChanged(userAuth => {
            this.setState({ user: userAuth });
        });
    }

    render() {
        return (
          <UserContext.Provider value={this.state.user}>
            {this.props.children}
          </UserContext.Provider>
        );
      }
}