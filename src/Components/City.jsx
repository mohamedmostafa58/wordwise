import { useParams } from "react-router-dom";

const City = () => {
  const param = useParams();
  return <div>CITY{param.id}</div>;
};

export default City;
