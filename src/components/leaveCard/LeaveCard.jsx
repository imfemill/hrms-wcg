export default function LeaveCard({ title, takenLeave, allowedLeave }) {
  return (
    <div className="flex flex-col bg-gradient-to-t from-blue-50 to-white w-full rounded-lg p-6 text-center border-wcg_blue border-b-2 shadow-xl">
      <span className="text-gray-800 text-xl font-semibold">{title}</span>
      <div className="flex justify-center">
        <div className="w-40 border-b-2 border-wcg_orange pb-1" />
      </div>
      <label className="text-2xl font-medium mt-4">Taken : {takenLeave}</label>
      <label className="text-green-600 font-medium mt-4">
        Allowed : {allowedLeave}
      </label>
    </div>
  );
}
