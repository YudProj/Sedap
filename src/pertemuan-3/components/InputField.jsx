import UserForm from "../UserForm";
export default function InputField({ Label, type, placeholder, onChange }) {
    return (
      <div className="mb-3">
        <label className="block text-gray-700 font-medium mb-1">{Label}</label>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full p-2 border border-gray-300 rounded"
          onChange={onChange}
        />
      </div>
    );
  }