const express = require("express");
const cors = require("cors")

const app = express();

const PORT  = 8000

app.use(cors())

app.use('/img', express.static(`${__dirname}/assets`))

app.use(require("./routes/routesHotel"))

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
