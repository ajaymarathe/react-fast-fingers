import React, { Component } from 'react';

class WordToType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  render() {
    return (
      <div>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <div className='wordContainer'>
              <p>World</p>
            </div>
            <div className='inputContainer'>
              <input className='form-control' type="text" onChange={(event) => {
                this.setState({ inputValue: event.target.value})
              }}
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