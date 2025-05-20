import frameworkData from "./framework.json";
import product from "./product.json";
import { useState } from "react";


export default function FrameworkListSearchFilter() {
   
    // const [searchTerm, setSearchTerm] = useState("");
    // const [selectedTag, setSelectedTag] = useState("");
    
    const [dataForm, setDataForm] = useState({
        searchTerm: "",
        selectedTag: "",
        /*Tambah state lain beserta default value*/
        });
    
    // Handle perubahan nilai input form
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    const _searchTerm = dataForm.searchTerm.toLowerCase();

    const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name
				.toLowerCase()
				.includes(_searchTerm) ||
      framework.description
				.toLowerCase()
				.includes(_searchTerm);

    const matchesTag = dataForm.selectedTag ? framework.tags.includes(dataForm.selectedTag) : true;

    return matchesSearch && matchesTag;
    });

      const allTags = [
        ...new Set(frameworkData.flatMap((framework) => framework.tags)),
      ];

  return (
    <div className="p-8">
      <input
        type="text"
        name="searchTerm"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        value={dataForm.searchTerm}

        onChange={handleChange}
      />

      <select
        className="w-full p-2 border border-gray-300 rounded mb-4"
        value={dataForm.selectedTag}
        name="selectedTag"
        onChange={handleChange}
      >
        <option value="">All Tags</option>
        {allTags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    <div className="grid grid-cols-2 md:grid-cols-3">

    {filteredFrameworks.map((item) => (
        <div
          key={item.id}
          className="border p-4 mb-4 rounded-lg shadow-md bg-white"
        >
          <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
          <p className="text-gray-600">{item.description}</p>
          <p className="text-gray-600">
            Developed by :<a className="font-bold"> {item.details.developer}</a>{" "}
            {item.details.releaseYear}
          </p>
          <p className="text-blue-600">
            <a href={item.details.officialWebsite}>Visit Website</a>
          </p>
          {item.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2"
            >
              {tag}
            </span>
          ))}
        </div>
      ))}
    </div>
</div>
      
  );
}
