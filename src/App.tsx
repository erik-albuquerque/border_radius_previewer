import { Container, Content, Aside, BoxContent } from "./styles/app";

import { Logo } from "./components/Logo";
import { Sandbox } from "./components/Sandbox";
import { Box } from "./components/Box";
import { PropsDisplay } from "./components/PropsDisplay";
import { CornerRadiusBox } from "./components/CornerRadiusBox";
import { Help } from "./components/Help";
import { Footer } from "./components/Footer";
import { useBreakpoints } from "./hooks/useBreakpoints";
import { Box3D } from "./components/Box3D";
import { Switch } from "./components/Switch";
import { useSwitchBox3D } from "./hooks/useSwitchBox3D";

export function App() {
  const { isXs, isSm, isMd, isLg, isXl } = useBreakpoints();
  const { isChecked: showBox3D } = useSwitchBox3D();

  return (
    <Container>
      <Content>
        <Aside>
          {(isMd || isLg || isXl) && <Logo />}
          <Help />
          {(isXs || isSm) && <Footer />}
        </Aside>

        <Sandbox>
          {(isXs || isSm) && <Logo />}
          {showBox3D ? <Box3D /> : <Box />}
          <BoxContent>
            <footer>
              <strong>View box</strong>
              <Switch label="3D" />
            </footer>
          </BoxContent>
          <CornerRadiusBox />
          <PropsDisplay />
          {isXs ? null : (isMd || isLg || isXl || !isSm) && <Footer />}
        </Sandbox>
      </Content>
    </Container>
  );
}
