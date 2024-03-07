import React, { useEffect, useLayoutEffect, useState } from "react";
import Card from "../../components/card/Card";
import "./todo.scss";
import PageMenu from "../../components/pageMenu/PageMenu";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import { toast } from "react-toastify";
import Notification from "../../components/notification/Notification.js";

export const shortenText = (text, n) => {
  if (text.length > n) {
    const shortenedText = text.substring(0, n).concat("...");
    return shortenedText;
  }
  return text;
};

const Todo = () => {
  useRedirectLoggedOutUser("/login");
  const { isLoading, isLoggedIn, isSuccess, message, user } = useSelector(
    (state) => state.auth
  );
  const initialState = {
    title: user?.name || "",
    date: user?.email || "",
  };
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const createTodo = async (e) => {
    e.preventDefault();

    if (!title || !date) {
      return toast.error("All fields are required");
    }

    const postData = {
      title,
      date,
    };

    // ToDoを作成するためのロジックを追加する
  };

  return (
    <>
      <section>
        {isLoading && <Loader />}
        {/* {!profile.isVerified && <Notification />} */}
        <div className="container">
          <PageMenu />
          <h2>Todo List</h2>
          <div className="--flex-start profile">
            <Card cardClass={"card"}>
              {!isLoading && user && (
                <>
                  <form onSubmit={createTodo}>
                    <p>
                      <label>title:</label>
                      <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </p>
                    <p>
                      <label>date:</label>
                      <input
                        type="text"
                        name="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </p>
                    
                    <button className="--btn --btn-primary --btn-block">
                      createTodo
                    </button>
                  </form>
                </>
              )}
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Todo;
