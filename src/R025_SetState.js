import React, { Component } from 'react';

class R025_SetState extends Component{
    constructor(props){
        super(props);
        this.state={
            StateString : 'react',
        }
    }

    StateChagne = (flag) =>{
        if(flag == 'direct') this.state.StateString = '리액트';
        if(flag == 'setstate') this.setState({StateString : '리액트'});
    }

    render(){
        return(
            <div style = {{padding : "0px"}}>
                <button onClick={(e)=> this.StateChagne('direct',e)}>
                    state 직접 변경
                </button>
                <button onClick={(e)=> this.StateChagne('setstate',e)}>
                    setstate로 변경
                </button><br/>
                [state 변경하기] StateString : {this.state.StateString}
            </div>
        )
    }
}

export default R025_SetState;