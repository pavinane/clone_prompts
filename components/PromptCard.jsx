'use client'
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname,useRouter } from "next/navigation";

const PromptCard = ({post,handleTagClick,handleEdit, handleDelete}) => {

  const {data:session} = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied,setCopied] = useState("");

  const handleCopy =() => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(""),3000)
  }
  
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex gap-5 justify-start cursor-pointer items-center">
          <Image
            src={post.creater?.image}
            alt="creator_image"
            width={50}
            height={50}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className=" font-satoshi font-semibold orange_gradient">
              {post.creater?.username}
            </h3>
            <p className=" font-mono text-sm text-gray-500">
              {post.creater?.email}
            </p>
          </div>
        </div>
        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={
              copied == post.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            width={20}
            height={20}
          />
        </div>
      </div>
      <p className="my-4 font-satoshi font-semibold text-sm text-gray-900">
        {post.prompt}
      </p>
      <p
        className="text-sm text-gray-400 blue_gradient cursor-pointer"
        onClick={() => handleClick && handleTagClick(post.tag)}
      >
        {post.tag}
      </p>
      {session?.user.id == post.creater?._id && pathName === "/profile" && (
        <div className="flex-1 flex justify-center gap-5 mt-5 border-t border-gray-100 pt-3">
          <p
            className=" font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className=" font-inter text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
}

export default PromptCard