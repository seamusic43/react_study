
export default function AdminTitle({ title, children }) {
  return (
    <div className="flex mt-4">
      <h1 className="text-lg font-bold">{title}</h1>
      {children ? children : null}
    </div>
  );
}