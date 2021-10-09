// import { useEffect } from "react";
import { Image, Space } from "antd-mobile";
//import { DemoBlock } from "demos";
import { Link } from "react-router-dom";

const Categories = (props) => {
  // deneme amaçlı api
  // https://newsapi.org/v2/everything?language=tr&q=Teknoloji&apiKey=7468ee6c4373446cbea7dbba0940c903
  const imageBaseUrl = "https://images.unsplash.com/photo-";
  const imageParameters = "?auto=format&fit=crop&w=375&q=80";
  const dataSource = [
    { category: "Teknoloji", imageId: "1478358161113-b0e11994a36b" },
    { category: "Spor", imageId: "1521412644187-c49fa049e84d" },
    { category: "Sağlık", imageId: "1526256262350-7da7584cf5eb" },
    { category: "Ekonomi", imageId: "1542222024-c39e2281f121" },
    { category: "Eğitim", imageId: "1503676260728-1c00da094a0b" },
    { category: "Müzik", imageId: "1511671782779-c97d3d27a1d4" },
    { category: "Tiyatro", imageId: "1507924538820-ede94a04019d" },
    { category: "Sinema", imageId: "1478720568477-152d9b164e26" },
    { category: "Hava", imageId: "1530908295418-a12e326966ba" },
    { category: "Seyahat", imageId: "1473625247510-8ceb1760943f" },
    { category: "Astroloji", imageId: "1532968961962-8a0cb3a2d4f5" },
    { category: "Otomobil", imageId: "1537041373298-55dbb337e651" },
    { category: "Galeri", imageId: "1500051638674-ff996a0ec29e" },
    { category: "Video", imageId: "1524253482453-3fed8d2fe12b" },
  ];

  const categories = dataSource.map((data) => (
    <Link to={"/news/" + data.category} key={data.category}>
      <div
        style={{
          position: "relative",
        }}
      >
        <Image
          src={imageBaseUrl + data.imageId + imageParameters}
          width={100}
          height={100}
          fit="cover"
          style={{
            borderRadius: 0,
            margin: 5,
            display: "flex",
          }}
        />
        <p
          style={{
            color: "white",
            position: "absolute",
            left: 12,
            top: 12,
            //textAlign: "center",
            zIndex: 1,
            fontWeight: 900,
            fontSize: "15px",
          }}
        >
          {data.category}
        </p>
      </div>
    </Link>
  ));

  return (
    <div>
      <div>
        <Space wrap>{categories}</Space>
      </div>
    </div>
  );
};

export default Categories;
