type Props = { image: string }
export const RandomFox = ({ image }: Props): JSX.Element => {
  return <img width={220} height="auto" src={image} className="rounded" />
}