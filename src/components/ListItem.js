import React, { Component } from 'react';

class ListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {styleName: "notDone"};        
    }

    clickHandler = ()=>{
        this.setState({styleName: (this.state.styleName === "notDone"? "done" : "notDone")});
    }

    render(){
        if(this.state.styleName === "notDone"){
            return(
                <li onClick={this.clickHandler}>{this.props.name}</li>
            );
        }

        else if(this.state.styleName === "done"){
            return(
                <li onClick={this.clickHandler} className={this.state.styleName}>{this.props.name} ✓ </li>
            );
        }
    }
}

export default ListItem;