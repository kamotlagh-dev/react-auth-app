export default function Input({ label, id, rtl = false, ...props }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} className={rtl ? 'rtl' : ''} {...props} />
    </>
  );
}
