import { useState } from "react";
import type { CategoriesType, DataType } from "../../../../@types";
import useLoader from "../../../../generic/loader";
import { useQueryHandler } from "../../../../hooks/useQuery";
import { useSearchParamsHandler } from "../../../../hooks/useSearchParams";
import "../category/category.scss";
import Discount from "./discount";
import SliderC from "./price";
const Categories = () => {
  const { data, isLoading, isError }: DataType<CategoriesType[]> =
    useQueryHandler<CategoriesType[]>({
      pathname: "categories",
      url: "api/flower/category",
    });
  const { getParam, setParam } = useSearchParamsHandler();
  const sort = getParam("sort") || "default-sorting";
  const type = getParam("type") || "all-plants" 
  const range_min = getParam("range_min") || 0;
  const range_max = getParam("range_max") || 1000;
  const { categories_loader } = useLoader();
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  return (
    <div className="categories">
      <h2>Categories</h2>
      {isLoading || isError
        ? categories_loader()
        : data?.map((value,idx) => (
            <div
              className={selectedIndex === idx ? "active":"list"}
              onClick={() => {setParam({ category: value.route_path,sort,type,range_min,range_max }) ; setSelectedIndex(idx)}}
              key={value._id}
            >
              <h5>{value.title}</h5>
              <h5>{value.count}</h5>
            </div>
          ))}
      <SliderC />
      <Discount />
    </div>
  );
};

export default Categories;
