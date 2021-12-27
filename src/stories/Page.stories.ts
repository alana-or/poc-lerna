import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import Header from './header.component';
import Page from './page.component';

import * as HeaderStories from './Header.stories';
import { ButtonComponent } from 'button';

export default {
  title: 'Templates/Page',
  component: Page,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent, Header],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<Page> = (args: Page) => ({
  props: args,
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  // More on composing args: https://storybook.js.org/docs/angular/writing-stories/args#args-composition
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
