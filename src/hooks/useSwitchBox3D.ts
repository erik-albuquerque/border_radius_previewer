import { useContext } from "react";
import { SwitchBox3DContext } from "../context/SwitchBox3DContext";

export function useSwitchBox3D() {
  const context = useContext(SwitchBox3DContext);
  return context;
}
