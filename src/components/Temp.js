{dishes.map( (dish) => (
    <div>
        <Card key={dish.id}>
            <div className="col-12 col-md-5 mt-5">
                <img width="100%" src={dish.image} alt={dish.name} />
                <CardBody className="ml-5">
                    <CardTitle><h4>{dish.name}</h4></CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </div>						
            <div className="col-12 col-md-5 mt-5">
                <CardTitle><h3>Comments</h3></CardTitle>
                <CardBody>
                    <ul>
                        <li>{dishes.comments[dish.id].comment}</li>
                        <li>-- {dishes.comments[dish.id].author}, {dish.comments[dish.id].date}</li>
                    </ul>
                </CardBody>
            </div>
        </Card>
    </div>
))
}

{setDishDetail === true 
    ? <DishDetail  />
    : <div></div>
}