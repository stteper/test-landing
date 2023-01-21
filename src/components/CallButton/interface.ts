import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface CallButtonProps
  extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, 'href'> {
  phone: string
}
