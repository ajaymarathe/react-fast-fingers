import React, { Component } from 'react';

class WordToType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containerValue: 'hello world, what are you doing!',
      inputValue: '',
    };
  }

  inputContainer(event){
    console.log('event:', event);
    this.setState({ inputValue: event.target.value})
  }

  onPressKeyUp(event) {
    console.log('key up', event.target.value);
  }

  render() {
    return (
      <div>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <div className='wordContainer'>
              <p>{this.state.containerValue}</p>
            </div>
            <div className='inputContainer'>
              <input className='form-control' type="text" 
              onChange={(event) => this.inputContainer(event)}
              onKeyUp={(event) => this.onPressKeyUp(event)}
              value={this.state.inputValue}
               />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WordToType;