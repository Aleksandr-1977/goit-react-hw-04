import css from './Loader.module.css';
import ClipLoader from 'react-spinners/ClipLoader';
import { nanoid } from 'nanoid';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};
const Loader = ({}) => {
  let [color, setColor] = useState('#ffffff');

  return (
    <div className="sweet-loading">
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
export default Loader;
