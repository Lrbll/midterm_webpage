"use strict";

const express = require("express");
const router = express.Router();
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
  const is_logined = req.session.is_logined;
  const id = req.session.nickname;
  res.render("home/index", { is_logined, id });
});

router.get("/songs", (req, res) => {
  const is_logined = req.session.is_logined;
  res.render("home/songs", { is_logined });
});

router.get("/works", async (req, res) => {
  const is_logined = req.session.is_logined;
  // const mvVideos = await getYouraOfficialMV("youra");
  // console.log(mvVideos);
  res.render("home/works", { is_logined });
});

router.get("/sns", (req, res) => {
  const is_logined = req.session.is_logined;
  res.render("home/sns", { is_logined });
});

router.get("/contact", (req, res) => {
  const is_logined = req.session.is_logined;
  res.render("home/contact", { is_logined });
});

module.exports = router;
