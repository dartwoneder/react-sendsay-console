import React, {useCallback, useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DropDownStyled = styled.ul`
  list-style: none;
  position: absolute;
  margin: 0;
  padding: 5px 0;
  background: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  z-index: 100;
  left: ${(props) => `${props.left}px`};
  top: ${(props) => `${props.top}px`};
  width: ${(props) => `${props.width}px`};
`;

const DropDownStyledItem = styled.li`
  color: #0d0d0d;
  font-size: 16px;
  height: 50px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: #fff;
    background: ${(props) => `${props.danger ? '#CF2C00' : '#0055fb'}`};
  }
`;
const DropDownStyledDivider = styled.li`
  margin: 5px 0;
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 1px;
`;

export default function Dropdown({left, top, width, visible, parentRef, onHide, actions, dangerActions}) {
  const dropdownPortal = document.getElementById('dropdownPortal');
  const dropdownRef = useRef();
  const el = useRef(document.createElement('div'));
  const initialRender = useRef(true);
  const clickOutside = useCallback(
    (event) => {
      const current = dropdownRef.current;
      const parentCurrent = parentRef.current;
      if (current.contains(event.target) || parentCurrent.contains(event.target)) {
        return;
      }
      onHide();
    },
    [onHide]
  );

  useEffect(() => {
    if (visible) {
      initialRender.current = false;
      dropdownPortal.appendChild(el.current);
      document.addEventListener('mousedown', clickOutside);
    } else if (!initialRender.current) {
      dropdownPortal.removeChild(el.current);
    }
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [visible]);

  return createPortal(
    <DropDownStyled ref={dropdownRef} left={left} top={top} width={width}>
      {actions.map(({text, action}) => (
        <DropDownStyledItem key={text} onClick={action}>
          {text}
        </DropDownStyledItem>
      ))}

      <DropDownStyledDivider />
      {dangerActions.map(({text, action}) => (
        <DropDownStyledItem danger key={text} onClick={action}>
          {text}
        </DropDownStyledItem>
      ))}
    </DropDownStyled>,
    el.current,
    'dropdown'
  );
}

Dropdown.propTypes = {
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired,
  parentRef: PropTypes.shape({current: PropTypes.instanceOf(Element)}).isRequired,
  onHide: PropTypes.func.isRequired,
  actions: PropTypes.array.isRequired,
  dangerActions: PropTypes.array.isRequired,
};
