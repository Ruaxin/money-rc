import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
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
        background: black;
        display: block; 
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
`;
const CategorySection: React.FC = () => {
  const categoryMap = {'-': '支出', '+': '收入'};
  const [categoryList] = useState<('-' | '+')[]>(['-', '+']);
  const [category, setCategory] = useState('-');
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li key={c} className={category === c ? 'selected' : ''}
              onClick={() => setCategory(c)}>
            {categoryMap[c]}
          </li>
        )}
      </ul>
    </Wrapper>
  );
};
export {CategorySection};