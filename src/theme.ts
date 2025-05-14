import { theme } from '@primer/react'

export const customTheme = {
    ...theme,
    colorSchemes: {
        light: theme.colorSchemes?.light || {},
        dark: theme.colorSchemes?.dark || {}
    },
    fonts: {
        ...theme.fonts
    }
}