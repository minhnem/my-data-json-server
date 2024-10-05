const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// Dữ liệu mô phỏng thay vì đọc từ file db.json
const data = {

        "users": [
          {
            "id": "6b8f",
            "email": "nam@gmail.com",
            "password": "nam20102003"
          },
          {
            "id": "7f0a",
            "email": "duong@gmai.com",
            "password": "nam20102003"
          },
          {
            "id": "0b1b",
            "email": "nam1@gmail.com",
            "password": "nam20102003"
          }
        ],
        "categories": [
          {
            "id": 1,
            "name": "Đồ điện tử"
          },
          {
            "id": 2,
            "name": "Quần áo "
          },
          {
            "id": 3,
            "name": "túi sách"
          },
          {
            "id": 4,
            "name": "giày dép"
          }
        ],
        "products": [
          {
            "id": 1,
            "category_id": 1,
            "img": "https://res.cloudinary.com/dyu519e7i/image/upload/v1727748068/best-electronics-1_l3nst6.png",
            "title": "Apple Watch Series 6",
            "rate": 18,
            "price": 210,
            "discount": 110,
            "quantity": 1,
            "priceShip": 10,
            "isNew": true,
            "isDiscount": false,
            "isBest": true
          },
          {
            "id": 2,
            "category_id": 1,
            "img": "https://res.cloudinary.com/dyu519e7i/image/upload/v1727747409/electronics-hero_y8lbjq.png",
            "title": "Đồng Hồ Báo Thức",
            "rate": 18,
            "price": 210,
            "discount": 110,
            "quantity": 1,
            "priceShip": 10,
            "isNew": false,
            "isDiscount": true,
            "isBest": false
          },
          {
            "id": 20,
            "category_id": 3,
            "img": "https://res.cloudinary.com/dyu519e7i/image/upload/v1727749714/best-3_chxose.png",
            "title": "Túi Sách",
            "rate": 18,
            "price": 210,
            "discount": 110,
            "quantity": 1,
            "priceShip": 10,
            "isNew": false,
            "isDiscount": true,
            "isBest": false
          },
          {
            "id": 3,
            "category_id": 1,
            "img": "https://res.cloudinary.com/dyu519e7i/image/upload/v1727748177/best-electronics-5_vaapqb.png",
            "title": "Normal Watch",
            "rate": 18,
            "price": 210,
            "discount": 110,
            "quantity": 1,
            "priceShip": 10,
            "isNew": true,
            "isDiscount": false,
            "isBest": false
          },
          {
            "id": 4,
            "category_id": 1,
            "img": "https://res.cloudinary.com/dyu519e7i/image/upload/v1727748261/new-electronics-8_rgk3an.png",
            "title": "Apple Watch Series 5",
            "rate": 18,
            "price": 210,
            "discount": 110,
            "quantity": 1,
            "priceShip": 10,
            "isNew": false,
            "isDiscount": true,
            "isBest": false
          },
          {
            "id": 30,
            "category_id": 2,
            "img": "https://res.cloudinary.com/dyu519e7i/image/upload/v1727750406/img-004_vkv43l.png",
            "title": "Ghế Ngồi Nhỏ",
            "rate": 18,
            "price": 210,
            "discount": 110,
            "quantity": 1,
            "priceShip": 10,
            "isNew": false,
            "isDiscount": true,
            "isBest": true
          },
          {
            "id": 6,
            "category_id": 1,
            "img": "https://res.cloudinary.com/dyu519e7i/image/upload/v1727748348/best-electronics-6_rqpwrf.png",
            "title": "Tai Nghe",
            "rate": 18,
            "price": 210,
            "discount": 110,
            "quantity": 1,
            "priceShip": 10,
            "isNew": false,
            "isDiscount": true,
            "isBest": false
          },
          {
            "id": 8,
            "category_id": 1,
            "img": "https://res.cloudinary.com/dyu519e7i/image/upload/v1727748579/best-electronics-2_smhayw.png",
            "title": "iPhone 14",
            "rate": 18,
            "price": 210,
            "discount": 110,
            "quantity": 1,
            "priceShip": 10,
            "isNew": false,
            "isDiscount": true,
            "isBest": true
          },
          {
            "id": 9,
            "category_id": 1,
            "img": "https://res.cloudinary.com/dyu519e7i/image/upload/v1727748615/best-electronics-4_ln1f5i.png",
            "title": "Apple Watch Series 6",
            "rate": 18,
            "price": 210,
            "discount": 110,
            "quantity": 1,
            "priceShip": 10,
            "isNew": true,
            "isDiscount": false,
            "isBest": true
          },
          {
            "id": 11,
            "category_id": 1,
            "img": "https://res.cloudinary.com/dyu519e7i/image/upload/v1727748748/new-electronics-11_q60zvm.png",
            "title": "MacBook",
            "rate": 18,
            "price": 210,
            "discount": 110,
            "quantity": 1,
            "priceShip": 10,
            "isNew": true,
            "isDiscount": false,
            "isBest": false
          },
          {
            "id": 25,
            "category_id": 2,
            "img": "https://res.cloudinary.com/dyu519e7i/image/upload/v1727750214/img-009_aeqbzn.png",
            "title": "Kính Râm",
            "rate": 18,
            "price": 210,
            "discount": 110,
            "quantity": 1,
            "priceShip": 10,
            "isNew": true,
            "isDiscount": false,
            "isBest": true
          },
          {
            "id": 13,
            "category_id": 1,
            "img": "https://res.cloudinary.com/dyu519e7i/image/upload/v1727748825/new-electronics-12_pfbhjt.png",
            "title": "Apple Watch",
            "rate": 18,
            "price": 210,
            "discount": 110,
            "quantity": 1,
            "priceShip": 10,
            "isNew": true,
            "isDiscount": false,
            "isBest": false
          },
          {
            "id": 14,
            "category_id": 1,
            "img": "https://res.cloudinary.com/dyu519e7i/image/upload/v1727748863/img-002_r8bwbe.png",
            "title": "Headphone",
            "rate": 18,
            "price": 210,
            "discount": 110,
            "quantity": 1,
            "priceShip": 10,
            "isNew": false,
            "isDiscount": true,
            "isBest": false
          },
          {
            "id": 23,
            "category_id": 4,
            "img": "https://res.cloudinary.com/dyu519e7i/image/upload/v1727750102/hurry-1_otuonp.png",
            "title": "Giày Nữ",
            "rate": 18,
            "price": 210,
            "discount": 110,
            "quantity": 1,
            "priceShip": 10,
            "isNew": true,
            "isDiscount": false,
            "isBest": false
          },
          {
            "id": 15,
            "category_id": 1,
            "img": "https://res.cloudinary.com/dyu519e7i/image/upload/v1727749038/Annotation_2024-10-01_091634_yuiyfa.png",
            "title": "SamSung Galaxy",
            "rate": 18,
            "price": 210,
            "discount": 110,
            "quantity": 1,
            "priceShip": 10,
            "isNew": true,
            "isDiscount": false,
            "isBest": false
          },
          {
            "id": 16,
            "category_id": 1,
            "img": "https://res.cloudinary.com/dyu519e7i/image/upload/v1728094423/iphone14prm_atilr2.png",
            "title": "Iphone 14 ProMax",
            "rate": 18,
            "price": 210,
            "discount": 110,
            "quantity": 1,
            "priceShip": 10,
            "isNew": false,
            "isDiscount": true,
            "isBest": false
          },
          {
            "id": 17,
            "category_id": 2,
            "img": "https://res.cloudinary.com/dyu519e7i/image/upload/v1727749561/best-1_hj1oaa.png",
            "title": "Áo Thun",
            "rate": 18,
            "price": 210,
            "discount": 110,
            "quantity": 1,
            "priceShip": 10,
            "isNew": true,
            "isDiscount": false,
            "isBest": false
          },
          {
            "id": 18,
            "category_id": 2,
            "img": "https://res.cloudinary.com/dyu519e7i/image/upload/v1727749613/popular-2_bzocvr.png",
            "title": "Áo Polo(Nam)",
            "rate": 18,
            "price": 210,
            "discount": 110,
            "quantity": 1,
            "priceShip": 10,
            "isNew": false,
            "isDiscount": true,
            "isBest": true
          },
          {
            "id": 19,
            "category_id": 4,
            "img": "https://res.cloudinary.com/dyu519e7i/image/upload/v1727749677/best-2_odnzf3.png",
            "title": "Giày Cao Gót",
            "rate": 18,
            "price": 210,
            "discount": 110,
            "quantity": 1,
            "priceShip": 10,
            "isNew": true,
            "isDiscount": false,
            "isBest": false
          },
          {
            "id": 10,
            "category_id": 1,
            "img": "https://res.cloudinary.com/dyu519e7i/image/upload/v1727748709/new-electronics-14_r5jta4.png",
            "title": "LapTop",
            "rate": 18,
            "price": 210,
            "discount": 110,
            "quantity": 1,
            "priceShip": 10,
            "isNew": false,
            "isDiscount": true,
            "isBest": true
          },
          {
            "id": 21,
            "category_id": 3,
            "img": "https://res.cloudinary.com/dyu519e7i/image/upload/v1728094172/son_nknpla.png",
            "title": "Son Môi",
            "rate": 18,
            "price": 210,
            "discount": 110,
            "quantity": 1,
            "priceShip": 10,
            "isNew": true,
            "isDiscount": false,
            "isBest": false
          },
          {
            "id": 5,
            "category_id": 1,
            "img": "https://res.cloudinary.com/dyu519e7i/image/upload/v1727748308/new-electronics-7_eorxun.png",
            "title": "LapTop",
            "rate": 18,
            "price": 210,
            "discount": 110,
            "quantity": 1,
            "priceShip": 10,
            "isNew": true,
            "isDiscount": false,
            "isBest": true
          },
          {
            "id": 22,
            "category_id": 4,
            "img": "https://res.cloudinary.com/dyu519e7i/image/upload/v1727749837/popular-3_j24vuv.png",
            "title": "Giày Da(Nam)",
            "rate": 18,
            "price": 210,
            "discount": 110,
            "quantity": 1,
            "priceShip": 10,
            "isNew": false,
            "isDiscount": true,
            "isBest": true
          },
          {
            "id": 24,
            "category_id": 2,
            "img": "https://res.cloudinary.com/dyu519e7i/image/upload/v1727750140/hurry-3_jj8gxc.png",
            "title": "Túi Sách Da(Nữ)",
            "rate": 18,
            "price": 210,
            "discount": 110,
            "quantity": 1,
            "priceShip": 10,
            "isNew": false,
            "isDiscount": true,
            "isBest": true
          },
          {
            "id": 12,
            "category_id": 1,
            "img": "https://res.cloudinary.com/dyu519e7i/image/upload/v1728094207/galaxyS24_vymukv.png",
            "title": "SmartPhone",
            "rate": 18,
            "price": 210,
            "discount": 110,
            "quantity": 1,
            "priceShip": 10,
            "isNew": false,
            "isDiscount": true,
            "isBest": false
          },
          {
            "id": 26,
            "category_id": 3,
            "img": "https://res.cloudinary.com/dyu519e7i/image/upload/v1727750246/img-008_bqynty.png",
            "title": "Kính Thời Trang",
            "rate": 18,
            "price": 210,
            "discount": 110,
            "quantity": 1,
            "priceShip": 10,
            "isNew": false,
            "isDiscount": true,
            "isBest": false
          },
          {
            "id": 27,
            "category_id": 4,
            "img": "https://res.cloudinary.com/dyu519e7i/image/upload/v1727750310/img-007_kpfccx.png",
            "title": "Ghế Sofa Dài",
            "rate": 18,
            "price": 210,
            "discount": 110,
            "quantity": 1,
            "priceShip": 10,
            "isNew": true,
            "isDiscount": false,
            "isBest": true
          },
          {
            "id": 28,
            "category_id": 4,
            "img": "https://res.cloudinary.com/dyu519e7i/image/upload/v1727750342/img-006_ik0j51.png",
            "title": "Ghế Trang Điểm",
            "rate": 18,
            "price": 210,
            "discount": 110,
            "quantity": 1,
            "priceShip": 10,
            "isNew": false,
            "isDiscount": true,
            "isBest": true
          },
          {
            "id": 29,
            "category_id": 2,
            "img": "https://res.cloudinary.com/dyu519e7i/image/upload/v1727750371/img-005_c41iky.png",
            "title": "Ghế Nhựa Hiện Đại",
            "rate": 18,
            "price": 210,
            "discount": 110,
            "quantity": 1,
            "priceShip": 10,
            "isNew": true,
            "isDiscount": false,
            "isBest": false
          },
          {
            "id": 7,
            "category_id": 1,
            "img": "https://res.cloudinary.com/dyu519e7i/image/upload/v1727749199/Annotation_2024-10-01_091901_xfd2os.png",
            "title": "LapTop HP",
            "rate": 18,
            "price": 210,
            "discount": 110,
            "quantity": 1,
            "priceShip": 10,
            "isNew": true,
            "isDiscount": false,
            "isBest": false
          },
          {
            "id": 31,
            "category_id": 2,
            "img": "https://res.cloudinary.com/dyu519e7i/image/upload/v1727750444/img-003_wt4f2r.png",
            "title": "Ghế Ngồi Thời Trang",
            "rate": 18,
            "price": 210,
            "discount": 110,
            "quantity": 1,
            "priceShip": 10,
            "isNew": true,
            "isDiscount": false,
            "isBest": true
          },
          {
            "id": 32,
            "category_id": 4,
            "img": "https://res.cloudinary.com/dyu519e7i/image/upload/v1727707092/samples/ecommerce/shoes.png",
            "title": "Giày Thể Thao",
            "rate": 18,
            "price": 210,
            "discount": 110,
            "quantity": 1,
            "priceShip": 10,
            "isNew": true,
            "isDiscount": true,
            "isBest": false
          },
        ]
};

// Sử dụng bộ nhớ thay vì file
const router = jsonServer.router(data);

server.use(middlewares);
server.use(router);

// Sử dụng process.env.PORT cho Vercel
server.listen(process.env.PORT || 3000, () => {
  console.log('JSON Server is running');
});
