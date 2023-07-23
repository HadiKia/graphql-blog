import React from "react";
import { Box } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_POST_COMMENTS } from "../../graphql/queries";
import CommentEL from "../shared/CommentEL";

const Comments = ({ slug }) => {
  const { loading, data, errors } = useQuery(GET_POST_COMMENTS, {
    variables: { slug },
  });

  if (loading) return <h3>loading ...</h3>;
  if (errors) return <h3>errors ...</h3>;

  return (
    <>
      {data.comments.map((comment) => (
        <Box component="div" key={comment.id}>
          <CommentEL {...comment} />
        </Box>
      ))}
    </>
  );
};

export default Comments;
