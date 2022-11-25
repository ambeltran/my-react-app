import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';
import { elaicheesecake, uthappizza, vadonut, zucchipakoda } from './Pictures';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

const dishes = DISHES;

const DishDetail = ({dishId}) => {
		
	return (
		<div className="dish-container flex row">
			{dishes.map( (dish) => (
				<div className="col-12 col-md-5 mt-5">
					{dish.id === dishId 
						? <Card className="ml-20" key={dish.id}>
							{dish.name === "Uthappizza" ? <img src={uthappizza} alt={dish.name} /> : null}						
							{dish.name === "Zucchipakoda" ? <img src={zucchipakoda} alt={dish.name} /> : null}
							{dish.name === "Vadonut" ? <img src={vadonut} alt={dish.name} /> : null}
							{dish.name === "ElaiCheese Cake" ? <img src={elaicheesecake} alt={dish.name} /> : null}
							<div>
								<CardBody className="ml-5">
									<CardTitle><h4>{dish.name}</h4></CardTitle>
									<CardText>{dish.description}</CardText>
								</CardBody>
							</div>						
							<div>
								<CardTitle><h3>Comments</h3></CardTitle>
								<CardBody>
									<ul>
										<li>{dish.comments[dish.id].comment}</li>
										<li>-- {dish.comments[dish.id].author}, {dish.comments[dish.id].date}</li>
									</ul>
								</CardBody>
							</div>
						</Card>
						: <div></div>
					}

				</div>
			))
			}
		</div>
	)
}

export default DishDetail;