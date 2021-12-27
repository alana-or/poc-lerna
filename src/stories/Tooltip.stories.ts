import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { TooltipComponent, TooltipModule } from 'tooltip';

export default {
  title: 'Templates/Tooltip',
  component: TooltipComponent,
  decorators: [
    moduleMetadata({
      imports: [TooltipModule],
    }),
  ],
} as Meta;

const Template: Story<TooltipComponent> = (args: TooltipComponent) => ({
  props: args,
  template:`<sb-tooltip position="right" text="Faça">
              <span>passe o mouse</span>
            </sb-tooltip>`
});

export const TooltipLeft = Template.bind({});
TooltipLeft.args = {
  text: 'Faça uma busca de contas inserindo dados bancários ou informações de contato',
  position:'left'
};

export const TooltipRight = Template.bind({});
TooltipRight.args = {
  text: 'Faça uma busca de contas inserindo dados bancários ou informações de contato',
  position:'right'
};

export const TooltipTop = Template.bind({});
TooltipTop.args = {
  text: 'Faça uma busca de contas inserindo dados bancários ou informações de contato',
  position:'top'
};

export const TooltipTopLeft = Template.bind({});
TooltipTopLeft.args = {
  text: 'Faça uma busca de contas inserindo dados bancários ou informações de contato',
  position:'top-left'
};

export const TooltipTopRight = Template.bind({});
TooltipTopRight.args = {
  text: 'Faça uma busca de contas inserindo dados bancários ou informações de contato',
  position:'top-right'
};

export const TooltipBottom = Template.bind({});
TooltipBottom.args = {
  text: 'Faça uma busca de contas inserindo dados bancários ou informações de contato',
  position:'bottom'
};


export const TooltipBottomLeft = Template.bind({});
TooltipBottomLeft.args = {
  text: 'Faça uma busca de contas inserindo dados bancários ou informações de contato',
  position:'bottom-left'
};

export const TooltipBottomRight = Template.bind({});
TooltipBottomRight.args = {
  text: 'Faça uma busca de contas inserindo dados bancários ou informações de contato',
  position:'bottom-right'
};


