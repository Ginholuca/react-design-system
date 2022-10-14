import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}
export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm',
  },
}
export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg',
  },
}
