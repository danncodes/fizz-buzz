interface HeaderProps {
  title: string;
  description: string;
}

function Header({ title, description }: HeaderProps) {
  return (
    <header className="text-center my-10">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p>{description}</p>
    </header>
  );
}

export default Header;
