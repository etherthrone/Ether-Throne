import React, { Component } from 'react';
import 'parsleyjs';
import $ from 'jquery';
import { connect } from 'react-redux';
import {userActions} from "../network/actions";

class SigninPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            wallet: localStorage.getItem('metamask'),
            email: '',
            nickname: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {

    }

    handleSubmit(e) {
        e.preventDefault();
        let form = $('#account-info').parsley();
        if (form.validate() === true) {
            this.props.saveAccountInfo({
                data: this.state,
                cb: () =>  {
                    console.log(this.props.accountData);
                }
            });
        }
    }

    handleChange(type, e) {
        let state = this.state;
        state[type] = e.target.value;
        this.setState(state);
    }

    render() {
        return(
            <div className="col-md-12">
                <div className="text-center">
                    <h2>Welcome to EtherThrone!</h2>
                    <p>To get started, please enter your email address and a nickname.</p>
                </div>
                <form id="account-info" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2">
                            <div class="form-group">
                                <label htmlFor="wallet">Wallet address</label>
                                <input type="text" name="wallet" className="form-control" id="wallet" value={this.state.wallet} onChange={this.handleChange.bind(this, 'wallet')} data-parsley-required="true" readOnly />
                            </div>
                            <div class="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" name="email" className="form-control" id="email" value={this.state.email} onChange={this.handleChange.bind(this, 'email')} data-parsley-required="true" />
                            </div>
                            <div class="form-group">
                                <label htmlFor="nickname">Nickname</label>
                                <input type="text" name="nickname" className="form-control" id="nickname" value={this.state.nickname} onChange={this.handleChange.bind(this, 'nickname')} data-parsley-required="true" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2">
                            <div className="note">
                                Make sure to save your MetaMask login information and account recovery details! We can’t help you regain access if you lose it.
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">SAVE ACCOUNT INFO</button>
                    </div>
                </form>
            </div>
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
        saveAccountInfo: (req) => {
            dispatch(userActions.saveAccountInfo(req.data, req.cb));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SigninPage);