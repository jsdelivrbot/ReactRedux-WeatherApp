import React, { Component } from 'react'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = { term: '' }
    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange (event) {
    console.log(event.target.value)
    this.setState({term: event.target.value})
  }

  onFormSubmit (event) {
    event.preventDefault()
  }

  render () {
    return (
      <form
        onSubmit={this.onFormSubmit}
        className='input-group'>
        <input type='text'
          placeholder='Get a five day forecats in your favorite city'
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    )
  }
}

export default SearchBar
