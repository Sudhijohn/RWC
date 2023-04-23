import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import Checkbox from "../Checkbox";
import { CheckboxProps } from "../Checkbox.types";

export default {
  title: "Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof Checkbox>;

const Template: StoryFn<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  id: "id-1",
  checked: true,
};
export const Unchecked = Template.bind({});
Unchecked.args = {
  id: "id-2",
  checked: false,
};
