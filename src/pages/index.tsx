import { useEffect } from 'react'

export default function Home() {
  //função de gatilhos de eventos quando muda algo na aplicação, efeitos colaterais
  //              { o que}, [Quando ]
  useEffect(() => { 
    fetch('http://localhost:3333/episodes')
    .then(response => response.json())
    .then(data => console.log(data) ) 
  }, [])
    

  return (
  <h1> Index </h1>
  )  

}
