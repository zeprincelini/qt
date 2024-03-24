import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Questions from "../../components/Questions";
import AddQuestionBtn from "../../components/AddQuestionBtn";

const Home = () => {
  const token = cookies().get("token")?.value;
  if (!token) {
    redirect("/unauthorized");
  }

  return (
    <div className="grid gap-2">
      <div className="flex justify-between items-center">
        <p className="text-gray-500 text-sm">Avaliable Questions</p>
        <AddQuestionBtn />
      </div>
      <Questions />
    </div>
  );
};

export default Home;
