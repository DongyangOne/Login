import axios from "axios"

export default function ExLogin() {
  const id='admin'
  const pw=1234

  const passLogin = async () => {
    const button =await axios({
      url: 'http://localhost:8000',
      method: 'post',
      data: {
        id,
        pw,
      },
    })
  }
  //const { result } = await ().data
  //console.log(passLogin.data.id)}

return (
  <div>
    <button onClick={passLogin}>button</button>
  </div>
)
}