import { LmCard, LmCardProps } from '../../../../../core/src'
import { Meta } from '@storybook/react'

export default {
  title: 'core/Content/Card',
  component: LmCard,
} as Meta<typeof LmCard>

export const Basic = {
  args: {
    title: 'Hello World',
    subTitle: 'how are you',
    width: 300,
    height: 500,
    elevate: true,
    elevation: '$4',
    image: {
      width: 300,
      height: 500,
      src: 'https://placekitten.com/300/500',
    },
  } as LmCardProps,
}

export const Bouncy = {
  args: {
    title: 'Hello World',
    subTitle: 'how are you',
    bouncy: true,
  },
}
