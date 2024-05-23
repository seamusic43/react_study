import MenuItem from "@/components/MenuItem";

const menuitems = [
    { 'url': '/', 'name': 'Home' },
    { 'url': '/login', 'name': 'Login' },
    { 'url': '/introduce', 'name': 'Introduce' },
    { 'url': '/notice', 'name': 'Notice' },
];

export default function Menu() {
    return (
        <div>
            <h1>Menu</h1>
            <ul className="flex grid gap-2">
                {menuitems.map((item, index) => {
                    return <MenuItem key={index} name={item.name} url={item.url} />
                }
                )}
            </ul>
        </div>
    );
}