// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return `![License](https://choosealicense.com/licenses/apache-2.0/)`;
  } else if (license === "MIT") {
    return `![License](https://choosealicense.com/licenses/mit/)`;
  } else if (license === "Mozilla") {
    return `![License](https://choosealicense.com/licenses/mpl-2.0/)`;
  }
  return ''; 
}

// Create a function that returns the license link
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[MIT License](https://choosealicense.com/licenses/mit/)`;
  } else if (license === "Apache") {
    return `[Apache License](https://choosealicense.com/licenses/apache-2.0/)`;
  } else if (license === "Mozilla") {
    return `[Mozilla License](https://choosealicense.com/licenses/mpl-2.0/)`;
  }
  return ''; 
}

// Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license) {
    return `## License\nThis project is licensed under the ${license}.\n${renderLicenseLink(license)}`;
  }
  return ''; 

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
${renderLicenseBadge(data.license)}

${renderLicenseSection(data.license)}
`;

}
export default generateMarkdown;

