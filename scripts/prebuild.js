// jsDoc 추가 혹은 typescript로 변경필요

const path = require("path");
const recursive = require("recursive-readdir");
const fs = require("fs");

function getFileList() {
  recursive("__open-wiki", [".git", "README.md"], function (err, files) {
    if (err) {
      console.error(err);
      return;
    }

    fileList = files.map((file) => ({
      path: file,
      name: path.basename(file).replace(".md", ""),
    }));

    console.log({ fileList });
    fs.writeFileSync("json/file_list.json", JSON.stringify(fileList)); // TODO: 이름에 날짜 넣을지 고민
  });
}

getFileList();
