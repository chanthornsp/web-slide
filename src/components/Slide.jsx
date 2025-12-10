export default function Slide({ isActive, children }) {
  return (
    <div
      className={`${
        isActive ? 'flex opacity-100 z-10' : 'hidden opacity-0'
      } min-h-screen w-full md:h-screen md:w-screen flex-col justify-center items-center px-4 md:px-0 py-8 md:py-0 transition-opacity duration-500 md:absolute top-0 left-0`}
    >
      {children}
    </div>
  );
}
