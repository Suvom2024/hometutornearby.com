import SingIn from "@/components/inner-pages/signin";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Need A Tutor - Home Town Tutor",
};
const page = () => {
   return (
      <Wrapper>
         <SingIn />
      </Wrapper>
   )
}

export default page