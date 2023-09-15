export interface HeaderProps {
  /**
   * Title of Header
   */
  title: string;
  /**
   * Color of appbar
   */
  color?: "default" | "inherit" | "primary" | "secondary" | "transparent";
  /**
   * Appbar position
   */
  position?: "absolute" | "fixed" | "relative" | "static" | "sticky";
}
