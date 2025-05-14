import { Box, Heading, Text, Button } from '@primer/react'

export default function Home() {
  return (
    <Box p={4}>
      <Heading as="h1" sx={{ mb: 3 }}>
        Bienvenido a Gastos App
      </Heading>
      <Text as="p" sx={{ mb: 3 }}>
        Una aplicación para gestionar tus gastos de manera eficiente.
      </Text>
      <Button variant="primary">
        Comenzar
      </Button>
    </Box>
  )
}
