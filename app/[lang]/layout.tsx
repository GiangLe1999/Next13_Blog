import Navigation from "@/components/Layout/Navigation";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Layout/Footer";
import "highlight.js/styles/github.css";
import { Mulish } from "next/font/google";
import { getDictionary } from "@/lib/getDictionary";
import Script from "next/script";

const mulish = Mulish({ subsets: ["latin"] });

export const generateMetadata = async ({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> => {
  const dictionary = await getDictionary(params.lang);
  return {
    title: {
      template: `%s | ${dictionary.siteTitle}`,
      default: dictionary.siteTitle,
    },
    description: dictionary.siteDescription,
    openGraph: {
      title: dictionary.siteTitle,
      description: dictionary.siteDescription,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${params.lang}`,
      siteName: dictionary.siteTitle,
      images: [
        {
          url: "https://localhost:3000/opengraph-image.jpg",
          width: 1280,
          height: 720,
        },
      ],
      locale: params.lang,
      type: "website",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      languages: {
        "en-US": `${process.env.NEXT_PUBLIC_BASE_URL}/en`,
        "vi-VN": `${process.env.NEXT_PUBLIC_BASE_URL}/vi`,
      },
    },
    verification: {
      google: "Zu3Fr4Uz3MCDFI9xdrTNvh1yD-Ss05LsHSccAwdBq00",
    },
  };
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang="en">
      {/* stategy có nghĩa là NextJS sẽ load thẻ Script này sau khi trang được interactive 
      vì vậy nó là 1 async script */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-N48ZV4LWL0"
      ></Script>
      <Script id="google-analytic">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-N48ZV4LWL0');`}
      </Script>
      <body className={mulish.className}>
        <div className="relative z-0 bg-primary dark:bg-primary-light">
          <Navigation locale={params.lang} />
          {children}
          <Footer locale={params.lang} />
        </div>
      </body>
    </html>
  );
}
