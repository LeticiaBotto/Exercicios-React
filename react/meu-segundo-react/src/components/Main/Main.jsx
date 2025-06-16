import Section from '../Section/Section'
import Aside from'../Aside/Aside'

function Main(){
    return(
        <main>
            <article>
                <h1>Como cuidar de plantas suculentas</h1>
                <p>Plantas suculentas são ótimas para quem está começando no mundo da jardinagem.</p>
                <Section/>
                <section>
                <h2>Iluminação ideal</h2>
                <p>Coloque suas suculentas em locais bem iluminados, preferencialmente com luz solar direta.</p>
                </section>
                </article>
                <Aside/>
        </main>
    )
}

export default Main