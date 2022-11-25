import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";
class DishDetail extends Component{
    constructor(props) {
        super(props);
        console.log(props);
        // stores iproperties of this component
        this.state = {
            selectedDishDetail: this.props.dsdetail
        };
    }
    renderDish(dish) {
        if (dish != null) {
            return (
                
                    
                        
                        
                             {dish.name}
                             {dish.description} 
                        
                    
                
            );
        }
        else {
            return (
                

            );
        }
    }
    renderComments(comments){
        if (comments == null) {
            return (
)
        }
        const cmnts = comments.map(comment => {
            return (
                
                    
{comment.comment}
                    
-- {comment.author},
                     
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}
                    
                
            )
        })
        return (
            
                 Comments 
                
                    {cmnts}
                
            
        )
    }
    render(){
        const dish = this.props.dish
        console.log(dish);
        if (dish == null) {
            return (
);
        }
        const dishItem = this.renderDish(dish);
        const dishComment = this.renderComments(dish.comments);
        return (
            
                {dishItem}
                {dishComment}
            
        )
    }
}
export default DishDetail;