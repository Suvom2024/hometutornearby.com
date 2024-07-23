import Breadcrumb from '@/components/common/Breadcrumb'
import HeaderOne from '@/layouts/headers/HeaderOne'
import React from 'react'
import SingupArea from './SingupArea'
import FooterOne from "@/layouts/footers/FooterOne"

const Singup = () => {
   return (
      <>
         <HeaderOne style_2={true} />
         <Breadcrumb title="Join As Tutor" sub_title="Join As Tutor" />
         <SingupArea style={false} />
         <FooterOne />
      </>
   )
}

export default Singup
