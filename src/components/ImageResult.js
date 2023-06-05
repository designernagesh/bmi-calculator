import underweight from '../images/underweight.png';
import normal from '../images/normal.png';
import overweight from '../images/overweight.png';
import obese from '../images/obese.png';

import { Flex, Text, Image } from "@chakra-ui/react";

const ImageResult = ({bmi, bmiMsg, setBmiMsg}) => {
    const BmiImage = () => {
        if( bmi < 18.5 ){
            setBmiMsg("Underweight");
            return <Image src={underweight} alt='underweight'
            boxSize='110px' h='150px' objectFit='contain' />
        } else if( (bmi > 18.5) && (bmi < 24.9) ) {
            setBmiMsg("Normal");
            return <Image src={normal} alt='normal'
            boxSize='110px' h='150px' objectFit='contain' />
        } else if( (bmi > 25) && (bmi < 29.9) ) {
            setBmiMsg("Overweight");
            return <Image src={overweight} alt='overweight'
            boxSize='110px' h='150px' objectFit='contain' />
        } else if( bmi > 30 ) {
            setBmiMsg("Obese");
            return <Image src={obese} alt='obese'
            boxSize='110px' h='150px' objectFit='contain' />
        }
    }

    return (
        <Flex justifyContent='center' alignItems='center' flexDirection='column'>
            <Text mb='10px' fontWeight='bold'>Your BMI is:</Text>
            <Text mb='10px' fontWeight='bold'>{ bmi } and it is { bmiMsg }</Text>
            {
                BmiImage()
            }
               
        </Flex>
    )
}

export default ImageResult;
