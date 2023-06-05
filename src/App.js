import { Box, Container, Heading } from "@chakra-ui/react";
import { useState } from "react";
import BmiForm from "./components/BmiForm";
import ImageResult from "./components/ImageResult";

function App() {
  const [values, setValues] = useState({
    weight: "",
    height: ""
  });

  const [ bmi, setBmi ] = useState(0);
  const [ bmiMsg, setBmiMsg ] = useState("");
  const [error, setError] = useState({});
  const [ showResult, setShowResult ] = useState(false);

  const changeHandler = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  } 

  const submitHandler = (e) => {
    e.preventDefault();
    setError(Validation());
    setBmi(
      (values.weight / (values.height * values.height) * 703).toFixed(1)
    )
    setShowResult(true);
  }

  const reloadHandler = () => {
    window.location.reload();
  }

  const Validation = () => {
    let formError = {};

    if( !values.weight ) {
      formError.weight = "Please, fill the weight";
    } else if( values.weight.length === 0 ) {
      formError.weight = "Weight should be more then 0";
    }
    
    if( !values.height ) {
      formError.height = "Please, fill the weight";
    } else if( values.height.length === 0 ) {
      formError.height = "Height should be more then 0";
    }
    return formError;
  }

  return (
    <Container maxW='3xl' mt='30px'>
      <Box boxShadow='lg' p='6' rounded='md' bg='white'>
        <Heading as='h1' fontSize='72px' mb='20px' color='#ec1839' align='center'>BMI Calculator</Heading>
        <BmiForm values={values} changeHandler={changeHandler} error={error} reloadHandler={reloadHandler} submitHandler={submitHandler} />
        {
          showResult ?  
          <ImageResult bmi={bmi} bmiMsg={bmiMsg} setBmiMsg={setBmiMsg} />
          : ""
        }
      </Box>
    </Container>
  );
}

export default App;
