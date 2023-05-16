import style from "./style.module.scss";

const Banner = (props) => {
  const {image, alt} = props;
  return (
    <div className={style.banner}>
      <img
        src={image}
        alt={alt}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
};
export default Banner;
