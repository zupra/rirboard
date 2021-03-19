// Authorization
export default function ({ $axios, $storage }) {
  const token = $storage.getUniversal('api_token') 

  $axios.setHeader('X-Authorization', `Bearer ${token}`) 
  
  
}
