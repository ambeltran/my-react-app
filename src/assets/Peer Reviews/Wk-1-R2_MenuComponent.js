import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle  } from "reactstrap";
import DishDetail from './DishdetailComponent';
class Menu extends Component{
    constructor(props){
        super(props);
        // stores iproperties of this component
        this.state = {
            selectedDish: null
        };
        console.log('Menu component constructed');
    }
    onDishSelect(dish){
        this.setState({
            selectedDish: dish
        });
    }
    render(){
        console.log('renders menu component');
        const menu = this.props.dishes.map((dish) => {
        
            return (        
                this.onDishSelect( dish ),
                { dish.name },
                             
            )
        })
    
        }
      
    return(
        { menu }   
    );
    }
    componentDidMount(){
        console.log('Menu component componentDidMounbt is invoked');
    }
}
export default Menu;