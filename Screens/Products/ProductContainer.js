import React , {useState , useEffect} from 'react';
import {View , Text , ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native';
import ProductList from './ProductList';
import { Container } from 'native-base';




const data = require("../../assets/data/products.json");

const ProductContainer = () =>{

    const[products , setProducts] = useState([]);

    useEffect(() => {
        setProducts(data)
        return () => {
            setProducts([])
        }
    }, [])

    return (

      // <Container>
        <View>
            <Text>Product Container</Text>
            <View style={{marginTop : 100}}>
            <FlatList

                numColumns={2}
                
                data={products}
                renderItem={({item}) => <ProductList 
                key={item.id}
                item={item}
                />}
                keyExtractor={item => item.name}
            />
            </View>
        </View>
       // </Container>
    );

}

export default ProductContainer;