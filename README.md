# Lexi-Quest: German Vocabulary Learning Website

![Lexi-Quest Preview](https://raw.githubusercontent.com/hrid1/visa-ease/refs/heads/main/Lexi-Quest.png)

## Live URL
You can access the live version of the app here: [Lexi-Quest](https://lexi-quest-e4ae9.web.app/)

## Purpose
Lexi-Quest is a German vocabulary learning platform designed to help users expand their vocabulary through engaging methods. It allows users to listen to words, view example sentences, learn synonyms, and watch relevant videos to reinforce their learning. The platform is perfect for learners at all levels who want to improve their German language skills interactively and efficiently.

## Key Features
- **Interactive Learning**: Listen to German words with example sentences.
- **Synonyms**: Expand your vocabulary with related words.
- **Video Resources**: Watch videos to enhance learning visually and audibly.
- **Smooth Navigation**: Enjoy a user-friendly interface for browsing words and lessons.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Key Technologies & NPM Packages
This project uses the following key technologies and npm packages:
- **React**: For building the user interface.
- **AOS (Animate on Scroll)**: For adding scroll-based animations for a dynamic experience.
- **React Countup**: Smooth animations for number counting (e.g., tracking learning progress).
- **React Hot Toast**: Toast notifications for user feedback.
- **React Icons**: Scalable vector icons throughout the app.
- **React Router DOM**: Navigation between pages and sections.
- **Swiper**: Touch-friendly carousels and slideshows for vocabulary lists and videos.

## Installation and Configuration

To set up Lexi-Quest locally, follow these steps:

### Prerequisites
- **Node.js**: Make sure you have Node.js installed on your system.
- **NPM or Yarn**: Ensure you have either npm or yarn installed for dependency management.
- **API Key Setup**: You will need an API key to fetch vocabulary data and other dynamic content.

### Steps to Configure
1. Clone the repository:  
   `git clone https://github.com/hrid1/visa-ease.git`

2. Navigate to the project directory:  
   `cd visa-ease`

3. Install dependencies:  
   `npm install`  
   or  
   `yarn install`

4. Create a `.env` file in the root directory and add the following variables:  
   ```env
   REACT_APP_API_KEY=your-api-key
   REACT_APP_API_URL=https://example.com/api
