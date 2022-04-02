import styled from "styled-components";
import { down } from "styled-breakpoints";

export const Container = styled.div((props) => ({
  [down("md")(props)]: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
}));

export const Content = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: "2rem",
});
