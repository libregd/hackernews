import { useState,Fragment } from 'react'
import { MetaTags } from '@redwoodjs/web'


const JobsPage = () => {
  const PrevUrl ="https://hacker-news.firebaseio.com/v0/"
  const nextUrl =".json"
  const itemPre = "item/";
  const jobsUrl = PrevUrl+"jobstories"+nextUrl;

  let test =[];

  fetch(jobsUrl)
    .then((response) => response.json())
    .then((json) => {
      json.map( x =>{
        fetch(PrevUrl+ itemPre+x+nextUrl)
        .then((response) => response.json())
        .then((item) => {
        if (item.url != true) {
          test.push([item.id,item.title,item.by,item.url]);
        } else {
          test.push([item.id,item.title,item.by]);
        }

        })

      })

    })
    console.log(test)
    let all = "";
    test.map(li =>{
      all += {li}
    })
    // 啥都没有
    console.log(all)

  return (
    <>
      <MetaTags title="Jobs" description="Jobs page" />
      <p>{all}</p>

    </>
  )
}

export default JobsPage
