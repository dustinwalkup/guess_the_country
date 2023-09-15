export interface CustomButtonProps {
  /**
   * Text inside button
   */
  buttonText: string;
  /**
   * Button Color
   */
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  /**
   * The variant to use
   */
  variant?: "contained" | "outlined" | "text";
  /**
   * The size of the component.
   */
  size?: "small" | "medium" | "large";
}
