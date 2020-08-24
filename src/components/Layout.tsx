import Nav from './Nav';
import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

type Props = {
  className?: string;
  scrollTop?: number;
}

const Layout: React.FC<Props> = (props) => {
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      if (!mainRef.current) {return;}
      mainRef.current.scrollTop = props.scrollTop!;//!表示一定不为空
    }, 0);//先加载完内容才有滚动框
  }, [props.scrollTop]);
  return (
    <Wrapper>
      {/*能接受styled的class*/}
      <Main ref={mainRef} className={props.className}>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  );
};
//给初始值
Layout.defaultProps = {
  scrollTop: 0
};

export default Layout;