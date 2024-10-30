function Header() {
    return (
        <h1 className="text-3xl font-bold underline">
            {import.meta.env.VITE_Hi}
        </h1>
    )
}

export default Header;