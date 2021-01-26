import "./Item.css";

const Item = ({
  active,
  children,
  onClick, // jsx 保留字段
}) => {
  let className = "navbar__item";

  if (active) {
    className += " navbar__item--active";
  }

  return (
    <a
      onClick={(event) => {
        event.preventDefault();
        onClick();
      }}
      className={className}
    >
      {children}
    </a>
  );
};

export default Item;
