---
# Data dodania informacji o wydarzeniu
date: 2017-06-23
# Data wydarzenia
event_date: 2020-10-04
title: "Warsztat #421 RxJS - podstawy reaktywnego programowania"
lokalizacja: zdalnie
cena: Warsztat płatny - od 79 PLN, 7. edycja warsztatu
prowadzacy: blaszczak
peron_link_regular: "https://peron.stacja.it/?edd_action=add_to_cart&download_id=3106&edd_options[price_id]=1"
peron_link_early: "https://peron.stacja.it/?edd_action=add_to_cart&download_id=3106&edd_options[price_id]=2"
dlugosc: 09:00-17:00
opis:
  informacje: |
    **Warsztat odbywa się w formie zdalnej za pośrednictwem platformy/komunikatora online, z wykorzystaniem dźwięku, obrazu z kamery, udostępniania ekranu komputera prowadzącego i uczestników.** 
        
    RxJS to biblioteka wspierająca reaktywne programowanie w JavaScript przy użyciu strumieni, pozwala na łatwiejsze programowanie operacji asynchronicznych. Rozwiązuje problemy które mamy w Promisach czy funkcjach zwrotnych (callbacks).

    Żeby łatwiej zrozumieć z czym jest RxJS, można powiedzieć że jest to odpowiednik Lodash, jednakże przeznaczony do obsługi strumieni zdarzeń (event streams).

    W ostatnim czasie sporo mówi się o reaktywnym programowaniu, a sama biblioteka jest wykorzystywana jako dependency w takich projektach jak Angular (po stronie przeglądarki), czy Nest (po stronie serwera).

    Najtrudniejszy aspekt programowania reaktywnego, to zacząć myśleć reaktywnie!

    Aby nauczyć się myśleć reaktywnie z RxJS, najpierw musimy poznać i zrozumieć jego podstawy, w jaki sposób działają streamy, jak je tworzyć, łączyć, a także zmieniać przesyłane w nich wartości poprzez operatory.

    Ucząc się wbudowanych operatorów na przykładach, przestawimy nasze myślenie tak, żeby pozbyć się imperatywnych nawyków pisania kodu. Zamienić architekturę stateful na architekturę reaktywną opartą o strumienie.

    **Czego się nauczysz?**

    - Poznasz podstawowe elementy RxJS, takie jak Observable, Observer, operator, subscription - pisząc je od podstaw samemu.
    - Na praktycznych przykładach będziesz się uczył wbudowanych operatorów, dzięki czemu szybciej je zrozumiesz i lepiej zapamiętasz ich zastosowanie.
    - Dzięki przygotowanym ćwiczeniom zobaczysz jakie korzyści płyną z pisania kodu reaktywnego i unikania przechowywania samemu stanu aplikacji.
    - Nauczysz się wykorzystywania RxJS po stronie przeglądarki oraz serwera.

    **Dla kogo jest ten warsztat?**

    Warsztat jest przeznaczony dla programistów ze znajomością JavaScript/ES2015 w zakresie podstawowym. Zagadnienia, które będą używane, ale nie omawiane na warsztacie to:
      - konstrukcje warunkowe,
      - pętle,
      - operatory logiczne,
      - var, const, let,
      - funkcja,
      - klasa,
      - ES Modules (import/export)
      - arrow function
      - callback

    **Dlaczego JavaScript?**
      
    JavaScript pojawił się ponad 20 lat temu jako język skryptowy w przeglądarkach internetowych, czyli po stronie klienta. Później zawitał też po stronie serwera jako Node.js, a dalszy jego rozwój pozwala nam dziś budować aplikacje mobilne, desktopowe, programować bazy danych, a nawet roboty.

    Czy wiedziałeś, że najbardziej popularne IDE dla web developerów, Visual Studio Code jest napisane w TypeScript HTML i CSS ?

    Idea “Full Stack JavaScript” opiera się na wykorzystaniu technologii webowych, HTML, CSS i JavaScript we wszystkich etapach budowy aplikacji:
     - Strony internetowe (Czysty HTML+CSS+JavaScript, Angular, React, Vue)
     - Aplikacje mobilne (Cordova, Capacitor, Ionic, NativeScript)
     - Aplikacje desktopowe (Electron)
     - Serwer (Node.js, Express, NestJS, Fastify)
     - Bazy danych (MongoDB Shell)
     - IoT (Cylon.js, Johnny-five)

     [![alt](/img/zdj/banner_październik.png)](https://www.facebook.com/StacjaIT)

  program: |

     1. Podstawy działania strumieni
       - Observable
       - Observer
       - Subscription
       - Callback vs Promise vs Observable
     1. Tworzenie strumieni
       - Własny strumień: new Observable((oserver) => {})
       - Wbudowane kreatory strumieni: of, from, fromEvent, timer...
     1. Jak działają operatory
       - Użycie metody pipe()
       - Podstawowe operatory: map, filter, reduce, switchMap
     1. Observable i Observer w jednym
       - Subject
       - Behavior Subject
       - Replay Subject
     1. MultiCasting
       - Cold i Hot Observable
       - Operatory publish, share, multicast
     1. Praktyczne zastosowanie operatorów.
       - debounceTime
       - merge
       - delay
       - switchMap
       - takeUntil

  uwaga: |
    Liczba miejsc ograniczona! Organizator zastrzega sobie prawo do odwołania wydarzenia w przypadku niezgłoszenia się minimalnej liczby uczestników.

    Zakupione certyfikaty zostaną przesłane uczestnikom w formie elektoronicznej po warsztacie. Jeśli chcesz otrzymać zakupiony certyfikat w formie papierowej, zgłoś to mailowo na adres kontakt@stacja.it. 
    

---
