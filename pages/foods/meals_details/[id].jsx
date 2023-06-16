import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";

const MealsDetail = ({ detailMeals }) => {
  const router = useRouter();
  const { id } = router.query;
  const [mealDetail, setMealDetail] = useState(null);

  useEffect(() => {
    if (id) {
      getMealDetail();
    }
  }, [id]);

  const getMealDetail = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );

      if (response.data && response.data.meals && response.data.meals.length > 0) {
        setMealDetail(response.data.meals[0]);
      }
    } catch (error) {
      console.error("Error fetching meal details:", error);
    }
  };

  if (!mealDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full pt-10 bg-white">
      <div className="mx-auto md:w-3/4 bg-white">
        <img src={mealDetail.strMealThumb} alt={mealDetail.strMeal} className="w-full" />
        <h1 className="text-3xl font-bold uppercase mt-5 text-black">{mealDetail.strMeal}</h1>
        <p className="text-lg text-black">{mealDetail.strCategory}</p>
        <p className="text-lg text-black">{mealDetail.strArea}</p>
        <p className="mt-5 text-black">{mealDetail.strInstructions}</p>
        {mealDetail.strYoutube && (
        <div className="mt-5">
          <h2 className="text-xl font-bold mb-2">Watch the video:</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              title="YouTube Video"
              className="w-full h-full"
              src={mealDetail.strYoutube}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default MealsDetail;
