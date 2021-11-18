import Header from '../components/Header'
import { useState } from 'react'


export default function Order(){
    const [hasEspresso , setEspresso] = useState(false);
    const handleEspress = () => {
        setEspresso( !hasEspresso )
    }
    return (
        <div className="container">
        <Header/>
  
         <h1 className="font-bold">Order</h1>
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
                <small><button>[ 선택 ]</button></small>    
            </dd>

            <dt>카페라뗴</dt>
            <dd>
                3,500원
                <small><button>[ 선택 ]</button></small>    
            </dd>
        </dl>
        <hr />

        <h2 className="text-xl font-bold">주문서</h2>

        <ul className="list-unstyled">
            { hasEspresso && <li>에스프레소</li>}
        </ul>

        합계 : { '0' }원

       <div className="mt-4">
       <button className="btn btn-primary btn-lg">주문하기</button>
       </div>

      
      </div>
    )
}