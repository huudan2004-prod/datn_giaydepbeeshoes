const CategoryService = require('../services/CategoryService');

const createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The category name is required',
            });
        }
        const response = await CategoryService.createCategory(req.body);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e.message,
        });
    }
};

const updateCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const data = req.body;
        if (!categoryId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The categoryId is required',
            });
        }
        const response = await CategoryService.updateCategory(categoryId, data);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e.message,
        });
    }
};

const getDetailsCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        if (!categoryId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The categoryId is required',
            });
        }
        const response = await CategoryService.getDetailsCategory(categoryId);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e.message,
        });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        if (!categoryId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The categoryId is required',
            });
        }
        const response = await CategoryService.deleteCategory(categoryId);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e.message,
        });
    }
};

const getAllCategories = async (req, res) => {
    try {
        const { limit, page } = req.query;
        const response = await CategoryService.getAllCategories(Number(limit), Number(page));
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e.message,
        });
    }
};

module.exports = {
    createCategory,
    updateCategory,
    getDetailsCategory,
    deleteCategory,
    getAllCategories,
};
