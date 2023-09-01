export type DetectedBarcode = {
  boundingBox: {
    x: number
    y: number
    width: number
    height: number
    top: number
    right: number
    bottom: number
    left: number
  }
  rawValue: string
  format: string
  cornerPoints: {
    x: number
    y: number
  }[]
}
