import styled from "styled-components";

type BoxModelProps = {
  topLeft: number;
  topRight: number;
  bottomRight: number;
  bottomLeft: number;
};

export const Container = styled.div`
  max-width: 600px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 0.3rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #eee;
    border-radius: 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  gap: 1.5rem;
  code {
    background-color: #eee;
    border-radius: 0.25rem;
    padding: 0 0.25rem;
  }
`;

export const Paragraph = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const BoxModel = styled.div<BoxModelProps>`
  width: 150px;
  height: 150px;
  background-image: linear-gradient(to top, #b5e2dc 0%, #ccc 100%);
  border-radius: ${(props) =>
    `${props.topLeft}px ${props.topRight}px ${props.bottomRight}px ${props.bottomLeft}px`};
`;
