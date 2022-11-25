import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <>
                    <div className='col-12 col-md-5 m-1'>    
                        <Card>
                            <CardImg width='100%' src={dish.image} alt={dish.name }/>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    {this.renderComments(dish.comments)}
                </>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    renderComments(comments) {
        if (comments !== null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <h4>Comments</h4>
                    <ul className='list-unstyled'>
                        {comments.map((comment => {
                            return (
                                <li key={comment.author}>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author}, {comment.date}</p>
                                </li>
                            )
                        }))}
                    </ul>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    render() {
        return (
            <div className='row'>
                {this.renderDish(this.props.selectedDish)}
            </div>
        );
    };
}

export default Dishdetail;