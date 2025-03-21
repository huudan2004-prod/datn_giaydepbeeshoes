// Import mongoose để sử dụng cho việc tạo schema và model
const mongoose = require('mongoose');

// Khởi tạo schema cho Comment (bình luận)
const CommentSchema = new mongoose.Schema({

    // Trường user: Lưu ID của người dùng viết bình luận, tham chiếu tới collection 'User'
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

    // Trường product: Lưu ID của sản phẩm mà bình luận thuộc về, tham chiếu tới collection 'Product'
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },

    // Nội dung của bình luận, kiểu String, bắt buộc phải có
    content: { type: String, required: true }

    // timestamps sẽ tự động tạo hai trường: createdAt (ngày tạo) và updatedAt (ngày cập nhật)
}, { timestamps: true });

// Xuất model Comment từ schema để sử dụng trong các thao tác với MongoDB
module.exports = mongoose.model('Comment', CommentSchema);
