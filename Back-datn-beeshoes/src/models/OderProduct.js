const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    // Người đặt hàng (user), tham chiếu đến bảng User
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

    // Danh sách các sản phẩm trong đơn hàng
    items: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },  // ID sản phẩm
        variant: {
            color: String,  // Màu sắc sản phẩm
            size: String    // Kích thước sản phẩm
        },
        quantity: Number,    // Số lượng sản phẩm
        price: Number        // Giá của sản phẩm tại thời điểm mua (để không bị ảnh hưởng khi giá thay đổi sau này)
    }],

    // Trạng thái đơn hàng
    status: { 
        type: String, 
        enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'], 
        default: 'pending' 
    },

    // Trạng thái thanh toán
    paymentStatus: { 
        type: String, 
        enum: ['unpaid', 'paid', 'failed'], 
        default: 'unpaid' 
    },

    // Địa chỉ giao hàng (lưu riêng để phòng trường hợp người dùng đặt địa chỉ khác)
    shippingAddress: { 
        type: String, 
        required: true 
    },

    // Số điện thoại liên hệ giao hàng
    phone: { 
        type: String, 
        required: true 
    },

    // Mã voucher đã sử dụng (nếu có)
    voucherCode: { 
        type: String 
    },

    // Tổng tiền đơn hàng (có thể tính ra từ items và trừ giảm giá)
    totalPrice: { 
        type: Number, 
        required: true 
    }

}, { timestamps: true }); // Tự động thêm createdAt và updatedAt

module.exports = mongoose.model('Order', OrderSchema);
