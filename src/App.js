import React, { useState, createContext, useEffect } from "react";
import data from "../src/assets/data";
import Header from "./components/Header";
import Checkout from "./views/Checkout";
import Home from "./views/Home";
import Storecontainer from "./views/Storecontainer";
import ShoppingCart from "./views/ShoppingCart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../src/css/app.css";
// import {  } from "@mui/material";

export const ShowNumOfPurchases = createContext();

const App = () => {
  let productSite = [];
  const [totalPrice, setTotalPrice] = useState(0);
  const [purchase, setPurchase] = useState([]);
  const [numOfItems, setNumOfItems] = useState(0);
  const [userData, setUserDate] = useState({
    firstName: "",
    lastName: "",
    adress: "",
    email: "",
    city: "",
    zip: "",
    country: "--- Please select ---",
  });

  const formErrors = {
    firstNameError: React.createRef(),
    lastNameError: React.createRef(),
    adressError: React.createRef(),
    emailError: React.createRef(),
    cityError: React.createRef(),
    zipError: React.createRef(),
    countryError: React.createRef(),
  };

  useEffect(() => {
    console.log("actual purchase-list:", purchase);

    const totalPurchases = purchase.reduce((obj, currItem) => {
      obj += currItem.count;
      return obj;
    }, 0);

    setNumOfItems(totalPurchases);
  }, [purchase]);

  useEffect(() => {
    console.log("price", totalPrice);
    const total = purchase.reduce((obj, currPrice) => {
      obj += currPrice.price * currPrice.count;
      return obj;
    }, 0);

    setTotalPrice(total.toFixed(2));
  }, [purchase, totalPrice]);

  const chooseProduct = id => {
    let chosenItem = productSite.find(item => item.id === id);

    console.log("Chosen item:", chosenItem);

    let itemFound = false;

    const filtered = purchase.map(item => {
      if (item.id === id) {
        itemFound = true;
        item.count += 1;
      }
      return item;
    });

    if (itemFound !== true) {
      if (chosenItem.count === 0) {
        chosenItem.count += 1;
      } else if (chosenItem.count > 1) {
        chosenItem.count = 1;
      }
      setPurchase([...purchase, chosenItem]);
    } else {
      setPurchase(filtered);
    }
  };

  const addAmount = id => {
    const addOne = purchase.map(item => {
      if (item.id === id) {
        item.count += 1;
      }
      return item;
    });
    setPurchase(addOne);
  };

  const removeAmount = id => {
    const removeOne = purchase.map(item => {
      if (item.id === id && item.count > 0) {
        item.count -= 1;
      }
      return item;
    });
    const removeProduct = removeOne.filter(item => item.count !== 0);
    setPurchase(removeProduct);
  };

  const removeProduct = id => {
    let removedItem = purchase.filter(item => item.id !== id);
    setPurchase(removedItem);
  };

  const removeAll = () => {
    setPurchase([]);
  };

  const getFormValues = event => {
    setUserDate({ ...userData, [event.target.name]: event.target.value });
  };

  const errorOnBlur = event => {
    switch (event.target.name) {
      case "firstName":
        userData.firstName.trim().length !== 0 &&
        /^\D*$/g.test(userData.firstName)
          ? (formErrors.firstNameError.current.style.display = "none")
          : (formErrors.firstNameError.current.style.display = "flex");
        break;
      case "lastName":
        userData.lastName.trim().length !== 0 &&
        /^\D*$/g.test(userData.lastName)
          ? (formErrors.lastNameError.current.style.display = "none")
          : (formErrors.lastNameError.current.style.display = "flex");
        break;
      case "adress":
        userData.adress.trim().length !== 0 && /.*[0-9].*/.test(userData.adress)
          ? (formErrors.adressError.current.style.display = "none")
          : (formErrors.adressError.current.style.display = "flex");
        break;
      case "email":
        userData.email.trim().length !== 0 &&
        /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(userData.email)
          ? (formErrors.emailError.current.style.display = "none")
          : (formErrors.emailError.current.style.display = "flex");
        break;
      case "city":
        userData.city.trim().length !== 0 &&
        /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/.test(
          userData.city
        )
          ? (formErrors.cityError.current.style.display = "none")
          : (formErrors.cityError.current.style.display = "flex");
        break;
      case "zip":
        userData.zip.trim().length !== 0 && /^[0-9]*$/.test(userData.zip)
          ? (formErrors.zipError.current.style.display = "none")
          : (formErrors.zipError.current.style.display = "flex");
        break;
      case "country":
        userData.country !== "--- Please select ---"
          ? (formErrors.countryError.current.style.display = "none")
          : (formErrors.countryError.current.style.display = "block");
        break;
      default:
        break;
    }
  };

  const formValidation = () => {
    let validation = true;

    if (userData.firstName.length === 0) {
      formErrors.firstNameError.current.style.display = "block";
      validation = false;
    }

    if (userData.lastName.length === 0) {
      formErrors.lastNameError.current.style.display = "block";
      validation = false;
    }

    if (userData.adress.length === 0) {
      formErrors.adressError.current.style.display = "block";
      validation = false;
    }

    if (userData.email.length === 0) {
      formErrors.emailError.current.style.display = "block";
      validation = false;
    }

    if (userData.city.length === 0) {
      formErrors.cityError.current.style.display = "block";
      validation = false;
    }

    if (userData.zip.length === 0) {
      formErrors.zipError.current.style.display = "block";
      validation = false;
    }

    if (userData.country === "--- Please select ---") {
      formErrors.countryError.current.style.display = "block";
      validation = false;
    }

    return validation;
  };

  // const resetErrorDivs = () => {
  //   formErrors.firstNameError.current.style.display = "none";
  //   formErrors.lastNameError.current.style.display = "none";
  //   formErrors.adressError.current.style.display = "none";
  //   formErrors.emailError.current.style.display = "none";
  //   formErrors.cityError.current.style.display = "none";
  //   formErrors.zipError.current.style.display = "none";
  //   formErrors.countryError.current.style.display = "none";
  // };

  const checkResponse = response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Data couldn't be sent!");
    }
  };

  const submitFormData = async event => {
    event.preventDefault();

    // resetErrorDivs();

    let checkFormValidation = formValidation();

    if (checkFormValidation) {
      
        console.log(userData);


        try {
        let newUser = userData;

        let url = "https://jsonplaceholder.typicode.com/users";
        
        let settings = {
          method: "POST",
          body: JSON.stringify(newUser),
          headers: {
            "Content-Type": "application/JSON",
          },
        };

        let response = await fetch(url, settings);
        let message = await checkResponse(response);
        console.log(message);
      } catch (error) {
          console.log(error);
      } finally {
        console.log("Post request completed!");
      }
    }

    setUserDate({
      firstName: "",
      lastName: "",
      adress: "",
      email: "",
      city: "",
      zip: "",
      country: "--- Please select ---",
    });
  };

  return (
    <Router>
      <Header purchaselist={purchase} numOfItems={numOfItems} />
      <Switch>
        <Route path="/" exact render={() => <Home />} />

        <Route
          path="/store/:category"
          exact
          render={({ match }) => {
            productSite = data.filter(
              product => product.category === match.params.category
            );

            return (
              <ShowNumOfPurchases.Provider
                value={{
                  choose: chooseProduct,
                  // add: addAmount,
                }}
              >
                <Storecontainer selected={productSite} />
              </ShowNumOfPurchases.Provider>
            );
          }}
        />

        <Route
          path="/cart"
          exact
          render={() => (
            <ShoppingCart
              purchaselist={purchase}
              add={addAmount}
              remove={removeAmount}
              price={totalPrice}
              removeProduct={removeProduct}
              removeAll={removeAll}
            />
          )}
        />

        <Route
          path="/checkout"
          exact
          render={() => (
            <Checkout
              updateData={getFormValues}
              userData={userData}
              errorOnBlur={errorOnBlur}
              formErrors={formErrors}
              submit={submitFormData}
            />
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
