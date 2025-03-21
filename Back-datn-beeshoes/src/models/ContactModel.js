// Import mongoose để tạo schema và model
const mongoose = require('mongoose');

// Tạo schema cho Contact (liên hệ)
const ContactSchema = new mongoose.Schema({

    // Tên người gửi liên hệ, kiểu String, bắt buộc
    name: { type: String, required: true },

    // Email của người gửi liên hệ, kiểu String, bắt buộc
    email: { type: String, required: true },

    // Nội dung tin nhắn hoặc lời nhắn từ người dùng, bắt buộc
    message: { type: String, required: true }

    // timestamps sẽ tự động thêm createdAt (ngày tạo) và updatedAt (ngày cập nhật)
}, { timestamps: true });

// Xuất model 'Contact' từ schema để sử dụng trong ứng dụng
module.exports = mongoose.model('Contact', ContactSchema);
