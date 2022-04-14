import CategoryCard from "./category-card";
const categoryColor = [
    'purple-400',
    'teal-400',
    'pink-400',
    'indigo-400'
]
export default function Categories({ categories }) {
    return (
        <>

            <section class=" body-font hidden md:block">
                <div class="container mx-auto py-12">

                    <div class="flex flex-wrap justify-center text-center">
                        {categories.map((category, index) => (
                            <CategoryCard category={category} color={categoryColor[index]}/>
                        ))
                        }
                    </div>
                </div>
            </section>

        </>
    )
}


