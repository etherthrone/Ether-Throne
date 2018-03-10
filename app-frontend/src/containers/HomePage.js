import React, { Component } from 'react';

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            metamask: -1 // -1: uninstalled, 0: installed but locked, 1: unlocked
        }
    }

    componentWillMount() {
        let _this = this;
        setTimeout(function() {
            if (localStorage.getItem('metamask')) {
                if (localStorage.getItem('metamask') === 'null')
                    _this.setState({
                        metamask: -1
                    });
                else if (localStorage.getItem('metamask') === 'lock')
                    _this.setState({
                        metamask: 0
                    });
                else
                    _this.setState({
                        metamask: 1
                    });
            } else
                _this.setState({
                    metamask: -1
                });
        }, 1000);
    }

    render() {
        return (
            <div className="container text-center">
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
                            <a href="#" className="button green"><div className="light"></div>PLAY ON TESTNET</a>
                            <a href="#" className="button green"><div className="light"></div>GET TESTNET ROBOTS</a>
                            <a href="#" className="button green"><div className="light"></div>MY TESTNET ROBOTS</a>
                            <a href="/pre-sale" className="button green"><div className="light"></div>PRESALE</a>
                            <a href="#" className="button green"><div className="light"></div>MY REAL ROBOTS</a>
                        </div>
                }
            </div>
        );
    }
}

export default HomePage;
