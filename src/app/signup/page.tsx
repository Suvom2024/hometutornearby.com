import Singup from "@/components/inner-pages/signup";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Join As Tutor - Home Town Tutor",
};
const page = () => {
   return (
      <Wrapper>
         <Singup />
      </Wrapper>
   )
}

export default page