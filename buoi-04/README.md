# Bootcamp - Buổi 3

## CSS Layout

### Positioning

- static
- relative
- absolute
- fixed
- sticky

#### Static

- Không bị ảnh hưởng bởi các thuộc tính top, right, bottom, left
- Nó sẽ theo normal flow của page

```css
.title {
  position: static;
}
```

#### Relative

- Được set các thuộc tính top, right, left, bottom cho element
- Không gây ảnh hưởng tới các element khác
- Xem vị trí element đang đứng là hệ quy chiếu

![](https://i.imgur.com/A2YcZED.png)

```css
.box-2 {
  position: absolute;
}
```

#### Absolute

- Được set các thuộc tính top, right, left, bottom cho element
- Định vị trí phục thuộc vào thẻ bao ngoài, có chứa thuộc tính position: relative hoặc absolute

**Example**: https://www.w3schools.com/w3css/w3css_templates.asp

![](https://i.imgur.com/tBP8tnO.png)

```css
.heading {
  position: absolute;
}
```

#### Fixed

- Được set các thuộc tính top, right, left, bottom cho element
- Định vị và giúp cho phần tử luôn cố định một chỗ, ví dụ như khi bạn scroll trình duyệt chẳng hạn, phần tử sẽ không thay đổi.

![](https://i.imgur.com/VlqkQC7.png)

### Flexbox

- Dùng để layout 1 chiều
- **Source**: https://viblo.asia/p/huong-dan-day-du-ve-css-flexbox-maGK7J9a5j2
- **Example**: https://www.w3schools.com/w3css/w3css_templates.asp
- **Game**: https://flexboxfroggy.com/

```css
.container {
  display: flex;
}
```
