import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ListLoading = () => {
  return (
    <div className='flex flex-wrap justify-between'>
      {
        Array.from({length:4}).map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-between p-6 my-4 mx-2 shadow-md rounded-md h-[400px] w-[230px] border-2 border-gray-50 bg-white cursor-pointer">
            <Skeleton width={180} height={30} />
            <Skeleton width={180} height={150} />
            <div>
              <Skeleton width={180} height={15} />
              <Skeleton width={180} height={30} />
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default ListLoading;