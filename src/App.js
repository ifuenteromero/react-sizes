import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import Mobile from './components/Mobile';
import Desktop from './components/Desktop';

//stado que lea el with de la pantalla
//hacer dos componentes una movil y una desktop
//dependiendo del estado renderiza una u ota
//subirlo a github

class App extends Component {
    state = { 
            width: window.innerWidth ,
            userboundary: 500
        }
    componentWillMount() {
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
        let component;
        isMobile ? component = <Mobile /> : component= <Desktop />
        return (
            <Fragment >
                {width }
                {component}
                <input type = "number" onChange={this.handleChangeWidth} value= {userboundary}/>
            </Fragment>
        )
        // if (isMobile)
        //     return <Mobile />
        // else 
        //     return <Desktop />
    }
}
 
export default App;
