const mongoose = require('mongoose');

const VoucherSchema = new mongoose.Schema({
    // Mã code của voucher, bắt buộc và duy nhất
    code: { type: String, required: true, unique: true },

    // Ngày bắt đầu có hiệu lực
    startDate: { type: Date, required: true },

    // Ngày kết thúc hiệu lực
    endDate: { type: Date, required: true },

    // Giá trị giảm giá nhỏ nhất
    minDiscount: { type: Number, required: true },

    // Giá trị giảm giá lớn nhất
    maxDiscount: { type: Number, required: true },

    // Trạng thái của voucher (có thể là 'active', 'inactive', hoặc 'expired')
    status: { 
        type: String, 
        enum: ['active', 'inactive', 'expired'], 
        default: 'inactive' 
    }
}, { timestamps: true });

module.exports = mongoose.model('Voucher', VoucherSchema);
