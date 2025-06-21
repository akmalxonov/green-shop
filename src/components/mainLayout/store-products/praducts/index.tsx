import { Select } from "antd";
import "../praducts/products.scss";
import { useQueryHandler } from "../../../../hooks/useQuery";
import type { DataType, ProductsType } from "../../../../@types";
import useLoader from "../../../../generic/loader";
import { useSearchParamsHandler } from "../../../../hooks/useSearchParams";
import { title_category } from "../../../../utils";
import CardComp from "./card";
const Products = () => {
  const { getParam, setParam } = useSearchParamsHandler();
  const category = getParam("category") || "house-plants";
  const sort = getParam("sort") || "default-sorting" 
  const type = getParam("type") || "all-plants" 
  const range_min = getParam("range_min") || 0;
  const range_max = getParam("range_max") || 1000;
  const handleChange = (e: string) => {
    console.log(e);
    setParam({category,sort:e,type})
  };

  const { data, isLoading, isError }: DataType<ProductsType[]> =
    useQueryHandler<ProductsType[]>({
      pathname: `products${category}-${sort}-${type}-${range_min}-${range_max}`,
      url: `api/flower/category/${category}`,
      params:{
        sort,
        type,
        range_min,
        range_max
      }
    });
      console.log(data);
  const { products_loader } = useLoader();
  return (
    <div className="products">
      <div className="top">
        <ul className="list">
          {title_category.map((value)=>(
            <li onClick={()=>setParam({category,sort,type:value.key,range_min,range_max})} key={value.key}>{value.title}</li>
          ))}
        </ul>

        <label className="sort-dropdown__label">Sort by:</label>
        <Select
          showSearch
          placeholder="Default Sorting"
          defaultValue={sort}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          onChange={handleChange}
          options={[
            { value: "default-sorting", label: "Default Sorting" },
            { value: "the-cheapest", label: "The Cheapest" },
            { value: "most-expensive", label: "Most Expensive" },
          ]}
        />
      </div>
      <div className="wrapper">
        {isLoading || isError
          ? products_loader()
          : data?.map((value) => <CardComp key={value._id} {...value} />)}
      </div>
    </div>
  );
};

export default Products;
