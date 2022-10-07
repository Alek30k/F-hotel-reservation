import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading } = useFetch("hotels?featured=true&limit=4");
  console.log(data);

  if (loading) return <h2>Loading...</h2>;
  if (!data) return <h2>No hay hoteles</h2>;
  return (
    <div className="fp">
      {data?.map((item) => {
        return (
          <div className="fpItem" key={item._id}>
            <img src={item.photos[0]} alt="Photo" className="fpImg" />
            <span className="fpName">{item.name}</span>
            <span className="fpCity">{item.city}</span>
            <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
            {item.rating && (
              <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedProperties;
