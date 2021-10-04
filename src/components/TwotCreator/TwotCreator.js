import React from 'react';
import './TwotCreator.css';
import { addTwott } from '../../firebase';

class TwotCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TwotContent: ''
    };
    this.handleUpdateTwotContent = this.handleUpdateTwotContent.bind(this);
    this.handleSubmitData = this.handleSubmitData.bind(this);
    this.handleSendTwottEnter = this.handleSendTwottEnter.bind(this);
  }

  handleSendTwottEnter(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      this.handleSubmitData(event);
    }
  }

  handleUpdateTwotContent(event) {
    this.setState({ TwotContent: event.target.value });
  }

  handleSubmitData(event) {
    event.preventDefault();
    addTwott(this.state.TwotContent);
    this.setState({ TwotContent: '' });
  }

  render() {
    return (
      <div className="TwotCreator">
        <form onSubmit={this.handleSubmitData}>
          <textarea
            className="TwotContent"
            value={this.state.TwotContent}
            onChange={this.handleUpdateTwotContent}
            onKeyPress={this.handleSendTwottEnter}
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
