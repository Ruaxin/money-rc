import styled from 'styled-components';

const CategorySection = styled.section`
  font-size: 24px;
  > ul{
    display: flex;
    background: rgb(255, 130, 0);
    > li{
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after{
        content: '';
        height: 3px;
        width: 100%;
        background: rgb(255, 80, 0);
        display: block; 
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
`;
export {CategorySection};