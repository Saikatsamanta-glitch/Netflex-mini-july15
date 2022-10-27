import React, { Component } from 'react';

class Moviecard extends Component {
    constructor(props){  //  { name:"moviename" }
        super();
        this.state={
            name:props.name,
            img:props.img
        }
    }
    render() {
        return (
            <a href="" class="cards">
                <img src={this.state.img} class="card__image" alt="" />
                <div class="card__overlay">
                    <div class="card__header">
                        <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                        <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                        <div class="card__header-text">
                            <h3 class="card__title"> {this.state.name} </h3>
                            <span class="card__status">1 hour ago</span>
                        </div>
                    </div>
                    <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                </div>
            </a>
        );
    }
}
export default Moviecard;
