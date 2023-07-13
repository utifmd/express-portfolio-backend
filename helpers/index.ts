export enum FileUploadFieldNames {
    SINGLE = "image-upload", MULTIPLE = "images-upload"
}
export enum FileDeleteFieldNames {
    SINGLE = "image-delete", MULTIPLE = "images-delete"
}
export const FILE_UPLOAD_DESTINATION: string = "public/images"
export const PUBLIC_FILE_UPLOAD_DESTINATION: string = "public"
export const IMAGE_PLACEHOLDER_URL: string = "https://via.placeholde.com/150"
export function getPathName(url: string) {
    const {pathname} = new URL(url)
    return pathname;
}