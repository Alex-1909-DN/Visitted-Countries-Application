import db from "../db.js";

export const getVisitedCountries = async (req, res) => {
  try {
    const result = await db.query("SELECT country_code FROM visited_countries");
    console.log(result.rows);
    res.json(result.rows);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};

export const addVisitedCountry = async (req, res) => {
  const { country } = req.body;

  if (!country || !country.trim()) {
    return res.status(400).json({
      status: "invalid",
      message: "Country name is required",
    });
  }
  try {
    // Check if the country exists in the countries table
    const countryResult = await db.query(
      "SELECT * FROM countries WHERE LOWER(country_name) = LOWER($1)",
      [country.trim()]
    );
    if (countryResult.rows.length === 0) {
      return res.status(400).json({
        status: "invalid",
        message: "Country name does not exist, try again.",
      });
    }

    const countryCode = countryResult.rows[0].country_code;
    // Check if the country already exists in visited_countries
    const visitedResult = await db.query(
      "SELECT * FROM visited_countries WHERE country_code = $1",
      [countryCode]
    );
    if (visitedResult.rows.length > 0) {
      return res.status(400).json({
        status: "exists",
        message: "Country already exists in visited countries.",
      });
    }

    // Insert country into visited_countries
    await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [
      countryCode,
    ]);
    res.status(201).json({
      status: "success",
      message: "Country has been added successfully!",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "error", message: "Server error" });
  }
};
