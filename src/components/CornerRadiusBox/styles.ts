import styled from "styled-components";

export const Container = styled.div({});

export const Content = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const Tools = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.5rem",
});

export const Inputs = styled.div({
  display: "flex",
  flexDirection: "row",
  gap: "0.5rem",
  border: "1px solid #cfcfcf",
  padding: "0.3rem 0",
  borderRadius: "0.5rem",
});

export const InputContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-left: 0.5rem;
  border-right: 1px solid #cfcfcf;
  :last-child {
    border-right: none;
  }
`;

export const ResetCornersButton = styled.button({
  display: "flex",
  alignItems: "center",
  padding: "0 0.5rem",
  border: "none",
  borderRadius: "0.25rem",
  backgroundColor: "transparent",
  cursor: "pointer",
  transition: "filter 0.2s",
  borderWidth: "1px",
  borderColor: "transparent",
  borderStyle: "solid",
  ":hover": {
    filter: "brightness(0.95);",
    borderColor: "#ebebeb",
  },
});

type FullCornerProps = {
  isDisabled: boolean;
};
export const FullCorner = styled.div<FullCornerProps>((props) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  gap: "0.5rem",
  border: "1px solid #cfcfcf",
  padding: "0.3rem 0.5rem",
  borderRadius: "0.5rem",
  opacity: props.isDisabled ? "0.4" : "1",
}));

export const Wrapper = styled.div({
  display: "flex",
  flexDirection: "row",
  gap: "0.5rem",
});

export const FullCornerButton = styled(ResetCornersButton)<FullCornerProps>`
  background-color: ${(props) => props.isDisabled && "#ebebeb"};
  opacity: ${(props) => props.isDisabled && 0.5};
  :hover {
    filter: ${(props) => props.isDisabled && "none"};
    cursor: ${(props) => props.isDisabled && "no-drop"};
  }
`;
