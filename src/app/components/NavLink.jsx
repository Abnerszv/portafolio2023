import Link from "next/link";

const NavLink = ({href, title}) => {
    return (
        <Link
            href={href}
            className="block py-2 pl-3 pr-4 text-[#222935] sm:text-xl rounded md:p-0 hover:text-[#346e94]"
        >
            {title}
        </Link>
    );
};

export default NavLink;