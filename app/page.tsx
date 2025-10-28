import { CTAButton } from "../components/shared";

export default async function Home() {
  return (
    <section>
      <main>
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] space-y-6">
          <h1 className="text-2xl sm:text-4xl font-bold ">EZ Quiz Maker AI</h1>
          <CTAButton />
        </div>
      </main>
    </section>
  );
}
