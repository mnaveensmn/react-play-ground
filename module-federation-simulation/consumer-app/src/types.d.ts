declare module 'providerApp/Button' {
  import React from 'react';
  
  interface ButtonProps {
    text: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
  }
  
  const Button: React.FC<ButtonProps>;
  export default Button;
}

declare module 'providerApp/Header' {
  import React from 'react';
  
  const Header: React.FC;
  export default Header;
}
