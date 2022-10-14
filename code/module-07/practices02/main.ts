import dotenv from "dotenv";
const config = dotenv.config();

if(config.error) {
  throw config.error;
};

console.log(config);
console.log(process.env.DB_HOST);
console.log(process.env.WEB_HOST);