const publicUrl = process.env.PUBLIC_URL;
const appImages = baseUrl + "/src/assets/images/";

export const global = {
  banner: appImages + "banner/",
  back: appImages + "background/",
  icons: appImages + "icons/",
  icons2: appImages + "icons-2/",
  eicons: appImages + "estimation-icon/",
  whyChoose: appImages + "w-choose/",
  booking: appImages + "booking/",
  logo: appImages + "client-logo/",
  testim: appImages + "testimonials/",
  sgallery: appImages + "s-gallery/",
  blog: appImages + "blog/",
  blog1: appImages + "blog/latest/",
  blog2: appImages + "blog/latest-2/",
  blogSingle: appImages + "blog/blog-single/",
  projects: appImages + "project/",
  recentBlog: appImages + "blog/recent-blog/",
  sideGallery: appImages + "gallery/thumb/",
};

export function publicUrlFor(path) {
  return publicUrl + path;
}

export function loadScript(src, fromPublic) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement("script");
    script.src = fromPublic ? publicUrlFor(src) : src;
    script.addEventListener("load", function () {
      resolve();
    });
    script.addEventListener("error", function (e) {
      reject(e);
    });
    document.body.appendChild(script);
    document.body.removeChild(script);
  });
}

const URL = process.env.REACT_APP_URL;
const PORT = process.env.REACT_APP_URL ? `:${process.env.REACT_APP_URL}` : "";

export const API_ENDPOINT = `${URL}${PORT}/lead`;
export const customScriptPath = "/assets/js/custom.js";
export const newsBgImagePath = publicUrlFor("/assets/images/news-l-bg3.webp");
