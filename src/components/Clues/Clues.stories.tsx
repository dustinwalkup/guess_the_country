import type { Meta, StoryObj } from "@storybook/react";

import { Clues } from "./Clues";

const meta: Meta<typeof Clues> = {
  title: "Components/Clues",
  component: Clues,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    countryAnswer: {
      capital: "Vienna",
      code: "AT",
      continent: {
        name: "Europe",
      },
      languages: [
        {
          name: "German",
        },
      ],
      name: "Austria",
    },
    resetGame: false,
  },
};
