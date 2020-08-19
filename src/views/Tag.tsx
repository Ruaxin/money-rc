import React from 'react';
import {useTags} from 'hooks/useTags';
import {useParams} from 'react-router-dom';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {Button} from 'components/Button';
import styled from 'styled-components';
import {Input} from 'components/Input';
import {Center} from 'components/Center';
import {Space} from 'components/Space';

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  line-height: 20px;
  padding: 14px;
  align-items: center;
`;
const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 16px;
`;

type Params = {
  id: string
}
const Tag: React.FC = () => {
  const {findTag, updateTag, deleteTag} = useTags();
  //从地址栏获取id
  let {id: idString} = useParams<Params>();
  const tag = findTag(parseInt(idString));
  const tagContent = (tag: { id: number; name: string }) => (
    <div>
      <InputWrapper>
        <Input label='标签名'
               type='text'
               value={tag.name}
               placeholder='请输入标签名'
               onChange={(e) => {
                 updateTag(tag.id, {name: e.target.value});
               }}
        />
      </InputWrapper>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button onClick={() => {deleteTag(tag.id);}}>删除标签</Button>
      </Center>
    </div>
  );
  const onClickBack = () => {
    window.history.back();
  };
  return (
    <Layout>
      <Topbar>
        <Icon name='left' onClick={onClickBack}/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>
      {tag ? tagContent(tag) : < Center> tag 不存在</Center>}
    </Layout>
  );
};


export {Tag};