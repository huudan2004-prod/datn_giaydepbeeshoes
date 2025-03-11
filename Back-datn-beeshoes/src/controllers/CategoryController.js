const CategoryService = require('../services/CategoryService');

const createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) return res.status(400).json({ error: "The category name is required" });

        const category = await CategoryService.createCategory(req.body);
        res.json(category);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) return res.status(400).json({ error: "The category ID is required" });

        const category = await CategoryService.updateCategory(id, req.body);
        res.json(category);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

const getDetailsCategory = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) return res.status(400).json({ error: "The category ID is required" });

        const category = await CategoryService.getDetailsCategory(id);
        if (!category) return res.status(404).json({ error: "Category not found" });

        res.json(category);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) return res.status(400).json({ error: "The category ID is required" });

        await CategoryService.deleteCategory(id);
        res.status(204).send(); // 204 No Content (không trả về gì)
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

const getAllCategories = async (req, res) => {
    try {
        const { limit, page } = req.query;
        const categories = await CategoryService.getAllCategories(Number(limit), Number(page));
        res.json(categories);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

module.exports = {
    createCategory,
    updateCategory,
    getDetailsCategory,
    deleteCategory,
    getAllCategories,
};
