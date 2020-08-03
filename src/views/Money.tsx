import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagsSection = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  > ol{
    margin: 0 -12px;
    > li{
      border-radius: 18px;
      background: rgb(255, 161, 105);
      display: inline-block;
      font-size: 14px;
      padding: 3px 18px;
      margin: 8px 12px;
    }
  }
  > button{
    background: none;
    border: none;
    border-bottom: 1px solid #333333;
    padding: 2px 4px;
    color: #666666;
    margin-top: 8px;
  }
`;
const NoteSection = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;  
  > label{
    display: flex;
    align-items: center;
    > span{
      margin-right: 16px;
      white-space: nowrap;
    }
    > input{
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;
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
const NumberPadSection = styled.section`

`;

function Money() {
  return (
    <Layout>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </TagsSection>
      <NoteSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder='在这里添加备注'/>
        </label>
      </NoteSection>
      <CategorySection>
        <ul>
          <li className='selected'>支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
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
        <button>ok</button>
        <button>0</button>
        <button>.</button>
        <button>%</button>
        <button>÷</button>
      </NumberPadSection>
    </Layout>
  );
}

export default Money;