
import React, { Component } from 'react';
import styled from 'styled-components';

//styled component must write in header
const WrapList = styled.div`
   margin-top:8px;
`




export default class DairyList extends Component {
    render() {
        return (
            <WrapList>
                {this.props.list.map((item, index) => {
                    return <DairyListItem key={index}>{item}</DairyListItem>
                })}
            </WrapList>
        )
    }
}
const WrapItem = styled.div`
    background:pink;
    border-radius:6px;
`

class DairyListItem extends Component {
    render() {
        const { children } = this.props;
        return (

            <WrapItem>
                {children}
            </WrapItem>
        )
    }
}


