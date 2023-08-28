import * as SC from "./Loader.styles";

type Props = {
  alignLoader?: boolean;
};

const Loader: React.FC<Props> = ({ alignLoader = false }) => {
  return (
    <SC.Wrapper alignLoader={alignLoader}>
      <SC.Spinner />
    </SC.Wrapper>
  );
};

export default Loader;
