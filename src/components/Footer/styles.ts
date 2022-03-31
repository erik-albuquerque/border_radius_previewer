import styled from "styled-components";

export const Container = styled.footer`
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;

  span {
    color: var(--brown-700);
    font-size: 0.875rem;
  }

  a {
    text-decoration: none;
    font-weight: bold;
    color: var(--brown-700);
    &:hover {
      text-decoration: underline;
    }
  }
`;
