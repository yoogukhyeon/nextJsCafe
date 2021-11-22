import Header from '../components/Header'
import {Fragment , useState , useMemo, useEffect } from 'react'
import axios from 'axios';
import useSWR from 'swr';
const formatter = Intl.NumberFormat('ko-KR')

const fetcher = function(){
    return axios.get('http://localhost:3000/api/menu').then(response => response.data)
}


export default function Order(props){
    console.log('props' , props.menu)
    const [selected , setSelected] = useState( [] )
    console.log('selected' , selected)


    const sum = useMemo(() => {
        console.log('useMemo 실행')
        let value = 0;

        selected.forEach(item => value += item.price)

        return value
    } , [ selected ])

    
    const {data , error} = useSWR('http://localhost:3000/api/menu' , fetcher)
    console.log('data' , data);
    console.log('error' , error);




    const [ count , setCount] = useState( 0 )

    const [ menu , setMenu ] = useState( [] );

    useEffect(() => {
        // console.log('window' , window)
        // fetch('/api/menu')
        //     .then(response => response.json())
        //     .then(json => setMent(json))
        //     .catch(console.warn)
        axios.get('api/menu')
            .then(response => setMenu(response.data))
            .catch(console.warn)
    } , [])


    return (
        <div className="container">
        <Header/>
  
         <h1 className="font-bold">Order</h1>

         <button className="btn btn-lg" onClick={() => setCount(count + 1)}>
             count : { count}
         </button>

         <h2 className="text-xl font-bold">메뉴판</h2>

        



        <dl>

        {
            menu.map(element => ( 
                <Fragment key={element.name}>
                    <dt>
                        {element.name}
                    </dt>
                    <dd>
                        {formatter.format(element.price) } 원

                        <small>
                        <button onClick={ () => {
                            if(selected.includes(element)){
                                setSelected(selected.filter(item => item !== element))
                            }else{
                                setSelected([...selected , element])
                            }
                         
                        } }>
                            [ {  selected.includes(element) ? '선택 해제' : '선택' } ]
                        </button>
                        </small>
                    </dd>
                </Fragment>
            ))
        }   
        </dl>
        <hr />

        <h2 className="text-xl font-bold">주문서</h2>

        <ul className="list-unstyled">
            { selected.map(item => <li key={item.name}>{ item.name }</li>) }
        </ul>

        합계 : { formatter.format( sum ) }원

       <div className="mt-4">
       <button className="btn btn-primary btn-lg" onClick={() => {
           alert(`주문 합계는${formatter.format(sum)}원 입니다.`)
       }}>주문하기</button>
       </div>

      
      </div>
    )
}


// export async function getServerSideProps(context) {
//     const response = await axios.get('http://localhost:3000/api/menu')
//     console.log('getServerSideProps')
//     return {
//       props: {
//           menu : response.data
//       }, // will be passed to the page component as props
//     }
//   }