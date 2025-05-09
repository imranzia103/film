interface NavItemsProps {
  href: string;
  text: string;
}
export const NavItems = ({ href, text }: NavItemsProps) => {
  return (
    <li>
      <a
        href={href}
        className=" duration-300 font-medium ease-linear hover:text-primary p-y-3"
      >
        {text}
      </a>
    </li>
  );
};
