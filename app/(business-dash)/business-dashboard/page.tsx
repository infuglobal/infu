import { fetchPools, fetchCategories } from "@/lib/serveraction";
import BusinessSearchGrid from "../components/BusinessSearchGrid";


export default async function ExploreInvestors({

}) {
  
  // Fetch data server-side
  const [businesses, categories] = await Promise.all([
    fetchPools(),
    fetchCategories(),
  ]);

  return (
    <div className="px-6 py-4 w-full h-screen overflow-y-auto">
      <BusinessSearchGrid businesses={businesses} categories={categories} />
    </div>
  );
}
