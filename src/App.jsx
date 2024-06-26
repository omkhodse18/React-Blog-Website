import './App.css'
import React, { useContext, useEffect } from 'react';
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {AppContext} from "./context/AppContext"
export default function App() {

  const {fetchBlogs} = useContext(AppContext)
  
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">

      <Header/>
      <Blog/>
      <Footer/>

    </div>
  );
}
