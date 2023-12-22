export default function Select({ options }) {
  return (
    <select className="w-full p-3 px-3 rounded-lg bg-white drop-shadow-md font-medium outline-0">
      <option className="p-3">Select Leave Type</option>
      {options?.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
