const list = {
  movielist: [
    {
      title: "Cisza w Mieście",
      description:
        "W czasach apokalipsy, grupka ocalałych próbuje znaleźć schronienie w pustym mieście",
      director: "Michał Kowalski",
      release: "2014",
      genre: "Thriller",
      rating: "3/5",
      favorite: false,
    },
    {
      title: "Zagubione Wspomnienia",
      description:
        "Młody mężczyzna budzi się bez pamięci i musi odkryć, cp stało się z hegi życiem, podczas gyd ktoś nieustannie stara się go zabić",
      director: "Adam Kowalski",
      release: "2018",
      genre: "Thriller",
      rating: "4/5",
      favorite: false,
    },
    {
      title: "Lśnienie Przeszłośći",
      description:
        "W 1985 roku młody chłopak odkrywa tajemnicze zdjęcia, które prowadzą go do zaginionej cywilizacji",
      director: "Michał Nowak",
      release: "2000",
      genre: "Przygodowy",
      rating: "4/5",
      favorite: false,
    },
    {
      title: "Echo w Ciemnośći",
      description:
        "Grupa przyjacioł spędza weekend w starym domu na odludziu, gdzie odkrywają, że nie są sami",
      director: "Karolina Piotrwoska",
      release: "2020",
      genre: "Horror",
      rating: "2/5",
      favorite: false,
    },
    {
      title: "Miłość w Blasku Gwiazd",
      description:
        "Dwoje artystów spotyka się w Los Angeles i zaczyna nieoczekiwaną, intensywną miłość",
      director: "Piotr Wójcik",
      genre: "Romans",
      release: "2024",
      rating: "4/5",
      favorite: false,
    },
    {
      title: "Tylko jedno Życie",
      description:
        "Po tragicznej śmierci matki, młoda dziewczyna musi poradzić sobie z samotnością i odkrywać tajemnice przeszłości",
      release: "2015",
      genre: "Dramat",
      rating: "5/5",
      favorite: false,
    },
    {
      title: "Sekretne Drzwi",
      description:
        "Mężczyzna, który odkrywa portal do innego wymiaru, staje przed dylematem, czy wrócić do rzeczywistości, czy zostać w nowym świecie.",
      release: "2020",
      genre: "Sci-Fi",
      rating: "4/5",
      favorite: false,
    },
    {
      title: "Wielki Skok",
      description:
        "Grupa przestępców planuje favoriteealny napad na bank, ale wszystko favoritezie nie tak, jak miało.",
      director: "Piotr Borkowski",
      genre: "Kryminał",
      release: "2020",
      rating: "3/5",
      favorite: false,
    },
    {
      title: "Ziemia Bez Prawa",
      description:
        "W post-apokaliptycznym świecie, grupka ocalałych musi stawić czoła nowym zagrożeniom.",
      director: "Kacper Zawisza",
      genre: "Akcja",
      release: "2013",
      rating: "4/5",
      favorite: false,
    },
    {
      title: "Tajemnicza Wyspa",
      description:
        "Grupa naukowców przypadkowo ląduje na nieznanej wyspie, pełnej niebezpiecznych stworzeń i starożytnych sekretów.",
      director: "Ewa Kowalczyk",
      genre: "Przygodowy",
      release: "2015",
      rating: "2/5",
      favorite: false,
    },
    {
      title: "Ostatni Lot",
      description:
        "Po katastrofie lotniczej, ocalała kobieta walczy o przetrwanie na bezludnej wyspie.",
      director: "Tomasz Wesołowski",
      genre: "Dramat",
      release: "2018",
      rating: "4/5",
      favorite: false,
    },
    {
      title: "W Sieci Kłamstw",
      description:
        "Młody dziennikarz odkrywa, że jego śledztwo prowadzi do wciągania go w świat wielkich oszustw i korupcji.",
      director: "Marek Malinowski",
      genre: "Thriller",
      release: "2020",
      rating: "4/5",
      favorite: false,
    },
    {
      title: "Na Skraju Przepaści",
      description:
        "Pracownik korporacji zmienia swoje życie, decydując się na ryzykowny projekt, który stawia go na krawędzi katastrofy.",
      director: "Magdalena Sierżant",
      genre: "Dramat",
      release: "2016",
      rating: "1/5",
      favorite: false,
    },
    {
      title: "Oczy Ciemności",
      description:
        "Kobieta staje się świadkiem morderstwa i odkrywa, że zabić ją może ktoś z jej najbliższego otoczenia.",
      director: "Piotr Jarosz",
      genre: "Kryminał",
      release: "2013",
      rating: "4/5",
      favorite: false,
    },
    {
      title: "Między Światami",
      description:
        "Po tragicznej śmierci ukochanej osoby, mężczyzna stara się skontaktować z jej duchem, nieświadomy, że ma moc zmieniania rzeczywistości.",
      director: "Alicja Wójcik",
      genre: "Dramat",
      release: "2018",
      rating: "2/5",
      favorite: false,
    },
    {
      title: "Wysoka Gra",
      description:
        "Ambitny pokerzysta wplątuje się w niebezpieczną grę, gdzie stawką jest życie.",
      director: "Grzegorz Ławniczak",
      genre: "Kryminał",
      release: "2025",
      rating: "5/5",
      favorite: false,
    },
    {
      title: "Czas Przemian",
      description:
        "Mężczyzna odkrywa, że jego życie to tylko jedna z wielu alternatywnych rzeczywistości.",
      director: "Jan Mazur",
      genre: "Sci-Fi",
      release: "2012",
      rating: "3/5",
      favorite: false,
    },
    {
      title: "Ucieczka z Piekła",
      description:
        "Grupa więźniów planuje zuchwałą ucieczkę z najwyżej strzeżonego więzienia na świecie.",
      director: "Krzysztof Piątek",
      genre: "Akcja",
      release: "2010",
      rating: "4/5",
      favorite: false,
    },
    {
      title: "Złodziejka",
      description:
        "Kobieta z przeszłością kryminalną stara się zacząć nowe życie, ale nie udaje jej się uciec od dawnego zawodu.",
      director: "Karol Wojdak",
      genre: "Dramat",
      release: "2015",
      rating: "2/5",
      favorite: false,
    },
    {
      title: "Cisza Przed Burzą",
      description:
        "W małej wiosce dochodzi do tragedii, która rozdziela rodzinę i zmienia życie mieszkańców na zawsze.",
      director: "Michał Różalski",
      genre: "Dramat",
      release: "2023",
      rating: "4.2",
      favorite: false,
    },
    {
      title: "Podziemne Miasto",
      description:
        "Po katastrofie ekologicznej, ludzkość przenosi się do podziemnych miast, gdzie życie staje się coraz trudniejsze.",
      director: "Wojciech Kaczmarek",
      genre: "Sci-Fi",
      release: "2024",
      rating: "4.5",
      favorite: false,
    },
    {
      title: "Zatrzymany Czas",
      description:
        "Mężczyzna, który odkrywa, że jego zegarek może zatrzymać czas, staje przed decyzją, jak wykorzystać tę moc.",
      director: "Agnieszka Laskowska",
      genre: "Sci-Fi",
      release: "2022",
      rating: "4.0",
      favorite: false,
    },
    {
      title: "Kroki w Ciemności",
      description:
        "Policjant zaczyna ścigać seryjnego mordercę, który zawsze zostawia ślady, które prowadzą w głąb jego przeszłości.",
      director: "Tomasz Kwiatkowski",
      genre: "Kryminał",
      release: "2021",
      rating: "4.3",
      favorite: false,
    },
    {
      title: "Złudne Piękno",
      description:
        "Młoda kobieta podejmuje pracę jako modelka, ale szybko odkrywa, że branża ma mroczną stronę.",
      director: "Anna Zielińska",
      genre: "Dramat",
      release: "2022",
      rating: "4.1",
      favorite: false,
    },
    {
      title: "Ostatni Dzień Lata",
      description:
        "Grupa przyjaciół spotyka się na wakacjach, gdzie jeden z nich przyznaje się do niewypowiedzianej tajemnicy.",
      director: "Adam Płocki",
      genre: "Dramat",
      release: "2020",
      rating: "4.0",
      favorite: false,
    },
    {
      title: "Cień Wspomnień",
      description:
        "Po wielu latach, mężczyzna wraca do swojego rodzinnego miasta, gdzie zaczyna odkrywać nieznane dotąd sekrety rodziny.",
      director: "Jacek Wroński",
      genre: "Dramat",
      release: "2021",
      rating: "4.4",
      favorite: false,
    },
    {
      title: "Tajemnica Skrzyni",
      description:
        "Młody chłopak znajduje starą skrzynię, która skrywa niesamowitą tajemnicę związaną z jego przodkami.",
      director: "Michał Wojda",
      genre: "Przygodowy",
      release: "2023",
      rating: "4.2",
      favorite: false,
    },
    {
      title: "Upadek Ikony",
      description:
        "Historia upadku jednej z największych gwiazd muzyki pop, która zmienia swoje życie na zawsze po publicznym skandalu.",
      director: "Krzysztof Żuraw",
      genre: "Dramat",
      release: "2022",
      rating: "4.3",
      favorite: false,
    },
    {
      title: "Złota Rzeka",
      description:
        "Poszukiwacze złota w 19 wieku ryzykują życie, by odnaleźć legendarne złoża, ale na ich drodze stają liczne niebezpieczeństwa.",
      director: "Andrzej Domański",
      genre: "Przygodowy",
      release: "2021",
      rating: "4.4",
      favorite: false,
    },
    {
      title: "Wspomnienie Tego Dnia",
      description:
        "Mężczyzna zaczyna wfavoritezieć w snach fragmenty swojego przyszłego życia, co prowadzi go do podejmowania ryzykownych decyzji.",
      director: "Tomasz Kaczmarek",
      genre: "Thriller",
      release: "2022",
      rating: "4.2",
      favorite: false,
    },
    {
      title: "Zmierzch Nowego Świata",
      description:
        "W świecie przyszłości, gdzie technologia rządzi życiem, młody favoriteealista stara się walczyć z systemem.",
      director: "Krzysztof Wysocki",
      genre: "Sci-Fi",
      release: "2023",
      rating: "4.3",
      favorite: false,
    },
    {
      title: "Pogrzebany Wspomnieniami",
      description:
        "Mężczyzna zmaga się z traumą po śmierci ukochanej osoby, aż pewnego dnia zaczyna wfavoritezieć ją w swoich snach.",
      director: "Aleksandra Lis",
      genre: "Dramat",
      release: "2021",
      rating: "4.1",
      favorite: false,
    },
    {
      title: "Tajemnicza Wiadomość",
      description:
        "Pewnego dnia, kobieta otrzymuje anonimowy list, który prowadzi ją do zaginionego członka rodziny.",
      director: "Andrzej Wasilewski",
      genre: "Thriller",
      release: "2024",
      rating: "4.5",
      favorite: false,
    },
    {
      title: "Zamach na Czas",
      description:
        "Grupa naukowców odkrywa sposób podróży w czasie, ale ich eksperymenty prowadzą do nieoczekiwanych konsekwencji.",
      director: "Łukasz Bielawski",
      genre: "Sci-Fi",
      release: "2022",
      rating: "4.4",
      favorite: false,
    },
    {
      title: "Dzieci Nocy",
      description:
        "Grupa dzieci posiadających paranormalne zdolności zostaje uwikłana w niebezpieczną grę, w której stawką jest ich przyszłość.",
      director: "Barbara Nowicka",
      genre: "Fantasy",
      release: "2023",
      rating: "4.0",
      favorite: false,
    },
    {
      title: "Błąd w Systemie",
      description:
        "Programista odkrywa, że jego firma jest odpowiedzialna za stworzenie sztucznej inteligencji, która przejęła kontrolę nad światem.",
      director: "Krzysztof Grzesiuk",
      genre: "Sci-Fi",
      release: "2024",
      rating: "4.3",
      favorite: false,
    },
    {
      title: "Zatruta Rzeka",
      description:
        "W małej wiosce zaczynają dziać się dziwne rzeczy po zanieczyszczeniu wód przez fabrykę. Grupa mieszkańców staje przed walką o przeżycie.",
      director: "Katarzyna Kowalska",
      genre: "Thriller",
      release: "2021",
      rating: "4.2",
      favorite: false,
    },
    {
      title: "Złapani w Sieci",
      description:
        "Grupa osób zostaje uwikłana w nielegalny świat internetowego ścigania, gdzie nie ma ucieczki.",
      director: "Tomasz Górski",
      genre: "Kryminał",
      release: "2022",
      rating: "4.3",
      favorite: false,
    },
    {
      title: "Świat za Kurtyną",
      description:
        "Historia życia młodego aktora, który musi zmierzyć się z rzeczywistością show-biznesu i odkrywać swoją prawdziwą tożsamość.",
      director: "Aleksandra Król",
      genre: "Dramat",
      release: "2021",
      rating: "4.4",
      favorite: false,
    },
    {
      title: "Krople Łez",
      description:
        "Historia kobiet, które zmagają się z traumą przeszłości i próbują odbudować swoje życie po rozstaniu z mężem.",
      director: "Iwona Orłowska",
      genre: "Dramat",
      release: "2022",
      rating: "4.1",
      favorite: false,
    },
    {
      title: "Zatrzymany Czas",
      description:
        "Mężczyzna zyskuje zdolność zatrzymywania czasu, ale wkrótce odkrywa, że jego moc ma tragiczne konsekwencje.",
      director: "Dariusz Kubacki",
      genre: "Sci-Fi",
      release: "2023",
      rating: "4.0",
      favorite: false,
    },
    {
      title: "Złowrogie Oczy",
      description:
        "Po powrocie do rodzinnego miasta, detektyw staje w obliczu serii tajemniczych zbrodni, które są ściśle związane z jego przeszłością.",
      director: "Michał Szewczyk",
      genre: "Kryminał",
      release: "2024",
      rating: "4.5",
      favorite: false,
    },
    {
      title: "Dźwięk Przeszłości",
      description:
        "Grupa muzyków odkrywa tajemnicze nagrania, które przenoszą ich do innych wymiarów.",
      director: "Maciej Klimczak",
      genre: "Sci-Fi",
      release: "2021",
      rating: "4.2",
      favorite: false,
    },
    {
      title: "W Złotej Klatce",
      description:
        "Historia życia pewnej aktorki, która po latach kariery staje przed dylematem: pozostać w złotej klatce czy zacząć od nowa.",
      director: "Julia Prus",
      genre: "Dramat",
      release: "2022",
      rating: "4.1",
      favorite: false,
    },
    {
      title: "Wizja",
      description:
        "Mężczyzna, który doświadcza dziwnych wizji przyszłości, postanawia zmienić swoje życie i zapobiec nadchodzącej katastrofie.",
      director: "Michał Strzalkowski",
      genre: "Sci-Fi",
      release: "2023",
      rating: "4.3",
      favorite: false,
    },
    {
      title: "Kraina Cieni",
      description:
        "Grupa osób ląduje na wyspie pełnej tajemniczych istot, które wydają się polować na każdego, kto się zbliży.",
      director: "Agata Twardowska",
      genre: "Horror",
      release: "2024",
      rating: "4.4",
      favorite: false,
    },
    {
      title: "Labirynt Wspomnień",
      description:
        "Mężczyzna zmaga się z utratą pamięci i stara się odkryć prawdę o swojej przeszłości, podróżując po labiryncie swoich wspomnień.",
      director: "Adam Lis",
      genre: "Dramat, Thriller",
      release: "2021",
      rating: "4.2",
      favorite: false,
    },
    {
      title: "Nieznajoma Prawda",
      description:
        "Młoda dziennikarka stara się odkryć tajemnicę zniknięcia swojej siostry sprzed lat.",
      director: "Kamil Jasiński",
      genre: "Thriller",
      release: "2023",
      rating: "4.4",
      favorite: false,
    },
    {
      title: "Sekretna Misja",
      description:
        "Były agent służb specjalnych powraca do akcji, by wykonać misję, która może kosztować go życie.",
      director: "Piotr Białek",
      genre: "Kryminał",
      release: "2022",
      rating: "4.3",
      favorite: false,
    },
    {
      title: "Tylko Jeden Krelease",
      description:
        "Historia mężczyzny, który podejmuje decyzję o zmianie swojego życia, a każdy jego wybór prowadzi do zupełnie innego zakończenia.",
      director: "Joanna Socha",
      genre: "Dramat",
      release: "2021",
      rating: "4.0",
      favorite: false,
    },
    {
      title: "Na Granicy Światów",
      description:
        "Dwie osoby żyjące w różnych wymiarach, odkrywają, że ich losy są ze sobą połączone, co prowadzi do dramatycznej konfrontacji.",
      director: "Grzegorz Wojciechowski",
      genre: "Sci-Fi",
      release: "2024",
      rating: "4.4",
      favorite: false,
    },
  ],
};
export default list;
