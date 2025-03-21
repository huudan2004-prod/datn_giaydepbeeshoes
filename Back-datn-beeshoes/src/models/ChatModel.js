const mongoose = require('mongoose');

// Tạo schema cho tin nhắn (chat)
const ChatSchema = new mongoose.Schema({

    // Người gửi tin nhắn (user hoặc admin)
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

    // Người nhận tin nhắn (user hoặc admin)
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

    // Nội dung tin nhắn
    message: { type: String, required: true },

    // Trạng thái tin nhắn (đã xem hay chưa)
    status: { type: String, enum: ['sent', 'delivered', 'seen'], default: 'sent' },

    // Thời gian gửi tin nhắn (tự động thêm khi tin nhắn được tạo)
}, { timestamps: true });

module.exports = mongoose.model('Chat', ChatSchema);
