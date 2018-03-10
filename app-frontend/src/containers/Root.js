import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect, Provider } from 'react-redux';
import {Router} from 'react-router';
import routes from '../routes';
import {userActions} from '../network/actions';

class Root extends Component {

    constructor(props) {
        super(props);
        this.state = {
            metamask: null
        };
        this.initWeb3 = this.initWeb3.bind(this);
    }

    componentWillMount(){
        this.initWeb3();
    }

    initWeb3() {
        let _this = this;
        setTimeout(function(){
            //if (!localStorage.getItem('metamask')) {
                if (typeof window.web3 === 'undefined') {
                    console.log("Install MetaMask");
                    localStorage.setItem('metamask', 'null');
                } else if (window.web3.eth.defaultAccount === undefined) {
                    console.log("Please unlock metamask.");
                    localStorage.setItem('metamask', 'lock');
                } else {
                    console.log(window.web3.currentProvider.isMetaMask);
                    console.log(window.web3.eth.defaultAccount);
                    if (window.web3.currentProvider.isMetaMask) {
                        localStorage.setItem('metamask', window.web3.eth.defaultAccount);
                        _this.props.getAccountInfo({
                            wallet: window.web3.eth.defaultAccount,
                            cb: () => {
                                console.log(_this.props.accountData);
                                if (_this.props.error === null) {
                                    if (_this.props.accountData !== 'No user found.')
                                        localStorage.setItem('user', _this.props.accountData);
                                }
                            }
                        })
                    }
                }
            //}
        }, 1000);
    }

    render() {
        const {store, history} = this.props;

        if (!this.props) {
            return null;
        }

        return (
            <Provider store={store}>
                <Router history={history} routes={routes}/>
            </Provider>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        accountData: state.users.accountData,
        error: state.users.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAccountInfo: (req) => {
            dispatch(userActions.getAccountInfo(req.wallet, req.cb));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);