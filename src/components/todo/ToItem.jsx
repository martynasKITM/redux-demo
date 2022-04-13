import {Card, Button, ListGroupItem} from "react-bootstrap"
import {UncontrolledCollapse} from "reactstrap";

const ToItem = ({todo,remove, mark})=>{
    return(
        <ListGroupItem>
            <div className="row">
                <div className="col-md-7">
                    <span variant="primary" className="d-flex" id={`toggler${todo.id}`} style={{marginBottom:'1rem'}}>
                        {todo.isComplete?<p><strike>{todo.title}</strike></p>:<p>{todo.title}</p>}
                    </span>
                    <UncontrolledCollapse toggler={`#toggler${todo.id}`}>
                        <Card>
                            <Card.Body>
                                {todo.description}
                            </Card.Body>
                        </Card>
                    </UncontrolledCollapse>
                </div>
                <div className="col-md-5">
                    <div className="ml-auto">
                        <Button variant="danger">Pašalinti</Button>
                        <Button variant="primary">Užbaigti</Button>
                    </div>
                </div>
            </div>
        </ListGroupItem>
    )

}

export default ToItem