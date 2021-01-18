This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Introduction

  * This application implements the concept of server side rendering and navigation for single page application. 
  * The framework used is next.js. 
  * The application renders three pages for the following companies
    1. Raw Engineering
    2. Contentstack
    3. Surfboard Ventures
    
## Features

  * For each company there is a landing page with different style and theme. 
  * Design of web page contains following components

      Navigation link 
      > (for Surfboard will contain Raw Engineering, Contentstack)
      
      Home
      Main body content with banner image
      Footer with social media icons and related links
   
   * Navigation is enabled using next.js folder structure.
   
   
## Deployment

  * The data for company information is stored on an express server hosted on Heroku (https://backend-company-ssr-12.herokuapp.com/).
  
  * This application is currently hosted on Vercel 
      Live demo can be seen here (https://12-company-website-server-side-rendering.vercel.app/)
      
## To run the project locally

    1. Clone the repository using
    ```
    git clone 
    ```
    After downloading , 
    2. Get into the cloned directory using
    ```
    cd 12-Company-Website-Server-Side-Rendering

    ```
    Once inside directory 
    3. run
    ```
    npm run build
    ```

    Once build file is created 
    4. run
    ```
    npm run start
    ```
    > To run project in development mode run
    > npm run dev



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



  
