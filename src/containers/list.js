import React, {Component} from 'react';
import ListItems from '../components/listItems.js'

class List extends Component {
  render(){
    return(
      <ul>
        <ListItems />
      </ul>
    )
  }
}

export default List;
