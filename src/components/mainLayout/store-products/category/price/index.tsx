import { Slider } from "antd";
import "../price/price.scss";
import { useState } from "react";
import { useSearchParamsHandler } from "../../../../../hooks/useSearchParams";

const SliderC = () => {
  const { getParam, setParam } = useSearchParamsHandler();
  const range_min = getParam("range_min") || 0;
  const range_max = getParam("range_max") || 1000;
  const category = getParam("category") || "house-plants";
  const sort = getParam("sort") || "default-sorting";
  const type = getParam("type") || "all-plants";
  const [price, setPrice] = useState<[number, number]>([
    Number(range_min),
    Number(range_max),
  ]);
  const setPriceFilter = () => {
    setParam({
      category,
      sort,
      type,
      range_min: price[0],
      range_max: price[1],
    });
  };
  return (
    <div className="slider">
      <h2>Price Range</h2>
      <Slider
        onChange={(e) => setPrice(e as [number, number])}
        range
        defaultValue={[0, 1000]}
        min={0}
        max={1000}
      />
      <h5>
        Price:{""}
        <span className="price">
          {price[0]}$ - {price[1]}$
        </span>
      </h5>
      <button onClick={setPriceFilter} className="btn">
        Filter
      </button>
    </div>
  );
};

export default SliderC;
