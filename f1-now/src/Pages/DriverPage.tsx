import { useEffect, useState } from "react";
import DriverService from "../service/DriverService";
import { Grid, Typography } from "@mui/material";
import DriversInfo from "../Organism/DriverInfo";

type DriverType = {
  name: string;
  nationality: string;
  birthDate: string;
  permanentNumber: string;
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
            permanentNumber: driver.permanentNumber,
          })
        );

        setDriverData(drivers);
      })
      .catch((error: any) => {
        console.error("Error fetching drivers:", error);
      });
  }, []);

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
              permanentNumber={driver.permanentNumber}
            />
          ))}
        </Grid>
      </div>
    </>
  );
}

export default DriverPage;