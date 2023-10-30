import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'

import koulu from '../../images/koulu.jpg'
import luonto from '../../images/luonto.jpg'
import historia from '../../images/historia.jpg'
import vpk from '../../images/vpk.jpg'

import {
    frontpageStyle, titleContainerStyle, titleStyle, leftparagraphStyle,
    rightparagraphStyle, flexboxStyle, imageStyle,
    fillerStyle, flexboxstyleSecond, fillerstyleSecond,
    flexboxstyleThird, fillerstyleThird, flexboxstyleFourth
} from './FrontpageStyles'

import { VISITOR_COUNT } from '../../graphql/queries'

const Frontpage = () => {
    const [count, setCount] = useState(0)

    const { loading, error, data } = useQuery(VISITOR_COUNT)

    useEffect(() => {
        if (data) {
            setCount(data.visitorCount)
        }
    }, [loading, data])

    return (
        <div style={frontpageStyle()}>
            <div style={titleContainerStyle()}>
                <p style={titleStyle()}>MÄRYNUMMI</p>
                <p style={titleStyle()}>Käyntikertoja: {count}</p>
            </div>
            <div>
                <div style={flexboxStyle()}>
                    <div style={rightparagraphStyle()}>
                        <h2>Yleistä</h2>
                        <p>
                        Märynummi on taajama Salossa Halikon keskiosissa. Märynummi on kahden kylän, Märyn ja Nummen yhteenkasvanut alue. Paikalliset kutsuvat taajamaa usein pelkästään
                        Märyksi. Märynummi on korkea hiekkaharju, joka on ollut asutettuna jo kivikaudella. Harjulta on löytynyt lukuisia arkeologisia löytöjä mm. Suomusjärven kulttuurista.
                        Nykyään Märynummi on taajama, jossa toimii oma alakoulu, Märynummen koulu.
                        </p>
                    </div>
                    <div style={imageStyle()}>
                        <img src={koulu} alt="kuva märyn koulusta" width="900"/>
                    </div>
                </div>
                <p style={fillerStyle()}>&nbsp;</p>
                <p style={fillerStyle()}>&nbsp;</p>
                <div style={flexboxstyleSecond()}>
                    <div style={imageStyle()}>
                        <img src={luonto} alt="luontokuva" width="900"/>
                    </div>
                    <div style={leftparagraphStyle()}>
                        <h2>Luonto</h2>
                        <p>
                        Märynummi sijaitsee metsäselänteiden eteläreunalla n. 60-80 metriä merenpinnan yläpuolella. Asutus on syntynyt eteläisten rinteiden ympärille ja kasvanut pohjoiseen
                        metsien suuntaan. Pähkinäpensaat ja tammet ovat yleinen näky etelärinteellä. Asutuksen eteläpuolella avautuu kaunis maatalousmaisema Halikonjoen valtakunnallisesti
                        arvokkaalla maisema-alueella, jossa Halikonjoen sivu-uomat ovat syöneet syviä uurteita ja tehneet maisemasta kauniin polveilevan. Hiekkaisen maaperän ja etelään
                        viettävän rinteen ansiosta luonto on harvinaisen monimuotoinen. Peltoalueen reunamilla linnusto on monipuolista ja etenkin yölaulajia tavataan: ruisrääkkä, satakielet,
                        käet, pensassirkkalinnut ja punavarpuset ovat yleisiä. Myös uhanalainen pikkuapolloperhonen elää pieninä populaatioina entisillä lehmien laitumilla, joita nykyisin
                        hoitavat lampaat.
                        </p>
                    </div>
                </div>
                <p style={fillerstyleSecond()}>&nbsp;</p>
                <p style={fillerstyleSecond()}>&nbsp;</p>
                <div style={flexboxstyleThird()}>
                    <div style={rightparagraphStyle()}>
                        <h2>Historia</h2>
                        <p>
                        Venäläiset rakensivat vuonna 1883 Märyyn sotilaskasarmin Halikon reservikomppanialle. Venäjä lakkautti Suomen sotaväen 1900-luvun alussa, jolloin myös reservin
                        tarkka-ampujapataljoona Märyssä loppui. Tyhjilleen jääneille rakennuksille mietittiin uutta käyttöä. Uskelalaiset olivat kuntakokouksessaan vuonna 1897 keskustelleet
                        houruinhuoneen tarpeellisuudesta. Senaatti ei esitystä hyväksynyt, mutta ajatus jäi vuosiksi hautumaan, ja monien vaiheiden jälkeen kasarmi muutettiin vuonna 1926
                        mielisairaalaksi, joka tunnetaan nykyään Halikon sairaalana. Piirimielisairaalana Halikon sairaala loi alueelle useita työpaikkoja ja teki Märystä kasvavan kylän.
                        1980-luvulla Halikon kunta kaavoitti alueelle asuintontteja, ja muutkin alkoivat löytää viihtyisän, luonnonläheisen asuinalueen. Märynummesta kehittyi Halikon
                        toiseksi suurin taajama. Parhaimmillaan kylässä oli kolme kauppaa, kolme pankkia, posti, kirjasto, koulu ja päiväkoti. Linja-autovuoroja kulki Saloon ja takaisin
                        tunnin välein. Suomen sisällissodan jälkeen Märynummella teloitettiin 50 punaista, joukossa myös ulkopaikkakuntalaisia. Kirjailija Leena Lander on kirjoittanut näistä
                        tapahtumista kirjan "Liekin Lapset". Teloitettujen haudalla, nykyisellä Halikon sairaalan hautausmaalla Vaskiontien varressa on vuonna 1940 pystytetty Punaisten
                        muistomerkki.
                        </p>
                    </div>
                    <div style={imageStyle()}>
                        <img src={historia} alt="kuva punaisten muistomerkistä" width="900"/>
                    </div>
                </div>
                <p style={fillerstyleThird()}>&nbsp;</p>
                <p style={fillerstyleThird()}>&nbsp;</p>
                <div style={flexboxstyleFourth()}>
                    <div style={imageStyle()}>
                        <img src={vpk} alt="kuva märyn vpk:sta" width="900"/>
                    </div>
                    <div style={leftparagraphStyle()}>
                        <h2>Nykytila</h2>
                        <p>
                        Märyssä on alakoulun lisäksi Halikon VPK:n paloasema, päiväkoti, nuorisotila Mesta, frisbeegolf-rata, viitoitettu luontopolku ja uimala. E18-moottoritie kulkee
                        kylän eteläpuolelta. Vuonna 2011 perustettiin kyläyhdistys, joka on pyrkinyt elävöittämään kylän elämää. On ryhdytty viettämään Märypäivää, ylläpidetty
                        patikkareittiä, järjestetty paikallisia luontoretkiä ja teatterimatkoja. Kyläyhdistys on lisäksi avustanut koulua ja päiväkotia hankinnoissa ja järjestänyt
                        saunankorjaustalkoot. Vuosittain kyläyhdistys järjestää mm. siivoustalkoita, joulu- ja laskiaistapahtumia sekä niittää kuppikivien polut. Viimeisin ponnistus on
                        ollut vuonna 2017 valmistunut 9-korinen frisbeegolfrata, ja vuonna 2018 rata laajenee 18-koriseksi.  
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontpage