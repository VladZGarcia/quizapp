import { CTAButton } from "../components/shared";
import { SignupLoginModal } from "../components/auth";

type SearchParamProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Home({ searchParams }: SearchParamProps) {
  const params = await searchParams;
  const show = params?.show;

  return (
    <section>
      <main>
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] space-y-6">
          <h1 className="text-4xl font-bold ">EZ Quiz Maker AI</h1>
          <CTAButton />
        </div>
        {show && <SignupLoginModal />}
      </main>
    </section>
  );
}
