export default function Select({ options, placeholder }) {
  return (
    <select
      className="w-full p-3 px-3 rounded-lg bg-white outline-0"
    >
      <option className="p-3">{placeholder}</option>
      {options?.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
