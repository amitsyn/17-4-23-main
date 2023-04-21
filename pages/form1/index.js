import YoutubeForm from '@/components/YoutubeForm'
import React from 'react'

const Form1 = () => {
  return (
    <div>
      <YoutubeForm/>
    </div>
  )
}

export default Form1

Form1.getLayout = function pageLayout(page) {
    return (
      <>
        {page}
        {/* <Footer /> */}
      </>
    )
  }

