import CTAButton from "../components/cta_button";
import { SignupLoginModal } from "../components/signup_login_modal";

type SearchParamProps = {
  searchParams: { [key: string]: string | string[] | null | undefined };
};

export default async function Home({ searchParams }: SearchParamProps) {
  const params = await searchParams;
  const show = params?.show;

  return (
    <section>
      <main>
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
          <h1 className="text-4xl font-bold ">EZ Quiz Maker AI</h1>
          <CTAButton />
        </div>
        {show && <SignupLoginModal />}
      </main>
    </section>
  );
}
