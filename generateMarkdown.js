// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return [![License](https://choosealicense.com/licenses/apache-2.0/)];
  } else if (license === "MIT") {
    return "search again";

  }
  };

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return [![License](https://choosealicense.com/licenses/mit/)];
  } else if (license === "Mozilla") {
    return "search again";

  }
  };
  


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "Mozilla") {
    return [![License](https://choosealicense.com/licenses/mpl-2.0/)];
  } else if (license === "Apache") {
    return "search again";

  }
  };



// TODO: Create a function to generate markdown for README. // like might be from the mini proj except with readme template and not html template
function generateMarkdown(data) {
  return `# ${data.title} 

`;
}

export default generateMarkdown;
