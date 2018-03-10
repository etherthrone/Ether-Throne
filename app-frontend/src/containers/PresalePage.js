import React, { Component } from 'react';
import EtherBot from '../components/EtherBot'

class PresalePage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="container presale">
                <div className="header text-center">
                    <h2>Pre Sale</h2>
                    <p>Here are some robots for Pre Sale</p>
                </div>
                <div className="row text-center">
                    <div className="col-md-6">
                        <EtherBot
                            name="sprike"
                            cost="0.5"
                            owner="0x55e2780588aa5000F464f700D2676fD0a22Ee160"
                        />
                    </div>
                    <div className="col-md-6">
                        <EtherBot
                            name="vampire"
                            cost="0.5"
                            owner="0x55e2780588aa5000F464f700D2676fD0a22Ee160"
                        />
                    </div>
                </div>
            </div>


        );
    }
}

export default PresalePage;