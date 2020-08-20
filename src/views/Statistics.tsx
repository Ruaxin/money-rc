import Layout from 'components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components';
import {useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import day from 'dayjs';

const CategoryWrapper = styled.div`
    background: #f0cf5e;
`;

function Statistics() {
  const [category, setCategory] = useState<'+' | '-'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category}
                         onChange={value => setCategory(value)}
        />
        <div>
          {records.map(r => {
            return (
              <div>
                {r.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
                <hr/>
                {r.amount}
                <hr/>
                {day(r.createAt).format('YYYY年MM月DD日')}
              </div>);
          })}
        </div>
      </CategoryWrapper>
    </Layout>
  );
}

export default Statistics;