export enum FileUploadFieldNames {
    SINGLE = "image-upload", MULTIPLE = "images-upload"
}
export const IMAGE_PLACEHOLDER_URL: string = "https://via.placeholde.com/150"

export function getPathName(url: string) {
    const {pathname} = new URL(url)
    return pathname;
}