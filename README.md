<h1>SilverIMG</h1>
<h3>SilverIMG is AI image SaaS platform that excels in image processing capabilities, integrates a secure payment infrastructure, offers advanced image search functionalities, and supports multiple AI features, including image restoration, recoloring, object removal, generative filling, and background removal.</h2>
<h2>Technologies used:</h2>
<li>🌠 NextJS</li>
<li>🌠 Typescript</li>
<li>🌠 MongoDB</li>
<li>🌠 Clerk</li>
<li>🌠 Cloudinary</li>
<li>🌠 Stripe</li>
<li>🌠 Shadcn</li>
<li>🌠 Tailwind</li>
<h2>Features :</h2>

<li>🌔 Authentication and Authorization: Secure user access with registration, login, and route protection.</li>
<li>🌔 Community Image Showcase: Explore user transformations with easy navigation using pagination</li>
<li>🌔 Advanced Image Search: Find images by content or objects present inside the image quickly and accurately</li>
<li>🌔 Image Restoration: Revive old or damaged images effortlessly</li>
<li>🌔 Image Recoloring: Customize images by replacing objects with desired colors easily</li>
<li>🌔 Image Generative Fill: Fill in missing areas of images seamlessly</li>
<li>🌔 Object Removal: Clean up images by removing unwanted objects with precision</li>
<li>🌔 Background Removal: Extract objects from backgrounds with ease</li>
<li>🌔 Download Transformed Images: Save and share AI-transformed images conveniently</li>
<li>🌔 Transformed Image Details: View details of transformations for each image</li>
<li>🌔 Transformation Management: Control over deletion and updates of transformations</li>
<li>🌔 Credits System: Earn or purchase credits for image transformations</li>
<li>🌔 Profile Page: Access transformed images and credit information personally</li>
<li>🌔 Credits Purchase: Securely buy credits via Stripe for uninterrupted use</li>
<li>🌔 Responsive UI/UX: A seamless experience across devices with a user-friendly interface
and many more, including code architecture and reusability</li>

<h2>Getting started with SilverIMG</h2>
<li>1. Clone the repo</li>
<code>git clone https://github.com/PankajKDev/SilverImg
cd SilverImg
npm i
</code>

<li>2. Setup .env in root with required credentials</li>
<code>
#NEXT
NEXT_PUBLIC_SERVER_URL=
#MONGODB
MONGODB_URL=
#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
WEBHOOK_SECRET=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
#CLOUDINARY
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
#STRIPE
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
</code>
<p>Get these from <strong>MongoDB,Clerk,Cloudinary and Stripe respectively.</strong></p>

<li>3. run the next app</li>
<code>npm run dev</code>
