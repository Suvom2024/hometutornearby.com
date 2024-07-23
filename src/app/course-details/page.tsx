import CourseDetails from "@/components/courses/course-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Course Details Edumint - A Tutor Webiste",
};
const page = () => {
   return (
      <Wrapper>
         <CourseDetails />
      </Wrapper>
   )
}

export default page