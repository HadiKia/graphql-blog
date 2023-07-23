import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

const CommentEL = (comment) => {
  return (
    <Box component="div" borderRadius={3} bgcolor="#FFFFFF" p={2} mb={2}>
      <Box display="flex" alignItems="center" mb={0}>
        <Avatar sx={{marginLeft: 1,}}>
            {comment.name[0]}
        </Avatar>
            <Typography component="span" variant="p" color="#495367" fontWeight={600} fontSize={14}>{comment.name}</Typography>
      </Box>

      <Typography component="p" variant="p" color="#5e6a86" fontSize={14} marginRight={6}>
        {comment.text}
      </Typography>
    </Box>
  );
};

export default CommentEL;
