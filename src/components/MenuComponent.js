import React from 'react';
import { useState } from 'react';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { elaicheesecake, uthappizza, vadonut, zucchipakoda } from './Pictures';

const dishes = DISHES;

function RenderMenuItem ( {dish, onClick} ) {
	return (
		<div> 
			<Card onClick={() => onClick(dish.id)}>
				<CardImgOverlay>
					<CardTitle className="text-start"><h5>{dish.name}</h5></CardTitle>
				</CardImgOverlay>
					{dish.name === "Uthappizza" ? <img src={uthappizza} /> : null}						
					{dish.name === "Zucchipakoda" ? <img src={zucchipakoda} alt={dish.name} /> : null}
					{dish.name === "Vadonut" ? <img src={vadonut} alt={dish.name} /> : null}
					{dish.name === "ElaiCheese Cake" ? <img src={elaicheesecake} alt={dish.name} /> : null}						
			</Card>
		</div>
	);
};

const Menu = ( {...props} ) => {

	const dishId = props.onClick;

	return (
		<div className="menu-container flex row">
			{dishes.map( (dish) => (	
				<div key={dish.id} id={dish.id} className="col-12 col-md-5 mt-5"> 			
					<RenderMenuItem dish={dish} />		
				</div>
				))	
			};				
		</div>
	);	
}

export default Menu;