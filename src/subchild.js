import { useContext } from "react";
import Context from "./context";

const SubChild = () => {
  const values = useContext(Context);
  return <div>{values.name}</div>;
};

export default SubChild;
