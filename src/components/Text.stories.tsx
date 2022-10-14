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

export const Default: StoryObj = {}
export const Small: StoryObj = {
  args: {
    size: 'sm',
  },
}
export const Large: StoryObj = {
  args: {
    size: 'lg',
  },
}
