import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagsSection = styled.section`

`
const NoteSection = styled.section`

`
const CategorySection = styled.section`

`
const NumberPadSection = styled.section`

`
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
      </TagsSection>
      <NoteSection>
        <label>
          <span>备注</span>
          <input type="text"/>
        </label>
      </NoteSection>
      <CategorySection>
        <ul>
          <li>支出</li>
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