/* eslint-disable react/prop-types */
export default function ArrowRight({ color }) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="25"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M9.33331 4L13.3333 8M13.3333 8L9.33331 12M13.3333 8H3.33331"
          stroke={color}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
