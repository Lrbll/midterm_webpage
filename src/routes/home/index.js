"use strict";

const express = require("express");
const router = express.Router();
const authCheck = require("../auth/authCheck.js");
// const puppeteer = require("puppeteer");

// async function getYouraOfficialMV() {
//   const browser = await puppeteer.launch({ headless: "new" });
//   const page = await browser.newPage();

//   // youra_official/videos 페이지 열기
//   await page.goto("https://www.youtube.com/@youra_official/videos");

//   // MV 영상의 iframe 태그 가져오기
//   const mvVideos = await page.evaluate(() => {
//     const videos = [];

//     const elements = document.querySelectorAll("ytd-grid-video-renderer");

//     for (let element of elements) {
//       // 동영상 제목 추출
//       const titleElement = element.querySelector("MV");
//       const title = titleElement ? titleElement.textContent : "";

//       if (title.includes("MV")) {
//         // iframe 속성 추출
//         const iframe = element.querySelector("iframe");
//         const iframeSrc = iframe ? iframe.src : "";

//         videos.push(iframeSrc);
//       }
//     }

//     return videos;
//   });

//   await browser.close();

//   return mvVideos;
// }

router.get("/", (req, res) => {
  res.sendFile("index.html", { root: "src/views/home" });
});

router.get("/songs", (req, res, next) => {
  if (!authCheck.isOwner(req, res)) {
    // 로그인 안되어있으면 login으로
    res.send(`<script type="text/javascript">alert("로그인 후, 이용할 수 있습니다."); 
              document.location.href="/auth/login";</script>`);
    return false;
  } else {
    next();
  }
});

router.get("/songs", (req, res) => {
  res.sendFile("songs.html", { root: "src/views/home" });
});

router.get("/works", (req, res, next) => {
  if (!authCheck.isOwner(req, res)) {
    // 로그인 안되어있으면 login으로
    res.send(`<script type="text/javascript">alert("로그인 후, 이용할 수 있습니다."); 
              document.location.href="/auth/login";</script>`);
    return false;
  } else {
    next();
  }
});
router.get("/works", async (req, res) => {
  // const mvVideos = await getYouraOfficialMV("youra");
  // console.log(mvVideos);
  res.sendFile("works.html", { root: "src/views/home" });
});

router.get("/sns", (req, res, next) => {
  if (!authCheck.isOwner(req, res)) {
    // 로그인 안되어있으면 login으로
    res.send(`<script type="text/javascript">alert("로그인 후, 이용할 수 있습니다."); 
              document.location.href="/auth/login";</script>`);
    return false;
  } else {
    next();
  }
});

router.get("/sns", (req, res) => {
  res.sendFile("sns.html", { root: "src/views/home" });
});

router.get("/contact", (req, res) => {
  res.sendFile("contact.html", { root: "src/views/home" });
});

module.exports = router;
