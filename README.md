# Portfolio Project Mixed Messages

An interactive JavaScript application that generates random messages using reusable functions, arrays and conditional logic. Built with HTML, CSS and JavaScript, with automated testing using Node.js.

## Mixed Messages 🎲

## Development Progress — 16 November 2026

### Duplicate Prevention

Implemented a findDuplicates() function to prevent repeated messages.

Added message history tracking using an array.

Successfully tested all 27 unique message combinations.

Added a completion message when all combinations have been generated.

### HTML & CSS

Created the initial HTML5 page structure.

Linked the external CSS and JavaScript files.

Added a smiling sun logo with a transparent background.

Applied a cornflower blue and golden-yellow colour scheme.

Created and styled the Generate Message button.

Added a message display area (id="message") with a temporary placeholder.

Next Steps

Connect the Generate Message button to the JavaScript functionality.

Display generated messages dynamically on the webpage.

Show the completion notification when all 27 messages have been displayed.

Test the completed webpage functionality.

A JavaScript project developed as part of the **Codecademy Back-End Engineer Career Path**.

## About the Project

Mixed Messages is a random motivational message generator built with JavaScript and Node.js.

Each time the program runs, it randomly selects a beginning, middle, and ending to create a complete motivational message.

### Example Messages

- I can succeed
- You will keep learning
- We must never give up

The generator can produce **27 unique message combinations**.

## Technologies Used

- JavaScript
- Node.js
- Git and GitHub
- Node.js built-in test runner (`node:test`)
- Node.js assertions (`node:assert/strict`)

## Getting Started

### Requirements

Node.js installed on your computer.

### Run the Application

Clone the repository, open the project directory, and run:

```bash
node messages.js
```

The program generates motivational messages in the terminal.

## Automated Testing

The project includes automated tests that verify:

1. The generator returns a string.
2. Each message contains a valid beginning, middle, and ending.

Run the tests with:

```bash
node --test messages-test.js
```

## Project Structure

```text
Mixed-Messages/
├── messages.js
├── messages-test.js
└── README.md
```

## Future Improvements

- Prevent previously generated messages from repeating.
- Create an HTML/CSS user interface.
- Add a Generate Message button.
- Include custom artwork and styling.
- Deploy the project as a public website.
- Expand the collection of motivational messages.

## Author

**John Mitchell**

Career-changing software developer with a focus on JavaScript, TypeScript, Angular, and full-stack development.

- [GitHub](https://github.com/Mitch3012)
- [Developer Portfolio](https://mitch3012.github.io/jmitchelldev/)

## Project Status

**Version 1.5 — Core Logic Complete, UI Integration Pending**
The JavaScript message generator and duplicate-prevention functionality are implemented and tested. All 27 unique message combinations have been successfully generated without duplication.

Developed as part of Codecademy's Back-End Engineer Career Path.
