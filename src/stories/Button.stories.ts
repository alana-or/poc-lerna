import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent, ButtonModule } from 'button';

export default {
  title: 'Templates/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonModule],
    }),
  ],
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
  template:`<sb-button type="primary">botão</sb-button>`
});

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: 'tertiary',
};
