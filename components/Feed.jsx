'use client'
import { useState,useEffect } from "react";
import PromptCard from "./PromptCard";

const Feed = () => {
  const [searchName,SearchName] = useState();
  const handleChange = (e) =>{

  }
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input type="text" 
        value={searchName}
        onChange={handleChange}
        placeholder="Search tag or useName"
        required
        className="search_input peer"
        />
      </form>
      <PromptCard/>
    </section>
  )
}

export default Feed