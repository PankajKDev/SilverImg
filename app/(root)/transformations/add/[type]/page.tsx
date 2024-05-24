import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";
const AddTransformationTypePage = async ({
  params: { type },
}: SearchParamProps) => {
  //searchParamProps is a type declared in types/index.d.ts
  //type is extracted from transformationTypes

  const { userId } = auth();

  const transformation = transformationTypes[type];

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);
  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />

      <section className="mt-10">
        <TransformationForm
          action="Add"
          userId={user._id}
          type={transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  );
};

export default AddTransformationTypePage;
