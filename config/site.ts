interface Siteconfig {
  siteName: string;
  description: string;
  currentlyAt: string;
  socialsLinks: {
    github: string;
    facebook: string;
    linkedin: string;
    instagram: string;
    twitter: string;
  };
}

const siteConfig: Siteconfig = {
  siteName: "Explorer",
  description:
    "Informative blog posts for developers. Focus on React, Next, CSS, Animation, and more!",
  currentlyAt: "Ho Chi Minh",
  socialsLinks: {
    github: "https://github.com/GiangLe1999",
    facebook: "https://www.facebook.com/giang.lethanh.5015/",
    linkedin: "",
    instagram: "",
    twitter: "",
  },
};

export default siteConfig;
