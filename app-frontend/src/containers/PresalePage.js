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
                            cost="0.001"
                            owner="0x71d46c1D4Eea94E3f74C38FA0aFd84b162Ce82F3"
                        />
                    </div>
                    <div className="col-md-6">
                        <EtherBot
                            name="vampire"
                            cost="0.001"
                            owner="0x71d46c1D4Eea94E3f74C38FA0aFd84b162Ce82F3"
                        />
                    </div>
                </div>
            </div>


        );
    }
}

export default PresalePage;