import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

  render() { 
    const {counters, onDelete, onIncrement, onReset}= this.props
    return ( <div className="container">
      <button className='btn btn-primary btn-sm m-2' onClick={onReset}>Reset</button>
      {counters.map(counter=> <Counter key={counter.id} onIncrement={onIncrement} counter={counter} onDelete={onDelete} />)}
    </div> );
  }
}
 
export default Counters;