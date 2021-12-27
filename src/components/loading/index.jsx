import img from './assets/img/loading1.gif';
import styled from 'styled-components';

const Div = styled.div`
    width: 50%;
    margin: 150px auto 0 auto;
    text-align: center;

    .poke-loading{
        width: 310px;
        height: 300px;
    }
}
`
export const Loading = ()=>{ 
    return (
        <Div className="loading-container">
            <img src={img} alt='loading' className='poke-loading'/>
        </Div>
    )
}


