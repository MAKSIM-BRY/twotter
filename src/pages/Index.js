import React from 'react';
import TwotCreator from '../components/TwotCreator/TwotCreator';
import Twott from '../components/Twott/Twott';
import { subscribeTwotts } from '../../src/firebase';
import './Index.css';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { twottsArray: [] };
  }

  componentDidMount() {
    subscribeTwotts((changes) => {
      changes.docChanges().forEach((change) => {
        if (change.type === 'added') {
          const twottsArray = this.state.twottsArray;
          twottsArray.push({ ...change.doc.data(), _id: change.doc.id });
          this.setState({ twottsArray });
        } else if (change.type === 'modified') {
          const twottsArray = this.state.twottsArray;
          const indexTwottsArray = twottsArray.findIndex(
            (twott) => twott._id === change.doc.id
          );
          twottsArray[indexTwottsArray] = {
            ...change.doc.data(),
            _id: change.doc.id
          };
          this.setState({ twottsArray });
        }
      });
    });
  }

  render() {
    return (
      <div className="Index">
        <TwotCreator />
        {this.state.twottsArray.reverse().map((twott) => (
          <Twott
            key={twott._id}
            ownerId={twott.ownerId}
            twotContent={twott.twottContent}
            twottTime={twott.twottTime}
          />
        ))}
      </div>
    );
  }
}

export default Index;