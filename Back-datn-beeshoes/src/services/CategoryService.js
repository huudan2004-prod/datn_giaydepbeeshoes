const Category = require("../models/CategoryModel");

// Tạo danh mục
const createCategory = async (newCategory) => {
    const { name } = newCategory;
    try {
        const existingCategory = await Category.findOne({ name });
        if (existingCategory) {
            return { status: "ERROR", message: "The category name already exists" };
        }

        const category = await Category.create({ name });
        return { status: "OK", message: "SUCCESS", data: category };
    } catch (error) {
        return { status: "ERROR", message: error.message };
    }
};

// Cập nhật danh mục
const updateCategory = async (id, data) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(id, data, { new: true });
        if (!updatedCategory) {
            return { status: "ERROR", message: "Category not found" };
        }
        return { status: "OK", message: "SUCCESS", data: updatedCategory };
    } catch (error) {
        return { status: "ERROR", message: error.message };
    }
};

// Xóa danh mục
const deleteCategory = async (id) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(id);
        if (!deletedCategory) {
            return { status: "ERROR", message: "Category not found" };
        }
        return { status: "OK", message: "Delete category success" };
    } catch (error) {
        return { status: "ERROR", message: error.message };
    }
};

// Lấy tất cả danh mục (có phân trang)
const getAllCategories = async (limit = 10, page = 0) => {
    try {
        const totalCategories = await Category.countDocuments();
        const categories = await Category.find()
            .limit(Number(limit))
            .skip(Number(page) * Number(limit));

        return {
            status: "OK",
            message: "SUCCESS",
            data: categories,
            total: totalCategories,
            currentPage: Number(page) + 1,
            totalPages: Math.ceil(totalCategories / limit),
        };
    } catch (error) {
        return { status: "ERROR", message: error.message };
    }
};

//  Lấy chi tiết danh mục theo ID
const getDetailsCategory = async (id) => {
    try {
        const category = await Category.findById(id);
        if (!category) {
            return { status: "ERROR", message: "Category not found" };
        }
        return { status: "OK", message: "SUCCESS", data: category };
    } catch (error) {
        return { status: "ERROR", message: error.message };
    }
};

module.exports = {
    createCategory,
    updateCategory,
    deleteCategory,
    getAllCategories,
    getDetailsCategory,
};
