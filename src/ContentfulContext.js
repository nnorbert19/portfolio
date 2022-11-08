import React, { useContext, useState, useEffect } from "react";

const ContentfulContext = React.createContext();

export function useContenful() {
  return useContext(ContentfulContext);
}

const query = `query {
    projectsCollection {
      items {
        title
        screenshot {
          url
        }
        shortText
        slug
        text {
          json
        }
      }
    }
  }
  `;

export function ContentfulProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState();
  async function fetchData() {
    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACE}/environments/master`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_ACCESSTOKEN}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ query }),
      }
    );
    const body = await response.json();
    setLoading(false);
    console.log(body.data);
    return body.data;
  }

  useEffect(() => {
    setLoading(true);
    fetchData().then((response) => setProjects(response));
  }, []);

  const value = {
    projects,
  };

  return (
    <ContentfulContext.Provider value={value}>
      {!loading && children}
    </ContentfulContext.Provider>
  );
}
