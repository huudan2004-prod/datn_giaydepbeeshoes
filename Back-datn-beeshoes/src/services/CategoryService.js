const Category = require("../models/CategoryModel");

// Tạo danh mục
const createCategory = async (newCategory) => {
    const { name } = newCategory;
    try {
        const existingCategory = await Category.findOne({ name });
        if (existingCategory) {
            throw new Error("The category name already exists");
        }
        return await Category.create({ name });
    } catch (error) {
        throw new Error(error.message);
    }
};

// Cập nhật danh mục
const updateCategory = async (id, data) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(id, data, { new: true });
        if (!updatedCategory) {
            throw new Error("Category not found");
        }
        return updatedCategory;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Xóa danh mục
const deleteCategory = async (id) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(id);
        if (!deletedCategory) {
            throw new Error("Category not found");
        }
        return deletedCategory;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Lấy tất cả danh mục (có phân trang)
const getAllCategories = async (limit = 10, page = 0) => {
    try {
        const categories = await Category.find()
            .limit(Number(limit))
            .skip(Number(page) * Number(limit));

        return categories; // Chỉ trả về danh sách danh mục
    } catch (error) {
        throw new Error(error.message);
    }
};

// Lấy chi tiết danh mục theo ID
const getDetailsCategory = async (id) => {
    try {
        const category = await Category.findById(id);
        if (!category) {
            throw new Error("Category not found");
        }
        return category;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    createCategory,
    updateCategory,
    deleteCategory,
    getAllCategories,
    getDetailsCategory,
};
