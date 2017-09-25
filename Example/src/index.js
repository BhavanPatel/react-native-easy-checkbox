import React, {Component} from 'react';
import {Image, View} from 'react-native';
import {Text, Button, Label} from 'native-base';
import CheckBox from 'react-native-easy-checkbox';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: true
    };
  }
  
  _changeValue(value) {
    this.setState({
      currentValue: !this.state.currentValue
    });
    console.log(value);
  }

  render() {
    return (
      <View style={styles.container}>
        <CheckBox name="bhavan" checked={this.state.currentValue} onChange={(value) => this._changeValue(value)}/>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  }
};

export default Main;
