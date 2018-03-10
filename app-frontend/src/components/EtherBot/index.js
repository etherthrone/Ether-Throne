import React, {Component} from 'react';
import './_etherBot.css';

class EtherBot extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: props.name,
          cost: props.cost,
          owner: props.owner
        };
        this.buy = this.buy.bind(this);
    }

    buy(){
        const {cost, owner} = this.state;
        window.web3.eth.sendTransaction({
            from: localStorage.getItem('metamask'),
            to: owner,
            value: window.web3.toWei(cost, 'ether'),
            gas: 3000000
        }, function(error, result){
            if (error)
                console.log(error);
            else
                console.log(result);
        });
    }

    render() {
        const {name, cost, owner} = this.state;
        return (
            <div className="etherbot_container">
                <div className={`etherbot_item_${name}`} />
                <p className="etherbot_name">{name}</p>
                <p className="etherbot_cost">{cost} <span>ETH</span></p>
                <a href="#" className="button green" onClick={this.buy}><div className="light"></div>BUY</a>
            </div>
        )
    }
}

export default EtherBot;