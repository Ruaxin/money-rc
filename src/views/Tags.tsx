import Layout from 'components/Layout';
import React from 'react';
import {useTags} from 'useTags';
import styled from 'styled-components';
import Icon from 'components/Icon';

const TagList = styled.ol`
  font-size: 16px;
  > li{
    border-bottom: 1px solid rgb(226, 159, 107);
    line-height: 20px;
    padding: 11px 18px 11px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(240, 207, 94);
    border-radius: 50px;
    margin: 12px 16px;
  }
`;
const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  background: #f60;
  border-radius: 25px;
  color: white;
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Space = styled.div`
  height: 16px;
`;

function Tags() {
  const {tags, setTags} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag}>
            <span className='oneLine'>{tag}</span>
            <Icon name='right'/>
          </li>
        )}
      </TagList>
      <Center>
        <Space/>
        <Button>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags;