import { CategoryDetail } from "@/components/modules/category/foods/FoodsDetail";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const FoodsDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [detailCategory, setDetailCategory] = useState([]);
  console.log(id);
  useEffect(() => {
    if (id) {
      getDetailCategory();
    }
  }, [id]);

  const getDetailCategory = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`
      );

      if (response.data && response.data.meals) {
        setDetailCategory(response.data.meals);
      }
    } catch (error) {
      console.error("Error fetching category details:", error);
    }
  };

  return (
    <div className="px-5 lg:px-20 bg-white">
      <div className="flex flex-col justify-center items-center py-10">
        {/* set title category name */}
        <h1 className="text-4xl text-black font-bold">{id}</h1>
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
      {router.isReady && <CategoryDetail detailCategory={detailCategory} />}
      </div>
      
    </div>
  );
};


export default FoodsDetail;
