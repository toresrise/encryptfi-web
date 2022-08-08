import { useState } from 'react'

export interface UseDialogProps {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

export const useDialog = (opened = false): UseDialogProps => {
    const [isOpen, setIsOpen] = useState(opened)

    return { isOpen, setIsOpen }
}
