import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);

  // useEffect(() => {
  //   const fetchAppointments = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         "http://localhost:4000/api/v1/appointment/getall",
  //         { withCredentials: true }
  //       );
  //       setAppointments(data.appointments);
  //     } catch (error) {
  //       setAppointments([]);
  //     }
  //   };
  //   fetchAppointments();
  // }, []);

  const handleUpdateStatus = async (appointmentId, status) => {
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/appointment/update/${appointmentId}`,
        { status },
        { withCredentials: true }
      );
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === appointmentId
            ? { ...appointment, status }
            : appointment
        )
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  // const { isAuthenticated, admin } = useContext(Context);
  // if (!isAuthenticated) {
  //   return <Navigate to={"/login"} />;
  // }

  return (
    <>
      <section className="dashboard page">
        <div className="banner">
          <div className="firstBox">
            <img src="/doc.png" alt="docImg" />
            <div className="content">
              <div>
                <p>Hello ,</p>
                <h5>Tarandeep</h5>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facilis, nam molestias. Eaque molestiae ipsam commodi neque.
                Assumenda repellendus necessitatibus itaque.
              </p>
            </div>
          </div>
          <div className="secondBox">
            <p>Total Appointments</p>
            <h3>1500</h3>
          </div>
          <div className="thirdBox">
            <p>Registered Doctors</p>
            <h3>10</h3>
          </div>
        </div>
        <div className="banner">
          <h5>Appointments</h5>
          <table>
            <thead>
              <tr>
                <th>Patient</th>
                <th>Date</th>
                <th>Doctor</th>
                <th>Department</th>
                <th>Status</th>
                <th>Visited</th>
              </tr>
            </thead>
            <tbody>
              <tr key={1}>
                <td>{`Vishesh bhadwa`}</td>
                <td>{"20 May 2024"}</td>
                <td>{`Abhay Singh`}</td>
                <td>{"Medical"}</td>
                <td>
                  <select
                    className={
                      "asd" === "Pending"
                        ? "value-pending"
                        : "Accepted" === "Accepted"
                        ? "value-accepted"
                        : "value-rejected"
                    }
                    value={"Accepted"}
                    // onChange={(e) =>
                    //   handleUpdateStatus(appointment._id, e.target.value)
                    // }
                  >
                    <option value="Pending" className="value-pending">
                      Pending
                    </option>
                    <option value="Accepted" className="value-accepted">
                      Accepted
                    </option>
                    <option value="Rejected" className="value-rejected">
                      Rejected
                    </option>
                  </select>
                </td>
                <td>
                  {true === true ? (
                    <GoCheckCircleFill className="green" />
                  ) : (
                    <AiFillCloseCircle className="red" />
                  )}
                </td>
              </tr>

              <tr key={1}>
                <td>{`Vishesh bhadwa`}</td>
                <td>{"20 May 2024"}</td>
                <td>{`Abhay Singh`}</td>
                <td>{"Medical"}</td>
                <td>
                  <select
                    className={
                      "Pending" === "Pending"
                        ? "value-pending"
                        : "appointment.status" === "Accepted"
                        ? "value-accepted"
                        : "value-rejected"
                    }
                    value={"Pending"}
                    // onChange={(e) =>
                    //   handleUpdateStatus(appointment._id, e.target.value)
                    // }
                  >
                    <option value="Pending" className="value-pending">
                      Pending
                    </option>
                    <option value="Accepted" className="value-accepted">
                      Accepted
                    </option>
                    <option value="Rejected" className="value-rejected">
                      Rejected
                    </option>
                  </select>
                </td>
                <td>
                  {true === true ? (
                    <GoCheckCircleFill className="green" />
                  ) : (
                    <AiFillCloseCircle className="red" />
                  )}
                </td>
              </tr>

              <tr key={1}>
                <td>{`Vishesh bhadwa`}</td>
                <td>{"20 May 2024"}</td>
                <td>{`Abhay Singh`}</td>
                <td>{"Medical"}</td>
                <td>
                  <select
                    className={
                      "Pending" === "Pending"
                        ? "value-pending"
                        : "appointment.status" === "Accepted"
                        ? "value-accepted"
                        : "value-rejected"
                    }
                    value={"Pending"}
                    // onChange={(e) =>
                    //   handleUpdateStatus(appointment._id, e.target.value)
                    // }
                  >
                    <option value="Pending" className="value-pending">
                      Pending
                    </option>
                    <option value="Accepted" className="value-accepted">
                      Accepted
                    </option>
                    <option value="Rejected" className="value-rejected">
                      Rejected
                    </option>
                  </select>
                </td>
                <td>
                  {true === true ? (
                    <GoCheckCircleFill className="green" />
                  ) : (
                    <AiFillCloseCircle className="red" />
                  )}
                </td>
              </tr>
            </tbody>
          </table>

          {}
        </div>
      </section>
    </>
  );
};

export default Dashboard;
