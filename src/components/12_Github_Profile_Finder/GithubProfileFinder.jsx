import React, { useEffect, useState } from "react";
import RecipeReviewCard from "./Github_card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const GithubProfileFinder = () => {
  const [gitProfile, setGitProfile] = useState("brgawande");
  const [gitData, setGitData] = useState(null);
  const [loading, setLoading] = useState(false);
  //   const [search, setSearch] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();

    // setSearch(!search);
    console.log(gitProfile);
  };
  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.github.com/users/${gitProfile}`
        );
        if (!response.ok) {
          throw new Error("No Data Found");
        }
        const data = await response.json();
        setGitData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchdata();
  }, [gitProfile]);
  console.log(gitData);

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <div className="dflex my-10 gap-10">
          <TextField
            sx={{ width: 400 }}
            id="outlined-basic"
            label="Enter GitHub Profile Name"
            variant="outlined"
            value={gitProfile}
            onChange={(e) => setGitProfile(e.target.value)}
          />
          <Button type="submit" variant="contained">
            Search
          </Button>
        </div>
      </form>

      {!loading && (
        <div className="card dflex my-4">
          <RecipeReviewCard
            id={gitData?.login}
            image={gitData?.avatar_url}
            name={gitData?.name}
            publicRepo={56}
            followers={gitData?.followers}
            followings={gitData?.following}
            date={gitData?.created_at}
          />
        </div>
      )}
    </div>
  );
};

export default GithubProfileFinder;
