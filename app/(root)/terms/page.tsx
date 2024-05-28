// pages/terms.tsx
import Head from "next/head";

const Terms = () => {
  return (
    <div className="bg-white text-purple-800 min-h-screen">
      <Head>
        <title>SilverIMG - Terms of Service</title>
      </Head>

      <header className="text-center p-5 border-b border-purple-200">
        <h1 className="text-2xl font-bold">Terms of Service</h1>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section>
          <h2 className="text-xl font-semibold mb-2">Introduction</h2>
          <p>
            Welcome to SilverIMG These Terms of Service govern your use of the
            services offered by SilverIMG. By accessing or using our Services,
            you agree to be bound by these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">User Responsibilities</h2>
          <p>
            You are responsible for your use of the Services and for ensuring
            that all of your activities in connection with the Services comply
            with these Terms and all applicable laws and regulations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Prohibited Activities</h2>
          <p>
            You agree not to use the Services for any unlawful purpose or in any
            way that interrupts, damages, or impairs the quality or
            functionality of the Services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Intellectual Property Rights
          </h2>
          <p>
            All content and materials available on the Services, including but
            not limited to text, graphics, logos, images, and software, are the
            property of SilverIMG or its licensors and are protected by
            copyright, trademark, and other intellectual property laws.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Disclaimers</h2>
          <p>
            We cannot guarantee the accuracy, completeness, or usefulness of any
            information on the Services and are not responsible for any errors
            or omissions therein.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Limitations of Liability
          </h2>
          <p>
            In no event shall SilverIMG be liable for any indirect, incidental,
            special, consequential, or exemplary damages arising out of or in
            connection with the use of the Services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless SilverIMG from any claim,
            demand, loss, damage, cost, or expense arising out of or relating to
            your breach of these Terms or your use of the Services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Termination</h2>
          <p>
            SilverIMG reserves the right to terminate or suspend your account
            immediately, without prior notice or liability, for any reason
            whatsoever, including without limitation if you breach these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Miscellaneous Provisions
          </h2>
          <p>
            These Terms constitute the entire agreement between you and
            SilverIMG concerning the use of the Services. Our failure to enforce
            any right or provision does not waive our right to enforce it in the
            future.
          </p>
        </section>
      </main>

      <footer className="text-center p-5 mt-10 border-t border-purple-200">
        <p>&copy; {new Date().getFullYear()} SilverIMG. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Terms;
