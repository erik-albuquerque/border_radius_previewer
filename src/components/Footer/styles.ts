import styled from "styled-components";

export const Container = styled.footer`
  position: relative;
`;

type ContentProps = {
  margin: boolean;
};
export const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: ${(props) => (props.margin ? "0.5rem" : "4rem")};

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
