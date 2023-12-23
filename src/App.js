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
    <div className="h-[100vh] overflow-y-auto select-none hide-scrollbar">
      <div className=' px-[10%] pt-4 bg-[#04090F]'>
      <Header></Header>
      <Bold></Bold>
      <SmText text='<I code beautifully simple things,and I love what I do 🌟/>'></SmText>
      <Editor></Editor>
      <p>loermisp therei is</p>
      <p>loermisp therei is</p>
      <p>loermisp therei is</p>
      <p>loermisp therei is</p>
      <p>loermisp therei is</p>
      <p>loermisp therei is</p>
      </div>
    </div>
  );
}

export default App;
