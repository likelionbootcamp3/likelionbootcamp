# Bootcamp - Buổi 2

### Kết hợp selector (Combine Selector)

- h2, h3 : Các selector có cùng styling

```css
h2 {
  font-size: 30px;
}

h3 {
  font-size: 25px;
}

h2,
h3 {
  font-weight: 500;
  line-height: 1.2;
  text-transform: capitalize;
}
```

- div h1: Style các thẻ `h2` trong thẻ `div`

```css
div h2 {
  text-align: center;
}
```

Source: w3schools.com/cssref/css_selectors.asp

### Class và Id

- Giống:
  - khai báo tên cho các thẻ để có thể style hoặc là sử dụng tương tác trong DOM
- Khác:
  - Khi khai báo tên id cho thẻ nào đó thì sẽ ko dùng lại lần 2 nữa, còn class thì khai báo một lớp cho nhiều thẻ
  - Khai báo trong css thì id bắt đầu bằng `#`, class bắt đầu bằng `.`
  - Mục đích sử dụng khác nhau

```css
.heading {
  color: red;
}

#heading-secondary {
  color: blue;
}
```

### Pseudo classes (Lớp giả)

- :first-child, :last-child
- nth-child(even)
- :not(:last-child)

```css
.text:first-child {
  text-align: center;
}

.text:last-child {
  text-align: center;
}

.text:nth-child(odd) {
  text-align: center;
}

.text:nth-child(even) {
  text-align: center;
}

.text:not(:last-child) {
  text-align: center;
}
```

### Styling cho thẻ với hover

- Hover: Khi di chuyển chuột lên element

```css
a:hover {
  color: pink;
}
```

### Xung đột giữa các selectors (Conflict selectors)

- !important -> Inline -> Id -> class (pseudo-class) -> element (p, div, li) -> Universal selector

```css
* {
  color: blue;
}

h1 {
  color: red;
}

.heading {
  color: pink;
}

#heading {
  color: brown;
}
```

### Inheritance and Universal Selectors (Kế thừa)

- CSS cho body font-family, font-size, các element con kế thừa những thuộc tính này

```css
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
}
```

### Box model (Mô hình hộp)

- Content: Nội dung (text, images, ...)
- Padding: Khoảng cách từ nội dung đến viềng
- Border: Viềng
- Margin: Khoảng cách giữa các elements
- Nếu set background-color thì phần padding và content sẽ được fill bởi color đó
- Chiều dài (width) của box sẽ được tính = margin_left + border_left + padding_left + content + padding_right + border_right + margin_right
- Tương tự với height
- Thử thêm thuộc tính width và height và kiểm tra với Chrome Dev Tool

![](https://i.imgur.com/q12Urb9.png)

### Cách center một box

- Set width cho box đó là 500px
- Lúc này box sẽ chưa nằm ở giữa, bạn thêm cho nó thêm thuộc tính margin left và right là auto, thì lúc này nó sẽ center box cho bạn

### Types of boxes (Các kiểu box)

- Block:

  - Chiều dài chiếm 100% thẻ cha, không quan tâm tới độ dài của content
  - Các element sẽ stack lên nhau
  - Các thẻ: body, main, header, section, nav, aside, div, h1-h6, p, ul, ol, li, ...
  - Trong CSS: display: block

- Inline:

  - Chiếm chiều rộng bằng content của nó
  - Không gây ra vấn đề break-line (đó là xuống dòng)
  - height và width không được apply
  - Paddings và margin chỉ được apply theo chiều ngang (left và right)
  - Các thẻ: a, img, strong, button, span
  - Trong CSS: display: inline

- Inline-block:

  - Chiếm chiều rộng bằng content của nó
  - Không gây ra vấn đề break-line (đó là xuống dòng)
  - height và width được apply
  - Paddings và margin được apply
  - Trong CSS: display: inline-block

- Lưu ý: Các bạn có thể thay đổi display của element để hợp với context lúc đó
