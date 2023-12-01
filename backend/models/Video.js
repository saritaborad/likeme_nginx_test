const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
 {
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  video: { type: String },
  thumbnail_image: { type: String },
  video_link: { type: String },
  is_one_to_one: { type: Number, default: 0 }, // 0 -not one to one  1 - one to one
 },
 { timestamps: true }
);

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
