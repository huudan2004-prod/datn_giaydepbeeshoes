// Import mongoose để tạo schema và model
const mongoose = require('mongoose');

// Khai báo schema cho User
const UserSchema = new mongoose.Schema({

    // Tên người dùng
    name: { type: String },

    // Email người dùng, bắt buộc và duy nhất
    email: { type: String, required: true, unique: true },

    // Mật khẩu (chỉ dùng khi authProvider là 'email')
    password: { type: String },

    // Hình thức đăng nhập (email, google, facebook), bắt buộc
    authProvider: { 
        type: String, 
        enum: ['email', 'google', 'facebook'], 
        required: true 
    },

    // Ảnh đại diện người dùng (link hoặc đường dẫn)
    avatar: { type: String },

    // Số điện thoại của người dùng (có thể dùng khi đăng ký hoặc giao hàng)
    phone: { type: String },

    // Địa chỉ của người dùng
    address: { type: String },

    // Token để lưu session hoặc jwt token
    token: { type: String },

    // Vai trò của người dùng: 'admin' hoặc 'user', mặc định là 'user'
    role: { type: String, enum: ['admin', 'user'], default: 'user' }

    // Thêm timestamps: tự động tạo createdAt và updatedAt
}, { timestamps: true });

// Xuất model 'User' từ schema để sử dụng trong ứng dụng
module.exports = mongoose.model('User', UserSchema);
