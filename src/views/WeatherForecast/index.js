"use client";

import useGetWeatherData from "@/hooks/useGetWeatherData";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import ForecastDetails from "./ForecastDetails";
import WeeklyForecast from "./WeeklyForecast";

const WeatherForecast = () => {
  const { control, handleSubmit } = useForm();
  const { weatherData, loading, error, fetchWeatherData, setError } =
    useGetWeatherData();

  const onSubmit = (data) => {
    fetchWeatherData(data.city);
  };

  return (
    <Box p="32px">
      <Box className="flex justify-center items-center mb-8">
        <div className="text-[38px] font-bold text-text-dark text-center">
          <span>Real-Time Weather</span>
          <span className="text-[#38BDF8]"> at Your Fingertips</span>
        </div>
      </Box>

      <Grid
        container
        className="bg-[url('/weather-search.png')] bg-no-repeat bg-cover rounded-[28px] p-6 w-full"
      >
        <Grid item xs={12} sm={12} md={7} lg={5} sx={{ padding: "48px 24px" }}>
          <div className="text-[40px] leading-[52px] font-semibold text-[#1d5f6d]">
            Find Weather Updates <br /> for Any Location
          </div>
          <div className="text-[16px] font-semibold text-[#1d5f6d] my-4 mb-8">
            Get real-time weather forecasts with a beautiful UI <br /> and
            trusted data sources.
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="city"
              control={control}
              rules={{
                required: "City is required",
                minLength: {
                  value: 5,
                  message: "City name must be at least 5 characters",
                },
              }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  onChange={(e) => {
                    if (error) {
                      setError("");
                    }
                    field.onChange(e.target.value);
                  }}
                  fullWidth
                  sx={{
                    ".MuiOutlinedInput-root": {
                      borderRadius: "100px",
                      backgroundColor: "#ffffff",
                      paddingRight: "10px",
                    },
                  }}
                  size="medium"
                  placeholder="Search for city, town, or location..."
                  error={!!fieldState?.error}
                  helperText={
                    fieldState?.error ? fieldState?.error?.message : null
                  }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          sx={{
                            backgroundColor: "#38BDF8 !important",
                            svg: {
                              color: "#ffffff !important",
                            },
                            ":hover": {
                              backgroundColor: "#38BDF8 !important",
                            },
                          }}
                          type="submit"
                        >
                          <SendIcon fontSize="inherit" />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </form>
          {error && (
            <Typography sx={{ mt: 1, ml: 2 }} color="error">
              {error}
            </Typography>
          )}
        </Grid>
      </Grid>
      {weatherData?.current && weatherData?.forecast && !loading && (
        <Grid container spacing={4} mt={1}>
          <Grid item xs={7} md={7}>
            <ForecastDetails weatherData={weatherData?.current} />
          </Grid>
          <Grid item xs={5} md={5}>
            <WeeklyForecast forecast={weatherData?.forecast} />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default WeatherForecast;
