export default function Slide({ isActive, children }) {
  return (
    <div
      className={`${
        isActive ? 'flex opacity-100 z-10' : 'hidden opacity-0'
      } h-screen w-screen flex-col justify-center items-center transition-opacity duration-500 absolute top-0 left-0`}
    >
      {children}
    </div>
  );
}
