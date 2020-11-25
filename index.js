require("dotenv").config();
const { createServer } = require("http");

const PORT = process.env.PORT || 3000;
const app = require("./server");

const server = createServer(app);

server.listen(PORT, () => {
	console.log(`Server is listening to PORT ${PORT}`);
});
