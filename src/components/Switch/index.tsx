import { useCallback, useState } from "react";
import { useSwitchBox3D } from "../../hooks/useSwitchBox3D";
import { Container, Content, InputContent, Dot } from "./styles";

type SwitchProps = {
  label?: string;
};

export function Switch({ label = "" }: SwitchProps) {
  const { handleIsChecked, isChecked } = useSwitchBox3D();
  const [checked, setChecked] = useState(isChecked);

  const handleChange = useCallback(() => {
    setChecked(!checked);
    handleIsChecked();
  }, [checked]);

  return (
    <Container>
      <Content>
        <span>{label}</span>
        <InputContent isChecked={checked} onClick={handleChange}>
          <Dot isChecked={checked} />
        </InputContent>
      </Content>
    </Container>
  );
}
