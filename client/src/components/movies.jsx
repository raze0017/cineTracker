// eslint-disable-next-line react/prop-types
export default function Movies({ data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {data &&
        // eslint-disable-next-line react/prop-types
        data.map((item) => (
          <div
            key={item.id}
            className="card bg-base-100 shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
          >
            <figure>
              <img
                src={item.poster_url}
                alt={item.title}
                className="w-full h-80 object-contain"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {item.title} ({item.release_year})
              </h2>
              <p>
                <strong>Genre:</strong> {item.genre}
              </p>
              <p>{item.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">More Info</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
