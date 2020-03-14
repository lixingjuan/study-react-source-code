// import React, { Suspense, lazy } from "react";

// const LazyComp = lazy(() => import("./lazy.js"));

// let data = "";
// let promise = "";
// function requestData() {
//   if (data) return data;
//   if (promise) throw promise;
//   promise = new Promise(resolve => {
//     setTimeout(() => {
//       data = "Data resolved";
//       resolve();
//     }, 2000);
//   });
//   throw promise;
// }

// function SuspenseComp() {
//   const data = requestData();

//   return <p>{data}</p>;
// }
// // 我理解的是，Suspense组件里的元素，都会等上一个组件加载完成之后再加载
// export default () => (
//   <Suspense fallback="loading data">
//     <SuspenseComp />
//     <LazyComp />
//   </Suspense>
// );

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { fetchUser, fetchPosts } from "./fakeApi";

function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser().then(u => setUser(u));
  }, []);

  if (user === null) {
    return <p>Loading profile...</p>;
  }
  return (
    <>
      <h1>{user.name}</h1>
      <ProfileTimeline />
    </>
  );
}

function ProfileTimeline() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetchPosts().then(p => setPosts(p));
  }, []);

  if (posts === null) {
    return <h2>Loading posts...</h2>;
  }
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  );
}
// const rootElement = document.getElementById("root");
// ReactDOM.createRoot(rootElement).render(<ProfilePage />);

export default ProfilePage;
