import React from "react";
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
import { useFormik } from "formik";
import * as Yup from "yup";

const CommentForm = ({ slug }) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      text: "",
    },
    onSubmit: () => {
      sendComment();
      toast.success("ارسال با موفقیت، در انتظار تأیید", {
        position: "top-center",
      });
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(5, "نام کاربری باید حداقل 5 کاراکتر باشد")
        .required("لطفا نام کاربری خود را وارد کنید"),
      email: Yup.string()
        .email("ایمیل وارد شده نامعتبر است")
        .required("لطفا ایمیل خود را وارد کنید"),
      text: Yup.string().required("لطفا نظر خود را وارد کنید"),
    }),
  });

  const [sendComment, { loading, errors }] = useMutation(SEND_COMMENT, {
    variables: {
      name: formik.values.username,
      email: formik.values.email,
      text: formik.values.text,
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

      <Box component="form" onSubmit={formik.handleSubmit}>
        <TextField
          variant="standard"
          label="نام کاربری"
          fullWidth
          type="text"
          {...formik.getFieldProps("username")}
          sx={{
            "& label": {
              right: ".25em",
              transformOrigin: "right",
              color: "#5e6a86",
            },
            "& .MuiInputBase-root": {
              color: "#1A202E",
            },
            "& .MuiInput-underline:before": {
              borderBottom: "1px solid #ECF0F6 !important",
            },
            "& .MuiInput-underline:hover:before": {
              borderBottom: "1px solid #ECF0F6 !important",
            },
            "& label.Mui-focused": {
              color: "#457EFF",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "#457EFF",
              borderWidth: 1,
            },
            marginY: 1,
          }}
        />
        {formik.errors.username && formik.touched.username && (
          <Typography
            component="span"
            variant="p"
            color="#e22423"
            sx={{
              fontSize: 13,
              "@media screen and (min-width: 768px)": {
                fontSize: 14,
              },
            }}
          >
            {formik.errors.username}
          </Typography>
        )}

        <TextField
          variant="standard"
          label="ایمیل"
          fullWidth
          type="email"
          {...formik.getFieldProps("email")}
          sx={{
            "& label": {
              right: ".25em",
              transformOrigin: "right",
              color: "#5e6a86",
            },
            "& .MuiInputBase-root": {
              color: "#1A202E",
            },
            "& .MuiInput-underline:before": {
              borderBottom: "1px solid #ECF0F6 !important",
            },
            "& .MuiInput-underline:hover:before": {
              borderBottom: "1px solid #ECF0F6 !important",
            },
            "& label.Mui-focused": {
              color: "#457EFF",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "#457EFF",
              borderWidth: 1,
            },
            marginY: 1,
          }}
        />
        {formik.errors.email && formik.touched.email && (
          <Typography
            component="span"
            variant="p"
            color="#e22423"
            sx={{
              fontSize: 13,
              "@media screen and (min-width: 768px)": {
                fontSize: 14,
              },
            }}
          >
            {formik.errors.email}
          </Typography>
        )}

        <TextField
          variant="standard"
          label="متن کامنت"
          fullWidth
          type="text"
          {...formik.getFieldProps("text")}
          multiline
          rows={4}
          sx={{
            "& label": {
              right: ".25em",
              transformOrigin: "right",
              color: "#5e6a86",
            },
            "& .MuiInputBase-root": {
              color: "#1A202E",
            },
            "& .MuiInput-underline:before": {
              borderBottom: "1px solid #ECF0F6 !important",
            },
            "& .MuiInput-underline:hover:before": {
              borderBottom: "1px solid #ECF0F6 !important",
            },
            "& label.Mui-focused": {
              color: "#457EFF",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "#457EFF",
              borderWidth: 1,
            },
            marginY: 1,
          }}
        />
        {formik.errors.text && formik.touched.text && (
          <Typography
            component="span"
            variant="p"
            color="#e22423"
            sx={{
              fontSize: 13,
              "@media screen and (min-width: 768px)": {
                fontSize: 14,
              },
            }}
          >
            {formik.errors.text}
          </Typography>
        )}

        <Box textAlign="left" marginTop={4}>
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
