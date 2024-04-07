<<<<<<< Updated upstream
import '../styles/Home.css';
=======
import { ReactElement } from 'react';

import HomeHeader from '../components/HomeHeader';
import PostContainer from '../components/PostContainer';
>>>>>>> Stashed changes

function Home(): ReactElement {
  return (
<<<<<<< Updated upstream
    <div className="Home">
      Initial commit
=======
    <div className="Home py-4">
      <div className="mb-5">
        <HomeHeader />
      </div>
      <PostContainer />
>>>>>>> Stashed changes
    </div>
  );
}

export default Home;
