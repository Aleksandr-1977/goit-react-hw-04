import RingLoader from 'react-spinners/RingLoader';

const override = {
  display: 'block',
  margin: '100px auto',
  borderColor: 'green',
};
const Loader = () => {
  return (
    <div>
      <RingLoader color="#6dc55f" cssOverride={override} />
    </div>
  );
};
export default Loader;
