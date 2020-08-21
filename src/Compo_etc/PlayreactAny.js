import React, { Component, createRef } from 'react';
import PlayModal from './PlayModal';

class PlayreactAny extends Component {
  inputRef = createRef();

  state = {
    disabled: true,
  };
  onChange = () => {
    // const length = e.target.value.length;
    // console.log(e.target.value);
    const ref = this.inputRef.current.value;
    console.log(ref);
    if (ref === 'guide') {
      this.setState(() => ({ disabled: false }));
    } else if (!this.state.disabled) {
      this.setState(() => ({ disabled: true }));
    }
  };

  render() {
    const label = this.state.disabled ? 'Disabled' : 'Submit';
    return (
      <div className="PlayreactAny">
        <button
          style={Object.assign(
            {},
            styles.button,
            !this.state.disabled && styles.buttonEnabled,
          )}
          disabled={this.state.disabled}
        >
          <PlayModal />
        </button>
        <input
          style={styles.input}
          onChange={this.onChange}
          ref={this.inputRef}
        />
      </div>
    );
  }
}

const styles = {
  input: {
    width: 200,
    outline: 'none',
    fontSize: 20,
    padding: 10,
    border: 'none',
    backgroundColor: '#ddd',
    marginTop: 10,
  },
  button: {
    width: 180,
    height: 50,
    border: 'none',
    borderRadius: 4,
    fontSize: 20,
    cursor: 'pointer',
    transition: '.25s all',
  },
  buttonEnabled: {
    backgroundColor: '#ffc107',
    width: 220,
  },
};

export default PlayreactAny;
