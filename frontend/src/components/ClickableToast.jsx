const ClickableToast = ({ message, onClick, email }) => (
  <div>
    {message}.
    <span
      onClick={() => onClick(email)}
      className="cursor-pointer text-orange-700 underline ml-3"
    >
      Click here to login.
    </span>
  </div>
);

export default ClickableToast;
