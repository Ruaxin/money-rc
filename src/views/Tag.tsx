import React from 'react';
import {useTags} from 'useTags';
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
  const {findTag} = useTags();
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id));
  console.log(tag);
  return (
    <Layout>
      <Topbar>
        <Icon name='left'/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>
      <InputWrapper>
        <Input label='标签名' type='text' placeholder='请输入标签名'/>
      </InputWrapper>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button>删除标签</Button>
      </Center>
    </Layout>
  );
};

export {Tag};