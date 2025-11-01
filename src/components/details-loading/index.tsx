import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const DetailsLoading = () => {
  return (
    <div className="flex flex-col flex-1 py-4 w-full max-w-[1024px] self-center">
      <div className='mt-6'>
        <Skeleton width={600} height={30} />
      </div>
      <div className="flex gap-4 mt-8 mb-14">
        <div className="flex-1 bg-white items-center justify-center rounded-md">
          <div className="p-10 min-w-[400px]">
            <Skeleton width={400} height={280} />
          </div>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <div className="bg-white w-full px-6 p-4 rounded-md">
            <div className='mb-4'>
              <Skeleton width={250} height={20} />
            </div>
            <div className="mb-2">
              <Skeleton width={220} height={13} />
            </div>
            <div className="mb-2">
              <Skeleton width={170} height={13} />
            </div>
            <div className="mb-2">
              <Skeleton width={270} height={13} />
            </div>
            <div className="mb-2">
              <Skeleton width={200} height={13} />
            </div>
          </div>
          <div className="bg-white w-full h-full px-6 py-2 rounded-md flex flex-col justify-center items-center">
            <div className="self-start">
              <Skeleton width={50} height={10}/>
            </div>
            <div className="flex justify-center items-center">
              <Skeleton width={200} height={40}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsLoading;