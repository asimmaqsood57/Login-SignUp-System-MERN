import React from "react";

export default function Alert() {
  return (
    <div>
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Registered Successfully!</strong> You should check in on some of
        those fields below.
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
}
