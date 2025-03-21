const mongoose = require('mongoose');

const PaymentStatusSchema = new mongoose.Schema({
    order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },

    status: { 
        type: String, 
        enum: ['unpaid', 'paid', 'failed'], 
        default: 'unpaid' 
    },

    paymentMethod: { 
        type: String, 
        enum: ['momo', 'vnpay', 'paypal', 'credit_card'], 
        required: true 
    },

    // Mã giao dịch từ cổng thanh toán
    transactionId: { type: String },

    // Số tiền đã thanh toán
    amount: { type: Number },

    // Đơn vị tiền tệ
    currency: { type: String, default: 'VND' },

    // Thời gian hoàn tất thanh toán
    paymentTime: { type: Date },

    // Thông báo lỗi từ cổng thanh toán (nếu thất bại)
    errorMessage: { type: String }
    
}, { timestamps: true });

module.exports = mongoose.model('PaymentStatus', PaymentStatusSchema);
