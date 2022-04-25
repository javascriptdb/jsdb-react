import React from 'react'
const { useState, useEffect } = React

export function useLive(reference: any) {
  const [value, setValue] = useState(undefined)
  useEffect(() => {
    return reference.subscribe(setValue)
  }, [reference.__fullPath])
  return value
}
