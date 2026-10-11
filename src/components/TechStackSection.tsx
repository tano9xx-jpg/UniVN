import React, { useState } from 'react';

interface TechItem {
  id: string;
  name: string;
  category: 'server' | 'cms' | 'core';
  color: string;
  desktop: { x: number; y: number; tier: 1 | 2 | 3 };
  mobile: { x: number; y: number; tier: 'top' | 'bottom' };
  logo: React.ReactNode;
}

export const TechStackSection: React.FC = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Desktop Center Hub coordinates
  const deskCenterX = 550;
  const deskCenterY = 315;
  const deskTopY = 265;
  const deskBottomY = 365;

  // Mobile Center Hub coordinates
  const mobCenterX = 190;
  const mobCenterY = 315;
  const mobTopY = 275;
  const mobBottomY = 355;

  const techList: TechItem[] = [
    // --- 1. Quản trị Server & OS (Tier 1 Desktop, Top Mobile) ---
    {
      id: 'cpanel',
      name: 'cPanel',
      category: 'server',
      color: '#ff6c2c',
      desktop: { x: 130, y: 65, tier: 1 },
      mobile: { x: 55, y: 45, tier: 'top' },
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current">
          <path d="M7.18 5.48c-3.55 0-6.43 2.92-6.43 6.52 0 3.6 2.88 6.52 6.43 6.52 2.65 0 4.93-1.63 5.9-3.97h-2.9c-.66 1.02-1.79 1.69-3 1.69-2.01 0-3.64-1.66-3.64-3.71s1.63-3.71 3.64-3.71c1.21 0 2.34.67 3 1.69h2.9c-.97-2.34-3.25-3.97-5.9-3.97zm10.74 3.19h-5.46v9.85h2.64v-3.23h2.82c2.51 0 4.54-1.48 4.54-3.31 0-1.83-2.03-3.31-4.54-3.31zm-.18 4.39h-2.64V10.9h2.64c1.16 0 2.05.54 2.05 1.08 0 .54-.89 1.08-2.05 1.08z" />
        </svg>
      )
    },
    {
      id: 'directadmin',
      name: 'DirectAdmin',
      category: 'server',
      color: '#1a73e8',
      desktop: { x: 298, y: 65, tier: 1 },
      mobile: { x: 145, y: 45, tier: 'top' },
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current">
          <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 4.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
        </svg>
      )
    },
    {
      id: 'plesk',
      name: 'Plesk Panel',
      category: 'server',
      color: '#002538',
      desktop: { x: 466, y: 65, tier: 1 },
      mobile: { x: 235, y: 45, tier: 'top' },
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current">
          <path d="M3 3h7.5c4.14 0 7.5 3.36 7.5 7.5S14.64 18 10.5 18H7.5V21H3V3zm4.5 4.5v6H10.5c1.66 0 3-1.34 3-3s-1.34-3-3-3H7.5zM19 12h2v9h-2z" />
        </svg>
      )
    },
    {
      id: 'cyberpanel',
      name: 'CyberPanel',
      category: 'server',
      color: '#00b0ff',
      desktop: { x: 634, y: 65, tier: 1 },
      mobile: { x: 325, y: 45, tier: 'top' },
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-none stroke-current" strokeWidth="2">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
          <circle cx="12" cy="12" r="4" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 'aapanel',
      name: 'aaPanel',
      category: 'server',
      color: '#20a53a',
      desktop: { x: 802, y: 65, tier: 1 },
      mobile: { x: 55, y: 130, tier: 'top' },
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current">
          <rect x="2" y="3" width="9" height="9" rx="2" fill="#20a53a" />
          <rect x="13" y="3" width="9" height="9" rx="2" fill="#20a53a" opacity="0.8" />
          <rect x="2" y="14" width="9" height="9" rx="2" fill="#20a53a" opacity="0.8" />
          <rect x="13" y="14" width="9" height="9" rx="2" fill="#20a53a" />
        </svg>
      )
    },
    {
      id: 'ubuntu',
      name: 'Ubuntu',
      category: 'server',
      color: '#e95420',
      desktop: { x: 970, y: 65, tier: 1 },
      mobile: { x: 145, y: 130, tier: 'top' },
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="6" cy="12" r="2" />
          <circle cx="15" cy="6.8" r="2" />
          <circle cx="15" cy="17.2" r="2" />
        </svg>
      )
    },

    // --- 2. WordPress & Web Server & Hạ tầng (Tier 2 Desktop, Top Mobile) ---
    {
      id: 'wordpress',
      name: 'WordPress',
      category: 'cms',
      color: '#21759b',
      desktop: { x: 170, y: 175, tier: 2 },
      mobile: { x: 235, y: 130, tier: 'top' },
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current">
          <path d="M12 2C6.486 2 2 6.486 2 12c0 5.515 4.486 10 10 10 5.515 0 10-4.485 10-10 0-5.514-4.485-10-10-10zm-8.23 9.948c0-1.849.626-3.551 1.68-4.908l4.49 12.302c-3.69-1.572-6.17-5.215-6.17-7.394zm8.23 8.286c-.957 0-1.874-.18-2.716-.505l2.955-8.591 3.029 8.3c-.021.004-.042.012-.064.016-.99.502-2.128.78-3.204.78zm5.548-2.617l-3.376-9.8c.84-.043 1.597-.134 1.597-.134.421-.044.376-.669-.044-.669 0 0-1.285.132-2.115.132-.785 0-2.072-.132-2.072-.132-.421 0-.466.625-.044.669 0 0 .714.091 1.467.134l-2.035 6.096-1.558-4.707.962-.037c.421-.044.376-.669-.045-.669 0 0-1.284.132-2.114.132-.178 0-.395-.008-.627-.019C6.884 4.542 9.297 3.766 12 3.766c3.27 0 6.115 1.776 7.643 4.417-.11.008-.22.017-.32.017-1.328 0-2.271-.973-2.271-2.036 0-.84.53-1.636 1.414-1.636.088 0 .178.01.265.024C16.839 3.513 14.536 2.8 12 2.8c-4.41 0-8.083 3.125-8.986 7.288 1.157-.033 2.22-.054 2.22-.054.421 0 .466-.625.044-.669 0 0-.713-.09-1.466-.134l3.14 9.117 1.888-5.632-1.344-3.676c.712-.043 1.343-.134 1.343-.134.421-.044.376-.669-.045-.669 0 0-1.284.132-2.114.132-.829 0-2.114-.132-2.114-.132-.421 0-.466.625-.044.669 0 0 .755.091 1.508.134L4.8 14.1c1.885 3.57 5.617 6.134 9.948 6.134 1.341 0 2.617-.25 3.79-.705l-3.09-8.495z" />
        </svg>
      )
    },
    {
      id: 'woocommerce',
      name: 'WooCommerce',
      category: 'cms',
      color: '#96588a',
      desktop: { x: 322, y: 175, tier: 2 },
      mobile: { x: 325, y: 130, tier: 'top' },
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current">
          <path d="M2.5 5.5C2.5 4.12 3.62 3 5 3h14c1.38 0 2.5 1.12 2.5 2.5v9c0 1.38-1.12 2.5-2.5 2.5h-4l-3 4-3-4H5c-1.38 0-2.5-1.12-2.5-2.5v-9zm4 3a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 3 0V10A1.5 1.5 0 0 0 6.5 8.5zm5.5 0a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 3 0V10A1.5 1.5 0 0 0 12 8.5zm5.5 0a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 3 0V10a1.5 1.5 0 0 0-1.5-1.5z" />
        </svg>
      )
    },
    {
      id: 'litespeed',
      name: 'LiteSpeed',
      category: 'server',
      color: '#00843d',
      desktop: { x: 474, y: 175, tier: 2 },
      mobile: { x: 55, y: 215, tier: 'top' },
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current">
          <path d="M13 2L3 14h8l-2 8 11-12h-8l3-8z" />
        </svg>
      )
    },
    {
      id: 'nginx',
      name: 'Nginx',
      category: 'server',
      color: '#009639',
      desktop: { x: 626, y: 175, tier: 2 },
      mobile: { x: 145, y: 215, tier: 'top' },
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current">
          <path d="M12 2l10 5.8v11.4L12 25 2 19.2V7.8L12 2zm0 2.3L4 8.9v9.8l8 4.6 8-4.6V8.9l-8-4.6zm-1.8 4.2h3.6l4 8.7h-3.6l-4-8.7zm-2.2 0h2.2v8.7H8V8.5zm8 0h2.2v8.7H16V8.5z" />
        </svg>
      )
    },
    {
      id: 'docker',
      name: 'Docker',
      category: 'server',
      color: '#2496ed',
      desktop: { x: 778, y: 175, tier: 2 },
      mobile: { x: 235, y: 215, tier: 'top' },
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current">
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186zM23.959 10.9a11.144 11.144 0 00-4.041-3.666s-.892-.577-2.381-.223c-.354.084-.666.27-.887.534-.143.167-.312.441-.446.73a.186.186 0 01-.17.114H1.385a.8.8 0 00-.8.8v2.4a6.8 6.8 0 004.8 6.514 14.542 14.542 0 006.4 1.343c6.4 0 11.2-4.267 12.174-8.514.053-.23.08-.47.08-.714 0-.112-.027-.225-.08-.328z" />
        </svg>
      )
    },
    {
      id: 'cloudflare',
      name: 'Cloudflare',
      category: 'server',
      color: '#f38020',
      desktop: { x: 930, y: 175, tier: 2 },
      mobile: { x: 325, y: 215, tier: 'top' },
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current">
          <path d="M19.4 12.7c-.1-.7-.4-1.3-.9-1.8-.5-.5-1.2-.8-1.9-.9-.3-.8-.8-1.5-1.5-2-.7-.5-1.6-.7-2.5-.6-.8.1-1.6.4-2.2.9-.6.5-1 1.2-1.2 2-.5-.2-1.1-.2-1.6-.1-.5.1-1 .4-1.4.8-.4.4-.7.9-.8 1.4-.1.5 0 1.1.2 1.6-.6.3-1.1.8-1.4 1.4-.3.6-.4 1.3-.2 2 .2.7.6 1.3 1.1 1.7.5.4 1.2.6 1.9.6h11.8c.8 0 1.6-.3 2.1-.9.6-.6.9-1.4.9-2.2 0-.8-.3-1.6-.8-2.2-.4-.7-1.1-1.2-1.9-1.7z" />
        </svg>
      )
    },

    // --- 3. Core Frameworks & CSDL (Tier 3 Desktop, Bottom Mobile) ---
    {
      id: 'react',
      name: 'React',
      category: 'core',
      color: '#06b6d4',
      desktop: { x: 110, y: 505, tier: 3 },
      mobile: { x: 55, y: 415, tier: 'bottom' },
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-none stroke-current" strokeWidth="1.5">
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.8" className="fill-current stroke-none" />
        </svg>
      )
    },
    {
      id: 'nextjs',
      name: 'Next.js',
      category: 'core',
      color: '#0f172a',
      desktop: { x: 236, y: 505, tier: 3 },
      mobile: { x: 145, y: 415, tier: 'bottom' },
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm-1.077 14.154H9.5V7.846h1.423v8.308zm5.731 0h-1.423l-3.385-5.539v5.539H8.423V7.846h1.423l3.385 5.538V7.846h1.423v8.308z" />
        </svg>
      )
    },
    {
      id: 'vuejs',
      name: 'Vue.js',
      category: 'core',
      color: '#42b883',
      desktop: { x: 362, y: 505, tier: 3 },
      mobile: { x: 235, y: 415, tier: 'bottom' },
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current">
          <path d="M2 3h3.5L12 14.5 18.5 3H22L12 21 2 3zm4.5 0h3L12 7.5 14.5 3h3L12 12 6.5 3z" />
        </svg>
      )
    },
    {
      id: 'laravel',
      name: 'Laravel',
      category: 'core',
      color: '#ff2d20',
      desktop: { x: 488, y: 505, tier: 3 },
      mobile: { x: 325, y: 415, tier: 'bottom' },
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current">
          <path d="M8.28 14.34l-5.74-3.32a.75.75 0 0 1 0-1.3l5.74-3.32a.75.75 0 0 1 .75 0l5.74 3.32a.75.75 0 0 1 0 1.3l-5.74 3.32a.75.75 0 0 1-.75 0zm7.44-4.3l5.74-3.32a.75.75 0 0 0 0-1.3L15.72 2.1a.75.75 0 0 0-.75 0L9.23 5.42a.75.75 0 0 0 0 1.3l5.74 3.32a.75.75 0 0 0 .75 0zm0 7.85l5.74-3.32a.75.75 0 0 0 0-1.3l-5.74-3.32a.75.75 0 0 0-.75 0l-5.74 3.32a.75.75 0 0 0 0 1.3l5.74 3.32a.75.75 0 0 0 .75 0z" />
        </svg>
      )
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      category: 'core',
      color: '#339933',
      desktop: { x: 612, y: 505, tier: 3 },
      mobile: { x: 55, y: 505, tier: 'bottom' },
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current">
          <path d="M12 2l9.5 5.5v11L12 24l-9.5-5.5v-11L12 2zm0 2.31L4.5 8.65v8.7L12 21.69l7.5-4.34v-8.7L12 4.31zM11 9h2v6h-2V9z" />
        </svg>
      )
    },
    {
      id: 'python',
      name: 'Python',
      category: 'core',
      color: '#3776ab',
      desktop: { x: 738, y: 505, tier: 3 },
      mobile: { x: 145, y: 505, tier: 'bottom' },
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current">
          <path d="M11.914 2c-3.155 0-5.01 1.764-5.01 3.528v2.646h5.114v.882H4.48c-1.848 0-3.48 1.488-3.48 3.528 0 2.04 1.444 3.528 3.48 3.528h2.04v-2.822c0-1.87 1.637-3.352 3.48-3.352h5.114v-.882h-3.2v-3.53c0-1.764-1.855-3.526-5.01-3.526zm-1.54 1.323a.77.77 0 1 1 0 1.543.77.77 0 0 1 0-1.543zm1.712 9.255c3.155 0 5.01-1.764 5.01-3.528V6.404h-5.114v-.882h7.534c1.848 0 3.48-1.488 3.48-3.528 0-2.04-1.444-3.528-3.48-3.528h-2.04v2.822c0 1.87-1.637 3.352-3.48 3.352h-5.114v.882h3.2v3.53c0 1.764 1.855 3.526 5.01 3.526zm1.54-1.323a.77.77 0 1 1 0-1.543.77.77 0 0 1 0 1.543z" />
        </svg>
      )
    },
    {
      id: 'mysql',
      name: 'MySQL',
      category: 'core',
      color: '#00758f',
      desktop: { x: 864, y: 505, tier: 3 },
      mobile: { x: 235, y: 505, tier: 'bottom' },
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current">
          <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4 21l3.5-.96C9.07 20.61 10.49 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 13.5v-3H9v-2h2V9h2v2.5h2v2h-2v3h-2z" />
        </svg>
      )
    },
    {
      id: 'redis',
      name: 'Redis',
      category: 'core',
      color: '#dc382d',
      desktop: { x: 990, y: 505, tier: 3 },
      mobile: { x: 325, y: 505, tier: 'bottom' },
      logo: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current">
          <path d="M2.5 7.5L12 2l9.5 5.5v9L12 22l-9.5-5.5v-9zM12 4.2L4.5 8.5 12 12.8l7.5-4.3L12 4.2zm0 10.3l-7-4v6.5l7 4 7-4v-6.5l-7 4z" />
        </svg>
      )
    }
  ];

  // Desktop Bezier Curves
  const getDesktopPath = (node: TechItem) => {
    if (node.desktop.tier === 1 || node.desktop.tier === 2) {
      const startX = node.desktop.x;
      const startY = node.desktop.y + 24;
      const endX = deskCenterX;
      const endY = deskTopY;
      const midY = (startY + endY) / 2;
      return `M ${startX} ${startY} C ${startX} ${midY}, ${endX} ${midY}, ${endX} ${endY}`;
    } else {
      const startX = deskCenterX;
      const startY = deskBottomY;
      const endX = node.desktop.x;
      const endY = node.desktop.y - 24;
      const midY = (startY + endY) / 2;
      return `M ${startX} ${startY} C ${startX} ${midY}, ${endX} ${midY}, ${endX} ${endY}`;
    }
  };

  // Mobile Bezier Curves
  const getMobilePath = (node: TechItem) => {
    if (node.mobile.tier === 'top') {
      const startX = node.mobile.x;
      const startY = node.mobile.y + 18;
      const endX = mobCenterX;
      const endY = mobTopY;
      const midY = (startY + endY) / 2;
      return `M ${startX} ${startY} C ${startX} ${midY}, ${endX} ${midY}, ${endX} ${endY}`;
    } else {
      const startX = mobCenterX;
      const startY = mobBottomY;
      const endX = node.mobile.x;
      const endY = node.mobile.y - 18;
      const midY = (startY + endY) / 2;
      return `M ${startX} ${startY} C ${startX} ${midY}, ${endX} ${midY}, ${endX} ${endY}`;
    }
  };

  return (
    <div className="w-full">
      {/* SECTION HEADER - Clean title */}
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
          Công Nghệ Chúng Tôi Sử Dụng
        </h2>
      </div>

      {/* DIAGRAM CONTAINER */}
      <div className="relative w-full max-w-5xl mx-auto bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50 rounded-3xl border border-slate-200/80 p-3 sm:p-6 lg:p-8 shadow-xs overflow-hidden">
        
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[300px] bg-gradient-to-r from-teal-500/5 via-[#0baba0]/10 to-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* ========================================================
            1. DESKTOP DIAGRAM (Visible on md screens and up >= 768px)
            ======================================================== */}
        <div className="hidden md:block relative w-full aspect-[1100/600]">
          <svg viewBox="0 0 1100 600" className="w-full h-full select-none overflow-visible">
            {/* Desktop Shadow Filter */}
            <defs>
              <filter id="deskNodeShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.08" floodColor="#0f172a" />
              </filter>
              <filter id="deskHubShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.18" floodColor="#0baba0" />
              </filter>
            </defs>

            {/* Connecting lines */}
            <g>
              {techList.map((node) => {
                const isHovered = hoveredNode === node.id;
                return (
                  <path
                    key={`desk-line-${node.id}`}
                    d={getDesktopPath(node)}
                    fill="none"
                    stroke={isHovered ? '#0baba0' : '#e2e8f0'}
                    strokeWidth={isHovered ? 2.5 : 1.25}
                    strokeDasharray={isHovered ? 'none' : '4 3'}
                    strokeLinecap="round"
                    className="transition-colors duration-200"
                    opacity={hoveredNode === null ? 0.85 : isHovered ? 1 : 0.3}
                  />
                );
              })}
            </g>

            {/* Center Hub: Uni Creation */}
            <g transform={`translate(${deskCenterX}, ${deskCenterY})`}>
              <circle
                r="54"
                fill="none"
                stroke="#0baba0"
                strokeWidth="1.5"
                strokeDasharray="6 4"
                opacity="0.5"
              />
              <circle
                r="46"
                fill="none"
                stroke="#0baba0"
                strokeWidth="2.5"
                opacity="0.9"
              />
              <circle
                r="40"
                fill="#ffffff"
                filter="url(#deskHubShadow)"
                stroke="#e2e8f0"
                strokeWidth="1"
              />
              <circle r="34" fill="#f0fdfa" />

              {/* Uni Creation Logo Emblem */}
              <g transform="translate(-15, -17) scale(0.064)">
                <path
                  d="M0,268.738A277.57,277.57,0,0,1,208.253,0V173.867h0l0,94.528c0,37.886,29.91,69.316,69.151,69.327a69.368,69.368,0,0,0,68.892-61.471c.011.643.048,1.278.048,1.923A108.493,108.493,0,0,1,237.845,386.67a109.684,109.684,0,0,1-50.4-12c-28.413-23.886-46.52-59.063-48.829-98.509-.159-2.734-.212-5.316-.212-8.09l.005-32.783,0,.008v-120.8A207.129,207.129,0,0,0,69.772,268.738c0,114.69,92.975,207.664,207.663,207.664a206.97,206.97,0,0,0,144.926-58.954c.572-.557,1.116-1.142,1.668-1.718l49.345,49.345c-.342.341-.656.708-1,1.048a276.53,276.53,0,0,1-194.939,80.05C124.212,546.173,0,421.962,0,268.738Z"
                  fill="#0baba0"
                />
                <path
                  d="M416.391,28.706A275.707,275.707,0,0,0,346.542.039v262.82c0,1.821.005,3.609.005,5.458s.039,3.632-.05,5.552c-.044.933-.115,1.579-.206,2.383.011.643.048,1.278.048,1.924A108.493,108.493,0,0,1,237.845,386.67a110,110,0,0,1-50.476-12.044,139.265,139.265,0,0,0,229.008-98.494c0-.076.011-.152.015-.229V159.692h0Z"
                  fill="#15ab9f"
                />
              </g>

              <text
                y="55"
                textAnchor="middle"
                className="fill-[#0f172a] font-bold text-[11px] tracking-wide"
              >
                Uni Creation
              </text>
            </g>

            {/* Desktop Tech Nodes: Rock-solid stationary hitbox, NO JITTER / NO SHIFT */}
            {techList.map((node) => {
              const isHovered = hoveredNode === node.id;
              const { x, y } = node.desktop;

              return (
                <g
                  key={`desk-node-${node.id}`}
                  transform={`translate(${x}, ${y})`}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className="cursor-pointer"
                >
                  {/* Stable stationary hit area */}
                  <circle r="30" fill="transparent" />

                  {/* Circular Node Background */}
                  <circle
                    r="24"
                    fill="#ffffff"
                    stroke={isHovered ? node.color : '#e2e8f0'}
                    strokeWidth={isHovered ? 2.25 : 1}
                    filter="url(#deskNodeShadow)"
                    className="transition-colors duration-150"
                  />

                  {/* Soft Brand background */}
                  <circle
                    r="19"
                    fill={`${node.color}15`}
                  />

                  {/* Centered Logo */}
                  <foreignObject
                    x="-12"
                    y="-12"
                    width="24"
                    height="24"
                    className="pointer-events-none"
                  >
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{ color: node.color }}
                    >
                      {node.logo}
                    </div>
                  </foreignObject>

                  {/* Name Label */}
                  <text
                    y="38"
                    textAnchor="middle"
                    className={`font-semibold text-[11px] tracking-tight transition-colors duration-150 ${
                      isHovered ? 'fill-[#0baba0] font-bold' : 'fill-slate-700'
                    }`}
                  >
                    {node.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* ========================================================
            2. MOBILE DIAGRAM (Optimized for small screens < 768px)
               Fits perfectly on portrait phone screens (no horizontal scroll)
            ======================================================== */}
        <div className="block md:hidden relative w-full aspect-[380/580] max-w-sm mx-auto">
          <svg viewBox="0 0 380 580" className="w-full h-full select-none overflow-visible">
            <defs>
              <filter id="mobNodeShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="1.5" stdDeviation="2.5" floodOpacity="0.08" floodColor="#0f172a" />
              </filter>
              <filter id="mobHubShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="3" stdDeviation="5" floodOpacity="0.16" floodColor="#0baba0" />
              </filter>
            </defs>

            {/* Connecting lines for Mobile */}
            <g>
              {techList.map((node) => {
                const isHovered = hoveredNode === node.id;
                return (
                  <path
                    key={`mob-line-${node.id}`}
                    d={getMobilePath(node)}
                    fill="none"
                    stroke={isHovered ? '#0baba0' : '#e2e8f0'}
                    strokeWidth={isHovered ? 2 : 1}
                    strokeDasharray={isHovered ? 'none' : '3 2'}
                    strokeLinecap="round"
                    className="transition-colors duration-200"
                    opacity={hoveredNode === null ? 0.85 : isHovered ? 1 : 0.3}
                  />
                );
              })}
            </g>

            {/* Center Hub: Uni Creation for Mobile */}
            <g transform={`translate(${mobCenterX}, ${mobCenterY})`}>
              <circle
                r="44"
                fill="none"
                stroke="#0baba0"
                strokeWidth="1.25"
                strokeDasharray="5 3"
                opacity="0.5"
              />
              <circle
                r="38"
                fill="none"
                stroke="#0baba0"
                strokeWidth="2"
                opacity="0.9"
              />
              <circle
                r="32"
                fill="#ffffff"
                filter="url(#mobHubShadow)"
                stroke="#e2e8f0"
                strokeWidth="1"
              />
              <circle r="27" fill="#f0fdfa" />

              {/* Uni Creation Logo Emblem */}
              <g transform="translate(-12, -14) scale(0.052)">
                <path
                  d="M0,268.738A277.57,277.57,0,0,1,208.253,0V173.867h0l0,94.528c0,37.886,29.91,69.316,69.151,69.327a69.368,69.368,0,0,0,68.892-61.471c.011.643.048,1.278.048,1.923A108.493,108.493,0,0,1,237.845,386.67a109.684,109.684,0,0,1-50.4-12c-28.413-23.886-46.52-59.063-48.829-98.509-.159-2.734-.212-5.316-.212-8.09l.005-32.783,0,.008v-120.8A207.129,207.129,0,0,0,69.772,268.738c0,114.69,92.975,207.664,207.663,207.664a206.97,206.97,0,0,0,144.926-58.954c.572-.557,1.116-1.142,1.668-1.718l49.345,49.345c-.342.341-.656.708-1,1.048a276.53,276.53,0,0,1-194.939,80.05C124.212,546.173,0,421.962,0,268.738Z"
                  fill="#0baba0"
                />
                <path
                  d="M416.391,28.706A275.707,275.707,0,0,0,346.542.039v262.82c0,1.821.005,3.609.005,5.458s.039,3.632-.05,5.552c-.044.933-.115,1.579-.206,2.383.011.643.048,1.278.048,1.924A108.493,108.493,0,0,1,237.845,386.67a110,110,0,0,1-50.476-12.044,139.265,139.265,0,0,0,229.008-98.494c0-.076.011-.152.015-.229V159.692h0Z"
                  fill="#15ab9f"
                />
              </g>

              <text
                y="46"
                textAnchor="middle"
                className="fill-[#0f172a] font-bold text-[10px] tracking-wide"
              >
                Uni Creation
              </text>
            </g>

            {/* Mobile Tech Nodes: Sized and spaced for phones */}
            {techList.map((node) => {
              const isHovered = hoveredNode === node.id;
              const { x, y } = node.mobile;

              return (
                <g
                  key={`mob-node-${node.id}`}
                  transform={`translate(${x}, ${y})`}
                  onTouchStart={() => setHoveredNode(node.id)}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className="cursor-pointer"
                >
                  {/* Stable stationary hit area */}
                  <circle r="25" fill="transparent" />

                  {/* Circular Node Background */}
                  <circle
                    r="18"
                    fill="#ffffff"
                    stroke={isHovered ? node.color : '#e2e8f0'}
                    strokeWidth={isHovered ? 2 : 1}
                    filter="url(#mobNodeShadow)"
                    className="transition-colors duration-150"
                  />

                  {/* Soft Brand background */}
                  <circle
                    r="14"
                    fill={`${node.color}15`}
                  />

                  {/* Centered Logo */}
                  <foreignObject
                    x="-9"
                    y="-9"
                    width="18"
                    height="18"
                    className="pointer-events-none"
                  >
                    <div
                      className="w-full h-full flex items-center justify-center scale-90"
                      style={{ color: node.color }}
                    >
                      {node.logo}
                    </div>
                  </foreignObject>

                  {/* Name Label */}
                  <text
                    y="30"
                    textAnchor="middle"
                    className={`font-semibold text-[10px] tracking-tight transition-colors duration-150 ${
                      isHovered ? 'fill-[#0baba0] font-bold' : 'fill-slate-700'
                    }`}
                  >
                    {node.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

      </div>
    </div>
  );
};
