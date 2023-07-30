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

    const handleDelete = async(post) => {}

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