import { NavLink } from "react-router"
import { cn } from "@/lib/utils";
const navItems = [
    { to: "/", label: "Home" },
    { to: "article", label: "Article" },
];
const Navigation = () => {
    return (
        <nav className="w-full border-b shadow-sm bg-white">
            <ul className="flex gap-4 px-6 py-3 text-sm justify-center">
                {navItems.map(({ to, label }) => (
                    <li key={to}>
                        <NavLink
                            to={to}
                            className={({ isActive }) =>
                                cn(
                                    "hover:text-primary transition-colors",
                                    isActive ? "text-primary font-semibold" : "text-muted-foreground"
                                )
                            }
                        >
                            {label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Navigation