import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DropDown from 'src/components/Dropdown';

const Pill = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  background: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 0 10px 0 0;
  padding: 0 0 0 12px;
  font-size: 16px;
  color: #0d0d0d;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  &:hover {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  }
`;

const StatusIcons = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background: #30b800;
  border: 1px solid rgb(40, 143, 7);
  margin-right: 5px;
  background: ${(props) => (props.error ? '#CF2C00' : '#30b800')};
  border-color: ${(props) => (props.error ? 'rgb(160, 38, 4)' : 'rgb(40, 143, 7)')};
`;

const MoreBtn = styled.div`
  display: flex;
  align-items: center;
  img {
    padding: 0 12px 0 11px;
  }
`;

export default function DropdownPill({text, hasError, children, onMakeRequest, onRemove, onCopy}) {
  const pillRef = useRef();
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [boundingClientRect, setBoundingClientRect] = useState({left: 0, top: 0, width: 0});
  const onShowDropDown = (event) => {
    event.stopPropagation();
    const positions = pillRef?.current?.getBoundingClientRect();
    const pillHeight = pillRef?.current?.clientHeight;
    setBoundingClientRect({
      left: positions.x,
      top: positions.y + pillHeight,
      width: pillRef?.current?.clientWidth,
    });
    setIsDropDownVisible(!isDropDownVisible);
  };
  const onHide = () => {
    setIsDropDownVisible(false);
  };

  return (
    <>
      <Pill ref={pillRef} onClick={onShowDropDown}>
        <StatusIcons error={hasError} />
        {text} {children}
        <MoreBtn>
          <img src="/icons/dots.svg" />
          <DropDown
            actions={[
              {
                text: 'Выполнить',
                action: onMakeRequest,
              },
              {
                text: 'Скопировать',
                action: onCopy,
              },
            ]}
            dangerActions={[
              {
                text: 'Удалить',
                action: onRemove,
              },
            ]}
            parentRef={pillRef}
            onHide={onHide}
            visible={isDropDownVisible}
            item={text}
            left={boundingClientRect.left}
            top={boundingClientRect.top}
            width={boundingClientRect.width}
          />
        </MoreBtn>
      </Pill>
    </>
  );
}

DropdownPill.propTypes = {
  text: PropTypes.string.isRequired,
  hasError: PropTypes.bool.isRequired,
  onMakeRequest: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onCopy: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
};
