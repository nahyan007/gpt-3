import './App.css';
import { Article,Brand,CallToAction,Feature,Navbar } from "./components";
import { Blog,Features,Footer,Header, Possibility, WhatGPT3 } from "./containers";

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CallToAction/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
