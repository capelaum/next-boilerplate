import { withKnobs, text } from '@storybook/addon-knobs'
import Main from '.'

const MainStories = {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
}

export const Basic = () => (
  <Main
    title={text('Title', 'React Avançado')}
    description={text(
      'Description',
      'TypeScript, ReactJS, NextJS and Styled Components'
    )}
  />
)

export default MainStories
