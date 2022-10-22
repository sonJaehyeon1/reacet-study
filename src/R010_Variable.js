import React, { Component } from 'react';

class R010_Variable extends Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        var varName = 'react';
        console.log('varName1 : '+varName);
        var varName = '200';
        // 'varName' is already defined no-redeclare 
        // var 변수는 재선언,재할당이 가능하기 때문에 경고메세지만 뜬다.
        console.log('varName2 : '+varName);

        let letName = 'react';
        console.log('letName1 : '+letName);
        // let letName = '200';
        // console.log('letName2 : '+letName);
        // Parsing error : Identifier 'letName' has  already been declared
        // let 변수는 재선언을 허용하지 않기 때문에 오류메시지가 뜬다.
        letName = 'react200';
        console.log('letName2 : '+letName);
        // 하지만 재할당은 허용하기 때문에 새로운 값을 허용하였을 경우 정상적으로
        // 표시가 된다.

        const constName = 'react';
        console.log('constName1 : '+constName);
        //const constName = '200';
        //console.log('constName2 : '+constName);
        // Parsing error : Identifier 'constName' has already been declared
        //const 변수는 재선언을 허용하지 않기 때문에 에러메시지 검출

        //constName = 'react200';
        //console.log('constName2 : '+constName);
        // Uncaught TypeError : Assignement to constant variable
        // 재할당도 허용하지 않는다.
    }

    render(){
        return(
            <h2>[THIS IS Variable]</h2>
        )
    }
}
export default R010_Variable;