import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';

import { ButtonModule } from 'button';
import ButtonPageComponent from './button-page.component';

export default {
  title: 'Templates/Pages/Buttons',
  component: ButtonPageComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, ButtonModule],
    }),
  ],
} as Meta;

const Template: Story<ButtonPageComponent> = (args: ButtonPageComponent) => ({
  props: args,
});

export const Buttons = Template.bind({});
