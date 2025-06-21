import { useNavigate, useParams } from "react-router-dom";
import type { AuthType, DataType, ProductsType } from "../../../../../@types";
import { useQueryHandler } from "../../../../../hooks/useQuery";
import { useSearchParamsHandler } from "../../../../../hooks/useSearchParams";
import "../product/product.scss";
import { useState } from "react";
import { ArrowLeft, Heart, Star } from "lucide-react";
import { Avatar, Image, Rate, Skeleton, Tooltip } from "antd";
import Navbar from "../../../../navbar";

const Product = () => {
  const navigate = useNavigate();
  const { getParam } = useSearchParamsHandler();
  const { category, id } = useParams();
  const sort = getParam("sort") || "default-sorting";
  const type = getParam("type") || "all-plants";
  const range_min = getParam("range_min") || 0;
  const range_max = getParam("range_max") || 1000;
  const { data, isLoading, isError }: DataType<ProductsType> =
    useQueryHandler<ProductsType>({
      pathname: `products`,
      url: `api/flower/category/${category}/${id}`,
      params: {
        sort,
        type,
        range_min,
        range_max,
      },
    });
  const { data: userData }: DataType<AuthType> = useQueryHandler<AuthType>({
    pathname: `user`,
    url: `api/user/by_id/${data?.created_by}`,
  });
  console.log(userData);
  const [selectedSize, setSelectedSize] = useState("M");
  const [mainUrl, setMainUrl] = useState<string>("");
  const sizes = ["S", "M", "L", "XL"];
  // if (!data) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="product-detail">
        <div className="container">
          <div onClick={() => navigate(`/`)} className="back-button">
            <ArrowLeft size={20} />
            <span>back to products</span>
          </div>

          <div className="content">
            <div className="left">
              <Image.PreviewGroup
                preview={{
                  onChange: (current, prev) =>
                    console.log(
                      `current index: ${current}, prev index: ${prev}`
                    ),
                }}
              >
                <div className="all-img">
                  {isLoading || isError
                    ? Array.from({ length: 4 }).map((_, idx) => (
                        <Skeleton.Image
                          style={{ width: 100, height: 100 }}
                          key={idx}
                          active
                        />
                      ))
                    : data?.detailed_images.map((value) => (
                        <div className="detailed-img">
                          <img
                            className="img"
                            onClick={() => setMainUrl(value)}
                            src={value}
                            alt={value}
                          />
                        </div>
                      ))}
                </div>
                <div className="main-img">
                  {isLoading || isError ? (
                    <Skeleton.Image
                      active
                      style={{ width: 500, height: 500 }}
                    />
                  ) : (
                    <Image
                      width={500}
                      height={500}
                      src={mainUrl === "" ? data?.main_image : mainUrl}
                    />
                  )}
                </div>
              </Image.PreviewGroup>
            </div>

            <div className="right">
              <div className="title-rating">
                <div className="wrapper">
                  <div className="title">
                    <div className="img-user">
                      <Tooltip title={userData?.name + "" + userData?.surname}>
                        <Avatar style={{width:60,height:60}} src={userData?.profile_photo} />
                      </Tooltip>
                    </div>
                    <div className="title-price">
                      <h1>{data?.title}</h1>
                      <span className="price">${data?.price}</span>
                    </div>
                  </div>
                  <div className="rating">
                    <div className="stars">
                      <Rate value={data?.rate} />
                    </div>
                    <span className="review">
                      {data?.views} customer review
                    </span>
                  </div>
                </div>
              </div>

              <div className="description">
                <h3>Short description</h3>
                <p>{data?.short_description}</p>
              </div>

              <div className="sizes">
                <h3>Size:</h3>
                <div className="size-buttons">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={selectedSize === size ? "active" : ""}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="actions">
                <button className="btn">BUY NOW</button>
                <button className="btn-cart">Add To Cart</button>
                <button className="btn-heart">
                  <Heart color="green" size={20} className="text-gray-600" />
                </button>
              </div>

              <div className="details">
                <div className="item">
                  <span className="label">SKU:</span>
                  <span className="value">66d09a759fa7aef6c5d0012f</span>
                </div>
                <div className="item">
                  <span className="label">Categories:</span>
                  <span className="value">house-plants</span>
                </div>
                <div className="item">
                  <span className="label">Tags:</span>
                  <span className="value">Home, Garden Plants</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
