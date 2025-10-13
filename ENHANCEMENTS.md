# Project Enhancements

## Product Enhancements

- After generating a summary, a more detailed view can be provided to help create a more in-depth city-wise plan.
- Improved design using standard generative UI components.
- Integration with service providers (e.g., Indigo).

## Tech Enhancements

- TailwindCSS v4 has made theme implementation more tedious. Consider moving to Emotion CSS for better modularity.
- API calls should be handled by a backend (Next.js would be sufficient) to hide API keys and prompts.
- With a backend in place, Zustand would no longer be necessary. React Context would be sufficient since no state mutations would occur on the frontend.
- Prompts can be improved to accommodate more descriptive UI components.
- Mock data should be fetched from a CMS to allow control without requiring a release.
- Implement a circuit breaker to stop messages when waiting for a response.
- **[Very Important]** Standardize the JSON response of prompts to enable the use of common UI components more effectively.

