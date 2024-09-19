import React, { useEffect, useState } from "react";

import { Rings } from "react-loader-spinner";
import CardItem from "../../components/cardItem/CardItem";

const Home = ({ homeActive }) => {
  const [productData, setProductData] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchProductData = async () => {
    setLoader(true);

    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);

      if (data && data.length) {
        setProductData((d) => (d = data));
        setLoader(false);
        console.log(productData);
      }
    } catch (err) {
      console.error(err);
      setLoader(false);
    }
  };
  useEffect(() => {
    fetchProductData();
    homeActive(true);
  }, []);

  return (
    <div className="h-screen container-home">
      <div className="container h-screen">
        {loader ? (
          <div className="spinner-con">
            <Rings color="#2F2504" width={"120"} height={"120"} />
          </div>
        ) : (
          <div className="product-con">
            {productData &&
              productData.length &&
              productData.map((item, index) => (
                <CardItem item={item} key={index} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
