const mongoose = require('mongoose');

const VoucherSchema = new mongoose.Schema({
    // Mã voucher
    code: { type: String, required: true, unique: true },

    // Ngày bắt đầu
    startDate: { type: Date, required: true },

    // Ngày kết thúc
    endDate: { type: Date, required: true },

    // Giá trị đơn hàng tối thiểu để áp dụng voucher
    minDiscount: { type: Number, required: true },

    // Giá trị đơn hàng tối đa có thể giảm
    maxDiscount: { type: Number, required: true },

    // Trạng thái của voucher
    status: { 
        type: String, 
        enum: ['active', 'inactive', 'expired'], 
        default: 'inactive' 
    },

    // Kiểu giảm giá: 'amount' (giảm trực tiếp số tiền) hoặc 'percent' (giảm theo %)
    discountType: { 
        type: String, 
        enum: ['amount', 'percent'], 
        required: true 
    },

    // Giá trị giảm (có thể là số tiền hoặc phần trăm, tùy discountType)
    discountValue: { 
        type: Number, 
        required: true 
    }

}, { timestamps: true });

module.exports = mongoose.model('Voucher', VoucherSchema);
