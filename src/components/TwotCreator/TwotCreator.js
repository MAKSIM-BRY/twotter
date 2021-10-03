import React from 'react';
import './TwotCreator.css';
import Button from '../Button/Button';

class TwotCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TwotContent: ''
    };
    this.handleUpdateTwotContent = this.handleUpdateTwotContent.bind(this);
    this.handleSubmitData = this.handleSubmitData.bind(this);
  }

  handleUpdateTwotContent(event) {
    this.setState({ TwotContent: event.target.value });
  }

  handleSubmitData(event) {
    event.preventDefault;
    console.log(event);
  }

  render() {
    return (
      <div className="TwotCreator">
        <form onSubmit={this.handleSubmitData}>
          <textarea
            className="TwotContent"
            onChange={this.handleUpdateTwotContent}
          />
          <div className="caracterCount">
            {this.state.TwotContent.length}/500
          </div>
          <div className="listeButtons">
            <input
              className="SendButton"
              type="submit"
              name="Send"
              value="Send"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default TwotCreator;
