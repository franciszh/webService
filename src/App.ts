import * as express from "express";
import * as bodyParser from "body-parser";

const app = express();

app.set("port", 8888);

app.use(bodyParser.json());

app.post("/", (req, res) => {
  if (req && req.body && req.body.payload) {
    const payload = req.body.payload;
    const response = payload
      .filter(
        (item: { [index: string]: any }) => item.episodeCount > 0 && item.drm
      )
      .map((item: { [index: string]: any }) => {
        return {
          image: item.image.showImage,
          slug: item.slug,
          title: item.title
        };
      });
    res.json({ response });
  }
});

export default app;
