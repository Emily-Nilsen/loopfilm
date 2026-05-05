import NextImage from 'next/image'
import netlifyImageLoader from '../../imageLoader'

export default function Image(props) {
  return <NextImage loader={netlifyImageLoader} {...props} />
}
