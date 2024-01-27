import React from 'react'
import Header from '../components/Header'
import Bold from '../components/Bold'
import SmText from '../components/SmText'
import Editor from '../components/Editor'

export default function Home() {
  return (
    <div className=' px-[10%] max-[1300px]:px-[5%] pt-4 bg-[#04090F]'>
    <Header></Header>
    <Bold></Bold>
    <SmText text='<I code beautifully simple things,and I love what I do 🌟/>'></SmText>
    <Editor></Editor>
    </div>
  )
}
