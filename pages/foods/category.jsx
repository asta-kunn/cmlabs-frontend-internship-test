import { FoodsCards } from '@/components/modules/category/foods/FoodsCards';
import axios from 'axios';
import { useRouter } from 'next/router';

const CategoryMenu = ({ categories }) => {
    const router = useRouter();

    return (
        <div className="px-5 lg:px-20 bg-white">
          {/* create text tittle  */}
            <div className="flex flex-col justify-center items-center py-10">
                <h1 className="text-4xl text-black font-bold">See All The Delicious Foods</h1>
            </div>
            {/* create card menu */}
            <div className="flex flex-wrap gap-6 justify-center">
             {categories.map((category) => (
             <FoodsCards key={category.idCategory} {...category} />
             ))}
            </div>
            {/* wrap in container , tempatkan di bawah judul */}
        </div>
        
        

      );
    };
    
    export const getServerSideProps = async () => {
      const res = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
      const data = await res.data;
    
      if (res.status === 200) {
        return {
          props: {
            categories: data.categories,
          },
        };
      }
    
      return {
        props: {
          categories: [],
        },
      };
    };

export default CategoryMenu;