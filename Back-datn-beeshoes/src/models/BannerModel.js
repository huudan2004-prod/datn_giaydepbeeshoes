const mongoose = require('mongoose');


const BannerSchema = new mongoose.Schema({
    name: { type: String, required: true }, // tên banner 
    image: { type: String, required: true }, // ảnh banner 
    link: { type: String, required: true }, // đường dẫn banner
    status: { type: Boolean, required: true }, // trạng thái banner (true: hiển thị, false: ẩn)
}, { timestamps: true });

module.exports = mongoose.model('Banner', BannerSchema);