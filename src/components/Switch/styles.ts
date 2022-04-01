import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "0.5rem",
});

type SwitchProps = {
  isChecked: boolean;
};
export const InputContent = styled.div<SwitchProps>((props) => ({
  position: "relative",
  backgroundColor: props.isChecked ? "var(--cyan)" : "#cfcfcf",
  width: "40px",
  padding: "0.15rem 0.25rem",
  borderRadius: "1rem",
  transition: "background-color 0.2s",
  cursor: "pointer",
}));

export const Dot = styled.div<SwitchProps>((props) => ({
  position: "relative",
  top: -0.1,
  left: props.isChecked ? 17 : 0,
  backgroundColor: "#fff",
  width: "15px",
  height: "15px",
  padding: "0 0.25rem",
  borderRadius: "1rem",
  transition: "left 0.2s",
}));
