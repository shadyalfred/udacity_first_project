import path from "path";

export const getImagesPath = (imageFileName: string, isFull = true) => {
    let fullOrThumb = isFull ? "full" : "thumb";

    if (imageFileName.indexOf(".") > -1) {
        return path.join(__dirname, "../../", `assets/${fullOrThumb}`, imageFileName);
    } else {
        return path.join(__dirname, "../../", `assets/${fullOrThumb}`, imageFileName + ".jpg");
    }

}