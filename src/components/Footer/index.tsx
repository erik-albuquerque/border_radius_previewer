import { useSwitchBox3D } from "../../hooks/useSwitchBox3D";
import { Container, Content } from "./styles";

export function Footer() {
  const { isChecked: showBox3D } = useSwitchBox3D();

  return (
    <Container>
      <Content margin={showBox3D}>
        <span>
          Made with ❤{" "}
          <a href="https://github.com/erik-albuquerque">Érik Albuquerque</a>
        </span>
        <span>
          App idea 💡 by{" "}
          <a href="https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Border-Radius-Previewer.md">
            @florinpop17
          </a>
        </span>
      </Content>
    </Container>
  );
}
