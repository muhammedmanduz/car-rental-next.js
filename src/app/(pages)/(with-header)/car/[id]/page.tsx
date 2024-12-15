import Images from "@/app/components/Images";
import BreadCrumb from "@/app/components/BreadCrumb";
import OrderBox from "@/app/components/OrderBox";
import Overview from "@/app/components/Overview";
import Title from "@/app/components/Title";
import { getDetail } from "@/app/utils/service";

type Props = {
  params: Promise<{ id: string }>;
};

const Detail = async ({ params }: Props) => {
  const { id } = await params;

  const { vehicle } = await getDetail(id);

  return (
    <div>
      <div className="h-[70px] md:h-[110px]"></div>

      <div className="container min-h-screen text-black bg-white mt-5">
        <BreadCrumb name={vehicle.make + " " + vehicle.model} />
        <Title car={vehicle} />
        <Images url={vehicle.imageUrl} />

        <div className="grid xl:grid-cols gap-x-10 my-10 mt-10">
          <div className="xl:grid-col-span-4 xl:mt-10">
            <Overview car={vehicle} />
          </div>
          <OrderBox car={vehicle} />
        </div>
      </div>
    </div>
  );
};



export default Detail;
