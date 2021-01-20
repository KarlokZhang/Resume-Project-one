import "./Item.css";

const Item = ({
  active,
  href,
  children, // jsx 保留字段
}) => {
  let className = "navbar__item";

  if (active) {
    className += " navbar__item--active";
  }

  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
};

export default Item;
