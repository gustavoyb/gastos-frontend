'use client';

import { Box, Heading, Text, Button } from '@primer/react'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard')
    } else {
      router.push('/auth/login')
    }
  }, [isAuthenticated, router])

  return (
    <Box p={4}>
      <Heading as="h1" sx={{ mb: 3 }}>
        Bienvenido a Gastos App
      </Heading>
      <Text as="p" sx={{ mb: 3 }}>
        Una aplicación para gestionar tus gastos de manera eficiente.
      </Text>
      <Button
        variant="primary"
        onClick={() => router.push('/auth/login')}
      >
        Comenzar
      </Button>
    </Box>
  )
}
