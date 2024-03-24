import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Questions from "../../components/Questions";

const Home = () => {
  const token = cookies().get("token")?.value;
  if (!token) {
    redirect("/unauthorized");
  }

  return (
    <div className="grid gap-2">
      <p className="text-gray-500 text-sm">Avaliable Questions</p>
      <Questions />
    </div>
  );
};

export default Home;
