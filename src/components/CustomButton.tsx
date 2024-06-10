import React from 'react';
import Link from 'next/link';
import '../app/globals.css';
import clsx from 'clsx';

type CustomButtonProps = {
  text: string;
  href: string;
  className?: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({ text, href, className }) => {
  return (
    <Link href={href} className={clsx(" py-4 bg-custom-dark hover:shadow-custom-teal hover:shadow-expand text-white font-bold py-2 px-4 rounded-br-2xl shadow-lg shadow-custom-teal transition-shadow duration-300 ease-in-out", className)}>
      {text}
    </Link>
  );
};

export default CustomButton;
