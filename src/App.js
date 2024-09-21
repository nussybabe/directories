import "./css/custom.css";
// import "./css/style.css";
// import "./css/Library.css";
import Contact from "./directory/Contact.jsx";

import List from "./movie/List";

// import LibraryPage from "./library/pages/LibraryPage";
// import DetailsPage from "./library/pages/DetailsPage";

import Home from "./jobs/Pages/Home.jsx";
import JobList from "./jobs/Pages/JobList.jsx";
import JobDetails from "./jobs/Pages/JobDetails.jsx";
import Resume from "./jobs/Pages/Resume.jsx";
import Profile from "./jobs/Pages/Profile.jsx";
import PostResume from "./jobs/Pages/PostResume.jsx";
import JobPost from "./jobs/Pages/JobPost.jsx";
import EditResume from "./jobs/Pages/EditResume.jsx";
import ProfileDetails from "./jobs/Pages/ProfileDetails.jsx";
import BookMark from "./jobs/Pages/BookMark.jsx";
import AppliedJob from "./jobs/Pages/AppliedJob.jsx";
import DeleteAccount from "./jobs/Pages/DeleteAccount";
import Signup from "./jobs/Pages/Signup.jsx";
import Signin from "./jobs/Pages/Signin.jsx";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<List />} />

          <Route path="/contact" element={<Contact />} />

          {/* <Route path="/library" element={<LibraryPage />} /> */}

          {/* <Route path="/books/:isbn" element={<DetailsPage />} /> */}

          <Route path="/home" element={<Home />} />
          <Route path="/job-list" element={<JobList />} />
          <Route path="/job-details" element={<JobDetails />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post-resume" element={<PostResume />} />
          <Route path="/job-post" element={<JobPost />} />
          <Route path="/edit-resume" element={<EditResume />} />
          <Route path="/profile-details" element={<ProfileDetails />} />
          <Route path="/bookmark" element={<BookMark />} />
          <Route path="/applied-job" element={<AppliedJob />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
