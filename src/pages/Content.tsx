import RandomQoute from "../components/RandomQoute.js";
import Card from "../components/Card.js";

export default function Content({ image, data }) {
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
              <Card 
                src={src}  
                index={index}
                data={data}
                key={index}
              />
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
