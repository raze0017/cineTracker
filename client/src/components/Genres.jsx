import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function Genres({ data }) {
  const navigate = useNavigate();
  const set = new Set(data.map((item) => item.genre));
  const unique = Array.from(set);
  console.log("Genres Data:", data);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {unique &&
        unique.map((item) => (
          <div
            onClick={() => navigate(`/Genres/${item}`, { state: data })}
            key={item}
            className="card bg-base-100 image-full w-88 shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-primary"
          >
            <div className="card-body  ">
              <p>
                <strong className="card-title flex justify-center">
                  {" "}
                  {item}
                </strong>
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
export default Genres;
