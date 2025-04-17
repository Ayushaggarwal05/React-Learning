Hii!! This is my journey to my Learning React JavaScript🚀🚀

-> First create basic pages like main html, css , Javascript page.
-> Then u have to ways to connect React to your project :

        ~ First is to use cnd links available at react site.
        ~ Second through NPM ( also called as Node Package Manager and sometimes we dont prefer to say this :)

-> Way to connect React to my laptop without cdn links:

        ~nmp install react (will ask some question regarding your file , create package.json and package-lock.json file )
        ~npm install -D parcel (will create parcel-cache and node modules having property to run your server for production with updated version)
        ~you can make a gitignore file to keep them for not uploading in git hub as they can be form anytime.
        ~npm parcel index.html (this will run your server at localHost 1234)
        ~npm parcel build index.html (will ready your file for production)
        ~import react and react dom to js file

-> Improvements in package.json:

        ~update dependencies.
        ~update browserslist.

-     ~update script and write start:npm parcel index.html to short to run for terminal as then we have to write only (npm sun start or
      npm start)
-     ~update script and write start:npm build parcel index.html to short to run for terminal as then we have to write only (npm sun build)

-> write tag in jsx in camel case form.

-> React Functional components is a function in a javascript which return jsx code and name of the function should start with capital letter as so js can identify it as react functional components.

-> "^Confit driven UI^" : this a practice that all company follows as it means that the UI of the page will change according to the data comming from the backend.
ex- swiggy ,zomato and any app uses location based offer.

-> Two types of Export/Import:

        ~ Default Export/Import:
                - export default component
                - import component from "path";
        ~ Named Export/Import:
                -export const component
                -import {component} from "path";

-> React Hooks:

        ~ Normal JS utility function
        ~ useState() - superpowerful state variable in react // will be videly used in code for updating pages.
        ~ {     if no dependency array => useEffect is called on every render
                if dependency array is empty => [] useEffect is called on initial render(just once).
                if denpendency array is[xyz] => called everytime xyz is updated.
          }
        ~ useEffect()
        ~ Whenever state variable changes /update react triggers a reconciliation cycle(re-render).

-> Now installing React-Router-Dom: using the command (npm i react-router-dom).
~ use this router for the connection between the pages and show the error.

-> Children routes:

        ~Outlet will be avaliable in the router react which allow the body to move to another data.
