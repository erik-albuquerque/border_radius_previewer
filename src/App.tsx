import { Container, Content, Aside } from "./styles/app";

import { Logo } from "./components/Logo";
import { Sandbox } from "./components/Sandbox";
import { Box } from "./components/Box";
import { PropsDisplay } from "./components/PropsDisplay";
import { CornerRadiusBox } from "./components/CornerRadiusBox";
import { Help } from "./components/Help";
import { Footer } from "./components/Footer";
import { useBreakpoints } from "./hooks/useBreakpoints";

export function App() {
  const { isXs, isSm, isMd, isLg, isXl } = useBreakpoints();
  console.log({ isXs, isSm, isMd, isLg, isXl });

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
          <Box />
          <CornerRadiusBox />
          <PropsDisplay />
          {isXs ? null : (isMd || isLg || isXl || !isSm) && <Footer />}
        </Sandbox>
      </Content>
    </Container>
  );
}
