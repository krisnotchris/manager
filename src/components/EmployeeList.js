import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.employees);
  }
  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component will be rendered with.
    // this.props is the old set of props
  }
  
  render() {
    return (
      <View>
        <Text>
          Employee List
        </Text>
        <Text>
          Employee List
        </Text>
        <Text>
          Employee List
        </Text>
        <Text>
          Employee List
        </Text>
        <Text>
          Employee List
        </Text>
        <Text>
          Employee List
        </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {

};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
