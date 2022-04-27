import React, { useState, useEffect } from 'react';
export function useLive(reference: any) {
  const [value, setValue] = useState<any>(undefined);
  useEffect(() => {
    return reference.subscribe((newValue: React.SetStateAction<any>) => {
      if(Array.isArray(newValue)) {
        setValue([...newValue])
      } else if(typeof newValue === 'object') {
        setValue({...newValue})
      } else {
        setValue(newValue)
      }
    })
  }, [reference.__fullPath]);
  return value;
}