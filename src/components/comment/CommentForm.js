import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../../graphql/mutations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validate } from "../helper/validate";

const CommentForm = ({ slug }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setFormErrors(validate(formData));
  }, [formData, touched]);

  const changeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(formErrors).length) {
      sendComment();
      toast.success("ارسال با موفقیت، در انتظار تأیید", {
        position: "top-center",
      });
    } else {
      setTouched({ name: true, email: true, text: true });
      toast.warn("فرم را تکمیل کنید", {
        position: "top-center",
      });
    }
  };

  const [sendComment, { loading, errors }] = useMutation(SEND_COMMENT, {
    variables: {
      name: formData.name,
      email: formData.email,
      text: formData.text,
      slug,
    },
  });

  if (errors) return <h3>error ...</h3>;

  return (
    <Box borderRadius={3} bgcolor="#FFFFFF" p={3}>
      <Typography
        component="p"
        variant="h6"
        fontWeight={600}
        color="#5e6a86"
        mb={2}
      >
        ارسال کامنت
      </Typography>

      <Box component="form" onSubmit={submitHandler}>
        <Box mb={2.5}>
          <TextField
            variant="standard"
            label="نام کاربری"
            fullWidth
            name="name"
            value={formData.name}
            onChange={changeHandler}
            onFocus={focusHandler}
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
              marginBottom: 1,
            }}
          />
          {formErrors.name && touched.name && (
            <Typography
              component="span"
              variant="p"
              color="#e22423"
              fontSize={14}
            >
              {formErrors.name}
            </Typography>
          )}
        </Box>

        <Box mb={2.5}>
          <TextField
            variant="standard"
            label="ایمیل"
            fullWidth
            name="email"
            value={formData.email}
            onChange={changeHandler}
            onFocus={focusHandler}
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
              marginBottom: 1,
            }}
          />
          {formErrors.email && touched.email && (
            <Typography
              component="span"
              variant="p"
              color="#e22423"
              fontSize={14}
            >
              {formErrors.email}
            </Typography>
          )}
        </Box>

        <Box mb={4}>
          <TextField
            variant="standard"
            label="متن کامنت"
            fullWidth
            multiline
            minRows={4}
            name="text"
            value={formData.text}
            onChange={changeHandler}
            onFocus={focusHandler}
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
              marginBottom: 1,
            }}
          />
          {formErrors.text && touched.text && (
            <Typography
              component="span"
              variant="p"
              color="#e22423"
              fontSize={14}
            >
              {formErrors.text}
            </Typography>
          )}
        </Box>

        <Box textAlign="left">
          {loading ? (
            <CircularProgress
              size={25}
              sx={{
                marginLeft: 3,
                marginTop: 0.1,
                color: "#457EFF",
              }}
            />
          ) : (
            <Button
              // onClick={sendHandler}
              type="submit"
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
        </Box>
      </Box>

      <ToastContainer />
    </Box>
  );
};

export default CommentForm;
