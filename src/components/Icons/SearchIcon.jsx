/* eslint-disable react/prop-types */
export default function SearchIcon({ color }) {
  return (
    <div>
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11" cy="11" r="6" stroke={color} />
        <path d="M20 20L17 17" stroke={color} strokeLinecap="round" />
      </svg>
    </div>
  );
}
