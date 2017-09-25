/***************************************************/
/************ Created By : BHAVAN PATEL ************/
/***** Github : https://github.com/bhavanpatel *****/
/****** About : https://about.me/bhavan.patel ******/
/***************************************************/
'use strict';

import React, {Component} from 'react';
const PropTypes = require('prop-types');
import {Icon} from 'native-base';
import {Text, View, TouchableOpacity} from 'react-native';

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.props.onChange({name: this.props.name, value: this.props.checked});
  }

  render() {

    return (
      <TouchableOpacity onPress={this.onChange}>
        {(this.props.checked === true)
          ? <View style={[styles.containerTrue, this.props.checkBoxTrueStyle]}>
              <Icon name="md-checkmark" style={[styles.icon, this.props.checkIconStyle]}/>
            </View>
          : <View style={[styles.containerFalse, this.props.checkBoxFalseStyle]}></View>}
      </TouchableOpacity>
    );
  }
}

const styles = {
  containerTrue: {
    justifyContent: 'center',
    borderRadius: 5,
    alignItems: 'center',
    height: 20,
    width: 20,
    backgroundColor: '#76a6ef'
  },
  containerFalse: {
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#dcdee5',
    alignItems: 'center',
    height: 20,
    width: 20
  },
  icon: {
    color: '#ffffff',
    fontSize: 15
  }
};

CheckBox.propTypes = {
  name: PropTypes.string,
  checkBoxTrueStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
  checkBoxFalseStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
  checkIconStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

CheckBox.defaultProps = {
  name: 'checkbox',
  checked: true
};

module.exports = CheckBox;
