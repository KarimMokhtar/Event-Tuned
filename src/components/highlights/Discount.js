import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utils/MyButton';
export default class Discount extends Component{
    constructor(props){
        super(props);
        this.state= {
            discountStart:0,
            discountEnd:30
        }
    }
    porcentage = () =>{
        if(this.state.discountEnd > this.state.discountStart){
            this.setState({discountStart:this.state.discountStart+1})
        }
    }
    componentDidUpdate(){
        setTimeout(()=>{
            this.porcentage()
        },30)
    }
    render(){
        return(
                <div className="center_wrapper">
                    <div className="discount_wrapper">
                        <Fade
                            onReveal={()=>this.porcentage()}
                        >
                            <div className="discount_porcentage">
                                <span>{this.state.discountStart}%</span>
                                <span>OFF</span>
                            </div>
                        </Fade>
                        <Slide right>
                            <div className="discount_description">
                                <h3>Purchase tickets before 20th JUNE</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a odio dolor. Ut tristique semper
                                    Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a odio dolor. Ut tristique semper
                                </p>

                                <MyButton
                                    text="Purchase tickects"
                                    bck="#ffa800"
                                    color="#fff"
                                    link="http://google.com"
                                />
                            </div>
                        </Slide>
                        
                    </div>
                </div>
            
        );
    }
}