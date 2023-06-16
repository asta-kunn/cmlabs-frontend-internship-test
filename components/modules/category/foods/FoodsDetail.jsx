import Link from "next/link";

export const CategoryDetail = ({ detailCategory }) => {
    console.log(detailCategory);
    return (
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white">
        {detailCategory.map((meal) => (
          <div
            key={meal.idMeal}
            className="w-full md:w-[300px] p-5 md:p-8 gap-5 rounded-2xl border-2 flex flex-col justify-center items-center"
          >
            <Link href={`/foods/meals_details/${meal.idMeal}`}>
                <div
                className="relative w-[200px] h-[200px] rounded-lg overflow-hidden flex justify-center items-center"
                style={{
                    backgroundImage: `url(${meal.strMealThumb})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                >
                <h1 className="absolute bottom-0 left-0 px-4 py-2 text-xl font-bold text-white bg-black bg-opacity-70"
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
                    {meal.strMeal}
                </h1>
                </div>
            </Link>    
          </div>
        ))}
      </div>
    );
  };