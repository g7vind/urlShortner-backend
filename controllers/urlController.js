const Url = require("../models/urlSchema");

const handleShortUrl = async (req, res) => {
  try {
    const { nanoid } = await import("nanoid");
    const body = req.body;
    if (!body.url) {
      return res.status(400).json({ error: "Url is required" });
    }
    const shortId = nanoid(8);
    const shortUrl = await Url.create({
      shortId,
      redirectUrl: body.url,
      totalClicks: [],
    });
    await shortUrl.save();
    res.json({ id: shortId });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const handleRedirect = async (req, res) => {
  try {
    const shortId = req.params.shortID;
    const entry = await Url.findOneAndUpdate({shortId,},{$push: {totalClicks: {timestamp: Date.now(),},},});
    console.log(entry);
    res.redirect(entry.redirectUrl);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { handleShortUrl, handleRedirect };
