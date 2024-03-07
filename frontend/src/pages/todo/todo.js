import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import "./todo.scss";
import PageMenu from "../../components/pageMenu/PageMenu";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import { toast } from "react-toastify";
import Notification from "../../components/notification/Notification.js";
import { getTasks, createTodo } from "../../redux/features/auth/authSlice";

const Todo = () => {
  useRedirectLoggedOutUser("/login");
  const { isLoading, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    dispatch(getTasks()).then((response) => {
      if (response.payload) {
        setTasks(response.payload);
      }
    });
  }, [dispatch]);

  const todomake = async (e) => {
    e.preventDefault();

    if (!title || !date) {
      return toast.error("All fields are required");
    }

    const postData = {
      title,
      date,
    };

    await dispatch(createTodo(postData));
  };

  return (
    <>
      <section>
        {isLoading && <Loader />}
        <div className="container">
          <PageMenu />
          <h2>Todo List</h2>
          <div className="--flex-start profile">
            <Card cardClass={"card"}>
              {!isLoading && user && (
                <>
                  <table>
                    <thead>
                      <tr>
                        <th>title</th>
                        <th>date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tasks.map((task, index) => (
                        <tr key={index}>
                          <td>{task.title}</td>
                          <td>{task.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <form onSubmit={todomake}>
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
