const products = [
  {
    id: 1,
    name: "Samsung Galaxy S21 FE 5G (8GB - 256GB)",
    options: [
      {
        memories: "6GB - 128GB",
        price: 12300000,
        oldPrice: 15990000,
      },
      {
        memories: "8GB - 128GB",
        price: 12750000,
        oldPrice: 16990000,
      },
      {
        memories: "8GB - 256GB",
        price: 14900000,
        oldPrice: 18990000,
      },
    ],
    colors: ["Tím", "Trắng", "Xám", "Xanh lá"],
    img: [
      require("../assets/images/samsung-galaxy-s21-fe.webp"),
      require("../assets/images/galaxy-s21-black.webp"),
      require("../assets/images/galaxy-s21-tim.webp"),
      require("../assets/images/galaxy-s21-xanhla.webp"),
    ],
    bonus: [
      "Giảm giá 2.000.000đ qua Quà tặng Galaxy (lấy mã trên máy mới)",
      "Thu cũ đổi mới - Trợ giá đến 300.000đ",
      "Ưu đãi Galaxy gift lên đến 1.700.000đ (VieON, VIP, HBO, GO, Zing MP3, Phúc Long, Galaxy Play)",
    ],
    hotsale:
      "Hotsale từ ngày 20/05 - 23/05: Giảm giá chỉ còn 12,900,000đ (Giá đã áp dụng chương trình gift 2.000.000đ, Số lượng có hạn, không áp dụng cùng chương trình khác) Ngày cuối hotsale chỉ áp dụng thanh toán online 100% hoặc thanh toán trực tiếp tại cửa hàng.",
    preferential: [
      "Giảm thêm tới 1% cho thành viên Smember (áp dụng tùy sản phẩm)",
      "Nhập mã KVCPS - Giảm thêm 5% (tối đa 250.000đ) khi thanh toán qua Kredivo cho đơn hàng từ 500.000đ",
      "Nhập QRCPS giảm đến 300.000đ áp dụng các đơn hàng từ 4 triệu trở lên khi thanh toán qua VNPAY tại cửa hàng",
      "Nhập MOCACPS - Giảm thêm 5% (tối đa 400.000đ) khi thanh toán qua ví Moca cho đơn hàng từ 500.000đ",
      "Giảm thêm 500.000đ khi thanh toán qua thẻ tín dụng VP Bank cho đơn hàng từ 10 triệu",
      "Thu cũ đổi mới: Giá thu cao - Thủ tục nhanh chóng - Trợ giá tốt nhất",
    ],
    categorys: ["mobile", "samsung"],
    slug: "samsung-galaxy-s21-fe",
  },
  {
    id: 2,
    name: "Samsung Galaxy S22 Ultra (8GB - 128GB)",
    options: [
      {
        memories: "8GB - 128GB",
        price: 29990000,
        oldPrice: 30990000,
      },
      {
        memories: "12GB - 256GB",
        price: 32990000,
        oldPrice: 33990000,
      },
      {
        memories: "12GB - 521GB",
        price: 35990000,
        oldPrice: 36990000,
      },
    ],
    colors: ["Trắng", "Xanh", "Đen", "Đỏ"],
    img: [
      require("../assets/images/galaxys22ultra_white.webp"),
      require("../assets/images/galaxys22ultra_green.webp"),
      require("../assets/images/galaxys22ultra_black.webp"),
      require("../assets/images/galaxys22ultra_red.webp"),
    ],
    bonus: [
      "Giảm ngay 3.000.000đ khi combo S22 series và Tab S8 series",
      "Giảm ngay 1.000.000đ khi thanh toán qua Moca",
      "Giảm 50% (trên giá niêm yết) đồng hồ Samsung Galaxy Watch 4 classic 42mm hoặc Watch 4 44mm khi mua kèm S22 series/Z series",
      "Giảm thêm 3.000.000đ qua Galaxy Gift - lấy code trên chính máy mới (Giá cuối chỉ: 31.990.000đ)",
      "Ưu đãi Galaxy gift lên đến 1.700.000đ (VieON, VIP, HBO, GO, Zing MP3, Phúc Long, Galaxy Play)",
      "Gói dịch vụ ưu tiên cao cấp và phòng chờ hạng thương gia",
    ],
    hotsale:
      "Hotsale từ ngày 20/05 - 23/05 : Giảm giá chỉ còn 29.790.000đ (Số lượng có hạn, đã áp dụng cùng chương trình gift 3 triệu và không áp dụng cùng thu cũ lên đời 4 triệu) Ngày cuối hotsale chỉ áp dụng thanh toán online 100% hoặc thanh toán trực tiếp tại cửa hàng.",
    preferential: [
      "Giảm thêm tới 1% cho thành viên Smember (áp dụng tùy sản phẩm)",
      "Nhập mã KVCPS - Giảm thêm 5% (tối đa 250.000đ) khi thanh toán qua Kredivo cho đơn hàng từ 500.000đ",
      "Nhập QRCPS giảm đến 300.000đ áp dụng các đơn hàng từ 4 triệu trở lên khi thanh toán qua VNPAY tại cửa hàng",
      "Nhập MOCACPS - Giảm thêm 5% (tối đa 400.000đ) khi thanh toán qua ví Moca cho đơn hàng từ 500.000đ",
      "Giảm thêm 500.000đ khi thanh toán qua thẻ tín dụng VP Bank cho đơn hàng từ 10 triệu",
      "Thu cũ đổi mới: Giá thu cao - Thủ tục nhanh chóng - Trợ giá tốt nhất",
    ],
    categorys: ["mobile", "samsung"],
    slug: "samsung-galaxy-s22ultral",
  },
  {
    id: 3,
    name: "iPhone 11 64GB | Chính hãng VN/A",
    options: [
      {
        memories: "64GB",
        price: 11690000,
        oldPrice: 18000000,
      },
      {
        memories: "128GB",
        price: 13400000,
        oldPrice: 19900000,
      },
      {
        memories: "256GB",
        price: 19000000,
        oldPrice: 22000000,
      },
    ],
    colors: ["Tím", "Trắng", "Vàng", "Xanh lá", "Đen", "Đỏ"],
    img: [
      require("../assets/images/iphone-11_tim.webp"),
      require("../assets/images/iphone-11_white.webp"),
      require("../assets/images/iphone-11_yellow.webp"),
      require("../assets/images/iphone-11_green.webp"),
      require("../assets/images/iphone-11_black.webp"),
      require("../assets/images/iphone-11_red.webp"),
    ],
    bonus: [
      "[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ",
      "Nhập mã CPSONL500 - Giảm thêm 500k khi thanh toán qua VNPay trên website hoặc CPS500 qua QR Offline tại cửa hàng",
    ],
    hotsale: "",
    preferential: [
      "Giảm thêm tới 1% cho thành viên Smember (áp dụng tùy sản phẩm)",
      "Nhập mã KVCPS - Giảm thêm 5% (tối đa 250.000đ) khi thanh toán qua Kredivo cho đơn hàng từ 500.000đ",
      "Nhập QRCPS giảm đến 300.000đ áp dụng các đơn hàng từ 4 triệu trở lên khi thanh toán qua VNPAY tại cửa hàng",
      "Nhập MOCACPS - Giảm thêm 5% (tối đa 400.000đ) khi thanh toán qua ví Moca cho đơn hàng từ 500.000đ",
      "Giảm thêm 500.000đ khi thanh toán qua thẻ tín dụng VP Bank cho đơn hàng từ 10 triệu",
      "Thu cũ đổi mới: Giá thu cao - Thủ tục nhanh chóng - Trợ giá tốt nhất",
    ],
    categorys: ["mobile", "iphone", "apple"],
    slug: "apple-iphone-11",
  },
  {
    id: 4,
    name: "iPhone 13 Pro Max 128GB | Chính hãng VN/A",
    options: [
      {
        memories: "128GB",
        price: 29690000,
        oldPrice: 34990000,
      },
      {
        memories: "256GB",
        price: 32190000,
        oldPrice: 37990000,
      },
      {
        memories: "521GB",
        price: 38500000,
        oldPrice: 43990000,
      },
      {
        memories: "1TB",
        price: 43500000,
        oldPrice: 49990000,
      },
    ],
    colors: ["Bạc", "Vàng", "Xám", "Xanh dương", "Xanh lá"],
    img: [
      require("../assets/images/iphone_13-sivel.webp"),
      require("../assets/images/iphone_13-gold.webp"),
      require("../assets/images/iphone_13-gray.webp"),
      require("../assets/images/iphone_13-blue.webp"),
      require("../assets/images/iphone_13-green.webp"),
    ],
    bonus: [
      "Thu cũ lên đời - Trợ giá 1 triệu",
      "Nhập mã CPSONL500 - Giảm thêm 500k khi thanh toán qua VNPay trên website hoặc CPS500 qua QR Offline tại cửa hàng",
    ],
    hotsale: "",
    preferential: [
      "Giảm thêm tới 1% cho thành viên Smember (áp dụng tùy sản phẩm)",
      "Nhập mã KVCPS - Giảm thêm 5% (tối đa 250.000đ) khi thanh toán qua Kredivo cho đơn hàng từ 500.000đ",
      "Nhập QRCPS giảm đến 300.000đ áp dụng các đơn hàng từ 4 triệu trở lên khi thanh toán qua VNPAY tại cửa hàng",
      "Nhập MOCACPS - Giảm thêm 5% (tối đa 400.000đ) khi thanh toán qua ví Moca cho đơn hàng từ 500.000đ",
      "Giảm thêm 500.000đ khi thanh toán qua thẻ tín dụng VP Bank cho đơn hàng từ 10 triệu",
      "Thu cũ đổi mới: Giá thu cao - Thủ tục nhanh chóng - Trợ giá tốt nhất",
    ],
    categorys: ["mobile", "apple", "iphone"],
    slug: "apple-iphone-13-pro-max",
  },
  {
    id: 5,
    name: "Nubia Red Magic 7 Obsidian 12GB 128GB",
    options: [
      {
        memories: "Obsidian",
        price: 18990000,
        oldPrice: 0,
      },
      {
        memories: "Pusar",
        price: 21990000,
        oldPrice: 0,
      },
      {
        memories: "Supernova",
        price: 24990000,
        oldPrice: 0,
      },
    ],
    colors: ["Đen", "Tím/Xanh dương"],
    img: [
      require("../assets/images/red-magic-black.jpg"),
      require("../assets/images/red-magic-black.jpg"),
      require("../assets/images/iphone_13-gray.webp"),
      require("../assets/images/iphone_13-blue.webp"),
      require("../assets/images/iphone_13-green.webp"),
    ],
    bonus: ["Tặng tai nghe không dây JBL 115 TWS"],
    hotsale: "",
    preferential: [
      "Giảm thêm tới 1% cho thành viên Smember (áp dụng tùy sản phẩm)",
      "Nhập mã KVCPS - Giảm thêm 5% (tối đa 250.000đ) khi thanh toán qua Kredivo cho đơn hàng từ 500.000đ",
      "Nhập QRCPS giảm đến 300.000đ áp dụng các đơn hàng từ 4 triệu trở lên khi thanh toán qua VNPAY tại cửa hàng",
      "Nhập MOCACPS - Giảm thêm 5% (tối đa 400.000đ) khi thanh toán qua ví Moca cho đơn hàng từ 500.000đ",
      "Giảm thêm 500.000đ khi thanh toán qua thẻ tín dụng VP Bank cho đơn hàng từ 10 triệu",
      "Thu cũ đổi mới: Giá thu cao - Thủ tục nhanh chóng - Trợ giá tốt nhất",
    ],
    categorys: ["mobile", "nokia", "redmagic"],
    slug: "mubia-red-magic-7",
  },
  {
    id: 6,
    name: "Xiaomi Redmi Note 11",
    options: [
      {
        memories: "4GB - 64GB",
        price: 4190000,
        oldPrice: 4690000,
      },
      {
        memories: "4GB - 128GB",
        price: 4490000,
        oldPrice: 4990000,
      },
    ],
    colors: ["Xám", "Xanh", "Xanh/Trắng"],
    img: [
      require("../assets/images/xiaomi-redmi-note-11-blue.webp"),
      require("../assets/images/xiaomi-redmi-note-11-gray.webp"),
      require("../assets/images/xiaomi-redmi-note-11-gray1.jpg"),
      require("../assets/images/xiaomi-redmi-note-11-gray2.jpg"),
      require("../assets/images/xiaomi-redmi-note-11-whiteblue.webp"),
    ],
    bonus: [
      "Giảm 390.000đ khi thanh toán qua Moca",
      "Thu cũ đổi mới - Trợ giá đến 300.000đ",
    ],
    hotsale: "",
    preferential: [
      "Giảm thêm tới 1% cho thành viên Smember (áp dụng tùy sản phẩm)",
      "Nhập mã KVCPS - Giảm thêm 5% (tối đa 250.000đ) khi thanh toán qua Kredivo cho đơn hàng từ 500.000đ",
      "Nhập QRCPS giảm đến 300.000đ áp dụng các đơn hàng từ 4 triệu trở lên khi thanh toán qua VNPAY tại cửa hàng",
      "Nhập MOCACPS - Giảm thêm 5% (tối đa 400.000đ) khi thanh toán qua ví Moca cho đơn hàng từ 500.000đ",
      "Giảm thêm 500.000đ khi thanh toán qua thẻ tín dụng VP Bank cho đơn hàng từ 10 triệu",
      "Thu cũ đổi mới: Giá thu cao - Thủ tục nhanh chóng - Trợ giá tốt nhất",
    ],
    categorys: ["mobile", "xiaomi", "redmi"],
    slug: "xiaomi-reddmi-note-11",
  },
  {
    id: 7,
    name: "Tecno Pova Neo (4GB - 64GB)",
    options: [
      {
        memories: "4GB - 64GB",
        price: 2499000,
        oldPrice: 3199000,
      },
      {
        memories: "6GB - 128GB",
        price: 3099000,
        oldPrice: 3899000,
      },
    ],
    colors: ["Đen", "Xanh dương"],
    img: [
      require("../assets/images/tecno-pova-neo-geek-black-1.webp"),
      require("../assets/images/tecno-pova-neo-geek-black-2.webp"),
      require("../assets/images/tecno-pova-neo-geek-blue-1.webp"),
      require("../assets/images/tecno-pova-neo-geek-blue-2.jpg"),
      require("../assets/images/tecno-pova-neo-geek-blue-3.webp"),
    ],
    bonus: [""],
    hotsale: "",
    preferential: [
      "Giảm thêm tới 1% cho thành viên Smember (áp dụng tùy sản phẩm)",
      "Nhập mã KVCPS - Giảm thêm 5% (tối đa 250.000đ) khi thanh toán qua Kredivo cho đơn hàng từ 500.000đ",
      "Nhập QRCPS giảm đến 300.000đ áp dụng các đơn hàng từ 4 triệu trở lên khi thanh toán qua VNPAY tại cửa hàng",
      "Nhập MOCACPS - Giảm thêm 5% (tối đa 400.000đ) khi thanh toán qua ví Moca cho đơn hàng từ 500.000đ",
      "Giảm thêm 500.000đ khi thanh toán qua thẻ tín dụng VP Bank cho đơn hàng từ 10 triệu",
      "Thu cũ đổi mới: Giá thu cao - Thủ tục nhanh chóng - Trợ giá tốt nhất",
    ],
    categorys: ["mobile", "techno"],
    slug: "teco-pova-neo",
  },
  {
    id: 8,
    name: "OPPO Reno7 Z (5G)",
    options: [
      {
        memories: "Reno7 4G",
        price: 7890000,
        oldPrice: 8990000,
      },
      {
        memories: "Reno7 Z",
        price: 9390000,
        oldPrice: 10490000,
      },
      {
        memories: "Reno7 5G",
        price: 11640000,
        oldPrice: 12990000,
      },
    ],
    colors: ["Cam", "Đen", "Xanh", "Bạc"],
    img: [
      require("../assets/images/reno7-black-1.webp"),
      require("../assets/images/reno7-blue-1.webp"),
      require("../assets/images/reno7-origin-1.webp"),
      require("../assets/images/reno7-sivel-1.webp"),
      require("../assets/images/reno7-black-2.jpg"),
    ],
    bonus: [""],
    hotsale: "",
    preferential: [
      "Giảm thêm tới 1% cho thành viên Smember (áp dụng tùy sản phẩm)",
      "Nhập mã KVCPS - Giảm thêm 5% (tối đa 250.000đ) khi thanh toán qua Kredivo cho đơn hàng từ 500.000đ",
      "Nhập QRCPS giảm đến 300.000đ áp dụng các đơn hàng từ 4 triệu trở lên khi thanh toán qua VNPAY tại cửa hàng",
      "Nhập MOCACPS - Giảm thêm 5% (tối đa 400.000đ) khi thanh toán qua ví Moca cho đơn hàng từ 500.000đ",
      "Giảm thêm 500.000đ khi thanh toán qua thẻ tín dụng VP Bank cho đơn hàng từ 10 triệu",
      "Thu cũ đổi mới: Giá thu cao - Thủ tục nhanh chóng - Trợ giá tốt nhất",
    ],
    categorys: ["mobile", "oppo"],
    slug: "oppo-reno7-z",
  },
  {
    id: 9,
    name: "ASUS ROG Phone 5S 16GB 512GB",
    options: [
      {
        memories: "8GB - 128GB",
        price: 15490000,
        oldPrice: 16990000,
      },
      {
        memories: "12GB - 256GB",
        price: 17090000,
        oldPrice: 19990000,
      },
      {
        memories: "16GB - 256GB",
        price: 18990000,
        oldPrice: 20990000,
      },
      {
        memories: "16GB - 512GB",
        price: 20990000,
        oldPrice: 22990000,
      },
    ],
    colors: ["Trắng", "Đen"],
    img: [
      require("../assets/images/rog-phone-5s-black1.webp"),
      require("../assets/images/rog-phone-5s-black2.jpg"),
      require("../assets/images/rog-phone-5s-white-1.webp"),
      require("../assets/images/rog-phone-5s-white-2.webp"),
      require("../assets/images/rog-phone-5s-white-3.webp"),
    ],
    bonus: [""],
    hotsale:
      "Hotsale từ ngày 13/5 - 22/5 : Giảm giá chỉ còn 15.490.000đ (Số lượng có hạn, không áp dụng cùng chương trình khuyến mãi khác).",
    preferential: [
      "Giảm thêm tới 1% cho thành viên Smember (áp dụng tùy sản phẩm)",
      "Nhập mã KVCPS - Giảm thêm 5% (tối đa 250.000đ) khi thanh toán qua Kredivo cho đơn hàng từ 500.000đ",
      "Nhập QRCPS giảm đến 300.000đ áp dụng các đơn hàng từ 4 triệu trở lên khi thanh toán qua VNPAY tại cửa hàng",
      "Nhập MOCACPS - Giảm thêm 5% (tối đa 400.000đ) khi thanh toán qua ví Moca cho đơn hàng từ 500.000đ",
      "Giảm thêm 500.000đ khi thanh toán qua thẻ tín dụng VP Bank cho đơn hàng từ 10 triệu",
      "Thu cũ đổi mới: Giá thu cao - Thủ tục nhanh chóng - Trợ giá tốt nhất",
    ],
    categorys: ["mobile", "asus", "rog phone"],
    slug: "asus-rog-phone-5s",
  },
  {
    id: 10,
    name: "Realme 9 Pro Plus",
    options: [
      {
        memories: "Realme 9 Pro",
        price: 7190000,
        oldPrice: 7990000,
      },
      {
        memories: "Realme 9 Pro Plus",
        price: 8990000,
        oldPrice: 9990000,
      },
    ],
    colors: ["Xanh dương", "Xanh lá"],
    img: [
      require("../assets/images/realme9-pro-black1.webp"),
      require("../assets/images/realme9-pro-blue1.webp"),
      require("../assets/images/realme9-pro-green1.webp"),
      require("../assets/images/realme9-pro-green2.webp"),
      require("../assets/images/rog-phone-5s-white-3.webp"),
    ],
    bonus: [""],
    hotsale: "",
    preferential: [
      "Giảm thêm tới 1% cho thành viên Smember (áp dụng tùy sản phẩm)",
      "Nhập mã KVCPS - Giảm thêm 5% (tối đa 250.000đ) khi thanh toán qua Kredivo cho đơn hàng từ 500.000đ",
      "Nhập QRCPS giảm đến 300.000đ áp dụng các đơn hàng từ 4 triệu trở lên khi thanh toán qua VNPAY tại cửa hàng",
      "Nhập MOCACPS - Giảm thêm 5% (tối đa 400.000đ) khi thanh toán qua ví Moca cho đơn hàng từ 500.000đ",
      "Giảm thêm 500.000đ khi thanh toán qua thẻ tín dụng VP Bank cho đơn hàng từ 10 triệu",
      "Thu cũ đổi mới: Giá thu cao - Thủ tục nhanh chóng - Trợ giá tốt nhất",
    ],
    categorys: ["mobile", "realme"],
    slug: "realme-9-pro-plus",
  },
  {
    id: 11,
    name: "Laptop Asus Vivobook 13 Slate Oled T3300KA",
    options: [
      {
        memories: "",
        price: 16790000,
        oldPrice: 17790000,
      },
    ],
    colors: ["Đen"],
    img: [
      require("../assets/images/asus-vivobook-13-slate1.jpg"),
      require("../assets/images/asus-vivobook-13-slate2.jpg"),
      require("../assets/images/asus-vivobook-13-slate3.jpg"),
      require("../assets/images/asus-vivobook-13-slate4.jpg"),
      require("../assets/images/asus-vivobook-13-slate5.jpg"),
    ],
    bonus: [
      "Phần Mềm Diệt Virus, Office chính hãng chỉ từ 150k",
      "Thu cũ lên đời - Trợ giá 1 triệu",
      "Nhập mã CPSONL300 - Giảm thêm 300k khi thanh toán qua VNPay trên website hoặc CPS300 qua QR Offline tại cửa hàng",
    ],
    hotsale: "",
    preferential: [
      "Giảm thêm tới 1% cho thành viên Smember (áp dụng tùy sản phẩm)",
      "Nhập mã KVCPS - Giảm thêm 5% (tối đa 250.000đ) khi thanh toán qua Kredivo cho đơn hàng từ 500.000đ",
      "Nhập QRCPS giảm đến 300.000đ áp dụng các đơn hàng từ 4 triệu trở lên khi thanh toán qua VNPAY tại cửa hàng",
      "Nhập MOCACPS - Giảm thêm 5% (tối đa 400.000đ) khi thanh toán qua ví Moca cho đơn hàng từ 500.000đ",
      "Giảm thêm 500.000đ khi thanh toán qua thẻ tín dụng VP Bank cho đơn hàng từ 10 triệu",
      "Thu cũ đổi mới: Giá thu cao - Thủ tục nhanh chóng - Trợ giá tốt nhất",
    ],
    categorys: ["laptop", "asus", "slate"],
    slug: "asus-vivobook-13-slate",
  },
  {
    id: 12,
    name: "Apple MacBook Air M1 256GB 2020 I Chính hãng Apple Việt Nam",
    options: [
      {
        memories: "8GB - 256GB",
        price: 23100000,
        oldPrice: 28990000,
      },
      {
        memories: "8GB - 512GB",
        price: 30000000,
        oldPrice: 34990000,
      },
      {
        memories: "16GB - 256GB",
        price: 30000000,
        oldPrice: 33990000,
      },
      {
        memories: "16GB - 512GB",
        price: 36500000,
        oldPrice: 40990000,
      },
    ],
    colors: ["Bạc", "Vàng", "Xám"],
    img: [
      require("../assets/images/macbook-air-space-gray-1.webp"),
      require("../assets/images/macbook-air-space-gray-2.webp"),
      require("../assets/images/macbook-air-space-gray-3.webp"),
      require("../assets/images/macbook-air-space-gray-4.webp"),
      require("../assets/images/macbook-air-space-gray-5.jpg"),
    ],
    bonus: [
      "Mua Office Home & Student 2021 kèm Macbook chỉ còn 2,090,000",
      "Phần Mềm Diệt Virus, Office chính hãng chỉ từ 150k",
      "Nhập mã CPSONL500 - Giảm thêm 500k khi thanh toán qua VNPay trên website hoặc CPS500 qua QR Offline tại cửa hàng",
    ],
    hotsale: "",
    preferential: [
      "Giảm thêm tới 1% cho thành viên Smember (áp dụng tùy sản phẩm)",
      "Nhập mã KVCPS - Giảm thêm 5% (tối đa 250.000đ) khi thanh toán qua Kredivo cho đơn hàng từ 500.000đ",
      "Nhập QRCPS giảm đến 300.000đ áp dụng các đơn hàng từ 4 triệu trở lên khi thanh toán qua VNPAY tại cửa hàng",
      "Nhập MOCACPS - Giảm thêm 5% (tối đa 400.000đ) khi thanh toán qua ví Moca cho đơn hàng từ 500.000đ",
      "Giảm thêm 500.000đ khi thanh toán qua thẻ tín dụng VP Bank cho đơn hàng từ 10 triệu",
      "Thu cũ đổi mới: Giá thu cao - Thủ tục nhanh chóng - Trợ giá tốt nhất",
    ],
    categorys: ["laptop", "apple", "macbook"],
    slug: "apple-macbook-air-m1",
  },
  {
    id: 13,
    name: "Laptop Asus Gaming Rog Strix G15 G513IH HN015W",
    options: [
      {
        memories: "Ryzen 7 4800H 8GB - 512GB GTX 1650",
        price: 18490000,
        oldPrice: 23990000,
      },
      {
        memories: "Ryzen 7 4800H 16GB - 512GB RTX 3060",
        price: 31190000,
        oldPrice: 34990000,
      },
      {
        memories: "Ryzen 9 5900HX 16GB - 512GB RTX 3070",
        price: 39590000,
        oldPrice: 48990000,
      },
    ],
    colors: ["Đen", "Xám"],
    img: [
      require("../assets/images/asus-rog-strix-black1.webp"),
      require("../assets/images/asus-rog-strix-black2.jpg"),
      require("../assets/images/asus-rog-strix-black3.jpg"),
      require("../assets/images/asus-rog-strix-black4.jpg"),
      require("../assets/images/asus-rog-strix-black5.jpg"),
    ],
    bonus: [
      "Phần Mềm Diệt Virus, Office chính hãng chỉ từ 150k",
      "Thu cũ lên đời - Trợ giá 1 triệu",
      "Nhập mã CPSONL300 - Giảm thêm 300k khi thanh toán qua VNPay trên website hoặc CPS300 qua QR Offline tại cửa hàng",
    ],
    hotsale: "",
    preferential: [
      "Giảm thêm tới 1% cho thành viên Smember (áp dụng tùy sản phẩm)",
      "Nhập mã KVCPS - Giảm thêm 5% (tối đa 250.000đ) khi thanh toán qua Kredivo cho đơn hàng từ 500.000đ",
      "Nhập QRCPS giảm đến 300.000đ áp dụng các đơn hàng từ 4 triệu trở lên khi thanh toán qua VNPAY tại cửa hàng",
      "Nhập MOCACPS - Giảm thêm 5% (tối đa 400.000đ) khi thanh toán qua ví Moca cho đơn hàng từ 500.000đ",
      "Giảm thêm 500.000đ khi thanh toán qua thẻ tín dụng VP Bank cho đơn hàng từ 10 triệu",
      "Thu cũ đổi mới: Giá thu cao - Thủ tục nhanh chóng - Trợ giá tốt nhất",
    ],
    categorys: ["laptop", "asus", "rog strix"],
    slug: "asus-rog-strix-g15",
  },
  {
    id: 14,
    name: "Laptop Dell Insprion 14 5406-3661SLV Nhập khẩu chính hãng",
    options: [
      {
        memories: "",
        price: 13690000,
        oldPrice: 15990000,
      },
    ],
    colors: ["Bạc", "Xám"],
    img: [
      require("../assets/images/dell-insprion-sivel1.jpg"),
      require("../assets/images/dell-insprion-sivel2.jpg"),
      require("../assets/images/dell-insprion-sivel3.webp"),
      require("../assets/images/dell-insprion-sivel4.webp"),
      require("../assets/images/dell-insprion-sivel5.webp"),
    ],
    bonus: [
      "Phần Mềm Diệt Virus, Office chính hãng chỉ từ 150k",
      "Thu cũ lên đời - Trợ giá 1 triệu",
      "Nhập mã CPSONL300 - Giảm thêm 300k khi thanh toán qua VNPay trên website hoặc CPS300 qua QR Offline tại cửa hàng",
    ],
    hotsale: "",
    preferential: [
      "Giảm thêm tới 1% cho thành viên Smember (áp dụng tùy sản phẩm)",
      "Nhập mã KVCPS - Giảm thêm 5% (tối đa 250.000đ) khi thanh toán qua Kredivo cho đơn hàng từ 500.000đ",
      "Nhập QRCPS giảm đến 300.000đ áp dụng các đơn hàng từ 4 triệu trở lên khi thanh toán qua VNPAY tại cửa hàng",
      "Nhập MOCACPS - Giảm thêm 5% (tối đa 400.000đ) khi thanh toán qua ví Moca cho đơn hàng từ 500.000đ",
      "Giảm thêm 500.000đ khi thanh toán qua thẻ tín dụng VP Bank cho đơn hàng từ 10 triệu",
      "Thu cũ đổi mới: Giá thu cao - Thủ tục nhanh chóng - Trợ giá tốt nhất",
    ],
    categorys: ["laptop", "dell"],
    slug: "dell-insprion-14",
  },
  {
    id: 15,
    name: "Apple iMac 27 5K 2020 i5 3.1 8GB 256GB Radeon 5300 Chính Hãng (MXWT2)",
    options: [
      {
        memories: "",
        price: 37000000,
        oldPrice: 49990000,
      },
    ],
    colors: [],
    img: [
      require("../assets/images/imac_21_inch_1.webp"),
      require("../assets/images/imac_21_inch_2.jpg"),
      require("../assets/images/imac_21_inch_3.webp"),
      require("../assets/images/imac_21_inch_4.jpg"),
      require("../assets/images/imac_21_inch_5.webp"),
    ],
    bonus: [
      "Mua Office Home & Student 2021 kèm Macbook chỉ còn 2,090,000",
      "Phần Mềm Diệt Virus, Office chính hãng chỉ từ 150k",
      "Thu cũ lên đời - Trợ giá 1 triệu",
      "Nhập mã CPSONL500 - Giảm thêm 500k khi thanh toán qua VNPay trên website hoặc CPS500 qua QR Offline tại cửa hàng",
    ],
    hotsale: "",
    preferential: [
      "Giảm thêm tới 1% cho thành viên Smember (áp dụng tùy sản phẩm)",
      "Nhập mã KVCPS - Giảm thêm 5% (tối đa 250.000đ) khi thanh toán qua Kredivo cho đơn hàng từ 500.000đ",
      "Nhập QRCPS giảm đến 300.000đ áp dụng các đơn hàng từ 4 triệu trở lên khi thanh toán qua VNPAY tại cửa hàng",
      "Nhập MOCACPS - Giảm thêm 5% (tối đa 400.000đ) khi thanh toán qua ví Moca cho đơn hàng từ 500.000đ",
      "Giảm thêm 500.000đ khi thanh toán qua thẻ tín dụng VP Bank cho đơn hàng từ 10 triệu",
      "Thu cũ đổi mới: Giá thu cao - Thủ tục nhanh chóng - Trợ giá tốt nhất",
    ],
    categorys: ["laptop", "apple", "imac"],
    slug: "apple-imac-27",
  },
];
export const mobileTrademark = [
  {
    name: "Điện thoại nổi bật nhất",
    bands: [
      "Apple",
      "Samsung",
      "Xiaomi",
      "OPPO",
      "Realme",
      "Nokia",
      "Asus",
      "Vivo",
      "Xem tất cả",
    ],
    type: "mobile",
  },
];
export const laptopTrademark = [
  {
    name: "Laptop",
    bands: [
      "Thinkpad",
      "Mac Studio",
      "Studio display",
      "Mac",
      "Asus",
      "HP",
      "Microsoft Surface",
      "Acer",
      "MSI",
      "Dell",
      "Xem tất cả",
    ],
    type: "laptop",
  },
];

