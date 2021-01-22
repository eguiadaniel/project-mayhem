const express = require("express");
const fs = require("fs");

/*
effectRouter.post('/effect/create', (req, res, next)=> {

  console.log(req.body);

  const data = req.body;

  Input.create({
    text1: data.text1,
    text2: data.text2,
    logo_url: data.logo_url || undefined,
    effect_id: 'test'
  })
  .then((input)=>{
    let completeText = 
    `
    Text 1: ${input.text1}
    Text 2: ${input.text2}
    Effect: ${input.effect_id}
    Logo_url: ${input.logo_url}
    Creation Date: ${input.creationDate}
    `;
    */

// Creates /tmp/a/apple, regardless of whether `/tmp` and /tmp/a exist.
fs.mkdir('/tmp/a/apple', { recursive: true }, (err) => {
  if (err) throw err;
});

fs.writeFile('/tmp/a/apple', fileContent, (error) => {
  if (error) {
    console.log("An error ocurred creating your file: ", error);
  } else {
    console.log("File is created successfully.");
  }
});

const createDir = (dirPath) => {
  fs.mkdir(process.cwd() + dirPath, { recursive: true }, (error) => {
    if (error) {
      console.log("An error ocurred creating your directory: ", error);
    } else {
      console.log("Your directory was made");
    }
  });
};
const createFile = (filePath, fileContent) => {
  fs.writeFile(filePath, fileContent, (error) => {
    if (error) {
      console.log("An error ocurred creating your file: ", error);
    } else {
      console.log("File is created successfully.");
    }
  });
};

module.exports = createDirAndFile;
