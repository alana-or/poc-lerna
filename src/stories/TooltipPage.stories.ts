import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';

import { TooltipModule } from 'tooltip';
import TooltipPageComponent from './tooltip-page.component';

export default {
  title: 'Templates/Pages/Tooltips',
  component: TooltipPageComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TooltipModule],
    }),
  ],
} as Meta;

const Template: Story<TooltipPageComponent> = (args: TooltipPageComponent) => ({
  props: args,
});

export const Tooltips = Template.bind({});
