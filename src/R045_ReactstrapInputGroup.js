import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button }
from 'reactstrap';
// 지금 버전에서 reactstrap에 InputGroupAddon기능이 없어졌다..
// 기능을 사용하려면 버전을 "^8.4.1" 버전을 사용해야 InputGroupAddon 기능을 사용가능
class R045_ReactstrapInputGroup extends Component{
    render(){
        return(
            <>
            <InputGroup>
                <Input placeholder="userid"/>
                <InputGroupAddon addonType="append">
                    <InputGroupText>@reactmail.com</InputGroupText>
                </InputGroupAddon>
            </InputGroup>
            <InputGroup>
                <InputGroupAddon addonType="prepend"><Button>버튼</Button></InputGroupAddon>
            </InputGroup>
            </>
        )
    }
}
export default R045_ReactstrapInputGroup;