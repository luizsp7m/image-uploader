import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const Wrapper = styled.div`
  background: #fff;
  padding: 3rem;
  border-radius: .9rem;
  border: 1px solid #e5e5e5;
  width: 40rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  > h3 {
    font-size: 1.85rem;
    font-weight: 500;
    color: #4F4F4F;
    line-height: 2.7rem;
  }

  > span {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.5rem;
    color: #828282;
    margin: 2rem 0;
  }
`;