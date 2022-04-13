import CategoryCard from "./category-card";
/* 
  */

export default function Categories({ categories }) {
    return (
        <>

            <section class="text-gray-600 body-font hidden md:block">
                <div class="container px-5 mx-auto py-12">

                    <div class="flex flex-wrap -m-4 text-center">
                        {categories.map((category) => (
                            <CategoryCard category={category} />
                        ))
                        }
                    </div>
                </div>
            </section>

        </>
    )
}


