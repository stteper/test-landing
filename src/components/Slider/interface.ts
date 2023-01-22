import { DetailedHTMLProps, ImgHTMLAttributes } from 'react'

export type ImageData = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>

export interface SliderProps {
  images: ImageData[]
}
