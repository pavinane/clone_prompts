import Feed from '@components/Feed'
import React from 'react'

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover & Share     <br className='max-md:hidden'/>
    
        <span className=' orange_gradient text-center'>AI-Powered Prompts</span>
      </h1>
      <p className='desc text-center'>
        Prompots is a open source , I try to create clone of this project using Nextjs and tailwind css 
      </p>

      {/* Feed Component */}
      <Feed />
    </section>
  )
}

export default Home