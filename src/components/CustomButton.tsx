'use client';

import React, { MouseEvent } from 'react';
import Link from 'next/link';
import '../app/globals.css';
import clsx from 'clsx';

type CustomButtonProps = {
  text: string;
  href: string;
  className?: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({ text, href, className }) => {
  const createRipple = (event: MouseEvent<HTMLDivElement>) => {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = 50;
    const radius = diameter / 2;

    const buttonRect = button.getBoundingClientRect();
    const x = event.clientX - buttonRect.left - radius;
    const y = event.clientY - buttonRect.top - radius;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    
    if (ripple) {
      ripple.remove();
    }
    button.appendChild(circle);
  };

  return (
    <Link href={href} passHref>
      <div className={clsx("ripple-container py-4 bg-custom-dark hover:shadow-custom-teal text-white px-4 rounded-br-2xl shadow-lg shadow-custom-teal transition-shadow duration-300 ease-in-out", className)} onClick={createRipple} onMouseOver={createRipple}>
        {text}
      </div>
    </Link>
  );
};

export default CustomButton;