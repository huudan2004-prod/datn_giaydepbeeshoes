const mongoose = require('mongoose');

// Tạo schema lưu trạng thái thanh toán của một đơn hàng
const PaymentStatusSchema = new mongoose.Schema({
    // Tham chiếu đến đơn hàng đang được thanh toán
    order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },

    // Trạng thái thanh toán: unpaid (chưa thanh toán), paid (đã thanh toán), failed (thất bại)
    status: { type: String, enum: ['unpaid', 'paid', 'failed'], default: 'unpaid' },

    // Phương thức thanh toán mà người dùng chọn: momo, vnpay, paypal, hoặc thẻ tín dụng
    paymentMethod: { type: String, enum: ['momo', 'vnpay', 'paypal', 'credit_card'] }
    
    // timestamps: tự động thêm trường createdAt và updatedAt
}, { timestamps: true });

// Xuất model để sử dụng trong ứng dụng
module.exports = mongoose.model('PaymentStatus', PaymentStatusSchema);
