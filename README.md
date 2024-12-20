# Embedded Contact Form

A lightweight, embeddable contact form solution that can be easily integrated into any website using an iframe. This project provides both the frontend contact form and a backend service to handle form submissions.

## Project Structure

```
.
├── index.html          # Demo page showing how to embed the contact form
├── contact-form.html   # The embeddable contact form
├── assets/            # Static assets (CSS, JS, images)
└── backend/           # Backend service for form processing
```

## Features

- Clean and responsive contact form design
- Easy integration via iframe
- Backend service for processing form submissions
- Cross-origin support for embedding in any domain
- Form validation and spam protection

## Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/yihaozhadan/embedded-contact-form
   cd embedded-contact-form
   ```

2. Set up the backend:
   - Navigate to the `backend` directory
   - Install dependencies (`npm install`)
   - Start the backend server (`npm start`)

3. Embed the contact form in your website:
   ```html
   <iframe 
     src="https://your-domain.com/contact-form.html" 
     width="100%" 
     height="500px" 
     frameborder="0">
   </iframe>
   ```

## Configuration

The contact form can be customized through URL parameters:
- `theme`: Light or dark theme
- `redirect`: URL to redirect after successful submission
- `recipient`: Email address for form submissions (if supported in your backend configuration)

## Development

To run the project locally:
1. Start the backend server (see backend documentation)
2. Serve the frontend files using a local web server
3. Open `index.html` in your browser to see the demo

## Security Considerations

- The backend implements CORS policies to control which domains can embed the form
- Form submissions are protected against spam using appropriate measures
- All user inputs are sanitized and validated

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.