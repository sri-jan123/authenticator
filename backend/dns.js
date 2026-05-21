const dns = require("dns");

(async () => {
  try {
    const r = await dns.promises.resolveSrv("_mongodb._tcp.cluster0.hhhjtpt.mongodb.net");
    console.log("SRV:", r);
  } catch (e) {
    console.error("SRV resolve failed:", e);
  }
})();