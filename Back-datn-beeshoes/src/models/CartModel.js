// Import mongoose để tạo schema và model
const mongoose = require('mongoose');

// Tạo schema cho Cart (giỏ hàng)
const CartSchema = new mongoose.Schema({

    // Trường user: lưu ID của người dùng sở hữu giỏ hàng, tham chiếu tới collection 'User'
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

    // Danh sách các sản phẩm trong giỏ hàng (mảng items)
    items: [{
        // Mỗi item sẽ chứa product: ID của sản phẩm, tham chiếu tới collection 'Product'
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },

        // Thông tin biến thể (variant) như màu sắc và kích thước
        variant: {
            color: String, // Màu sắc của sản phẩm
            size: String   // Kích thước của sản phẩm
        },

        // Số lượng sản phẩm của item này trong giỏ hàng, bắt buộc phải có
        quantity: { type: Number, required: true }
    }]

    // timestamps sẽ tự động thêm createdAt (lúc tạo giỏ hàng) và updatedAt (lần cập nhật gần nhất)
}, { timestamps: true });

// Xuất model 'Cart' từ schema để sử dụng trong ứng dụng
module.exports = mongoose.model('Cart', CartSchema);
