import React, { Component } from 'react';
import { useState } from 'react';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { elaicheesecake, uthappizza, vadonut, zucchipakoda } from './Pictures';

const dishes = DISHES;

const Menu = () => {

	const [dishId, setDishId] = useState(0);
	
	const showDishDetail = (event) => {
		setDishId(event.currentTarget.id);
		
		return (
			dishId
		)
	};

	return (			
		<div className="menu-container flex row">
			{dishes.map( (dish) => (
				<div className="col-12 col-md-5 mt-5">
					<Card key={dish.id} id={dish.id} onClick={showDishDetail}>
						<CardImgOverlay>
							<CardTitle className="text-start"><h5>{dish.name}</h5></CardTitle>
						</CardImgOverlay>
							{dish.name === "Uthappizza" ? <img src={uthappizza} /> : null}						
							{dish.name === "Zucchipakoda" ? <img src={zucchipakoda} alt={dish.name} /> : null}
							{dish.name === "Vadonut" ? <img src={vadonut} alt={dish.name} /> : null}
							{dish.name === "ElaiCheese Cake" ? <img src={elaicheesecake} alt={dish.name} /> : null}						
					</Card>				
				</div>
			))
			}
			<div>
				{dishId !== 4
					? <DishDetail {...{dishId}} />	
					: <div></div>
				}
			</div>
		</div>
	)
}

export default Menu;