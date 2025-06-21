import { useQueryHandler } from '../../../../../hooks/useQuery';
import type { DataType, DiscountType } from '../../../../../@types';
import "../discount/discount.scss"
const Discount = () => {
    const {data}:DataType<DiscountType> = useQueryHandler<DiscountType>({
        pathname:"discount-flowers",
        url:"api/features/discount"
    })
        // console.log(data);
    
    return (
        <div className='discount'>
            <h2>{data?.title}</h2>
            <h5>UP TO {data?.discoount_up_to}% OFF</h5>
            <img src={data?.poster_image_url} alt="" />
        </div>
    );
}

export default Discount;
