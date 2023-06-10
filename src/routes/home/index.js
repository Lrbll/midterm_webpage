"use strict";

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const is_logined = req.session.is_logined;
  const id = req.session.nickname;
  res.render("home/index", { is_logined, id });
});

router.get("/songs", (req, res) => {
  const is_logined = req.session.is_logined;
  res.render("home/songs", { is_logined });
});

router.get("/works", (req, res) => {
  const is_logined = req.session.is_logined;
  res.render("home/works", { is_logined });
});

router.get("/sns", (req, res) => {
  const is_logined = req.session.is_logined;
  res.render("home/sns", { is_logined });
});

router.get("/project", (req, res) => {
  const is_logined = req.session.is_logined;
  res.render("home/project", { is_logined });
});

module.exports = router;
