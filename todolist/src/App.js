import React, {Component,Fragment} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            show:true,
            list:[]
        }
        this.handleToggole = this.handleToggole.bind(this)
        this.handleAddItem = this.handleAddItem.bind(this)
    }


    render() {
        return (
            <Fragment>
                <TransitionGroup>
                    {
                        this.state.list.map((item,index) => {
                            return (
                                <CSSTransition
                                    // in={this.state.show}
                                    timeout={1000}
                                    classNames='fade'
                                    unmountOnExit   
                                    onEntered={(el)=>{el.style.color="blue"}} 
                                    appear={true}
                                    key={index}
                                >
                                    <div >{item}</div>
                                </CSSTransition>
                            )
                        })
                    }
                    {/* <div >hello</div> */}
                </TransitionGroup>
                <button onClick={this.handleAddItem}>toggole</button>
            </Fragment>
        )
    }
    handleToggole(){
        this.setState({
            show: this.state.show ? false : true
        })
    }

    handleAddItem() {
        this.setState((prevState) => {
            return{
                list: [...prevState.list, 'item']
            }
        })
    }
}

export default App;