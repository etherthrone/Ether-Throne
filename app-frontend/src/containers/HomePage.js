import React, { Component } from 'react';

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            metamask: -1 // -1: uninstalled, 0: installed but locked, 1: unlocked
        }
    }

    componentWillMount() {
        if (localStorage.getItem('metamask')) {
            if (localStorage.getItem('metamask') === 'null')
                this.setState({
                    metamask: -1
                });
            else if (localStorage.getItem('metamask') === 'lock')
                this.setState({
                    metamask: 0
                });
            else
                this.setState({
                    metamask: 1
                });
        } else
            this.setState({
                metamask: -1
            });
    }

    render() {
        return (
            <div className="col-md-12 text-center">
                <h2>Welcome to EtherThrone!</h2>
                {
                    (this.state.metamask === -1) ?
                        <div>
                            <h3>Please enable MetaMask!</h3>
                            <a className="btn btn-success" href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en" target="_blank">Enable MetaMask to buy</a>
                        </div>
                        : (this.state.metamask === 0) ?
                        <div>
                            <h3>Please unlock MetaMask!</h3>
                        </div>
                        :
                        <div>
                            <button className="btn btn-primary">PLAY ON TESTNET</button>
                            <button className="btn btn-primary">GET TESTNET ROBOTS</button>
                            <button className="btn btn-primary">MY TESTNET ROBOTS</button>
                            <a href="/pre-sale" className="btn btn-primary">PRESALE</a>
                            <button className="btn btn-primary">MY REAL ROBOTS</button>
                        </div>
                }
            </div>
        );
    }
}

export default HomePage;
