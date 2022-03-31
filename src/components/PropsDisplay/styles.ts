import styled from "styled-components";
import { down } from "styled-breakpoints";

export const Container = styled.div((props) => ({
  width: "347px",
  [down("md")(props)]: {
    width: "100%",
  },
}));

export const Content = styled.div({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.5rem",
});

type Props = {
  isCopy: boolean;
  isHover: boolean;
};

export const Props = styled.div<Props>`
  background-color: ${(props) => (props.isCopy ? "#3db13d" : "var(--cyan)")};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  user-select: none;
  cursor: pointer;
  transition: filter 0.2s, background-color 0.2s;
  :hover {
    filter: brightness(0.95);
  }

  span {
    color: ${(props) => (props.isCopy ? "var(--white)" : "var(--brown-700)")};
    font-weight: 700;
    font-size: 1rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

export const Message = styled.span({
  position: "absolute",
  fontSize: "0.875rem",
  color: "var(--brown-700)",
  bottom: "-30px",
});
