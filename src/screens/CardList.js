import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Card from './Card';
import Coupon from './Coupon';

const CardList = () => {
  mdata = [
    {
      id: 1,
      title: 'Fjallraven - Foldsack',
      type: 'Static',
      price: 25,
      colour: 'yellow',
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
    {
      id: 2,
      title: 'Slim Fit T-Shirts ',
      type: 'Static',
      price: 20,
      colour: 'yellow',
      description:
        'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
      category: "men's clothing",
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    },
    {
      id: 3,
      title: 'Mens Nike',
      type: 'Dynamic',
      price: 30,
      colour: 'yellow',
      description:
        'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    },
    {
      id: 4,
      title: 'Mens Levis',
      type: 'Dynamic',
      price: 40,
      colour: 'yellow',
      description:
        'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    },
  ];
  jdata = [
    {
      id: 5,
      title: "Women's Chain Bracelet",
      type: 'Static',
      price: 50,
      colour: 'yellow',
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: 'jewelery',
      image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    },
    {
      id: 6,
      title: 'Solid Gold Petite Micropave ',
      type: 'Static',
      price: 15,
      colour: 'yellow',
      description:
        'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
      category: 'jewelery',
      image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    },
    {
      id: 7,
      title: 'PNG Jewellers',
      type: 'Dynamic',
      price: 10,
      colour: 'yellow',
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: 'jewelery',
      image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
    },
    {
      id: 8,
      title: 'Tanishq Jewellers',
      type: 'Dynamic',
      price: 20,
      colour: 'yellow',
      description:
        'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
      category: 'jewelery',
      image: 'https://fakestoreapi.com/img/51UDEzMJVpL.AC_UL640_QL65_ML3.jpg',
    },
  ];
  edata = [
    {
      id: 9,
      title: '2TB Elements Portable External Hard Drive',
      type: 'Static',
      price: 50,
      colour: 'yellow',
      description:
        'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',
      category: 'electronics',
      image: 'https://fakestoreapi.com/img/61IBBVJvSDL.AC_SY879.jpg',
    },
    {
      id: 10,
      title: 'SanDisk SSD PLUS 1TB Internal SSD',
      type: 'Static',
      price: 30,
      colour: 'yellow',
      description:
        'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)',
      category: 'electronics',
      image: 'https://fakestoreapi.com/img/61U7T1koQqL.AC_SX679.jpg',
    },
    {
      id: 11,
      title:
        'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
      type: 'Static',
      price: 35,
      colour: 'yellow',
      description:
        '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
      category: 'electronics',
      image: 'https://fakestoreapi.com/img/71kWymZ+c+L.AC_SX679.jpg',
    },
    {
      id: 12,
      title: 'Sandisk Pendrives',
      type: 'Dynamic',
      price: 40,
      colour: 'yellow',
      description:
        "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      category: 'electronics',
      image: 'https://fakestoreapi.com/img/61mtL65D4cL.AC_SX679.jpg',
    },
    {
      id: 13,
      title: 'Acer co.',
      type: 'Dynamic',
      price: 60,
      colour: 'yellow',
      description:
        '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',
      category: 'electronics',
      image: 'https://fakestoreapi.com/img/81QpkIctqPL.AC_SX679.jpg',
    },
    {
      id: 14,
      title: 'Samsung',
      type: 'Dynamic',
      price: 25,
      colour: 'yellow',
      description:
        '49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag',
      category: 'electronics',
      image: 'https://fakestoreapi.com/img/81Zt42ioCgL.AC_SX679.jpg',
    },
  ];
  wdata = [
    {
      id: 15,
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      type: 'Static',
      price: 20,
      colour: 'yellow',
      description:
        'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates',
      category: "women's clothing",
      image: 'https://fakestoreapi.com/img/51Y5NI-I5jL.AC_UX679.jpg',
    },
    {
      id: 16,
      title:
        "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      type: 'Static',
      price: 30,
      colour: 'yellow',
      description:
        '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON',
      category: "women's clothing",
      image: 'https://fakestoreapi.com/img/81XH0e8fefL.AC_UY879.jpg',
    },
    {
      id: 17,
      title: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
      type: 'Static',
      price: 40,
      colour: 'yellow',
      description:
        "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
      category: "women's clothing",
      image: 'https://fakestoreapi.com/img/71HblAHs5xL.AC_UY879-2.jpg',
    },
    {
      id: 18,
      title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
      type: 'Static',
      price: 10,
      colour: 'yellow',
      description:
        '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
      category: "women's clothing",
      image: 'https://fakestoreapi.com/img/71z3kpMAYsL.AC_UY879.jpg',
    },
    {
      id: 19,
      title: "Opna Women's",
      type: 'Dynamic',
      price: 5,
      colour: 'yellow',
      description:
        '100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort',
      category: "women's clothing",
      image: 'https://fakestoreapi.com/img/51eg55uWmdL.AC_UX679.jpg',
    },
    {
      id: 20,
      title: 'DANVOUY Womens',
      type: 'Dynamic',
      price: 15,
      colour: 'yellow',
      description:
        '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.',
      category: "women's clothing",
      image: 'https://fakestoreapi.com/img/61pHAEJ4NML.AC_UX679.jpg',
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={jdata}
        renderItem={({item}) => <Coupon item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});

export default CardList;

// id
// title
// category
// image
// description
