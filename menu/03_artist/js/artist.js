(function () {
  const formEl = document.querySelector("form");
  const inputCommentEl = document.querySelector(".input_comment");
  const userCommentEl = document.querySelector(".user_comment");

  function CreateComment(con) {
    this.con = con;
    this.init();
  }

  CreateComment.prototype = {
    constructor: CreateComment,
    init: function () {
      const divEl = document.createElement("div");
      divEl.innerHTML = this.con;
      // console.log(divEl);
      userCommentEl.appendChild(divEl);
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputCommentEl.value;
    // console.log(inputValue);

    new CreateComment(inputValue);
    inputCommentEl.value = null;
  };

  formEl.addEventListener("submit", handleSubmit);
})();
