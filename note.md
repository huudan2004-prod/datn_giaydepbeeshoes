# API Category

## 1️⃣ Lấy Danh Sách Category
- **Method**: `GET`
- **Endpoint**: `/api/category/get-all`
- **Mô tả**: Lấy tất cả danh mục từ database.

---

## 2️⃣ Thêm Category Mới
- **Method**: `POST`
- **Endpoint**: `/api/category/create`
- **Mô tả**: Thêm một danh mục mới vào hệ thống.
- **Body yêu cầu**:
  - `name` (string, bắt buộc): Tên danh mục.

---

## 3️⃣ Lấy Thông Tin Chi Tiết Một Category
- **Method**: `GET`
- **Endpoint**: `/api/category/:id`
- **Mô tả**: Lấy thông tin chi tiết của một danh mục theo `id`.
- **Tham số yêu cầu**:
  - `id` ( bắt buộc): ID của danh mục.

---

## 4️⃣ Cập Nhật Category
- **Method**: `PUT`
- **Endpoint**: `/api/category/update/:id`
- **Mô tả**: Cập nhật tên danh mục theo `id`.
- **Tham số yêu cầu**:
  - `id` ( bắt buộc): ID của danh mục.
- **Body yêu cầu**:
  - `name` (string, bắt buộc): Tên danh mục mới.

---

## 5️⃣ Xóa Category
- **Method**: `DELETE`
- **Endpoint**: `/api/category/delete/:id`
- **Mô tả**: Xóa một danh mục theo `id`.
- **Tham số yêu cầu**:
  - `id` ( bắt buộc): ID của danh mục cần xóa.
