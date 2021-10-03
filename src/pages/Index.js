import React from 'react';
import TwotCreator from '../components/TwotCreator/TwotCreator';
import { db, getTwotts, subscribeTwotts } from '../../src/firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import './Index.css';

// const Twott = firebase.firestore.collection('twotts');

/*function Index() {
  console.log(getTwotts());
  return (
    <div className="Index">
      <TwotCreator />
    </div>
  );
}*/

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
    console.log(this.state.twottsArray);
    return (
      <div className="Index">
        {/*this.state.twottsArray[0].ownerId*/}
        <TwotCreator />
      </div>
    );
  }
}

export default Index;
