
export default function MainCard({ title, children, display_time, onRefresh, id, className = '', ...props }) {
  return (
    <div className={`${className} m-2 border-2 border-green-500 shadow-xl card bg-base-100`}>
      <div className="p-4 card-body">
        <div className="flex justify-between" >
          <h2 className="text-base card-title ">{title}</h2>
          <div className="flex items-center text-sm text-gray-400">
            <span className="self-center inline-block">최근 {display_time}</span><span onClick={onRefresh} className="material-symbols-rounded">refresh</span>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}