import { Skeleton, Space } from "antd";
import "../loader/loader.scss";
const useLoader = () => {
  const categories_loader = () => {
    return Array.from({ length: 9 }).map((_, idx) => (
      <Skeleton.Input key={idx} active style={{ width: 287, height: 60 }} />
    ));
  };

  const products_loader = () => {
    return Array.from({ length: 9 }).map((_, idx) => (

        <Space key={idx} direction="vertical">
          <Skeleton.Image
            className="skleton"
            style={{ width: 260, height: 320 }}
            active
          />
          <Skeleton.Input
            className="skleton"
            style={{ width: 260, height: 60 }}
            active
          />
        </Space>
    ));
  };

  return { categories_loader, products_loader };
};

export default useLoader;
