require('vendor/vendor.scss');
require('Counter/CounterPage.scss');

var React = require('react');
var Counter = require('Counter/Counter.jsx');class CounterPage extends React.Component {
 constructor(props) {
   super(props);
   this.state={
     increment : 10
   }
   this.randIncrement = this.randIncrement.bind(this);
   }
 randIncrement(){
   this.setState({
     increment: Math.floor((Math.random()*50)+1)
   });
 }  
 render() {
   return (
     <div>
       <Counter increment={this.state.increment}/>
       <Counter increment={5}/>
       <button onClick={this.randIncrement} className="btn btn-primary">Random</button>
     </div>
   );
 }
}
module.exports = CounterPage;