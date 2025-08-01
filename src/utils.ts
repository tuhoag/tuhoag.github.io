export function getImageUrl(localPath: string) {
  // note that this does not include files in subdirectories
  return new URL(localPath, import.meta.url).href
}