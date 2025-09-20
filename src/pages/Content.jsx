import RandomQoute from "../components/RandomQoute.jsx";
import Card from "../components/Card.jsx";

export default function Content({ image, data }) {
  console.log(data)
  return (
    <>
      {data ? (
        <div className="px-4">
          <small className="font-bold">
            Total results: {data.pagination.items.total}
          </small>
          <hr />
          <div className='gap-1.5 mt-2  flex flex-col text-sm'>
            {image.map((src, index) => (
              <Card src={src}  index={index} data={data} />
            ))}
        </div>
        </div>
        
      ) : (
        <>
          {/* TODO: put something here... */}
        </>
      )}
    </>
  );
}
