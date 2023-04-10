/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, useEffect } from 'react';
import Popover from '@xkit/popover';
import ColorPicker from './color-picker';
import { parseColor } from './utils';

const InputColor = ({
  initialValue,
  onChange,
  placement,
  disabled,
  children,
}) => {
  const [color, setColor] = useState(parseColor(initialValue));

  useEffect(() => {
    changeColor(parseColor(initialValue));
  }, [initialValue]);

  function changeColor(color) {
    if (onChange) {
      setColor(color);
      onChange(color);
    }
  }

  return (
    <Popover
      placement={placement}
      body={
        <ColorPicker color={color} onChange={changeColor} disabled={disabled} />
      }
    >
      {children}
    </Popover>
  );
};

InputColor.defaultProps = {
  placement: 'right',
  disabled: false,
};

export default InputColor;
