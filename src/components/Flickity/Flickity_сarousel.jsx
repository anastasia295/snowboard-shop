import "./Flickity.css";
import Flickity from "react-flickity-component";
import Rect from "../../shopImg/categories/Rect.png";

const FlickityOptions = {
  initialIndex: 1,
  wrapAround: "true",
};

const cars = {
  id: [1, 2, 3],
  title: ["WINTER SALE ДО -70%", "WINTER SALE ДО -70%", "WINTER SALE ДО -70%"],
  image: [Rect, Rect, Rect],
};
const Flickity_сarousel = () => {
  return (
    <>
      <div className="app_flickity">
        <Flickity
          className="slider"
          elementType="div"
          disableImagesLoaded={false}
          options={FlickityOptions}
          reloadOnUpdate
          static
        >
          {cars["id"].map((index) => {
            return (
              <div key={index} className="plate">
                {/* <div className="presentation_block">
              <div className="presentation_sale">
                {cars["title"][index - 1]}
              </div>
            </div> */}
                <div className="container_сarousel">
                  <img
                    className="сarousel_img"
                    src={cars["image"][index - 1]}
                  ></img>
                </div>
              </div>
            );
          })}
        </Flickity>
      </div>
    </>
  );
};

export default Flickity_сarousel;
