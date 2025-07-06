import img from "../../assets/image.png";
import "../blogComponent/blog.scss";
import { setOpenAuthorizationModal } from "../../redux/modal-slice";
import { useDispatch } from "react-redux";
import { Button, Card, Input, Skeleton, Space } from "antd";
import type { blogType, DataType } from "../../@types";
import { useQueryHandler } from "../../hooks/useQuery";
import { useState, type ChangeEvent } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const BlogComp = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError }: DataType<blogType[]> = useQueryHandler<blogType[]>({
    pathname: "categories",
    url: "api/user/blog",
    params: {
      search: "",
    },
  });
  console.log(data);
  const storedUser = localStorage.getItem("user");
  const [inputText, setInputText] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");
  const filteredData = data?.filter((value) =>
    `${value.title} ${value.short_description}`
      .toLowerCase()
      .includes(searchText.toLowerCase() ||inputText.toLowerCase())
  );
  return (
    <div className="blog">
      <div className="container">
        {storedUser ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Space.Compact style={{ width: "70%" }}>
              <Input
                value={inputText}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setInputText(e.target.value)
                }
                placeholder="Input search text"
                autoFocus
              />
              <Button onClick={() => setSearchText(inputText)} type="primary">
                Submit
              </Button>
            </Space.Compact>
          </div>
        ) : (
          <div>
            <div className="img">
              <img src={img} alt="" />
            </div>
            <h1>
              Monetize your content <br /> with <span>GreenShop</span>
            </h1>
            <p>
              GreenShop - a platform for buying and selling, publishing and
              monetizing all types of flowers: articles, <br /> notes, video,
              photos, podcasts or songs.
            </p>
            <button
              className="btn"
              onClick={() => dispatch(setOpenAuthorizationModal())}
            >
              Join GreenShop
            </button>
          </div>
        )}
        <div className="all">
          {(filteredData || []).map((value) => {
            const actions: React.ReactNode[] = [
              <span key="view">
                <MdOutlineRemoveRedEye /> {value.views}
              </span>,
              <span key="comments">
                <FaRegCommentDots />
              </span>,
              <span key="likes">
                <CiHeart />
              </span>,
            ];

            return (
              <>
                {isLoading || isError ? (
                  <Skeleton active />
                ) : (
                  <Card
                    key={value.id}
                    className="card"
                    loading={isLoading}
                    actions={actions}
                    style={{ minWidth: 300 }}
                  >
                    <Card.Meta
                      className="card-title"
                      title={value.title}
                      description={value.short_description}
                    />
                  </Card>
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogComp;
