import RandomQoute from "../components/RandomQoute";
import Card from "../components/Card";

interface Image {
  src: string;
}

interface DataType {
  images: Image[];
  data: any;
  search: string;
  noResult: boolean;
}

const Content: React.FC<DataType> = ({ images, data, search, noResult }) => {
  return (
    <>
      {data && data.pagination?.items.total > 0 ? (
        <div className="px-4">
          <small className="font-bold">
            Total results: {data.pagination?.items.total}
          </small>
          <hr />
          <div className="gap-1.5 mt-2  flex flex-col text-sm">
            {images &&
              images.map((src, index) => (
                <Card src={src} index={index} data={data} key={index} />
              ))}
          </div>
        </div>
      ) : ( noResult ?
        <>
          <div className="p-4 border m-2 rounded-sm shadow-sm text-center">
            <small className="font-bold">
              Total results: 0
            </small>
            <h4 className="text-lg font-bold">
              Couldnt find the anime you're searching for 🤔
            </h4>
          </div>
        </> :  <>
          <div className="p-4 border m-2 rounded-sm shadow-sm text-center">
            <h4 className="text-lg font-bold">
              Search All Anime!!! 🐻
            </h4>
          </div>
        </>
      )}
    </>
  );
};

export default Content;
