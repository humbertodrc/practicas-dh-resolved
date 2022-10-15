import { useState } from 'react';


export const useDisClosure = () => {

  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    if(!isOpen) {
      setIsOpen(true);
    }
  }

  const close = () => {
    if(isOpen) {
      setIsOpen(false);
    }
  }

  const togle = () => setIsOpen((prevState) => !prevState);

  return {
    isOpen,
    open,
    close,
    togle,
  }
}