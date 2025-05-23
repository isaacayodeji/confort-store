/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

const SubmitBtn = ({ text }) => {
  const navigation = useNavigate();
  const isSubmitting = navigation.state === "submitting..";
  return (
    <button
      type="submit"
      className="btn btn-primary btn-block"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner"></span>: sending
        </>
      ) : (
        text || "submit"
      )}
    </button>
  );
};
export default SubmitBtn;
