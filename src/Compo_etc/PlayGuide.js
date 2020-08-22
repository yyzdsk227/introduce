import React, { useState, useRef } from 'react';
import Modal from 'react-awesome-modal';
import Img_draw from '../pub1/t3-draw.png';

const PlayGuide = () => {
  const [disabled, SetDisabled] = useState({
    disabled: true,
  });
  const [visible, SetVisible] = useState(false);
  const inputRef = useRef();

  const openModal = () => {
    SetVisible({
      visible: true,
    });
  };

  const closeModal = () => {
    SetVisible({
      visible: false,
    });
  };

  const onChange = () => {
    const ref = inputRef.current.value;
    if (ref === 'guide') {
      SetDisabled({
        disabled: false,
      });
    } else {
      SetDisabled({
        disabled: true,
      });
    }
  };

  const label = disabled.disabled ? '?t-t-t?' : '!t3-guide!';

  return (
    <div style={{ textAlign: 'center' }}>
      <button
        style={Object.assign(
          {},
          styles.button,
          !disabled.disabled && styles.buttonEnabled,
        )}
        disabled={disabled.disabled}
        onClick={openModal}
      >
        {label}
      </button>

      <input
        style={styles.input}
        onChange={onChange}
        ref={inputRef}
        placeholder={`enter guide`}
      />

      <Modal
        visible={visible.visible}
        width="400"
        height="400"
        effect="fadeInUp"
        onClickAway={closeModal}
        style={{ position: 'relative' }}
      >
        <div
          style={{
            margin: '10%',
            position: 'absolute',
          }}
        >
          <img
            src={Img_draw}
            alt="draw"
            style={{
              width: '200px',
              height: '200px',
              border: '4px dotted powderblue',
            }}
          ></img>
          <p>
            <strong>5*5--4(row,cell,cross)--bingo</strong>
            <br />
            <br />
            상대는 0.1초 고속반응 랜덤픽이라
            <br />
            무승부로 만드는게 더 의미있습니다.
          </p>
        </div>
      </Modal>
    </div>
  );
};

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

export default PlayGuide;
