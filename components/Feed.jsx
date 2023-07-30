'use client'
import { useState,useEffect } from "react";
import PromptCard from "./PromptCard";


const Feed = () => {
  const [searchName,SearchName] = useState('');
  const [post,setPost] = useState([]);
  const handleChange = (e) =>{

  }

  useEffect(() => {
    const fetchPosts = async () => {
      const respose = await fetch ("/api/prompt");
      const data = await respose.json();

      setPost(data)
    }
    fetchPosts();
  },[])


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
      <PromptCardList
      data={post}
      handleTagClick = {() => {}}
      
      />
    </section>
  )
}

const PromptCardList = ({data,handleTagClick}) =>{

  return (
    <div className="mt-16 prompt_layout">
      { data.map((post) => (
            <PromptCard
              key={post._id}
              post={post}
              handleTagClick={handleTagClick}
            />
          )
        )
      }
    </div>
  );
}

export default Feed