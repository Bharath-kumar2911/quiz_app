import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import {Navigate,useHistory,useNavigate} from "react-router-dom";

import "./home.css";

const Home = ({fetchdetails}) => {
  const [category, setCategory] = useState("");
  const [error, setError] = useState(false);
  const [name,setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!category) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchdetails(category);
      navigate("/quiz",{state:{name:name}});
    }
  };

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz Settings</span>
        <div className="settings__select">
          
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            select
            label="Select Ctegory"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            <MenuItem key="azure" value="Azure">
              Azure
            </MenuItem>
            <MenuItem key="aws" value="AWS">
              AWS
            </MenuItem>
            <MenuItem key="gcp" value="GCP">
              GCP
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
      
    </div>
  );
};

export default Home;