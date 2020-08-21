import Layout from 'components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components';
import {RecordItem, useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import day from 'dayjs';

const CategoryWrapper = styled.div`
    background: #f0cf5e;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note{
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;

function Statistics() {
  const [category, setCategory] = useState<'+' | '-'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  const selectedRecords = records.filter(r => r.category === category);
  const hash: { [K: string]: RecordItem[] } = {};
  selectedRecords.map(r => {
    const key = day(r.createAt).format('YYYY-MM-DD');
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });
  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  });
  console.log(array);
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category}
                         onChange={value => setCategory(value)}
        />
      </CategoryWrapper>
      <div>
        {selectedRecords.map(r => {
          return (
            <Item key={r.createAt}>
              <div className="tags">
                {r.tagIds.map(tagId => <span key={tagId}>{getName(tagId)}</span>)}
              </div>
              {r.note && <div className="note">{r.note}</div>}
              <div className="amount">
                ￥{r.amount}
              </div>
              {day(r.createAt).format('YYYY年MM月DD日')}
            </Item>);
        })}
      </div>
    </Layout>
  );
}

export default Statistics;