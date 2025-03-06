const list = {
  movies: [
    {
      title: "Cisza w Mieście",
      description:
        "W czasach apokalipsy, grupka ocalałych próbuje znaleźć schronienie w pustym mieście",
      director: "Michał Kowalski",
      release: "2014",
      genre: "thiller",
      rating: "3/5",
    },
    {
      title: "Zagubione Wspomnienia",
      description:
        "Młody mężczyzna budzi się bez pamięci i musi odkryć, cp stało się z hegi życiem, podczas gyd ktoś nieustannie stara się go zabić",
      director: "Adam Kowalski",
      release: "2018",
      genre: "thiller",
      rating: "4/5",
    },
    {
      title: "Lśnienie Przeszłośći",
      description:
        "W 1985 roku młody chłopak odkrywa tajemnicze zdjęcia, które prowadzą go do zaginionej cywilizacji",
      director: "Michał Nowak",
      release: "2000",
      genre: "Przygowody/Sci-fi",
      rating: "4/5",
    },
    {
      title: "Echo w Ciemnośći",
      description:
        "Grupa przyjacioł spędza weekend w starym domu na odludziu, gdzie odkrywają, że nie są sami",
      director: "Karolina Piotrwoska",
      release: "2020",
      genre: "Horror",
      rating: "2/5",
    },
    {
      title: "Miłość w Blasku Gwiazd",
      description:
        "Dwoje artystów spotyka się w Los Angeles i zaczyna nieoczekiwaną, intensywną miłość",
      director: "Piotr Wójcik",
      genre: "Romans/Dramat",
      release: "2024",
      rating: "4/5",
    },
    {
      title: "Tylko jedno Życie",
      description:
        "Po tragicznej śmierci matki, młoda dziewczyna musi poradzić sobie z samotnością i odkrywać tajemnice przeszłości",
      release: "2015",
      genre: "Dramat",
      rating: "5/5",
    },
    {
      title: "Sekretne Drzwi",
      description:
        "Mężczyzna, który odkrywa portal do innego wymiaru, staje przed dylematem, czy wrócić do rzeczywistości, czy zostać w nowym świecie.",
      release: "2020",
      genre: "Sci-Fi",
      rating: "4/5",
    },
    {
      name: "Wielki Skok",
      description:
        "Grupa przestępców planuje idealny napad na bank, ale wszystko idzie nie tak, jak miało.",
      director: "Piotr Borkowski",
      genre: "Kryminał, Thriller",
      release: "2020",
      rating: "3/5",
    },
    {
      name: "Ziemia Bez Prawa",
      description:
        "W post-apokaliptycznym świecie, grupka ocalałych musi stawić czoła nowym zagrożeniom.",
      director: "Kacper Zawisza",
      genre: "Akcja, Sci-Fi",
      release: "2013",
      rating: "4/5",
    },
    {
      name: "Tajemnicza Wyspa",
      description:
        "Grupa naukowców przypadkowo ląduje na nieznanej wyspie, pełnej niebezpiecznych stworzeń i starożytnych sekretów.",
      director: "Ewa Kowalczyk",
      genre: "Przygodowy, Thriller",
      release: "2015",
      rating: "2/5",
    },
    {
      name: "Ostatni Lot",
      description:
        "Po katastrofie lotniczej, ocalała kobieta walczy o przetrwanie na bezludnej wyspie.",
      director: "Tomasz Wesołowski",
      genre: "Dramat, Survival",
      release: "2018",
      rating: "4/5",
    },
    {
      name: "W Sieci Kłamstw",
      description:
        "Młody dziennikarz odkrywa, że jego śledztwo prowadzi do wciągania go w świat wielkich oszustw i korupcji.",
      director: "Marek Malinowski",
      genre: "Thriller, Dramat",
      release: "2020",
      rating: "4/5",
    },
    {
      name: "Na Skraju Przepaści",
      description:
        "Pracownik korporacji zmienia swoje życie, decydując się na ryzykowny projekt, który stawia go na krawędzi katastrofy.",
      director: "Magdalena Sierżant",
      genre: "Dramat, Thriller",
      release: "2016",
      rating: "1/5",
    },
    {
      name: "Oczy Ciemności",
      description:
        "Kobieta staje się świadkiem morderstwa i odkrywa, że zabić ją może ktoś z jej najbliższego otoczenia.",
      director: "Piotr Jarosz",
      genre: "Kryminał, Thriller",
      release: "2013",
      rating: "4/5",
    },
    {
      name: "Między Światami",
      description:
        "Po tragicznej śmierci ukochanej osoby, mężczyzna stara się skontaktować z jej duchem, nieświadomy, że ma moc zmieniania rzeczywistości.",
      director: "Alicja Wójcik",
      genre: "Dramat, Fantasy",
      release: "2018",
      rating: "2/5",
    },
    {
      name: "Wysoka Gra",
      description:
        "Ambitny pokerzysta wplątuje się w niebezpieczną grę, gdzie stawką jest życie.",
      director: "Grzegorz Ławniczak",
      genre: "Kryminał, Dramat",
      release: "2025",
      rating: "5/5",
    },
    {
      name: "Czas Przemian",
      description:
        "Mężczyzna odkrywa, że jego życie to tylko jedna z wielu alternatywnych rzeczywistości.",
      director: "Jan Mazur",
      genre: "Sci-Fi, Dramat",
      release: "2012",
      rating: "3/5",
    },
    {
      name: "Ucieczka z Piekła",
      description:
        "Grupa więźniów planuje zuchwałą ucieczkę z najwyżej strzeżonego więzienia na świecie.",
      director: "Krzysztof Piątek",
      genre: "Akcja, Thriller",
      release: "2010",
      rating: "4/5",
    },
    {
      name: "Złodziejka",
      description:
        "Kobieta z przeszłością kryminalną stara się zacząć nowe życie, ale nie udaje jej się uciec od dawnego zawodu.",
      director: "Karol Wojdak",
      genre: "Dramat, Kryminał",
      release: "2015",
      rating: "2/5",
    },
    {
      name: "Cisza Przed Burzą",
      description:
        "W małej wiosce dochodzi do tragedii, która rozdziela rodzinę i zmienia życie mieszkańców na zawsze.",
      director: "Michał Różalski",
      genre: "Dramat",
      release: 2023,
      ocena: 4.2,
    },
    {
      name: "Podziemne Miasto",
      description:
        "Po katastrofie ekologicznej, ludzkość przenosi się do podziemnych miast, gdzie życie staje się coraz trudniejsze.",
      director: "Wojciech Kaczmarek",
      genre: "Sci-Fi, Thriller",
      release: 2024,
      ocena: 4.5,
    },
    {
      name: "Zatrzymany Czas",
      description:
        "Mężczyzna, który odkrywa, że jego zegarek może zatrzymać czas, staje przed decyzją, jak wykorzystać tę moc.",
      director: "Agnieszka Laskowska",
      genre: "Sci-Fi, Dramat",
      release: 2022,
      ocena: 4.0,
    },
    {
      name: "Kroki w Ciemności",
      description:
        "Policjant zaczyna ścigać seryjnego mordercę, który zawsze zostawia ślady, które prowadzą w głąb jego przeszłości.",
      director: "Tomasz Kwiatkowski",
      genre: "Kryminał, Thriller",

      release: 2021,
      ocena: 4.3,
    },
    {
      name: "Złudne Piękno",
      description:
        "Młoda kobieta podejmuje pracę jako modelka, ale szybko odkrywa, że branża ma mroczną stronę.",
      director: "Anna Zielińska",
      genre: "Dramat, Thriller",

      release: 2022,
      ocena: 4.1,
    },
    {
      name: "Ostatni Dzień Lata",
      description:
        "Grupa przyjaciół spotyka się na wakacjach, gdzie jeden z nich przyznaje się do niewypowiedzianej tajemnicy.",
      director: "Adam Płocki",
      genre: "Dramat, Komedia",
      release: 2020,
      ocena: 4.0,
    },
    {
      name: "Cień Wspomnień",
      description:
        "Po wielu latach, mężczyzna wraca do swojego rodzinnego miasta, gdzie zaczyna odkrywać nieznane dotąd sekrety rodziny.",
      director: "Jacek Wroński",
      genre: "Dramat, Thriller",
      release: 2021,
      ocena: 4.4,
    },
    {
      name: "Tajemnica Skrzyni",
      description:
        "Młody chłopak znajduje starą skrzynię, która skrywa niesamowitą tajemnicę związaną z jego przodkami.",
      director: "Michał Wojda",
      genre: "Przygodowy, Fantastyka",
      release: 2023,
      ocena: 4.2,
    },
    {
      name: "Upadek Ikony",
      description:
        "Historia upadku jednej z największych gwiazd muzyki pop, która zmienia swoje życie na zawsze po publicznym skandalu.",
      director: "Krzysztof Żuraw",
      genre: "Dramat, Biograficzny",
      release: 2022,
      ocena: 4.3,
    },
    {
      name: "Złota Rzeka",
      description:
        "Poszukiwacze złota w 19 wieku ryzykują życie, by odnaleźć legendarne złoża, ale na ich drodze stają liczne niebezpieczeństwa.",
      director: "Andrzej Domański",
      genre: "Przygodowy, Western",
      release: 2021,
      ocena: 4.4,
    },
    {
      name: "Wspomnienie Tego Dnia",
      description:
        "Mężczyzna zaczyna widzieć w snach fragmenty swojego przyszłego życia, co prowadzi go do podejmowania ryzykownych decyzji.",
      director: "Tomasz Kaczmarek",
      genre: "Thriller, Sci-Fi",
      release: 2022,
      ocena: 4.2,
    },
    {
      name: "Zmierzch Nowego Świata",
      description:
        "W świecie przyszłości, gdzie technologia rządzi życiem, młody idealista stara się walczyć z systemem.",
      director: "Krzysztof Wysocki",
      genre: "Sci-Fi, Akcja",
      release: 2023,
      ocena: 4.3,
    },
    {
      name: "Pogrzebany Wspomnieniami",
      description:
        "Mężczyzna zmaga się z traumą po śmierci ukochanej osoby, aż pewnego dnia zaczyna widzieć ją w swoich snach.",
      director: "Aleksandra Lis",
      genre: "Dramat, Fantastyka",

      release: 2021,
      ocena: 4.1,
    },
    {
      name: "Tajemnicza Wiadomość",
      description:
        "Pewnego dnia, kobieta otrzymuje anonimowy list, który prowadzi ją do zaginionego członka rodziny.",
      director: "Andrzej Wasilewski",
      genre: "Thriller, Dramat",

      release: 2024,
      ocena: 4.5,
    },
    {
      name: "Zamach na Czas",
      description:
        "Grupa naukowców odkrywa sposób podróży w czasie, ale ich eksperymenty prowadzą do nieoczekiwanych konsekwencji.",
      director: "Łukasz Bielawski",
      genre: "Sci-Fi, Thriller",
      release: 2022,
      ocena: 4.4,
    },
    {
      name: "Dzieci Nocy",
      description:
        "Grupa dzieci posiadających paranormalne zdolności zostaje uwikłana w niebezpieczną grę, w której stawką jest ich przyszłość.",
      director: "Barbara Nowicka",
      genre: "Fantasy, Thriller",
      release: 2023,
      ocena: 4.0,
    },
    {
      name: "Błąd w Systemie",
      description:
        "Programista odkrywa, że jego firma jest odpowiedzialna za stworzenie sztucznej inteligencji, która przejęła kontrolę nad światem.",
      director: "Krzysztof Grzesiuk",
      genre: "Sci-Fi, Thriller",
      release: 2024,
      ocena: 4.3,
    },
    {
      name: "Zatruta Rzeka",
      description:
        "W małej wiosce zaczynają dziać się dziwne rzeczy po zanieczyszczeniu wód przez fabrykę. Grupa mieszkańców staje przed walką o przeżycie.",
      director: "Katarzyna Kowalska",
      genre: "Thriller, Dramat",
      release: 2021,
      ocena: 4.2,
    },
    {
      name: "Złapani w Sieci",
      description:
        "Grupa osób zostaje uwikłana w nielegalny świat internetowego ścigania, gdzie nie ma ucieczki.",
      director: "Tomasz Górski",
      genre: "Kryminał, Thriller",
      release: 2022,
      ocena: 4.3,
    },
    {
      name: "Świat za Kurtyną",
      description:
        "Historia życia młodego aktora, który musi zmierzyć się z rzeczywistością show-biznesu i odkrywać swoją prawdziwą tożsamość.",
      director: "Aleksandra Król",
      genre: "Dramat, Biograficzny",
      release: 2021,
      ocena: 4.4,
    },
    {
      name: "Krople Łez",
      description:
        "Historia kobiet, które zmagają się z traumy przeszłości i próbują odbudować swoje życie po rozstaniu z mężem.",
      director: "Iwona Orłowska",
      genre: "Dramat",
      release: 2022,
      ocena: 4.1,
    },
    {
      name: "Zatrzymany Czas",
      description:
        "Mężczyzna zyskuje zdolność zatrzymywania czasu, ale wkrótce odkrywa, że jego moc ma tragiczne konsekwencje.",
      director: "Dariusz Kubacki",
      genre: "Sci-Fi, Dramat",
      release: 2023,
      ocena: 4.0,
    },
    {
      name: "Złowrogie Oczy",
      description:
        "Po powrocie do rodzinnego miasta, detektyw staje w obliczu serii tajemniczych zbrodni, które są ściśle związane z jego przeszłością.",
      director: "Michał Szewczyk",
      genre: "Kryminał, Thriller",
      release: 2024,
      ocena: 4.5,
    },
    {
      name: "Dźwięk Przeszłości",
      description:
        "Grupa muzyków odkrywa tajemnicze nagrania, które przenoszą ich do innych wymiarów.",
      director: "Maciej Klimczak",
      genre: "Sci-Fi, Thriller",
      release: 2021,
      ocena: 4.2,
    },
    {
      name: "W Złotej Klatce",
      description:
        "Historia życia pewnej aktorki, która po latach kariery staje przed dylematem: pozostać w złotej klatce czy zacząć od nowa.",
      director: "Julia Prus",
      genre: "Dramat",
      release: 2022,
      ocena: 4.1,
    },
    {
      name: "Wizja",
      description:
        "Mężczyzna, który doświadcza dziwnych wizji przyszłości, postanawia zmienić swoje życie i zapobiec nadchodzącej katastrofie.",
      director: "Michał Strzalkowski",
      genre: "Sci-Fi, Thriller",
      release: 2023,
      ocena: 4.3,
    },
    {
      name: "Kraina Cieni",
      description:
        "Grupa osób ląduje na wyspie pełnej tajemniczych istot, które wydają się polować na każdego, kto się zbliży.",
      director: "Agata Twardowska",
      genre: "Horror, Thriller",
      release: 2024,
      ocena: 4.4,
    },
    {
      name: "Labirynt Wspomnień",
      description:
        "Mężczyzna zmaga się z utratą pamięci i stara się odkryć prawdę o swojej przeszłości, podróżując po labiryncie swoich wspomnień.",
      director: "Adam Lis",
      genre: "Dramat, Thriller",
      release: 2021,
      ocena: 4.2,
    },
    {
      name: "Nieznajoma Prawda",
      description:
        "Młoda dziennikarka stara się odkryć tajemnicę zniknięcia swojej siostry sprzed lat.",
      director: "Kamil Jasiński",
      genre: "Kryminał, Thriller",
      release: 2023,
      ocena: 4.4,
    },
    {
      name: "Sekretna Misja",
      description:
        "Były agent służb specjalnych powraca do akcji, by wykonać misję, która może kosztować go życie.",
      director: "Piotr Białek",
      genre: "Akcja, Kryminał",
      release: 2022,
      ocena: 4.3,
    },
    {
      name: "Tylko Jeden Krelease",
      description:
        "Historia mężczyzny, który podejmuje decyzję o zmianie swojego życia, a każdy jego wybór prowadzi do zupełnie innego zakończenia.",
      director: "Joanna Socha",
      genre: "Dramat",
      release: 2021,
      ocena: 4.0,
    },
    {
      name: "Na Granicy Światów",
      description:
        "Dwie osoby żyjące w różnych wymiarach, odkrywają, że ich losy są ze sobą połączone, co prowadzi do dramatycznej konfrontacji.",
      director: "Grzegorz Wojciechowski",
      genre: "Sci-Fi, Dramat",
      release: 2024,
      ocena: 4.4,
    },
  ],
};
//helpppp
export default list;
