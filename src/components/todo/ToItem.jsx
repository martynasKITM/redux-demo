import {Card, Button, ListGroupItem} from "react-bootstrap"
import {UncontrolledCollapse} from "reactstrap";

const ToItem = ()=>{
    return(
        <ListGroupItem>
            <div className="row">
                <div className="col-md-7">
                    <span variant="primary" className="d-flex" style={{marginBottom:'1rem'}}>
                        Uzduotis
                    </span>
                    <UncontrolledCollapse>
                        <Card>
                            <Card.Body>
                                uzduoties aprasymas
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