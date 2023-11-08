import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import "./Comps.css";
import Plan from "./Plan";
import Header from "./Header";
import Footer from "./Footer";

function Home(){
    const [classes, setClass] = useState([
        [
            "1a T5",
            "http://plan.ckziu.jaworzno.pl/?classid=BEC62410BD3E7E44"
        ],
        [
            "1b T5",
            "http://plan.ckziu.jaworzno.pl/?classid=4BEE37BA37491D0A"
        ],
        [
            "#1bT5-ASz",
            "http://plan.ckziu.jaworzno.pl/?classid=DB456E53D72BFFF8"
        ],
        [
            "2a T5",
            "http://plan.ckziu.jaworzno.pl/?classid=AD64C8A97D7CC707"
        ],
        [
            "#2aT5-KK*",
            "http://plan.ckziu.jaworzno.pl/?classid=A058E178080438E1"
        ],
        [
            "2b T5",
            "http://plan.ckziu.jaworzno.pl/?classid=22A63BE41220A9C6"
        ],
        [
            "#2bT5-JL",
            "http://plan.ckziu.jaworzno.pl/?classid=8A54888A1B549BAB"
        ],
        [
            "3a T5",
            "http://plan.ckziu.jaworzno.pl/?classid=8E857ADE4036CAF6"
        ],
        [
            "3b T5",
            "http://plan.ckziu.jaworzno.pl/?classid=3A1A8CABFDAD24FC"
        ],
        [
            "#3bT5-MP",
            "http://plan.ckziu.jaworzno.pl/?classid=516187E436AE6A46"
        ],
        [
            "4a T5",
            "http://plan.ckziu.jaworzno.pl/?classid=67775BB5D4E9F32F"
        ],
        [
            "#4aT5-NW*",
            "http://plan.ckziu.jaworzno.pl/?classid=E36446B6F3CBCD6F"
        ],
        [
            "4b T5",
            "http://plan.ckziu.jaworzno.pl/?classid=AD9AC06FB3A602AE"
        ],
        [
            "5c T5",
            "http://plan.ckziu.jaworzno.pl/?classid=941681524221F911"
        ],
        [
            "#5cT5-JG*",
            "http://plan.ckziu.jaworzno.pl/?classid=D75D0E72EECDAA3B"
        ],
        [
            "5d T5",
            "http://plan.ckziu.jaworzno.pl/?classid=FF5D986234B737E6"
        ],
        [
            "#5dT5-JL*",
            "http://plan.ckziu.jaworzno.pl/?classid=89CDB4433B478707"
        ],
        [
            "@5dT5-WR",
            "http://plan.ckziu.jaworzno.pl/?classid=555B28B4DE8FED1F"
        ],
        [
            "1a T6",
            "http://plan.ckziu.jaworzno.pl/?classid=CED707CD9D7F32D4"
        ],
        [
            "@1aT6-FL",
            "http://plan.ckziu.jaworzno.pl/?classid=F597D650129850F5"
        ],
        [
            "#1aT6-DS",
            "http://plan.ckziu.jaworzno.pl/?classid=BC3CBA383B7A8E43"
        ],
        [
            "1b T6",
            "http://plan.ckziu.jaworzno.pl/?classid=087517C47BF4EAC4"
        ],
        [
            "#1bT6-MB",
            "http://plan.ckziu.jaworzno.pl/?classid=28FFF63022BCD20D"
        ],
        [
            "1c T6",
            "http://plan.ckziu.jaworzno.pl/?classid=79BC8E6B59286A7A"
        ],
        [
            "#1cT6-SP",
            "http://plan.ckziu.jaworzno.pl/?classid=BA17C5A95C7CE1B3"
        ],
        [
            "2a T6",
            "http://plan.ckziu.jaworzno.pl/?classid=3A728D9D016FB4A7"
        ],
        [
            "#2aT6-FW*",
            "http://plan.ckziu.jaworzno.pl/?classid=4A47CC07D2532E3A"
        ],
        [
            "2b T6",
            "http://plan.ckziu.jaworzno.pl/?classid=2D227862EE23D59C"
        ],
        [
            "#2bT6-AK*",
            "http://plan.ckziu.jaworzno.pl/?classid=E46607E654866CD4"
        ],
        [
            "2c T6",
            "http://plan.ckziu.jaworzno.pl/?classid=872E91FB548BF7FA"
        ],
        [
            "#2cT6-KD",
            "http://plan.ckziu.jaworzno.pl/?classid=037053FED71AD75F"
        ],
        [
            "#2cT6-PT",
            "http://plan.ckziu.jaworzno.pl/?classid=9F6E52A87723F46A"
        ],
        [
            "#2cT6-FZ*",
            "http://plan.ckziu.jaworzno.pl/?classid=C49D6FB9C274C857"
        ],
        [
            "2d T6",
            "http://plan.ckziu.jaworzno.pl/?classid=E56A0E8C65FFCD29"
        ],
        [
            "3a T6",
            "http://plan.ckziu.jaworzno.pl/?classid=A33BB9C104FD1BE6"
        ],
        [
            "#3aT6-DK",
            "http://plan.ckziu.jaworzno.pl/?classid=D7FBFD0FE7307DA5"
        ],
        [
            "#3aT6-MK",
            "http://plan.ckziu.jaworzno.pl/?classid=CD9100E7682625A3"
        ],
        [
            "3b T6",
            "http://plan.ckziu.jaworzno.pl/?classid=35888D0BFF5E4B0E"
        ],
        [
            "4a T6",
            "http://plan.ckziu.jaworzno.pl/?classid=3D00704322C649FC"
        ],
        [
            "#4aT6-BK*",
            "http://plan.ckziu.jaworzno.pl/?classid=3D7183027705E811"
        ],
        [
            "#4aT6-JS",
            "http://plan.ckziu.jaworzno.pl/?classid=FD8AB99B596DB0AD"
        ],
        [
            "4b T6",
            "http://plan.ckziu.jaworzno.pl/?classid=D5576EDF8C184385"
        ],
        [
            "5c T6",
            "http://plan.ckziu.jaworzno.pl/?classid=C7EE684523791690"
        ],
        [
            "#5cT6-DM",
            "http://plan.ckziu.jaworzno.pl/?classid=D2B4BCB05B2B983A"
        ],
        [
            "5d T6",
            "http://plan.ckziu.jaworzno.pl/?classid=0FECF995D0F0214B"
        ],
        [
            "1a TE",
            "http://plan.ckziu.jaworzno.pl/?classid=549BC79D84D53598"
        ],
        [
            "1b TE",
            "http://plan.ckziu.jaworzno.pl/?classid=289BAE184A973BB3"
        ],
        [
            "#1bTE-PSt",
            "http://plan.ckziu.jaworzno.pl/?classid=A78659443B974291"
        ],
        [
            "2a TE",
            "http://plan.ckziu.jaworzno.pl/?classid=90523D7EF3282BA0"
        ],
        [
            "#2aTE-IK",
            "http://plan.ckziu.jaworzno.pl/?classid=74FE178FCE2E55A3"
        ],
        [
            "2b TE",
            "http://plan.ckziu.jaworzno.pl/?classid=103A8ECD09D9C3B2"
        ],
        [
            "#2bTE-MJ*",
            "http://plan.ckziu.jaworzno.pl/?classid=6DE4949CF5C7E362"
        ],
        [
            "2c TE",
            "http://plan.ckziu.jaworzno.pl/?classid=AC67503B3625CF1A"
        ],
        [
            "3a TE",
            "http://plan.ckziu.jaworzno.pl/?classid=9FE126F783736D83"
        ],
        [
            "#3aTE-DD*",
            "http://plan.ckziu.jaworzno.pl/?classid=366DB235550802B5"
        ],
        [
            "3b TE",
            "http://plan.ckziu.jaworzno.pl/?classid=2DE2CF45240B4E58"
        ],
        [
            "#3bTE-KCz",
            "http://plan.ckziu.jaworzno.pl/?classid=258C2575A98BE6CC"
        ],
        [
            "#3bTE-PS",
            "http://plan.ckziu.jaworzno.pl/?classid=B1F450F70E5BA681"
        ],
        [
            "4a TE",
            "http://plan.ckziu.jaworzno.pl/?classid=E72981605C487041"
        ],
        [
            "4b TE",
            "http://plan.ckziu.jaworzno.pl/?classid=C4B541ABCAD6DE6F"
        ],
        [
            "#4bTE-KP",
            "http://plan.ckziu.jaworzno.pl/?classid=D68494CBB7F478B9"
        ],
        [
            "5c TE",
            "http://plan.ckziu.jaworzno.pl/?classid=579B5615B2685976"
        ],
        [
            "5d TE",
            "http://plan.ckziu.jaworzno.pl/?classid=BF0B9B0E2C34F558"
        ],
        [
            "#5dTE-KC*",
            "http://plan.ckziu.jaworzno.pl/?classid=2E8F99F3DA7A10EA"
        ],
        [
            "Smugowska Simona",
            "http://plan.ckziu.jaworzno.pl/?teacherid=770D6EF92E269C32"
        ],
        [
            "Esmund Magdalena",
            "http://plan.ckziu.jaworzno.pl/?teacherid=E04150993D795EDB"
        ],
        [
            "Pokorska Elżbieta",
            "http://plan.ckziu.jaworzno.pl/?teacherid=C9A0122379602A32"
        ],
        [
            "Urbańczyk Damian",
            "http://plan.ckziu.jaworzno.pl/?teacherid=F27AB5306CAA6EB2"
        ],
        [
            "Mulka-Łuszcz Teresa",
            "http://plan.ckziu.jaworzno.pl/?teacherid=56EEC9C0078F964E"
        ],
        [
            "Baranowski Juliusz",
            "http://plan.ckziu.jaworzno.pl/?teacherid=8BA576B3D3DB1037"
        ],
        [
            "Bargieł Mateusz",
            "http://plan.ckziu.jaworzno.pl/?teacherid=ADADF631C73A774A"
        ],
        [
            "Bieszczad Sylwia",
            "http://plan.ckziu.jaworzno.pl/?teacherid=B4D996F2F8F91F38"
        ],
        [
            "Bochenek Łukasz",
            "http://plan.ckziu.jaworzno.pl/?teacherid=408ABCE56875009D"
        ],
        [
            "Bogunia Bartłomiej",
            "http://plan.ckziu.jaworzno.pl/?teacherid=7F777DA642F6E31F"
        ],
        [
            "Brańka Paweł",
            "http://plan.ckziu.jaworzno.pl/?teacherid=F60877AC1B749548"
        ],
        [
            "Bubak Włodzimierz",
            "http://plan.ckziu.jaworzno.pl/?teacherid=C2B2743CCFC4E71B"
        ],
        [
            "Budka Agata",
            "http://plan.ckziu.jaworzno.pl/?teacherid=BC31C03A9BACB360"
        ],
        [
            "Chechelska Edyta",
            "http://plan.ckziu.jaworzno.pl/?teacherid=27980B834B411252"
        ],
        [
            "Cierpich Nina",
            "http://plan.ckziu.jaworzno.pl/?teacherid=05BCF2979F5F2EFC"
        ],
        [
            "Dąbek-Nagacz Mariola",
            "http://plan.ckziu.jaworzno.pl/?teacherid=B1496917CA7CD4F2"
        ],
        [
            "Dąbrowski Mirosław",
            "http://plan.ckziu.jaworzno.pl/?teacherid=A41EE878BF494E5A"
        ],
        [
            "Długajczyk Dorota",
            "http://plan.ckziu.jaworzno.pl/?teacherid=BF7C4D8DEBCF1939"
        ],
        [
            "Długosz Martyna",
            "http://plan.ckziu.jaworzno.pl/?teacherid=9DA615FAA2D4D602"
        ],
        [
            "Dobosz Łukasz",
            "http://plan.ckziu.jaworzno.pl/?teacherid=49125C603AC9C35D"
        ],
        [
            "Działowska Milena",
            "http://plan.ckziu.jaworzno.pl/?teacherid=6F25D92D05338CF5"
        ],
        [
            "Gaca Robert",
            "http://plan.ckziu.jaworzno.pl/?teacherid=901AC1E69F37106F"
        ],
        [
            "Gajewska Justyna",
            "http://plan.ckziu.jaworzno.pl/?teacherid=13A47E0D4CF3071B"
        ],
        [
            "Gawrońska Mariola",
            "http://plan.ckziu.jaworzno.pl/?teacherid=336EB2978D9C119A"
        ],
        [
            "Gil Aneta",
            "http://plan.ckziu.jaworzno.pl/?teacherid=A14C8E00889EB7A8"
        ],
        [
            "Głowacka Patrycja",
            "http://plan.ckziu.jaworzno.pl/?teacherid=3555C39380B8C1BD"
        ],
        [
            "Glistak Mikołaj",
            "http://plan.ckziu.jaworzno.pl/?teacherid=DAAE4BE143AF3131"
        ],
        [
            "Guja Barbara",
            "http://plan.ckziu.jaworzno.pl/?teacherid=A4A25F3920CFA58C"
        ],
        [
            "Halota Wojciech",
            "http://plan.ckziu.jaworzno.pl/?teacherid=E6C32BFC44DF8F6E"
        ],
        [
            "Jamrozik Olga",
            "http://plan.ckziu.jaworzno.pl/?teacherid=BF17F6308F06DEBA"
        ],
        [
            "Jankowska-Kabiesz Elżbieta",
            "http://plan.ckziu.jaworzno.pl/?teacherid=698B0EDC6242A289"
        ],
        [
            "Jaromin Karolina",
            "http://plan.ckziu.jaworzno.pl/?teacherid=2CC6039A5707B424"
        ],
        [
            "Jasińska-Kumór Marta",
            "http://plan.ckziu.jaworzno.pl/?teacherid=712F9A5B7A8D1971"
        ],
        [
            "Jończyk Paweł",
            "http://plan.ckziu.jaworzno.pl/?teacherid=43E483C59E08455A"
        ],
        [
            "Kalinowska Jolanta",
            "http://plan.ckziu.jaworzno.pl/?teacherid=BFF90B2906DEA9C9"
        ],
        [
            "Kędrak Michał",
            "http://plan.ckziu.jaworzno.pl/?teacherid=FFA2CA2305970E4C"
        ],
        [
            "Kilian Krystyna",
            "http://plan.ckziu.jaworzno.pl/?teacherid=635B57BD05990164"
        ],
        [
            "Klimek Małgorzata",
            "http://plan.ckziu.jaworzno.pl/?teacherid=22E2D4787E559220"
        ],
        [
            "Kosobudzka Anna",
            "http://plan.ckziu.jaworzno.pl/?teacherid=0BFC19DAD2A5DBC4"
        ],
        [
            "Kosterewa Karina",
            "http://plan.ckziu.jaworzno.pl/?teacherid=4DA84E601ED63473"
        ],
        [
            "Kowalczyk Mirosław",
            "http://plan.ckziu.jaworzno.pl/?teacherid=446D3299F367692F"
        ],
        [
            "Kozub Agnieszka",
            "http://plan.ckziu.jaworzno.pl/?teacherid=3DBFF8ACF44AEA92"
        ],
        [
            "Latko Ewa",
            "http://plan.ckziu.jaworzno.pl/?teacherid=920B75D0CE60025C"
        ],
        [
            "Leś Anna",
            "http://plan.ckziu.jaworzno.pl/?teacherid=024AED68B949A1EF"
        ],
        [
            "Lisowski Paweł",
            "http://plan.ckziu.jaworzno.pl/?teacherid=28750F934E3EDD2A"
        ],
        [
            "Lysko Mateusz",
            "http://plan.ckziu.jaworzno.pl/?teacherid=0C5AA70C633B8E34"
        ],
        [
            "Łoś Jacek",
            "http://plan.ckziu.jaworzno.pl/?teacherid=34DC7975084542B9"
        ],
        [
            "Margielewska-Gromadka Joanna",
            "http://plan.ckziu.jaworzno.pl/?teacherid=7FD5BF7F85148412"
        ],
        [
            "Martyka Małgorzata",
            "http://plan.ckziu.jaworzno.pl/?teacherid=F81F4018BD25F549"
        ],
        [
            "Marzec Tomasz",
            "http://plan.ckziu.jaworzno.pl/?teacherid=67C27D6A4AA1E8B0"
        ],
        [
            "Mikołajczak Małgorzata",
            "http://plan.ckziu.jaworzno.pl/?teacherid=2F86AC6B8748A7B9"
        ],
        [
            "Myszka Dorota",
            "http://plan.ckziu.jaworzno.pl/?teacherid=A9EB3851F64134CA"
        ],
        [
            "Mirocha Artur",
            "http://plan.ckziu.jaworzno.pl/?teacherid=F252B038B7286594"
        ],
        [
            "Nowak Marcin",
            "http://plan.ckziu.jaworzno.pl/?teacherid=4C1A52107F7F4ED6"
        ],
        [
            "Nowak Sylwia",
            "http://plan.ckziu.jaworzno.pl/?teacherid=D4AFEB63EA899AB1"
        ],
        [
            "Papaj Bożena",
            "http://plan.ckziu.jaworzno.pl/?teacherid=24FAB75A2651E3C9"
        ],
        [
            "Papaj Janusz",
            "http://plan.ckziu.jaworzno.pl/?teacherid=D167AE09FD70A16C"
        ],
        [
            "Pasierb Piotr",
            "http://plan.ckziu.jaworzno.pl/?teacherid=E4EF41171EF9F3D0"
        ],
        [
            "Pawlik Roman",
            "http://plan.ckziu.jaworzno.pl/?teacherid=A36B9583A2811A42"
        ],
        [
            "Pelc Katarzyna",
            "http://plan.ckziu.jaworzno.pl/?teacherid=8844B22D3DAE1949"
        ],
        [
            "Pilecki Krzysztof",
            "http://plan.ckziu.jaworzno.pl/?teacherid=C5AC582E1B8556AE"
        ],
        [
            "Plewko-Kotynia Magdalena",
            "http://plan.ckziu.jaworzno.pl/?teacherid=8BBC660D7CE1A3E0"
        ],
        [
            "Proksa Łukasz",
            "http://plan.ckziu.jaworzno.pl/?teacherid=C86F659685A606AB"
        ],
        [
            "Proksa Stanisław",
            "http://plan.ckziu.jaworzno.pl/?teacherid=E0883C4AFE597BF4"
        ],
        [
            "Rachwalik Mirosława",
            "http://plan.ckziu.jaworzno.pl/?teacherid=14DB0D749B5A0AF3"
        ],
        [
            "Samojluk Damian",
            "http://plan.ckziu.jaworzno.pl/?teacherid=167B1392F4C273D5"
        ],
        [
            "Smalcerz Marian",
            "http://plan.ckziu.jaworzno.pl/?teacherid=6EEC46065A36B33C"
        ],
        [
            "Smiatek Andrzej",
            "http://plan.ckziu.jaworzno.pl/?teacherid=E06AD245FF73A009"
        ],
        [
            "Smugowski Sławomir",
            "http://plan.ckziu.jaworzno.pl/?teacherid=FCFA123270663A84"
        ],
        [
            "Stachoń-Pastucha Patrycja",
            "http://plan.ckziu.jaworzno.pl/?teacherid=DC4B23F43EFD08AB"
        ],
        [
            "Stawska Ewelina",
            "http://plan.ckziu.jaworzno.pl/?teacherid=771106D68FBB8903"
        ],
        [
            "Szpak Monika",
            "http://plan.ckziu.jaworzno.pl/?teacherid=9D09E85AEE61C439"
        ],
        [
            "Tatarczuch Natalia",
            "http://plan.ckziu.jaworzno.pl/?teacherid=C298221237874C50"
        ],
        [
            "Trojanowski Robert",
            "http://plan.ckziu.jaworzno.pl/?teacherid=643826C03E1E9B9D"
        ],
        [
            "Tucharz Joanna",
            "http://plan.ckziu.jaworzno.pl/?teacherid=2216DC5BEEB05D76"
        ],
        [
            "Warzecha Anna",
            "http://plan.ckziu.jaworzno.pl/?teacherid=C461DEE912A84D4F"
        ],
        [
            "Woszczyna-Kozioł Ilona",
            "http://plan.ckziu.jaworzno.pl/?teacherid=E8B52E553C14CEF7"
        ],
        [
            "Wrona Magdalena",
            "http://plan.ckziu.jaworzno.pl/?teacherid=E45B813057D3F701"
        ],
        [
            "Zelek Piotr",
            "http://plan.ckziu.jaworzno.pl/?teacherid=9B344958420EE7C5"
        ],
        [
            "Żak Agnieszka",
            "http://plan.ckziu.jaworzno.pl/?teacherid=86A5A6873AAB8AD0"
        ],
        [
            "Żogała Krzysztof",
            "http://plan.ckziu.jaworzno.pl/?teacherid=943FC88C74C15D3B"
        ],
        [
            "Żurowska Anna",
            "http://plan.ckziu.jaworzno.pl/?teacherid=7FF17C5424EEF5E2"
        ],
        [
            "Żurowski Mariusz",
            "http://plan.ckziu.jaworzno.pl/?teacherid=00CDF24554C9DE53"
        ],
        [
            "CKZ",
            "http://plan.ckziu.jaworzno.pl/?teacherid=F6072072BC89840F"
        ],
        [
            "bn",
            "http://plan.ckziu.jaworzno.pl/?teacherid=3AB7787B53BE9485"
        ],
        [
            "vacat",
            "http://plan.ckziu.jaworzno.pl/?teacherid=2DEADFA4FE927ED9"
        ]
    ]);
    const [data, setData] = useState({
        "lesson": [
            [
                "Bubak Włodzimierz",
                "105/V",
                "z-P frameworki webowe - backend",
                "1. Grupa"
            ],
            [
                "Bubak Włodzimierz",
                "105/V",
                "z-P frameworki webowe - backend",
                "1. Grupa"
            ],
            [
                "Stawska Ewelina",
                "1/II",
                "język angielski",
                "2. Grupa",
                "Bubak Włodzimierz",
                "105/V",
                "z-P frameworki webowe - backend",
                "1. Grupa"
            ],
            [
                "Stawska Ewelina",
                "1/II",
                "język angielski",
                "2. Grupa",
                "Bubak Włodzimierz",
                "105/V",
                "z-P frameworki webowe - backend",
                "1. Grupa"
            ],
            [
                "Łoś Jacek",
                "aula",
                "historia",
                "Cała klasa"
            ],
            [
                "Proksa Łukasz",
                "sg",
                "wychowanie fizyczne",
                "1. Grupa",
                "Bubak Włodzimierz",
                "105/V",
                "z-P frameworki webowe - backend",
                "2. Grupa"
            ],
            [
                "Bubak Włodzimierz",
                "105/V",
                "z-P frameworki webowe - backend",
                "2. Grupa"
            ],
            [
                "Bubak Włodzimierz",
                "105/V",
                "z-P frameworki webowe - backend",
                "2. Grupa"
            ],
            [
                "Bubak Włodzimierz",
                "105/V",
                "z-P frameworki webowe - backend",
                "2. Grupa"
            ],
            [],
            [],
            [
                "Bubak Włodzimierz",
                "105/V",
                "z-P frameworki webowe - frontend",
                "1. Grupa"
            ],
            [
                "Bubak Włodzimierz",
                "105/V",
                "z-P frameworki webowe - frontend",
                "1. Grupa"
            ],
            [
                "Budka Agata",
                "sg",
                "wychowanie fizyczne",
                "2. Grupa",
                "Bubak Włodzimierz",
                "105/V",
                "z-P frameworki webowe - frontend",
                "1. Grupa"
            ],
            [
                "Budka Agata",
                "sg",
                "wychowanie fizyczne",
                "2. Grupa",
                "Bubak Włodzimierz",
                "105/V",
                "z-P frameworki webowe - frontend",
                "1. Grupa"
            ],
            [
                "Bubak Włodzimierz",
                "105/V",
                "zajęcia z wychowawcą",
                "Cała klasa"
            ],
            [
                "Bubak Włodzimierz",
                "105/V",
                "z-P frameworki webowe - frontend",
                "2. Grupa"
            ],
            [
                "Bubak Włodzimierz",
                "105/V",
                "z-P frameworki webowe - frontend",
                "2. Grupa"
            ],
            [
                "Bubak Włodzimierz",
                "105/V",
                "z-P frameworki webowe - frontend",
                "2. Grupa"
            ],
            [
                "Bubak Włodzimierz",
                "105/V",
                "z-P frameworki webowe - frontend",
                "2. Grupa"
            ],
            [],
            [
                "Bubak Włodzimierz",
                "105/V",
                "z-P programowanie aplikacji mobilnych",
                "2. Grupa"
            ],
            [
                "Bubak Włodzimierz",
                "105/V",
                "z-P programowanie aplikacji desktopowych",
                "2. Grupa"
            ],
            [
                "Bubak Włodzimierz",
                "105/V",
                "z-P programowanie aplikacji desktopowych",
                "2. Grupa"
            ],
            [
                "Budka Agata",
                "sg",
                "wychowanie fizyczne",
                "2. Grupa",
                "Bubak Włodzimierz",
                "105/V",
                "z-P programowanie aplikacji mobilnych",
                "1. Grupa"
            ],
            [
                "Pelc Katarzyna",
                "111/V",
                "język hiszpański",
                "jh",
                "Margielewska-Gromadka Joanna",
                "2/II",
                "język niemiecki",
                "jn"
            ],
            [
                "Papaj Janusz",
                "211/V",
                "język angielski",
                "1. Grupa",
                "Bubak Włodzimierz",
                "105/V",
                "z-P programowanie aplikacji mobilnych",
                "2. Grupa"
            ],
            [
                "Papaj Janusz",
                "211/V",
                "język angielski",
                "1. Grupa",
                "Bubak Włodzimierz",
                "105/V",
                "z-P programowanie aplikacji mobilnych",
                "2. Grupa"
            ],
            [
                "Proksa Łukasz",
                "sg",
                "wychowanie fizyczne",
                "1. Grupa",
                "Bubak Włodzimierz",
                "105/V",
                "z-P programowanie aplikacji mobilnych",
                "2. Grupa"
            ],
            [
                "Proksa Łukasz",
                "sg",
                "wychowanie fizyczne",
                "1. Grupa"
            ],
            [],
            [
                "Bubak Włodzimierz",
                "105/V",
                "z-P programowanie aplikacji desktopowych",
                "1. Grupa"
            ],
            [
                "Bubak Włodzimierz",
                "105/V",
                "z-P programowanie aplikacji desktopowych",
                "1. Grupa"
            ],
            [
                "Dąbek-Nagacz Mariola",
                "3/III",
                "matematyka",
                "Cała klasa"
            ],
            [
                "Dąbek-Nagacz Mariola",
                "3/III",
                "matematyka",
                "Cała klasa"
            ],
            [
                "Dobosz Łukasz",
                "1/V",
                "język polski",
                "Cała klasa"
            ],
            [
                "Dobosz Łukasz",
                "1/V",
                "język polski",
                "Cała klasa"
            ],
            [
                "Papaj Janusz",
                "211/V",
                "język angielski R",
                "1. Grupa",
                "Stawska Ewelina",
                "1/II",
                "język angielski R",
                "2. Grupa"
            ],
            [
                "Dobosz Łukasz",
                "1/V",
                "godz. dyr.",
                "Cała klasa"
            ],
            [],
            [],
            [
                "Długajczyk Dorota",
                "3/I",
                "religia",
                "rel"
            ],
            [
                "Długajczyk Dorota",
                "3/I",
                "religia",
                "rel"
            ],
            [
                "Rachwalik Mirosława",
                "107/II",
                "wiedza o społeczeństwie",
                "Cała klasa"
            ],
            [
                "Dobosz Łukasz",
                "1/V",
                "język polski",
                "Cała klasa"
            ],
            [
                "Łoś Jacek",
                "14/III",
                "historia",
                "Cała klasa"
            ],
            [
                "Dąbek-Nagacz Mariola",
                "3/III",
                "matematyka",
                "Cała klasa"
            ],
            [
                "Bubak Włodzimierz",
                "105/V",
                "z-P programowanie aplikacji mobilnych",
                "1. Grupa"
            ],
            [
                "Bubak Włodzimierz",
                "105/V",
                "z-P programowanie aplikacji mobilnych",
                "1. Grupa"
            ],
            [
                "Bubak Włodzimierz",
                "105/V",
                "z-P programowanie aplikacji mobilnych",
                "1. Grupa"
            ]
        ],
        "dayLength": 10
    });
    return(
        <div>
            <Header text="Strona główna"/>
            
            <h3 id="button_title">Wybierz klasę / nauczyciela</h3>
            
            <div id="buttons">
                
                 {classes.map((item, id) => (
                <div key={id}>
                     <a type="submit" href={item[1]}> {item[0]} </a>
                     <br/>
                </div>
               
                ))}
            </div>
            
            <br/>

            <Link className={"link"} id="logout" to={"/"}>
                <button>"Wyloguj lol"</button>
            </Link>

            <Plan data={data} id="planbox"/>

            {/* <Footer/> */}
        </div>
    )
}

export default Home;