import { useQueryHandler } from '../../../../../hooks/useQuery';
import type { DataType, DiscountType } from '../../../../../@types';
import "../discount/discount.scss"
import { Skeleton } from 'antd';
const Discount = () => {
    const {data,isLoading,isError}:DataType<DiscountType> = useQueryHandler<DiscountType>({
        pathname:"discount-flowers",
        url:"api/features/discount"
    })
    return (
        <div className='discount'>
            <h2>{data?.title}</h2>
            <h5>UP TO {data?.discoount_up_to}% OFF</h5>
            {isLoading||isError?<Skeleton.Image active style={{width:290, height:450}}/>:<img src={data?.poster_image_url} alt="" />}
        </div>
    );
}

export default Discount;
