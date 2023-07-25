import React from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";

// icons
import VisibilityIcon from "../icons/VisibilityIcon";
import VisibilityOffIcon from "../icons/VisibilityOffIcon";

const SignUp = () => {
  const [showPassword1, setShowPassword1] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);

  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: () => {
      toast.success("ثبت نام با موفقیت انجام شد", {
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
      password: Yup.string()
        .min(8, "کلمه عبور باید حداقل 8 کاراکتر باشد")
        .required("لطفا کلمه عبور خود را وارد کنید"),
      confirmPassword: Yup.string()
        .oneOf(
          [Yup.ref("password"), null],
          "تکرار کلمه عبور باید با کلمه عبور یکسان باشد"
        )
        .required("کلمه عبور را تأیید کنید"),
    }),
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      padding={4}
      borderRadius={5}
    >
      <Typography color="#5e6a86" fontWeight={600} fontSize={25}>
        ثبت نام
      </Typography>

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
        label="کلمه عبور"
        fullWidth
        type={showPassword1 ? "text" : "password"}
        {...formik.getFieldProps("password")}
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
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword1}
                onMouseDown={handleMouseDownPassword}
                sx={{ marginBottom: 0.5 }}
              >
                {showPassword1 ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {formik.errors.password && formik.touched.password && (
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
          {formik.errors.password}
        </Typography>
      )}

      <TextField
        variant="standard"
        label="تکرار کلمه عبور"
        fullWidth
        type={showPassword2 ? "text" : "password"}
        {...formik.getFieldProps("confirmPassword")}
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
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword2}
                onMouseDown={handleMouseDownPassword}
                sx={{ marginBottom: 0.5 }}
              >
                {showPassword2 ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {formik.errors.confirmPassword && formik.touched.confirmPassword && (
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
          {formik.errors.confirmPassword}
        </Typography>
      )}

      <Box textAlign="left" mt={4}>
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
          تأیید
        </Button>
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default SignUp;
