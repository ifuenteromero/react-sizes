import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Mobile from './components/Mobile';
import Desktop from './components/Desktop';
import Home from './components/Home';

class App extends Component {
    state = { 
            width: window.innerWidth ,
            userboundary: 500
        }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }
    
    // make sure to remove the listener
    // when the component is not mounted anymore
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    handleChangeWidth = (e) => {
        const { value } = e.currentTarget
        this.setState((prevState)=>{
            return {
                ...prevState,
                userboundary : value
            }
        })
    }
    
    render() { 
        const { width,userboundary } = this.state;
        const isMobile = width <= userboundary;
        let componente;
        isMobile ? componente = <Mobile /> : componente= <Desktop />
        return (     
            <Switch>
                <Route exact path = "/" 
                    render = { routerProps => (
                        <Home 
                            component = {componente} 
                            width={width} 
                            userboundary={userboundary} 
                            handleChangeWidth={this.handleChangeWidth} 
                        />
                    )}
                />          
            </Switch>        
        )
    }
}
 
export default App;
