import RandomQoute from "../components/RandomQoute.jsx";
import Card from "../components/Card.jsx";

export default function Content({ image, data }) {
  return (
    <>
      {data ? (
        <>
          {data.pagination.items.total}
          <Card image={image} data={data} />
        </>
      ) : (
        <RandomQoute />
      )}
    </>
  );
}
