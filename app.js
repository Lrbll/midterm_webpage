"use strict";

const express = require("express");
const app = express(); // app이라는 변수에 express를 호출하는 함수를 저장
const cookieParser = require("cookie-parser");
const session = require("express-session");

//라우팅
const home = require("./src/routes/home");
const auth = require("./src/routes/auth");

//앱세팅
app.set("views", "./src/views");
app.set("view engine", "html");

//url을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우, 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(`${__dirname}/src/public`));
app.use(
  session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/", home);
app.use("/auth", auth);

module.exports = app;
