import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import CourseDetailsArea from "./CourseDetailsArea"

const CourseDetails = () => {
  return (
    <>
      <HeaderOne style_2={true} />
      <CourseDetailsArea />
      <FooterOne />
    </>
  )
}

export default CourseDetails
