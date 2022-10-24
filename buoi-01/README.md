# Bootcamp - Buổi 1

## Cài đặt phần mềm

- Slack
- Git
- Github Desktop
- Figma Desktop
- Obsidian Vault

### Github, Gihub usage:

- Tạo tài khoản github
- Tạo profile với https://gprm.itsvg.in/
- Tạo repository cho bootcamp note
- Tạo repository cho bootcamp code
- Tạo repository cho my note
- Tạo repository cho my code

## Nội dung bài học

### Giới thiệu về HTML:

- Là Hypertext Markup Language
- Hypertext: heading, hình ảnh, video, paragraph, link

![](https://i.imgur.com/7F1tY9f.png)

### Cấu trúc một document HTML

- !DOCTYPE: Khai báo kiểu document là HTML
- Thẻ head: Chứa những cấu hình của web như title, và những thứ liên quan tới SEO
- Thẻ body: Chứa nội dung

### Text elements:

- h1, h2 ... h6: Dành cho heading

```html
<h1>
  Phỏng vấn Hoa hậu Thuỳ Tiên sau chuyến từ thiện ở châu Phi: "Tôi và anh Quang
  Linh chỉ là bạn"
</h1>
```

- p: Thường dành cho các đoạn văn, văn bản

```html
<p>
  Sau 7 tháng đăng quang Hoa hậu Hoà bình thế giới, Thuỳ Tiên đã đi đến nhiều
  quốc gia để lan tỏa năng lượng tích cực cũng như giúp đỡ những người có hoàn
  cảnh khó khăn.
</p>
```

- img: Dành cho hình ảnh
  - alt: (alternative text) dùng để thay thế ghi ảnh khi ảnh ko load được, ngoài ra nó có mục đích cho việc SEO

```html
<img
  src="https://kenh14cdn.com/zoom/500_314/203336854389633024/2022/7/24/photo1658681191055-16586811913482120619873.jpg"
  alt="Hoa hau Thuy Tien"
/>
```

- tittle: Đặt tên cho title

```html
<title>Kenh14</title>
```

- Hyperlink

  - Thẻ a: Dùng để liên kết tới trang khác
  - href: Hypertext reference, đường dẫn để tham chiếu tới trang khác
  - target: blank

- Thẻ div: Là một box

- Bài tập:
  - https://www.w3schools.com/html/exercise.asp

### Các extensions tiện ích:

- Live server
- Prettier: Format các file
- Auto Rename Tag: Tự động đổi tên thẻ đóngg
- Image Preview: Xem trước hình ảnh
- htmltagwrap: Tạo thẻ cha bọc các thẻ con

### Giới thiệu về CSS:

- Cascading Style Sheet

#### Các kiểu trong CSS:

- Inline
- Internal
- External

![](https://i.imgur.com/NwMF8t5.png)

- Style cho text:
  - font-family
  - font-size
  - font-weight
  - text-transform
  - text-style
  - line-height
  - text-align

```css
h1 {
  color: rgb(34, 34, 34);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 26px;
  text-transform: uppercase;
  line-height: 30px;
}
```
