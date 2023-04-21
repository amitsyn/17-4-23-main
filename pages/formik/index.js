import YoutubeFormik1 from '@/components/YouTubeFormik1'
import YoutubeFormik from '@/components/YoutubeFormik'
import React from 'react'

const Formik = () => {
  return (
    <div>
       {/* <YoutubeFormik/> */}
       <YoutubeFormik1/>
    </div>
  )
}
  export default Formik

Formik.getLayout = function pageLayout(page) {
    return (
      <>
        {page}
        {/* <Footer /> */}
      </>
    )
  }

