import { Component } from 'react';
import styles from './app.module.scss';

export class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <h1 >Class based react-app Initialized</h1>
        <div>This will be updated soon.</div>
      </div>
    );
  }
}

export default App;
