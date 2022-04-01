import styled from "styled-components";
import { down, up, between } from "styled-breakpoints";

export const Container = styled.main((props) => ({
  width: "100%",
  height: "100%",
  maxWidth: "1100px",
  margin: "0 auto",
  [up("md")(props)]: {
    display: "flex",
    justifyContent: "center",
  },
}));

export const Content = styled.div((props) => ({
  width: "100%",
  marginTop: "2rem",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  gap: "2rem",
  [down("md")(props)]: {
    flexDirection: "column-reverse",
    alignItems: "center",
    paddingBottom: "2rem",
    gap: "4rem",
  },
  [between("md", "xl")(props)]: {
    marginLeft: "2rem",
  },
  [down("sm")(props)]: {
    marginLeft: "1rem",
    maxWidth: "350px",
  },
}));

export const Aside = styled.aside({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

export const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
  }
`;
