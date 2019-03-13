import app from "./App";

app.listen(app.get("port"), (err: { [index: string]: any }) => {
  if (err) {
    return console.log(err);
  }
  return console.log(`server is listening on 8888`);
});
