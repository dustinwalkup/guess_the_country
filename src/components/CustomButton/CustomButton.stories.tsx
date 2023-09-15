import type { Meta, StoryObj } from "@storybook/react";

import { CustomButton } from "./CustomButton";

const meta: Meta<typeof CustomButton> = {
  title: "Components/CustomButton",
  component: CustomButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    buttonText: "Base Button",
  },
};

export const Contained: Story = {
  args: {
    buttonText: "Contained",
    variant: "contained",
  },
};

export const ContainedWarning: Story = {
  args: {
    buttonText: "Contained Warning",
    variant: "contained",
    color: "warning",
  },
};
