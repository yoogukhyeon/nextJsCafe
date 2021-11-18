import Header from '../components/Header'
import { useState , useMemo } from 'react'

const formatter = Intl.NumberFormat('ko-KR')

export default function Order(){
    const [hasEspresso , setEspresso] = useState(false);
    const [hasAmericano , setAmericano] = useState(false);
    const [hasLatte , setLatte] = useState(false);
    const sum = useMemo(() => {
        console.log('useMemo 실행')
        let value = 0;
        value += hasEspresso ? 2800 : 0;
        value += hasAmericano ? 3000 : 0;
        value += hasLatte ? 3500 : 0;
        return value
    } , [hasEspresso , hasAmericano , hasLatte])

    const handleEspress = () => {
        setEspresso( !hasEspresso )
    }
    const handleAmericano = () => {
        setAmericano( !hasAmericano )
    }
    const handleLatte = () => {
        setLatte( !hasLatte )
    }

  

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
            <dt>에스프레소</dt>
            <dd>2,800원 
                <small>
                        <button onClick={handleEspress }>
                            [ { hasEspresso ? '선택 해체' : '선택' } ]
                        </button>
                </small>
            </dd>

            <dt>아메리카노</dt>
            <dd>
                3,000원
                <small>
                    <button onClick={handleAmericano}>
                        [{hasAmericano ? '선택 해체' : '선택'}]
                    </button>
                </small>    
            </dd>

            <dt>카페라뗴</dt>
            <dd>
                3,500원
                <small>
                    <button onClick={handleLatte}>
                        [{hasLatte ? '선택 해체' : '선택'}]
                    </button>
                </small>    
            </dd>
        </dl>
        <hr />

        <h2 className="text-xl font-bold">주문서</h2>

        <ul className="list-unstyled">
            { hasEspresso && <li>에스프레소</li>}
            { hasAmericano && <li>아메리카노</li>}
            { hasLatte && <li>카페라떼</li>}
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