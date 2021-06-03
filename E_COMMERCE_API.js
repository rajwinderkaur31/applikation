import Axios from 'axios'
  
const productionAPI = ''
const developmentAPI ='http://localhost:3001'
  

const E_COMMERCE_API = Axios.create({
   baseURL: developmentAPI 
})

export default E_COMMERCE_API