import React, { useState } from 'react';
import {
    Alert,
    UncontrolledAlert,
    Card,
    CardBody,
    CardTitle,
} from 'reactstrap';

import { Form, Col } from 'react-bootstrap'

const Settings = () => {
    // For Dismiss Button with Alert
    const [visible, setVisible] = useState(true);

    const onDismiss = () => {
        setVisible(false);
    }

    return (
        <div>
            {/* --------------------------------------------------------------------------------*/}
            {/* Start Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}

            {/* --------------------------------------------------------------------------------*/}
            {/* Card-1*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-comment-processing-outline mr-2"> </i>
            slowlicious channel
          </CardTitle>
                <CardBody className="">
                    <div className="mt-3">
                        <Alert color="primary">
                            The broadcast is live!
              </Alert>
                        <Alert color="warning">
                            The drop is currently active!
              </Alert>
                    </div>
                    <div>
                        <Form>
                        Autorun drop:
                            <div key='default-checkbox' className="mb-3">
                                <Form.Check
                                    label='Enabled'
                                />
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>After live delay</Form.Label>
                                    <Form.Control as="select" value="Choose...">
                                        <option>5 min</option>
                                        <option>15 mins</option>
                                        <option>30 mins</option>
                                        <option>1 hour</option>
                                    </Form.Control>
                                </Form.Group>
                            </div>
                        </Form>
                    </div>
                    <div>
                        Drop every:
                    </div>
                </CardBody>
            </Card>

            {/* --------------------------------------------------------------------------------*/}
            {/* End Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
        </div>
    );
}

export default Settings;