export const cities = [
  {
    id: 1,
    title: "Miền Bắc",
    citys: [
      {
        name: "Thành phố Hà Nội",
        code: 1,
        districts: [{ name: "Quận ba đình" }],
      },
      {
        name: "thành phố Sơn La",
        code: 2,
        districts: [{ name: "phường quyết tâm" }],
      },
    ],
  },
  {
    id: 2,
    title: "Miền Nam",
    citys: [
      {
        name: "Thành phố Hồ Chí Minh",
        code: 1,
        districts: [{ name: "Quận 1" }],
      },
      {
        name: "thành phố Tây nguyên",
        code: 2,
        districts: [{ name: "phường Kree" }],
      },
    ],
  },
];

export const mobileCompanies = [
  require("../assets/images/mobileCompany/apple.png"),
  require("../assets/images/mobileCompany/asus.png"),
  require("../assets/images/mobileCompany/nokia.png"),
  require("../assets/images/mobileCompany/nubia.png"),
  require("../assets/images/mobileCompany/oneplus.png"),
  require("../assets/images/mobileCompany/oppo.png"),
  require("../assets/images/mobileCompany/realme.png"),
  require("../assets/images/mobileCompany/samsung.png"),
  require("../assets/images/mobileCompany/vivo.png"),
  require("../assets/images/mobileCompany/vsmart.png"),
  require("../assets/images/mobileCompany/xiaomi.png"),
];
export const laptopCompanies = [
  require("../assets/images/laptopCompany/acer.png"),
  require("../assets/images/laptopCompany/asus.png"),
  require("../assets/images/laptopCompany/dell.png"),
  require("../assets/images/laptopCompany/fujitsu.png"),
  require("../assets/images/laptopCompany/gygabyte.png"),
  require("../assets/images/laptopCompany/hp.png"),
  require("../assets/images/laptopCompany/intel.png"),
  require("../assets/images/laptopCompany/lenovo.png"),
  require("../assets/images/laptopCompany/lg.png"),
  require("../assets/images/laptopCompany/macbook.png"),
  require("../assets/images/laptopCompany/micosoftsurface.png"),
];

const getAllProducts = () => products;

/* const getMobileProducts = (count) => {
  const max = products.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return products.slice(start, start + count);
}; */

const getProductsByCategorys = (type) =>
  products.filter(({ categorys }) => categorys.indexOf(type) > -1);

const getProductsBySlug = (slug) => products.find((e) => e.slug === slug);

const getRandomProductByType = (type, count) => {
  const allProductType = products.filter(
    ({ categorys }) => categorys.indexOf(type) > -1
  );
  const max = allProductType.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return allProductType.slice(start, start + count);
};

const productsData = {
  getProductsBySlug,
  getRandomProductByType,
  getProductsByCategorys,
  getAllProducts,
};

export default productsData;
