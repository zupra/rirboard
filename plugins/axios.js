// Authorization
/*
export default function ({ $axios, $storage }) {
  const token = $storage.getUniversal('api_token')

  token && $axios.setHeader('X-Authorization', `Bearer ${token}`)
}
*/


export default function ({ $axios, $toast }) {

  $axios.onError((error) => {
    $toast.show(error.response.message, {
      duration: 4000,
      keepOnHover: true,
    })
  })
}