import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  );
};

export default Home;
