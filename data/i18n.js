import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'pl',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          flipData: {
            text: 'To display the model correctly, rotate your phone',
            img: './images/flip.png',
          },
          aboutData: {
            title: 'About Us',
            team: 'Our Team!',
            paragraphs: {
              p1: "As students of our University, we noticed a problem: the lack of a tool that would allow us to quickly find a lecturer's office or the room where we have classes. We present you a modern search engine for connections between selected rooms for part of the C1 building",
              p2: 'Our project was carried out with the greatest care: from field interviews and physical measurements, to building the model and generating navigation paths. Thanks to us, you will easily find your way on the university.',
              p3: 'Our team consists of members of the SKN Geodetów of the University of Environmental and Life Sciences in Wrocław. NaviUP is the result of our joint work and the first step towards improving the mobility of the academic community.',
            },
            firstBlocks: [
              {
                groupName: 'Scientific supervisors of the project:',
              },
              {
                groupName: 'Vectorization person:',
              },
              {
                groupName: 'Additional support:',
              },
              {
                groupName: 'Development team:',
              },
            ],
            secondBlocks: [
              {
                groupName: 'Team artist:',
              },
              {
                groupName: 'Data people:',
              },
              {
                groupName: 'FME algorithms person:',
              },
            ],
            secondEdition: {
              editions: {
                first: 'I edition',
                second: 'II edition'
              },
              roles: {
                head: 'Project head',
                walk: 'Inventorization',
                model: 'Vectorization',
                code: 'Programmer',
                test: 'Tester',
                art: 'Artist',
                sup: 'Supervisor'
              },
            }
          },
          contactData: {
            header: 'Office',
            basicInfo: {
              mail: 'skn_geodetow@upwr.edu.pl',
              address: 'room 023 G, building C1'
            },
            people: [
              {
                key: 0,
                role: 'Chairman',
                name: 'Hanna Romank',
              },
              {
                key: 1,
                role: 'Deputy-Chairman',
                name: 'Miłosz Olszewski',
              },
              {
                key: 2,
                role: 'Service Administrator',
                name: 'Konrad Kostrzanowski',
                mail: '115476@student.upwr.edu.pl',
              },
            ],
            doctorsTitle:'SKN Geodetów Supervisors', 
            doctors: [
              {
                key: 0,
                name: 'dr inż. Kamil Kaźmierski',
                mail: 'kamil.kazmierski@upwr.edu.pl'
              },
              {
                key: 1,
                name: 'dr inż. Adrian Kaczmarek',
                mail: 'adrian.kaczmarek@upwr.edu.pl'
              }
            ]
          },
          projectData: {
            title: 'About project',
            paragraphs: {
              h4: 'NaviUP is an initiative of the members of the Students Research Group of Surveyors of the Institute of Geodesy and Geoinformatics of Wroclaw University of Life Sciences.',
              p1: "The aim of the project was to create a tool to make it easier to move around  our university, starting from the C1 building to the C2, C3, C4 and C5 buildings. We made sure to include optimal routes for people with disabilities and added a function to display evacuation plans from the buildings.",
              p2: 'The project was an opportunity for us to acquire new, useful skills and, above all, a real opportunity to influence the technological development of our university.',
              p3: 'We are convinced that our website will improve the mobility of the entire academic community at our Wroclaw University of Environmental and  Life Sciences.',
              p4: 'The project was implemented as part of the IV and V editions of the UPWr funding for Students’ Research Projects'
            },
            konkursLink: 'https://upwr.edu.pl/studia/studencka-aktywnosc/studenckie-projekty-badawcze/projekty-badawcze-skn/zwyciezcy-iv-edycji-2022',
            konkursText: 'Information about the funding (website in Polish)',
            image: './images/upwr-logotyp-pl-poziomy.png',
          },
          mainData: {
            whereAreYou: 'Where are you?',
            person1: 'Person',
            room1: 'Room',
            building1: 'Building',
            description1: 'I am at/in e.g. Kaczmarek Adrian, 302',
            whereAreYouGoing: 'What are you looking for?',
            person2: 'Person',
            room2: 'Room',
            building2: 'Building',
            description2: 'I search e.g. Kaczmarek Adrian, 302',
            search: 'Find path'
          },
          pageContentData: {
            menu: [
              {
                text: 'Search'
              },
              {
                text: 'View model'
              },
              {
                text: 'About project'
              },
              {
                text: 'About Us'
              },
              {
                text: 'Contact'
              },
              {
                text: 'PathFinding'
              }
            ],
            login: {
              buttonText: 'Log in',
              header: 'Show that you are from UPWR!',
              placeholder: 'Enter your university email address',
              submit: 'Submit',
              close: 'Close'
            },
            footer: 'SKN Geodetów Wrocław University of Environmental and Life Science \u00A9; 2022-2024. All rights reserved'
          },
          funnyTexts: {
            buildingSame: 'Searching path to the building you are already in is not really smart<br> ༼ つ ◕_◕ ༽つ',
            buildingConnected: 'Buildings are connected<br>so try searching in Rooms<br>ヾ(•ω•`)o',
            roomSame: 'You are already in the room you are searching for so there is no need searching path to it!<br> \\(@^0^@)/'
          },
          infoData: {
            title: 'Academic degree',
            email: 'E-mail adress',
            institute: 'The university unit to which this person belongs'
          },
          modelData: {
            sideView: 'Floors side view',
            startFloor: 'Starting floor',
            endFloor: 'Final floor'
          }
        }
      },
      pl: {
        translation: {
          flipData: {
            text: 'Aby poprawnie wyświetlić model obróć telefon',
            img: './images/flip.png',
          },
          aboutData: {
            title: 'O nas',
            team: 'Nasz Zespół',
            paragraphs: {
              p1: 'Jako studenci naszego Uniwersytetu zaobserwowaliśmy problem, którym był brak narzędzia pozwalającego na szybkie odnajdywanie gabinetu wykładowcy bądź sali, w której mamy zajęcia. Prezentujemy Wam nowoczesną wyszukiwarkę połączeń między wybranymi pomieszczeniami dla części budynku C1.',
              p2: 'Nasz projekt został wykonany z największą starannością: począwszy od wywiadu terenowego i pomiarów fizycznych, aż po zbudowanie modelu oraz wygenerowanie ścieżek nawigacyjnych. Dzięki nam bez problemu odnajdziecie się na uczelni.',
              p3: 'Nasz zespół to członkowie SKN Geodetów Uniwersytetu Przyrodniczego we Wrocławiu. NaviUP to efekt naszej wspólnej pracy i pierwszy krok w kierunku poprawy mobilności społeczności akademickiej.',
            },
            firstBlocks: [
              {
                groupName: 'Opiekunowie naukowi projektu:',
              },
              {
                groupName: 'Osoba od wektoryzacji',
              },
              {
                groupName: 'Wsparcie dodatkowe:',
              },
              {
                groupName: 'Ekipa programistów:',
              },
            ],
            secondBlocks: [
              {
                groupName: 'Drużynowy artysta:',
              },
              {
                groupName: 'Ludzie od danych:',
              },
              {
                groupName: 'Osoba od algorytmów FME:',
              },
            ],
            secondEdition: {
              editions: {
                first: 'I edycja',
                second: 'II edycja'
              },
              roles: {
                head: 'Głowa projektu',
                walk: 'Inwentaryzacja',
                model: 'Wektoryzacja',
                code: 'Programista',
                test: 'Tester',
                art: 'Artysta',
                sup: 'Opiekun'
              },
            }
          },
          contactData: {
            header: 'Biuro',
            basicInfo: {
              mail: 'skn_geodetow@upwr.edu.pl',
              address: 'pokój 023 G, bud. C1'
            },
            people: [
              {
                key: 0,
                role: 'Przewodniczący',
                name: 'Hanna Romank',
              },
              {
                key: 1,
                role: 'Z-ca Przewodniczącego',
                name: 'Miłosz Olszewski',
              },
              {
                key: 2,
                role: 'Administrator serwisu',
                name: 'Konrad Kostrzanowski',
                mail: '115476@student.upwr.edu.pl',
              },
            ],
            doctorsTitle:'Opiekunowie SKN Geodetów', 
            doctors: [
              {
                key: 0,
                name: 'dr inż. Kamil Kaźmierski',
                mail: 'kamil.kazmierski@upwr.edu.pl'
              },
              {
                key: 1,
                name: 'dr inż. Adrian Kaczmarek',
                mail: 'adrian.kaczmarek@upwr.edu.pl'
              }
            ]
          },
          projectData: {
            title: 'O projekcie',
            paragraphs: {
              h4: 'NaviUP to inicjatywa członków Studenckiego Koła Naukowego Geodetów działającego przy Instytucie Geodezji i Geoinformatyki Uniwersytetu Przyrodniczego we Wrocławiu.',
              p1: 'Celem projektu było stworzenie narzędzia ułatwiającego poruszanie się po terenie naszej uczelni, począwszy od budynku C1, aż po budynki C2, C3, C4 i C5. Zadbaliśmy o uwzględnienie optymalnych tras przejść dla osób niepełnosprawnych oraz możliwość wyświetlania planów ewakuacyjnych z budynków.',
              p2: 'Projekt był dla nas okazją do zdobycia nowych, przydatnych umiejętności a przede wszystkim realną możliwością wpływu na rozwój technologiczny naszej uczelni',
              p3: 'Jesteśmy przekonani, że nasz serwis poprawi mobilność całej społeczności akademickiej na naszym na Uniwersytecie Przyrodniczym we Wrocławiu.',
              p4: 'Projekt został zrealizowany w ramach IV i V edycji konkursu „Projekty badawcze SKN”'
            },
            konkursLink: 'https://upwr.edu.pl/studia/studencka-aktywnosc/studenckie-projekty-badawcze/projekty-badawcze-skn/zwyciezcy-iv-edycji-2022',
            konkursText: 'Informacje na temat konkursu',
            image: './images/upwr-logotyp-pl-poziomy.png',
          },
          mainData: {
            whereAreYou: 'Gdzie jesteś?',
            person1: 'Osoba',
            room1: 'Pomieszczenie',
            building1: 'Budynek',
            description1: 'Jestem u/w np. Kaczmarek Adrian, 302',
            whereAreYouGoing: 'Czego szukasz?',
            person2: 'Osoby',
            room2: 'Pomieszczenia',
            building2: 'Budynku',
            description2: 'Szukam np. Kaczmarek Adrian, 302',
            search: 'Szukaj drogi'
          },
          pageContentData: {
            menu: [
              {
                text: 'Wyszukiwarka'
              },
              {
                text: 'Zobacz model'
              },
              {
                text: 'O projekcie'
              },
              {
                text: 'O nas'
              },
              {
                text: 'Kontakt'
              },
              {
                text: 'PathFinding'
              }
            ],
            login: {
              buttonText: 'Zaloguj się',
              header: 'Pokaż że jesteś z UPWR!',
              placeholder: 'Podaj mail uczelniany',
              submit: 'Wprowadź',
              close: 'Zamknij'
            },
            footer: 'SKN Geodetów Uniwersytetu Przyrodniczego we Wrocławiu \u00A9; 2022-2024. All rights reserved'
          },
          funnyTexts: {
            buildingSame: 'Szukanie drogi do budynku w którym się już znajdujesz nie jest zbyt inteligentne<br> ༼ つ ◕_◕ ༽つ',
            buidlingConnected: 'Budunki są ze sobą połączone.<br>Spróbuj poszukać w Pomieszczeniach<br>ヾ(•ω•`)o',
            roomSame: 'Jesteś już w pomieszczeniu do którego chcesz dotrzeć więc jesteś już na miejscu! \\(@^0^@)/'
          },
          infoData: {
            title: 'Stopień naukowy',
            email: 'Adres e-mail',
            institute: 'Jednostka uczelniana do której ta osoba przynależy'
          },
          modelData: {
            sideView: 'Widok pięter z boku',
            startFloor: 'Piętro startowe',
            endFloor: 'Piętro końcowe'
          }
        }
      }
    }
  });

export default i18n;