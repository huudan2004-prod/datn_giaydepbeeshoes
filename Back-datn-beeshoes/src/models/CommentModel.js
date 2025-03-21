// Import mongoose để sử dụng cho việc tạo schema và model
const mongoose = require('mongoose');

// Tạo schema cho Comment (bình luận)
const CommentSchema = new mongoose.Schema({

    // ID của người dùng bình luận, tham chiếu tới collection 'User'
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

    // ID của sản phẩm được bình luận, tham chiếu tới collection 'Product'
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },

    // Nội dung của bình luận, bắt buộc phải có
    content: { type: String, required: true },

    // Trạng thái bình luận: chấp nhận hoặc từ chối
    // enum: chỉ nhận 2 giá trị 'accept' hoặc 'reject'
    // default: mặc định là 'reject' để admin duyệt trước
    status: { type: String, enum: ['accept', 'reject'], default: 'reject' }

    // timestamps sẽ tự động tạo createdAt (ngày tạo) và updatedAt (ngày cập nhật)
}, { timestamps: true });

// Xuất model Comment từ schema để sử dụng
module.exports = mongoose.model('Comment', CommentSchema);
