import Header from '../header/index.js';
import Footer from '../footer/index.js';

const MasterLayout = ({ children, ...props}) => {
    return (
      <div {...props}>
        <Header/>
        {children}
        <Footer/>
      </div>
    );
  };
  export default MasterLayout;