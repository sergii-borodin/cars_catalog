export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "f100f9dbc5mshb7db7f493238cd2p104256jsne5883d55a3a4",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );

  const result = await response.json();

  return result;
}

export async function fetchCarImage(model?: string, make?: string) {
  const headers = {
    "X-RapidAPI-Key": "f100f9dbc5mshb7db7f493238cd2p104256jsne5883d55a3a4",
    "X-RapidAPI-Host": "car-api2.p.rapidapi.com",
  };

  const response = await fetch(
    "https://car-api2.p.rapidapi.com/api/models?model=corolla&sort=id&direction=asc&verbose=yes",
    { headers: headers }
  );

  const result = await response.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

// const url =
//   "https://car-api2.p.rapidapi.com/api/models?model=corolla&sort=id&direction=asc&verbose=yes";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "f100f9dbc5mshb7db7f493238cd2p104256jsne5883d55a3a4",
//     "X-RapidAPI-Host": "car-api2.p.rapidapi.com",
//   },
// };

// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }
