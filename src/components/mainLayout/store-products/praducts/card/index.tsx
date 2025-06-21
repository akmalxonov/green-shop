import { type FC } from "react";
import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import type { DataType, ProductsType } from "../../../../../@types";
import "../card/card.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useQueryHandler } from "../../../../../hooks/useQuery";
import { useSearchParamsHandler } from "../../../../../hooks/useSearchParams";
import { useDispatch } from "react-redux";
import { getData } from "../../../../../redux/shopSlice";
import { useReduxSelector } from "../../../../../hooks/useRedux";
const CardComp: FC<ProductsType> = (props) => {
  const navigate = useNavigate();
   const { getParam } = useSearchParamsHandler();
  const { id } = useParams();
  const category = getParam("category") || "house-plants";
  const sort = getParam("sort") || "default-sorting";
  const type = getParam("type") || "all-plants";
  const range_min = getParam("range_min") || 0;
  const range_max = getParam("range_max") || 1000;
  const { data }: DataType<ProductsType> = useQueryHandler<ProductsType>({
    pathname: `products${category}-${sort}-${type}-${range_min}-${range_max}`,
    url: `api/flower/category/${category}/${id}`,
    params: {
      sort,
      type,
      range_min,
      range_max,
    },
  });
  console.log(data);
  const dispatch = useDispatch()
  const {data:cartData} = useReduxSelector((state)=>state.cardSlice)
  console.log(cartData);
   
  return (
    <div className="card-comp">
      <div className="card-image-wrapper group">
        <img
          src={props.main_image}
          className="w-4/5 h-[60%] max-sm:h-[100%]"
          alt={props.title}
        />
        <div className="hover-icons group-hover:flex">
          <div className="style_icons" onClick={() => dispatch(getData(props))}>
            <ShoppingCartOutlined />
          </div>
          <div className="style_icons">
            <HeartOutlined />
          </div>
          <div
            onClick={() => navigate(`/plant-info/${category}/${props._id}`)}
            className="style_icons"
          >
            <SearchOutlined />
          </div>
        </div>
      </div>
      <h3>{props.title}</h3>
      <div className="price-wrapper">
        <h3 className="price">{props.price} $</h3>
        <h3 className="discount">{props.discount_price} $</h3>
      </div>
    </div>
  );
};

export default CardComp;
