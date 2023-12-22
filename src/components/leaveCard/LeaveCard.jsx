export default function LeaveCard({ title, takenLeave, allowedLeave }) {
  return (
    <div className="flex flex-col bg-blue-50 w-full rounded-lg p-6 text-center drop-shadow-lg">
      <span className="text-gray-800 text-xl font-semibold">{title}</span>
      <div className="flex justify-center">
        <div className="w-24 border-b-4 border-wcg_orange pb-2" />
      </div>
      <span className="mt-4 text-xl font-semibold">
        <label className="bg-blue-100 rounded p-1.5 px-3">
          Taken : {takenLeave}
        </label>
      </span>
      <span className="text-green-500 mt-3">
        <label className="bg-green-100 rounded p-1.5 px-3">
          Allowed : {allowedLeave}
        </label>
      </span>
    </div>
  );
}
