import ImageGallery from "react-image-gallery";
import images from "../../utils/SneakerImages/SneakerImages.ts"
import "./SneakerImage.css"
import {ImageWrapper} from "./SneakerImage.styles.ts"

export const SneakerImage: React.FC = () => {



    return(
        <ImageWrapper>
        <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} showThumbnails={true}  />

        </ImageWrapper>
    )
}

export default SneakerImage