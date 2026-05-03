import { useEffect, useState } from "react";
import API from "../services/api";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get("/user/profile");
        setData(res.data);
      } catch {
        alert("Unauthorized");
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="home-container">
      <h2>Profile</h2>

      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        "Loading..."
      )}

      <button
        onClick={() => {
          
          navigate("/home");
        }}
      >
        Go to home
      </button>
    </div>
  );
}