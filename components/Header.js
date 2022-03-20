import Link from "next/link";
import { useTheme } from "next-themes";

export default function Header() {
	const { theme, setTheme } = useTheme();

	return (
		<header className="bg-primary-content dark:bg-base-100">
			<nav className="navbar max-w-screen-xl mx-auto">
				<div className="navbar-start flex-1">
					<a className="bg-transparent text-black dark:text-slate-50 btn btn-ghost normal-case text-xl">
						Singhlify
					</a>
				</div>
				<div className="navbar-center flex-auto form-control">
					<input
						type="text"
						placeholder="Search"
						className="input input-bordered w-full bg-transparent"
					/>
				</div>
				<div className="navbar-end flex-1 form-control">
					<label className="label cursor-pointer ml-auto">
						<span className="text-black dark:label-text">Light</span>
						<input
							type="checkbox"
							className="toggle ml-4 mr-4"
							checked={theme === "dark" ? true : false}
							onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
						/>
						<span className="text-black dark:label-text">Dark</span>
					</label>
				</div>
			</nav>
		</header>
	);
}
