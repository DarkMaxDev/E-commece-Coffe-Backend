import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
	{ href: "/Mexicano", name: "Mexicano", imageUrl: "/Mex.png" },
	{ href: "/Italiano", name: "Italiano", imageUrl: "/Ita.png" },
	{ href: "/Colombiano", name: "Colombiano", imageUrl: "/colom.png" },
	{ href: "/Brasileño", name: "Brasileño", imageUrl: "/brasi.png" },
	{ href: "/Coffe-Vietnam", name: "Coffe-Vietnam", imageUrl: "/Viet.png" },
	{ href: "/Turquino", name: "Turquiano", imageUrl: "/turqui.png" },
	{ href: "/Austriano", name: "Austriano", imageUrl: "/Aus.png" },
];

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-center text-5xl sm:text-6xl font-bold text-amber-50 mb-4'>
					Explore Our Categories
				</h1>
				<p className='text-center text-xl text-gray-300 mb-12'>
				Discover the latest trends in the gaming world.
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
			</div>
		</div>
	);
};
export default HomePage;