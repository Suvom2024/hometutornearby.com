import Blog from "@/components/blogs/blog";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Blog Edumint - A Tutor Webiste",
};
const page = () => {
   return (
      <Wrapper>
         <Blog />
      </Wrapper>
   )
}

export default page