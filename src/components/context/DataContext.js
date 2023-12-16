import { createContext, useRef, useState } from "react";
import shopList from "../../config/shop";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [searchURL, setSearchURL] = useState('');
  const [data, setData] = useState([
    {
      color: "#ff7337",
      floor: "shopee",
      id: 1,
      image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lk0jrpwwtlhe00",
      itemURL: "https://shopee.vn/%E1%BB%90p-L%C6%B0ng-%C4%90i%E1%BB%87n-Tho%E1%BA%A1i-Vi%E1%BB%81n-Cong-H%E1%BB%8Da-Ti%E1%BA%BFt-Qu%C3%A1i-V%E1%BA%ADt-Ho%E1%BA%A1t-H%C3%ACnh-3D-Cho-iPhone-XR-11-15-14-12-13-Pro-Max-X-7-8-6s-6-Plus-XS-Max-i.89827191.23950329657?sp_atk=83a92683-fba2-40ce-9917-ea700c0e033c&xptdk=83a92683-fba2-40ce-9917-ea700c0e033c",
      models: [
        {name: '[19-13-2] Chú Hề,Xsmax', stock: 80, price: 900000000},
        {name: '[19-13-2] Chú Hề,14 Pro', stock: 80, price: 900000000},
        {name: '[19-13-1] Quái Vật,11', stock: 78, price: 900000000},
        {name: '[19-13-2] Chú Hề,Giá đỡ vàng chữ V', stock: 80, price: 399900000},
        {name: '[19-13-1] Quái Vật,15 Promax', stock: 80, price: 900000000},
        {name: '[19-13-2] Chú Hề,13 Promax', stock: 80, price: 900000000},
        {name: '[19-13-2] Chú Hề,7g/8g', stock: 80, price: 900000000},
        {name: '[19-13-1] Quái Vật,12 Pro', stock: 79, price: 900000000},
        {name: '[19-13-1] Quái Vật,13 Promax', stock: 80, price: 900000000},
        {name: '[19-13-1] Quái Vật,11 Promax', stock: 79, price: 900000000},
        {name: '[19-13-1] Quái Vật,13 Pro', stock: 80, price: 900000000},
        {name: '[19-13-2] Chú Hề,14', stock: 80, price: 900000000},
        {name: '[19-13-1] Quái Vật,X/Xs', stock: 80, price: 900000000},
        {name: '[19-13-1] Quái Vật,7g/8g', stock: 79, price: 900000000},
        {name: '[19-13-1] Quái Vật,11 Pro', stock: 80, price: 900000000},
        {name: '[19-13-2] Chú Hề,15', stock: 80, price: 900000000},
        {name: '[19-13-2] Chú Hề,12 Promax', stock: 80, price: 900000000},
        {name: '[19-13-1] Quái Vật,14 Promax', stock: 80, price: 900000000},
        {name: '[19-13-1] Quái Vật,6/6s', stock: 80, price: 900000000},
        {name: '[19-13-2] Chú Hề,11', stock: 80, price: 900000000},
        {name: '[19-13-2] Chú Hề,13', stock: 80, price: 900000000},
        {name: '[19-13-2] Chú Hề,13 Pro', stock: 80, price: 900000000},
        {name: '[19-13-1] Quái Vật,13', stock: 80, price: 900000000},
        {name: '[19-13-1] Quái Vật,7plus/8plus', stock: 80, price: 900000000},
        {name: '[19-13-1] Quái Vật,12 Promax', stock: 80, price: 900000000},
        {name: '[19-13-2] Chú Hề,12 Pro', stock: 79, price: 900000000},
        {name: '[19-13-1] Quái Vật,15', stock: 80, price: 900000000},
        {name: '[19-13-1] Quái Vật,12', stock: 80, price: 900000000},
        {name: '[19-13-2] Chú Hề,6/6s', stock: 80, price: 900000000},
        {name: '[19-13-2] Chú Hề,11 Promax', stock: 80, price: 900000000},
        {name: '[19-13-1] Quái Vật,Xsmax', stock: 80, price: 900000000},
        {name: '[19-13-2] Chú Hề,X/Xs', stock: 80, price: 900000000},
        {name: '[19-13-2] Chú Hề,11 Pro', stock: 80, price: 900000000},
        {name: '[19-13-1] Quái Vật,6plus/6splus', stock: 78, price: 900000000},
        {name: '[19-13-2] Chú Hề,6plus/6splus', stock: 79, price: 900000000},
        {name: '[19-13-1] Quái Vật,14', stock: 80, price: 900000000},
        {name: '[19-13-2] Chú Hề,7plus/8plus', stock: 80, price: 900000000},
        {name: '[19-13-1] Quái Vật,14 Pro', stock: 80, price: 900000000},
        {name: '[19-13-2] Chú Hề,12', stock: 80, price: 900000000},
        {name: '[19-13-2] Chú Hề,14 Promax', stock: 80, price: 900000000},
        {name: '[19-13-1] Quái Vật,Giá đỡ vàng chữ V', stock: 80, price: 399900000},
        {name: '[19-13-2] Chú Hề,15 Promax', stock: 80, price: 900000000}
      ],
      name: "Ốp Lưng Điện Thoại Viền Cong Họa Tiết Quái Vật Hoạt Hình 3D Cho iPhone XR 11 15 14 12 13 Pro Max X 7 8 6s 6 Plus XS Max",
      price: "₫3.999",
      shop: "SHIN CASE - ỐP LƯNG - MÔ HÌNH",
      tierSelector: [
        {
          images: ['vn-11134207-7qukw-lk1tejn7pjn8b8', 'vn-11134207-7qukw-lk0t8pxzzj0i0b'],
          name: "Màu",
          options: ['[19-13-1] Quái Vật', '[19-13-2] Chú Hề'],
          properties: null,
          summed_stocks: null,
          type: 0
        },
        {
          images: null,
          name: "Size",
          options: ['6/6s', '6plus/6splus', '7g/8g', '7plus/8plus', 'X/Xs', 'Xsmax', '11', '11 Pro', '11 Promax', '12', '12 Pro', '12 Promax', '13', '13 Pro', '13 Promax', '14', '14 Pro', '14 Promax', '15', '15 Promax', 'Giá đỡ vàng chữ V'],
          properties: null,
          summed_stocks: null,
          type: 0
        }
      ]
    },
    {
      color: "#ff7337",
      floor: "shopee",
      id: 2,
      image: "https://down-vn.img.susercontent.com/file/213ff99bad214c7710302e7d6b5d67aa_tn",
      itemURL: "https://shopee.vn/B%E1%BA%A3ng-Vi%E1%BA%BFt-T%E1%BB%B1-Xo%C3%A1-B%E1%BA%A3ng-Vi%E1%BA%BFt-Th%C3%B4ng-Minh-Cho-B%C3%A9-i.637616510.11581922832",
      models: [
        {name: 'BÉ TRAI', stock: 3, price: 2990000000},
        {name: 'BÉ GÁI', stock: 11, price: 3900000000}
      ],
      name: "Bảng Viết Tự Xoá - Bảng Viết Thông Minh Cho Bé",
      price: "₫29.900 - ₫39.000",
      shop: "Bé Cưng.SHOP",
      tierSelector: [
        {
          images: null,
          name: "Màu Sắc",
          options: ['BÉ TRAI', 'BÉ GÁI'],
          properties: null,
          summed_stocks: null,
          type: 0
        }
      ]
    },
    {
      color: "#ff7337",
      floor: "shopee",
      id: 3,
      image: "https://down-vn.img.susercontent.com/file/3ced10c17508034be816fbce960a44ef_tn",
      itemURL: "https://shopee.vn/CHO%CC%81-B%C3%94NG-HA%CC%81T-TI%C3%8A%CC%81NG-VI%E1%BB%86T-Ch%C3%B3-b%C3%B4ng-bi%E1%BA%BFt-%C4%91i-nh%E1%BA%A3y-h%C3%A1t-bi%E1%BA%BFt-l%E1%BA%AFc-m%C3%B4ng-c%E1%BB%B1c-Cute-cho-b%C3%A9-y%C3%AAu-d%E1%BA%AFt-%C4%91i-ch%C6%A1i-i.637616510.13665847625",
      name: "CHÓ BÔNG HÁT TIẾNG VIỆT , Chó bông biết đi, nhảy, hát , biết lắc mông cực Cute cho bé yêu dắt đi chơi",
      price: "₫134.900",
      shop: "Bé Cưng.SHOP",
      models: [
        {name: 'Màu Xanh Dương', stock: 0, price: 13490000000},
        {name: 'Màu Hồng', stock: 0, price: 13490000000},
        {name: 'Màu Vàng', stock: 100000, price: 13490000000},
        {name: 'Màu Đỏ', stock: 9999, price: 13490000000},
        {name: 'Màu Cam', stock: 100000, price: 13490000000},
        {name: 'Màu Xanh Chuối', stock: 10000, price: 13490000000}
      ],
      tierSelector: [
        {
          images: [
            "7c96dedf0a7cecbbd5602d263eaf3e39",
            "6d953445b26749e47ad658f504cd3f4c",
            "ad7ae53392d0b65eca4e90a16be36983",
            "19d1c12e26c460d26f4447199cd0c40e",
            "50509228f72067cbf07d1c9d98720540",
            "1220baee1da271e66b663dbdaedc8bb8"
          ],
          options: [
            "Màu Đỏ",
            "Màu Cam",
            "Màu Xanh Chuối",
            "Màu Xanh Dương",
            "Màu Hồng",
            "Màu Vàng"
          ],
          name: "Màu Sắc",
          properties: null,
          summed_stocks: null,  
          type: 0,
        }
      ]
    }
  ]);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <DataContext.Provider value={{
      items, setItems,
      searchURL, setSearchURL, shopList,
      data, setData,
      isClicked, setIsClicked
    }}>
      {children}
    </DataContext.Provider>
  )
}