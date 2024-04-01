# On Demand Revalidation Demo Project

This is a small demo project demonstrating on-demand revalidation of a Next.js application using ISR (Incremental Static Regeneration).

## Overview

The project displays the current date and time on the home page. By default, this date and time are generated during build time and remain static until the page is revalidated. The home page will automatically revalidate after every 60 seconds (1 minute), which is the revalidate time set for static pages. However, you can trigger revalidation manually by clicking the "Trigger ISR" button on the trigger page.

## Steps to Build and Run the Project

1. Clone the repository:

git clone <repository-url>


2. Navigate to the project directory:

cd <project-directory>


3. Install dependencies:

npm install


4. Build the project:

npm run build


5. Start the development server:

npm run start


6. Open your browser and go to `http://localhost:3000` to view the home page.

## Usage

- Home Page: The home page (`/`) displays the current date and time. This data is generated during build time and remains static until revalidated.
- Trigger Page: The trigger page (`/trigger-isr`) contains a button labeled "Trigger ISR". Clicking this button sends a request to an API route to trigger revalidation of the home page. This allows you to update the displayed date and time instantly instead of waiting for the automatic revalidation.

## Automatic Revalidation

The home page will automatically revalidate every 60 seconds (1 minute) after it is first accessed. This is the default revalidate time for static pages in Next.js.

## Manual Revalidation

You can trigger revalidation manually by clicking the "Trigger ISR" button on the trigger page (`/trigger-isr`). This demonstrates how you can update the page content instantly on demand.

## Note

This demo project uses a simple example of displaying the current date and time. In a real-world project, you can replace this with dynamic data from a database or external API that needs to be updated and reflected on the home page.

