// src/app.js
import getData from "./lib/service.js";

const main = async () => {
    const result = await getData(1); // userId'yi 1 olarak verdik
    console.log(result);
};

main();
