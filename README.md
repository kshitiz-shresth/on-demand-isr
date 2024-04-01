# On Demand Revalidation Demo Project

Welcome to the On-Demand Revalidation Demo Project! This small project showcases the power of Next.js's Incremental Static Regeneration (ISR) by dynamically updating content without compromising performance.

## Overview

This project features a Next.js application that displays the current date and time on the home page. Utilizing ISR, the displayed date and time remain static until revalidated. You can either wait for the automatic revalidation every 60 seconds or trigger revalidation manually by clicking the "Trigger ISR" button on the trigger page.

## Getting Started

Let's get this project up and running in no time!

```bash
# Clone the repository:
git clone <repository-url>

# Navigate to the project directory:
cd <project-directory>

# Install dependencies:
npm install

# Build the project:
npm run build

# Start the development server:
npm run start
```

Open your browser and go to `http://localhost:3000` to view the home page.

## Usage

### Home Page

The home page (`/`) dynamically displays the current date and time. This content is generated during build time and remains static until revalidated.

### Trigger Page

Navigate to the trigger page (`/trigger-isr`) to access the "Trigger ISR" button.

## Automatic Revalidation

The home page will automatically revalidate every 60 seconds (1 minute) after it is first accessed. This is the default revalidate time for static pages in Next.js.

## Manual Revalidation

You can trigger revalidation manually by clicking the "Trigger ISR" button on the trigger page (`/trigger-isr`).

## Note

This demo project uses a simple example of displaying the current date and time. In a real-world project, you can replace this with dynamic data from a database or external API that needs to be updated and reflected on the home page.

