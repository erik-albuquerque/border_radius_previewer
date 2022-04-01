import {
  createContext,
  useState,
  useCallback,
  ReactNode,
  useEffect,
} from "react";

type BorderRadiusProviderProps = {
  children: ReactNode;
};

interface BorderRadiusContext {
  topLeft: number;
  topRight: number;
  bottomLeft: number;
  bottomRight: number;
  fullCornerValue: number;
  showTopLeftBorderIndicator: boolean;
  showTopRightBorderIndicator: boolean;
  showBottomRightBorderIndicator: boolean;
  showBottomLeftBorderIndicator: boolean;
  handleBorderTopLeft: (value: number) => void;
  handleBorderTopRight: (value: number) => void;
  handleBorderBottomLeft: (value: number) => void;
  handleBorderBottomRight: (value: number) => void;
  handleCopyToBoard: () => void;
  isCopy: boolean;
  handleResetBorderRadius: () => void;
  handleShowTopLeftBorderIndicator: (value: boolean) => void;
  handleShowTopRightBorderIndicator: (value: boolean) => void;
  handleShowBottomRightBorderIndicator: (value: boolean) => void;
  handleShowBottomLeftBorderIndicator: (value: boolean) => void;
  handleFullCorner: (value: number) => void;
}

export const BorderRadiusContext = createContext({} as BorderRadiusContext);

export function BorderRadiusProvider({ children }: BorderRadiusProviderProps) {
  const [topLeft, setTopLeft] = useState(10);
  const [topRight, setTopRight] = useState(10);
  const [bottomLeft, setBottomLeft] = useState(10);
  const [bottomRight, setBottomRight] = useState(10);
  const [fullCornerValue, setFullCornerValue] = useState(10);

  const [isCopy, setIsCopy] = useState(false);

  const [showTopLeftBorderIndicator, setShowTopLeftBorderIndicator] =
    useState(false);
  const [showTopRightBorderIndicator, setShowTopRightBorderIndicator] =
    useState(false);
  const [showBottomRightBorderIndicator, setShowBottomRightBorderIndicator] =
    useState(false);

  const [showBottomLeftBorderIndicator, setShowBottomLeftBorderIndicator] =
    useState(false);

  const handleBorderTopLeft = useCallback(
    (value: number) => {
      if (value.toString().length <= 3) {
        setTopLeft(value);
      }
    },
    [topLeft]
  );

  const handleBorderTopRight = useCallback(
    (value: number) => {
      if (value.toString().length <= 3) setTopRight(value);
    },
    [topRight]
  );

  const handleBorderBottomLeft = useCallback(
    (value: number) => {
      if (value.toString().length <= 3) setBottomLeft(value);
    },
    [bottomLeft]
  );

  const handleBorderBottomRight = useCallback(
    (value: number) => {
      if (value.toString().length <= 3) setBottomRight(value);
    },
    [bottomRight]
  );

  function handleFullCorner(value: number) {
    handleBorderTopLeft(value);
    handleBorderTopRight(value);
    handleBorderBottomLeft(value);
    handleBorderBottomRight(value);
    setFullCornerValue(value);
  }

  function showMessage(value: boolean) {
    setIsCopy(value);
  }

  function handleCopyToBoard() {
    navigator.clipboard.writeText(
      `border-radius: ${topLeft}px ${topRight}px ${bottomLeft}px ${bottomRight}px;`
    );
    showMessage(true);
  }

  function handleResetBorderRadius() {
    handleBorderTopLeft(0);
    handleBorderTopRight(0);
    handleBorderBottomLeft(0);
    handleBorderBottomRight(0);
  }

  function handleShowTopLeftBorderIndicator(value: boolean) {
    setShowTopLeftBorderIndicator(value);
  }

  function handleShowTopRightBorderIndicator(value: boolean) {
    setShowTopRightBorderIndicator(value);
  }

  function handleShowBottomRightBorderIndicator(value: boolean) {
    setShowBottomRightBorderIndicator(value);
  }

  function handleShowBottomLeftBorderIndicator(value: boolean) {
    setShowBottomLeftBorderIndicator(value);
  }

  useEffect(() => {
    setTimeout(() => {
      if (isCopy) {
        showMessage(false);
      }
    }, 1000);
  }, [isCopy]);

  return (
    <BorderRadiusContext.Provider
      value={{
        topLeft,
        topRight,
        bottomLeft,
        bottomRight,
        fullCornerValue,
        showTopLeftBorderIndicator,
        showTopRightBorderIndicator,
        showBottomRightBorderIndicator,
        showBottomLeftBorderIndicator,
        handleBorderTopLeft,
        handleBorderTopRight,
        handleBorderBottomLeft,
        handleBorderBottomRight,
        handleCopyToBoard,
        isCopy,
        handleResetBorderRadius,
        handleShowTopLeftBorderIndicator,
        handleShowTopRightBorderIndicator,
        handleShowBottomRightBorderIndicator,
        handleShowBottomLeftBorderIndicator,
        handleFullCorner,
      }}
    >
      {children}
    </BorderRadiusContext.Provider>
  );
}
