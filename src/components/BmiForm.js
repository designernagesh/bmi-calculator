import { FormControl, FormLabel, FormHelperText, Button, Input, Flex } from "@chakra-ui/react";

const BmiForm = ({values, changeHandler, error, reloadHandler, submitHandler}) => {
    return (
        <form onSubmit={ submitHandler }>
          <FormControl mb='20px'>
            <FormLabel>Weight(KGs)</FormLabel>
            <Input type='text' 
              name="weight"
              value={values.weight} 
              onChange={ changeHandler } 
              placeholder="weight" />
            {
              error.weight && 
              <FormHelperText>{error.weight}</FormHelperText>
            }
          </FormControl>

          <FormControl mb='20px'>
            <FormLabel>Height(Inches)</FormLabel>
            <Input type='text' 
              name="height"
              value={values.height} 
              onChange={ changeHandler }
              placeholder="height" />
            {
              error.height &&
              <FormHelperText>{error.height}</FormHelperText>
            }            
          </FormControl>
          
          <Flex justifyContent='space-between' mb='20px'>
            <Button type="button" px='50px' onClick={ reloadHandler }>Reload</Button>
            <Button type="submit" px='50px'>Submit</Button>
          </Flex>
        </form>
    )
}

export default BmiForm;
