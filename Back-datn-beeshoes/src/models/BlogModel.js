// Import mongoose để tạo schema và model
const mongoose = require('mongoose');

// Tạo schema cho Blog (bài viết)
const BlogSchema = new mongoose.Schema({

    // Tiêu đề của bài viết, kiểu String, bắt buộc phải có
    title: { type: String, required: true },

    // Nội dung chính của bài viết, kiểu String, bắt buộc phải có
    content: { type: String, required: true },

    // Tác giả của bài viết, lưu dưới dạng ObjectId, tham chiếu tới collection 'User'
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

    // Danh sách các comment của blog, mỗi comment là một ObjectId tham chiếu tới 'Comment'
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]

    // timestamps sẽ tự động tạo 2 trường: createdAt (thời gian tạo) và updatedAt (thời gian cập nhật)
}, { timestamps: true });

// Xuất model 'Blog' từ schema để sử dụng trong ứng dụng
module.exports = mongoose.model('Blog', BlogSchema);
