import Head from "next/head";

const Privacy = () => {
  return (
    <>
      <Head>
        <title>SilverIMG - Privacy Policy</title>
      </Head>
      <div className="max-w-container mx-auto p-4 bg-white shadow-lg rounded-lg overflow-hidden">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-md text-gray-700 mb-4">
          This privacy policy outlines how SilverIMG handles personal data and
          ensures compliance with relevant data protection legislation.
        </p>
        <p className="text-md text-gray-700 mb-4">
          SilverIMG collects the following types of personal data:
        </p>
        <ul className="list-disc pl-5 text-gray-700">
          <li className="text-md text-gray-700 mb-2">Username, email</li>
          {/* Repeat for other items */}
        </ul>
        <p className="text-md text-gray-700 mb-4">
          SilverIMG uses personal data for the following purposes:
        </p>
        <ul className="list-disc pl-5 text-gray-700">
          <li className="text-md text-gray-700 mb-2">
            Username and Email are used by SilverIMG to authenticate you as
            users
          </li>
          {/* Repeat for other items */}
        </ul>
        <p className="text-md text-gray-700 mb-4">
          SilverIMG does not share its users&apos; details with any third party
        </p>
        <ul className="list-disc pl-5 text-gray-700">
          <li className="text-md text-gray-700 mb-2">
            The data provided can be used for authentication and payments
          </li>
          {/* Repeat for other items */}
        </ul>
        <p className="text-md text-gray-700 mb-4">
          If you have any questions or concerns regarding our use of personal
          data, please contact us at:
        </p>
        <ul className="list-disc pl-5 text-gray-700">
          <li className="text-md text-gray-700 mb-2">
            Email:{""}
            <a
              href="mailto:pankajk.dev0000@gmail.com"
              className="text-blue-600 underline hover:text-blue-500"
            >
              pankajk.dev0000@gmail.com
            </a>
          </li>
          {/* Repeat for other items */}
        </ul>
        <p className="text-md text-gray-700 mb-4">
          As an individual who created SilverIMG, I am committed to protecting
          the privacy and security of user data. SilverIMG complies with
          India&apos;s Digital Personal Data Protection Act, 2023 (DPDP Act) and
          other relevant data protection laws. I ensure that SilverIMG&apos;s
          data processing practices are transparent and that users have the
          right to be informed about how their personal data is used
        </p>
        <p className="text-md text-gray-700 mb-4">
          SilverIMG takes the security of personal data seriously. We implement
          appropriate technical and organizational measures to protect personal
          data from unauthorized access, disclosure, or other forms of
          processing in violation of the applicable data protection regulations.
        </p>
        <p className="text-md text-gray-700 mb-4">
          SilverIMG reserves the right to update this privacy policy at any
          time. We will notify users of any changes by posting the updated
          policy on our website. Users are responsible for regularly reviewing
          the policy to ensure they are aware of any changes.
        </p>
        <p className="text-md text-gray-700 mb-4">
          This privacy policy is effective as of 2024 and will remain in effect
          until it is updated or replaced.
        </p>
      </div>
    </>
  );
};

export default Privacy;
