# React - Individual Examination

A SPA (Single-page application) school project created using React. It uses githubs API to showcase my projects and has a simple contact form to make it easy for users to contact me. (Contact form is not actually functional yet.)

# 2 hooks we did not cover in the course
### useId
>
> "useId is a React Hook for generating unique IDs that can be passed to accessibility attributes." - React documentation <br>
>
I used it to generate a shared prefix for related elements in my contact form. <br>
Not entirely necessary for such a simple form, but I thought it was a good opportunity to try it out. 

### useEffect
I used useEffect to fetch my repos from the GitHub API. <br>
The useEffect hook is ideal for performing side effects like data fetching after the initial render of a component. <br>
In this case, fetching repository data from the GitHub API fits perfectly as a side effect.


## How to use

To run the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server using `npm run dev`.
5. Access the application in your web browser at the specified localhost address.
