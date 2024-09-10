import app from "./app.js";
import { PORT } from "./constants/config.js";

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
