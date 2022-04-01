import { Input } from "../Input";
import {
  AiOutlineRadiusUpleft,
  AiOutlineRadiusUpright,
  AiOutlineRadiusBottomleft,
  AiOutlineRadiusBottomright,
} from "react-icons/ai";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { BsFullscreen } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";
import {
  Container,
  Content,
  InputContent,
  Tools,
  Inputs,
  ResetCornersButton,
  FullCorner,
  Wrapper,
  FullCornerButton,
} from "./styles";
import { useBorderRadius } from "../../hooks/useBorderRadius";
import { useState } from "react";

export function CornerRadiusBox() {
  const {
    topLeft,
    topRight,
    bottomLeft,
    bottomRight,
    handleBorderTopLeft,
    handleBorderTopRight,
    handleBorderBottomLeft,
    handleBorderBottomRight,
    handleResetBorderRadius,
    handleShowTopLeftBorderIndicator,
    handleShowTopRightBorderIndicator,
    handleShowBottomRightBorderIndicator,
    handleShowBottomLeftBorderIndicator,
    handleFullCorner,
    fullCornerValue,
  } = useBorderRadius();

  const [showBordersTools, setShowBordersTools] = useState(false);

  function handleShowBorderIndicator(value: boolean) {
    handleShowTopLeftBorderIndicator(value);
    handleShowTopRightBorderIndicator(value);
    handleShowBottomRightBorderIndicator(value);
    handleShowBottomLeftBorderIndicator(value);
  }

  function handleShowBordersTools() {
    setShowBordersTools(!showBordersTools);
  }

  function handleFullCornerValue(value: number) {
    handleFullCorner(value);
  }

  return (
    <Container>
      <Content>
        <strong>Corner radius</strong>
        <Tools>
          <Wrapper>
            <FullCorner isDisabled={showBordersTools}>
              <BsFullscreen size={15} />
              <Input
                type="number"
                disabled={showBordersTools}
                value={fullCornerValue}
                onWheel={(e) => e.currentTarget.blur()}
                onChange={(e) => handleFullCornerValue(Number(e.target.value))}
                onFocus={() => handleShowBorderIndicator(true)}
                onBlur={() => handleShowBorderIndicator(false)}
              />
            </FullCorner>
            <FullCornerButton
              onClick={handleShowBordersTools}
              isDisabled={showBordersTools}
            >
              {showBordersTools ? (
                <MdKeyboardArrowDown size={20} />
              ) : (
                <MdKeyboardArrowRight size={20} />
              )}
            </FullCornerButton>
          </Wrapper>

          {showBordersTools && (
            <Wrapper>
              <Inputs>
                <InputContent>
                  <AiOutlineRadiusUpleft size={15} />
                  <Input
                    type="number"
                    value={topLeft}
                    onChange={(e) =>
                      handleBorderTopLeft(Number(e.target.value))
                    }
                    onFocus={() => handleShowTopLeftBorderIndicator(true)}
                    onBlur={() => handleShowTopLeftBorderIndicator(false)}
                  />
                </InputContent>
                <InputContent>
                  <AiOutlineRadiusUpright size={15} />
                  <Input
                    type="number"
                    value={topRight}
                    onChange={(e) =>
                      handleBorderTopRight(Number(e.target.value))
                    }
                    onFocus={() => handleShowTopRightBorderIndicator(true)}
                    onBlur={() => handleShowTopRightBorderIndicator(false)}
                  />
                </InputContent>
                <InputContent>
                  <AiOutlineRadiusBottomleft size={15} />
                  <Input
                    type="number"
                    value={bottomLeft}
                    onChange={(e) =>
                      handleBorderBottomLeft(Number(e.target.value))
                    }
                    onFocus={() => handleShowBottomLeftBorderIndicator(true)}
                    onBlur={() => handleShowBottomLeftBorderIndicator(false)}
                  />
                </InputContent>
                <InputContent>
                  <AiOutlineRadiusBottomright size={15} />
                  <Input
                    type="number"
                    value={bottomRight}
                    onChange={(e) =>
                      handleBorderBottomRight(Number(e.target.value))
                    }
                    onFocus={() => handleShowBottomRightBorderIndicator(true)}
                    onBlur={() => handleShowBottomRightBorderIndicator(false)}
                  />
                </InputContent>
              </Inputs>
              <ResetCornersButton onClick={() => handleResetBorderRadius()}>
                <GrPowerReset size={15} />
              </ResetCornersButton>
            </Wrapper>
          )}
        </Tools>
      </Content>
    </Container>
  );
}
