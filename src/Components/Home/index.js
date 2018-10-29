import React from 'react';

import Featured from './Featured';
import Matches from '../Matches';
import Meetplayers from '../Meetplayers';

const MyComponent = () => {
  return (
    <div className="bck_blue">
      <Featured/>
      <Matches/>
      <Meetplayers/>
    </div>
  );
};

export default MyComponent;
