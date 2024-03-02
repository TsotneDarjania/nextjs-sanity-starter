This starter is Intented for Digido's brilliant programmers who has the honor of making a project using NextJS 14 + Sanity

# NextJS 14 + Sanity Starter

This repository is a starter template for building web applications with Sanity CMS and Next.js 14
To begin, follow these steps to set up your Sanity project:

## Deployment

To begin, follow these steps to set up your Sanity project:

#### STEP 1. Create a New Project

First, you need to register on Sanity and create your account. Then, you need to create a new project. For that, you can run this command:

```bash
  npm create sanity@latest
```

Follow the simple instructions. Upon project creation, you'll obtain a new project ID and dataset. Remember, the objective is solely to acquire these parameters.

#### STEP 2. Change Parameters

Next, clone this repository and modify the .env.local file with your new project ID and dataset.

![App Screenshot](https://i.ibb.co/JxD3dQK/screen.png)

#### STEP 3. Run Project

After that, run the following commands as usual:

```bash
  npm install
  npm run dev
```

That's all. Happy Coding 😊

## Important files and folders

| File(s)                      | Description                                                 |
| ---------------------------- | ----------------------------------------------------------- |
| sanity.config.ts             | Config file for Sanity Studio                               |
| /app/page.tsx                | Landing page for /.                                         |
| /app/studio/[[...index]].tsx | Where Sanity Studio is mounted                              |
| /sanity/schema/index.tsx     | Where Sanity Studio gets its content types from             |
| .env.local                   | Configuration for the Sanity project and dataset            |
| /sanity/client/config.ts     | Sanity client configured based on env.ts                    |
| tailwind.config.js           | Tailwind config. Only applies to files listed under content |

<h3>Documentation for this repository is under development. Please wait while detailed documentation is added</h3>
