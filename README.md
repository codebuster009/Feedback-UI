# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


#notes

//setting default props
Header.defaultProps ={
  text: 'Feedback UI',
}

//setting the proptypes
Header.propTypes = {
  text: PropTypes.string
}

//How to set inline style
div className = "---" style {{backgroundColor: "red"}}>

//Passing colors as props

//Suppose now if i had to change the rating 10 if i click and if i click it should again change it to 7
 setRating((prevState) => prevState === 7 ? 10 : 7)

 //Style Component Reusablity

 //npm install concurrently to run the two servers from the single command