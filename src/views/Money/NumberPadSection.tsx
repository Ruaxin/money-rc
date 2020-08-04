import styled from 'styled-components';

const NumberPadSection = styled.section`
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
export default NumberPadSection;