const fs = require("fs");

const content = "This is the content of the new file.";

fs.writeFile("newfile.txt", content, (err) => {
  if (err) throw err;
  console.log("File created and saved!");
});

const data = "Hello, this is some data that we will write to a file!";

// Write data to a file
fs.writeFile("example.txt", data, (err) => {
  if (err) throw err;
  console.log("File has been saved!");

  // Read data from the file
  fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("File content:");
    console.log(data);
  });
});
