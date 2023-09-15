import type { Meta, StoryObj } from "@storybook/react";

import { Attempts } from "./Attempts";

const meta: Meta<typeof Attempts> = {
  title: "Components/Attempts",
  component: Attempts,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    numAttempts: 3,
  },
};
