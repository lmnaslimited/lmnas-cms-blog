import CategoryCard from "./category-card";
const categoryColor = [
    'teal-500',
    'indigo-500',
    'purple-500',
    'pink-500',
    
]
export default function Categories({ categories }) {
    return (
        <>

            <section className=" body-font hidden md:block">
                <div className="container mx-auto py-12">

                    <div className="flex flex-wrap justify-center text-center">
                        {categories.map((category, index) => (
                            <CategoryCard key={index} category={category} color={categoryColor[index]}/>
                        ))
                        }
                    </div>
                </div>
            </section>

        </>
    )
}


