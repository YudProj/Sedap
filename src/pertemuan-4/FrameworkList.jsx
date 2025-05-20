import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        <div className="p-8">
            {frameworkData.map((item) => (
		            <div key={item.id} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
		                <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
		                <p className="text-gray-600">{item.description}</p>
                        <p className="text-gray-600"> Developed by :<a className="font-bold"> {item.details.developer}</a>{" "}{item.details.releaseYear}</p>
                        <p className="text-blue-600"><a href={item.details.officialWebsite}>Visit Website</a></p>
                        {item.tags.map((tag,index)=>(<span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2">
                        {tag}
                        </span>
                        ))}
		            </div>
                    
            ))}
            
        </div>

        
    )
}
