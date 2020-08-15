import React from 'react';

class RefExample extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.textInput.focus()
  }

  render () {
    return (
      <div>
        <input ref={(thisInput) => {this.textInput = thisInput}} type="text" />
        <input
          type="button"
          value="Keep focus on text input."
          onClick={this.handleClick}
        />
      </div>
    )
  }
}

export default RefExample;
