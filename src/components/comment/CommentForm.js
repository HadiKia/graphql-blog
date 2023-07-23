import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../../graphql/mutations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CommentForm = ({ slug }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [sendComment, { loading, errors }] = useMutation(SEND_COMMENT, {
    variables: { name, email, text, slug },
  });

  if (errors) return <h3>error ...</h3>

  const sendHandler = () => {
    if (name && email && text) {
      sendComment();
      toast.success("ارسال با موفقیت، در انتظار تأیید", {
        position: "top-center",
      });
    } else {
      toast.warn("فرم را تکمیل کنید", {
        position: "top-center",
      });
    }
  };

  return (
    <Grid container borderRadius={3} bgcolor="#FFFFFF" p={3}>
      <Grid item xs={12} mb={2}>
        <Typography component="p" variant="h6" fontWeight={600} color="#5e6a86">
          ارسال کامنت
        </Typography>
      </Grid>

      <Grid item xs={12} mb={2.5}>
        <TextField
          variant="standard"
          label="نام کاربری"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{
            "& label": {
              right: ".25em",
              transformOrigin: "right",
            },
            "& .MuiInputBase-root": {
              color: "#1A202E",
            },
            "& .MuiInput-underline:hover:before": {
              borderBottom: "1px solid #949494 !important",
            },
            "& label.Mui-focused": {
              color: "#457EFF",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "#457EFF",
            },
          }}
        />
      </Grid>

      <Grid item xs={12} mb={2.5}>
        <TextField
          variant="standard"
          label="ایمیل"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          sx={{
            "& label": {
              right: ".25em",
              transformOrigin: "right",
            },
            "& .MuiInputBase-root": {
              color: "#1A202E",
            },
            "& .MuiInput-underline:hover:before": {
              borderBottom: "1px solid #949494 !important",
            },
            "& label.Mui-focused": {
              color: "#457EFF",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "#457EFF",
            },
          }}
        />
      </Grid>

      <Grid item xs={12} mb={4}>
        <TextField
          variant="standard"
          label="متن کامنت"
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
          multiline
          minRows={4}
          sx={{
            "& label": {
              right: ".25em",
              transformOrigin: "right",
            },
            "& .MuiInputBase-root": {
              color: "#1A202E",
            },
            "& .MuiInput-underline:hover:before": {
              borderBottom: "1px solid #949494 !important",
            },
            "& label.Mui-focused": {
              color: "#457EFF",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "#457EFF",
            },
          }}
        />
      </Grid>

      <Grid item xs={12} textAlign="left">
        {loading ? (
          <CircularProgress
            size={25}
           sx={{
            marginLeft : 3,
            marginTop: 0.1,
            color : '#457EFF',
           }}
          />
        ) : (
          <Button
            onClick={sendHandler}
            variant="contained"
            sx={{
              fontWeight: 600,
              paddingX: 3,
              backgroundColor: "#457EFF",
              borderRadius: "1.5em",
              boxShadow: 0,
              "&:hover": {
                backgroundColor: "#457EFF",
                boxShadow: 0,
              },
            }}
          >
            ارسال
          </Button>
        )}
      </Grid>

      <ToastContainer />
    </Grid>
  );
};

export default CommentForm;
