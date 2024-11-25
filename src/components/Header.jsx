/* eslint-disable react/prop-types */
export default function Header({ name }) {
  return (
    <>
      <h1 className="font-sans text-2xl text-slate-800 font-bold">Belajar React Bareng {name ? name : "WPU"} 🚀</h1>
    </>
  );
}
