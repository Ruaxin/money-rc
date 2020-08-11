import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  > .output{
    background: white;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                inset 0 5px 5px -5px rgba(0,0,0,0.25);
  }
  > .pad{
    > button{
      font-size: 18px;
      float: left;
      width: 20%;
      height: 64px;
      border: none;
      &.ok{
        float: right;
        height: 128px;
      }
      &:nth-child(1){
        background: rgba(245, 221, 175);
      }
      &:nth-child(2),
      &:nth-child(6){
        background: rgba(242, 210, 123);
      }
      &:nth-child(3),
      &:nth-child(7),
      &:nth-child(11){
        background: rgba(240, 207, 94);
      }
      &:nth-child(4),
      &:nth-child(8),
      &:nth-child(12),
      &:nth-child(16){
        background: rgba(239, 198, 84);
      }
      &:nth-child(5),
      &:nth-child(9),
      &:nth-child(13),
      &:nth-child(17){
        background: rgba(238, 170, 63);
      }
      &:nth-child(10),
      &:nth-child(14),
      &:nth-child(18){
        background: rgba(239, 157, 55);
      }
      &:nth-child(15){
        background: rgba(233, 117, 43);
      }
      &:nth-child(19){
        background: rgba(228, 132, 46);
      }
    }
  }
`;
const NumberPadSection: React.FC = () => {
  const [output, _setOutput] = useState('0');
  const setOutput = (output: string) => {
    if (output.length > 16) {
      output = output.slice(0, 16);
    } else if (output.length === 0) {
      output = '0';
    }
    _setOutput(output);
  };
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) {return;}
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (output === '0') {
          setOutput(text);
        } else {
          setOutput(output + text);
        }
        break;
      case '.':
        if (output.indexOf('.') >= 0) {return;}
        setOutput(output + '.');
        break;
      case '删除':
        if (output.length === 1) {
          setOutput('');
        } else {
          setOutput(output.slice(0, -1));
        }
        break;
      case '清空':
        setOutput('');
        break;
      case 'ok':
        break;
      case '+':
        break;
      case '-':
        break;
      case '×':
        break;
      case '÷':
        break;
      case '%':
        break;
    }
  };
  return (
    <Wrapper>
      <div className='output'>{output}</div>
      <div className="pad clearfix" onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>×</button>
        <button className='ok'>OK</button>
        <button>0</button>
        <button>.</button>
        <button>%</button>
        <button>÷</button>
      </div>
    </Wrapper>
  );
};
export {NumberPadSection};