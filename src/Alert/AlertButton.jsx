var React = require('react');

class AlertButton extends React.Component {
  constructor(props) {
    super(props);
    this.alertText = this.alertText.bind(this);
  }
  alertText() {
    alert(this.props.text);
  }
  render() {
    return (
      <button onClick={this.alertText}>{this.props.num}我是一個 {this.props.text} 按鈕</button>
    );
  }
}

module.exports = AlertButton;
