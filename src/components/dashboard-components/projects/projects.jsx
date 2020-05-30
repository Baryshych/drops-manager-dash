import React from "react";

import img1 from 'assets/images/users/1.jpg';
import img2 from 'assets/images/users/2.jpg';
import img3 from 'assets/images/users/3.jpg';
import img4 from 'assets/images/users/4.jpg';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Input,
    Table
} from 'reactstrap';

const Projects = () => {
    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-4 [General]                                                  */
        /*--------------------------------------------------------------------------------*/

        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>Channels</CardTitle>
                        <CardSubtitle>Channels status</CardSubtitle>
                    </div>
                    <div className="ml-auto d-flex no-block align-items-center">
                        <div className="dl">
                            <Input type="select" className="custom-select">
                                <option value="0">Running</option>
                                <option value="1">Current campaign</option>
                                <option value="2">All</option>
                            </Input>
                        </div>
                    </div>
                </div>
                <Table className="no-wrap v-middle" responsive>
                    <thead>
                        <tr className="border-0">
                            <th className="border-0">Streamer</th>
                            <th className="border-0">Channel</th>

                            <th className="border-0">Is live</th>
                            <th className="border-0">Current viewers</th>
                            <th className="border-0">Budget</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="mr-2"><img src={img1} alt="user" className="rounded-circle" width="45" /></div>
                                    <div className="">
                                        <h5 className="mb-0 font-16 font-medium">Hanna Gover</h5><span>hgover@gmail.com</span></div>
                                </div>
                            </td>
                            <td>channel_csgo</td>

                            <td>
                                <i className="fa fa-circle text-orange" id="tlp1"></i>

                            </td>
                            <td>35</td>
                            <td className="blue-grey-text  text-darken-4 font-medium">$96K</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="mr-2"><img src={img2} alt="user" className="rounded-circle" width="45" /></div>
                                    <div className="">
                                        <h5 className="mb-0 font-16 font-medium">Daniel Kristeen</h5><span>Kristeen@gmail.com</span></div>
                                </div>
                            </td>
                            <td>channel12</td>

                            <td>
                                <i className="fa fa-circle text-success" id="tlp2"></i>

                            </td>
                            <td>35</td>
                            <td className="blue-grey-text  text-darken-4 font-medium">$96K</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="mr-2"><img src={img3} alt="user" className="rounded-circle" width="45" /></div>
                                    <div className="">
                                        <h5 className="mb-0 font-16 font-medium">Julian Josephs</h5><span>Josephs@gmail.com</span></div>
                                </div>
                            </td>
                            <td>channel1</td>

                            <td>
                                <i className="fa fa-circle text-success" id="tlp3"></i>

                            </td>
                            <td>35</td>
                            <td className="blue-grey-text  text-darken-4 font-medium">$96K</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="mr-2"><img src={img4} alt="user" className="rounded-circle" width="45" /></div>
                                    <div className="">
                                        <h5 className="mb-0 font-16 font-medium">Jan Petrovic</h5><span>hgover@gmail.com</span></div>
                                </div>
                            </td>
                            <td>other_channel</td>

                            <td>
                                <i className="fa fa-circle text-orange" id="tlp4"></i>

                            </td>
                            <td>35</td>
                            <td className="blue-grey-text  text-darken-4 font-medium">$96K</td>
                        </tr>
                    </tbody>
                </Table>
            </CardBody>
        </Card >
    );
}

export default Projects;
