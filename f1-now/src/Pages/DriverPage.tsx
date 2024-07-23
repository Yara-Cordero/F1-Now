import { useEffect, useState } from "react";
import DriverService from "../service/DriverService";
import { Grid, Typography } from "@mui/material";
import DriversInfo from "../Organism/DriverInfo";

type DriverType = {
  name: string;
  nationality: string;
  birthDate: string;
  age: string;
};

function DriverPage() {
  const [driverData, setDriverData] = useState<DriverType[]>([]);

  useEffect(() => {
    DriverService()
      .getAllCurrentDrivers()
      .then((response: any) => {
        console.log("API Response:", response);
        const drivers = response.MRData.DriverTable.Drivers.map(
          (driver: any) => ({
            name: `${driver.givenName} ${driver.familyName}`,
            nationality: driver.nationality,
            birthDate: driver.dateOfBirth,
            age: calculateAge(driver.dateOfBirth),
          })
        );

        setDriverData(drivers);
      })
      .catch((error: any) => {
        console.error("Error fetching drivers:", error);
      });
  }, []);

  const calculateAge = (birthDate: string) => {
    const birth = new Date(birthDate);
    const today = new Date();
    const age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    return m < 0 || (m === 0 && today.getDate() < birth.getDate())
      ? age - 1
      : age;
  };

  return (
    <>
      <div>DriverPage</div>
      <Typography
        sx={{
          fontFamily: "Bebas Neue",
          fontSize: "120px",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        Drivers
      </Typography>
      <div className="redBox">
        <Grid container spacing={2} sx={{ width: "60%", margin: "0 auto" }}>
          {driverData.map((driver, index) => (
            <DriversInfo
              key={index}
              name={driver.name}
              nationality={driver.nationality}
              birthDate={driver.birthDate}
              age={driver.age}
            />
          ))}
        </Grid>
      </div>
    </>
  );
}

export default DriverPage;
