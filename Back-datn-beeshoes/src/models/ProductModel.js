// Import mongoose để sử dụng cho việc tạo schema và model
const mongoose = require('mongoose');

// Tạo một schema mới cho sản phẩm (Product)
const ProductSchema = new mongoose.Schema({

    // Tên sản phẩm, kiểu String, bắt buộc phải có
    name: { type: String, required: true },

    // Mô tả sản phẩm, kiểu String, không bắt buộc
    description: { type: String },

    // Giá sản phẩm, kiểu Number, bắt buộc phải có
    price: { type: Number, required: true },

    // Thể loại sản phẩm, lưu dưới dạng ObjectId tham chiếu tới collection 'Category'
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },

    // Các biến thể của sản phẩm, là một mảng các object, mỗi object gồm:
    // color: màu sắc; size: kích thước; stock: số lượng tồn kho
    variants: [{
        color: String,   // Màu sắc
        size: String,    // Kích cỡ
        stock: Number    // Số lượng tồn kho
    }],

    // Ảnh chính của sản phẩm, kiểu String (có thể là đường link), bắt buộc phải có
    mainImage: { type: String, required: true },

    // Các ảnh phụ của sản phẩm, là mảng các đường link dạng String
    subImages: [String],

    // Danh sách các comment, mỗi comment là một ObjectId tham chiếu tới collection 'Comment'
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]

    // Tự động thêm 2 trường createdAt và updatedAt để lưu thời gian tạo và cập nhật
}, { timestamps: true });

// Xuất ra model 'Product' từ schema đã định nghĩa để sử dụng trong các thao tác với MongoDB
module.exports = mongoose.model('Product', ProductSchema);
