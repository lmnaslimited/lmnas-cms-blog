import CategoryCard from "./category-card";
/* 
  */

export default function Categories({ categories }) {
    return (
        <>

            <section class=" body-font hidden md:block">
                <div class="container mx-auto py-12">

                    <div class="flex flex-wrap justify-center text-center">
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


