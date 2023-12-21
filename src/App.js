import Header from './components/Header';
import { followingDotCursor } from 'cursor-effects';
import { useEffect } from 'react';
import Bold from './components/Bold';
import SmText from './components/SmText';
import Editor from './components/Editor';

function App() {

  useEffect(() => {
    followingDotCursor();
    return () => {
    };
  }, []);

  return (
    <div className="h-[100%] select-none">
      <div className=' px-[10%] pt-4 bg-[#04090F]'>
      <Header></Header>
      <Bold></Bold>
      <SmText text='<I code beautifully simple things,and I love what I do 🌟/>'></SmText>
      <Editor></Editor>
      </div>
    </div>
  );
}

export default App;
