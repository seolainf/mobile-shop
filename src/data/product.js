const mobileProducts = [
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
      "",
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
  },
];

const getMobileProducts = (count) => {
  const max = mobileProducts.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return mobileProducts.slice(start, start + count);
};

const productsData = {
  getMobileProducts,
};

export default productsData;
