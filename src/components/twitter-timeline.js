import React from 'react'

export default function TwitterFeed () {
  return (
    <>
      <a
        class='twitter-timeline'
        href='https://twitter.com/ICPEconf?ref_src=twsrc%5Etfw'
      >
        Tweets by ICPEconf
      </a>
      <script
        async
        src='https://platform.twitter.com/widgets.js'
        charset='utf-8'
      ></script>
    </>
  )
}
