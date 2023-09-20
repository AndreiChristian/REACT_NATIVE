export interface ButtonProps {
  style?: "primary" | "accent" | "success" | "info" | "warning" | "error",
  text: string,
  onPress?: () => void,
  onLongPress?: () => void,
  disabled?: boolean
}
