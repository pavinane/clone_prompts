'use client';

import { useSession } from "next-auth/react";
import { useState,useEffect } from "react";
import {useRouter} from "next/navigation";
import Profile from "@components/Profile";



const MyProfile = () => {
    const router = useRouter();
    const {data:session} = useSession()

    const [ post,setPost] = useState([])

    useEffect(() => {
      const fetchPosts = async () => {
        const respose = await fetch(`/api/users/${session?.user?.id}/posts`);
        const data = await respose.json();

        setPost(data);
      };
      if(session?.user.id) fetchPosts();
    }, []);

    const handleDelete = async(post) => {
      const hasConfirmed = confirm("Are sure you want to delete this prompt");

      if(hasConfirmed){
        try {
          await fetch(`api/prompt/${post._id.toString()}`,{
            method:'DELETE'
          });

          const filterPrompt = post.filter((p) =>p._id !== post._id);

          setPost(filterPrompt)

        } catch (error) {
          console.log(error)
        }
      }

    }

    const handleEdit = (post) => {
        router.push(`/update-prompt?id=${post._id}`)
    }

  return (
    <Profile 
    name="My"
    description=" Welcome to my personalized profile page"
    data={post}
    handleEdit={handleEdit}
    handleDelete={handleDelete}
    
    />
  )
}

export default MyProfile