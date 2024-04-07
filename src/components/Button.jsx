import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ classname, href, onClick, children, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${classname || ""}`;

  const span_classes = "relative z-10";

  const render_button = () => (
    <button className={classes} onClick={onClick}>
      <span className={span_classes}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const render_link = () => (
    <a href={href} className={classes}>
      <button className={classes}>
        <span className={span_classes}>{children}</span>
        {ButtonSvg(white)}
      </button>
    </a>
  );

  return href ? render_link() : render_button();
};

export default Button;
