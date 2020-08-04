import styled from 'styled-components';

const TagsSection = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
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
export default TagsSection;