import Header from '../components/Header'
import {Fragment , useState , useMemo } from 'react'

const formatter = Intl.NumberFormat('ko-KR')

const data = [
    {name : '에스프레소' , price : 2800},
    {name : '아메리카노' , price : 3000},
    {name : '카페라떼' , price : 3500},
    {name : "카페모카" , price : 3800}
];

export default function Order(){
    const [selected , setSelected] = useState( [] )
    console.log('selected' , selected)


    const sum = useMemo(() => {
        console.log('useMemo 실행')
        let value = 0;

        selected.forEach(item => value += item.price)

        return value
    } , [ selected ])

 
    const [ count , setCount] = useState( 0 )

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
            data.map(element => ( 
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