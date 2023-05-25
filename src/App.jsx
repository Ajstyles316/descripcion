import { memo } from 'react';
import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { Frame97 } from './components/InformacionPlato/InformacionPlato';


export const App = memo(function App() {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <Frame97 />
    </div>
  );
});
