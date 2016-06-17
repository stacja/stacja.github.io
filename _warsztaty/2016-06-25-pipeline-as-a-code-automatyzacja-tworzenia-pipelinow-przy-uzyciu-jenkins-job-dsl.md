---
# Data dodania informacji o wydarzeniu
date: 2016-06-17
# Data wydarzenia
event_date: 2016-06-25
title: "Pipeline as a code: automatyzacja tworzenia pipelinów przy użyciu Jenkins Job DSL"
lokalizacja: Sages, ul. Nowogrodzka 62c, Warszawa
prowadzacy: szymanski
evenea_link: "https://pipelineasacode.evenea.pl/?out=1&source=event_iframe"
cena: 219 PLN
miasto: Warszawa
slideshare:
opis:
  informacje: |
    W obecnych czasach nie trzeba już chyba nikogo przekonywać jak ważna jest automatyzacja w procesie ciągłego dostarczania oprogramowania. Od dawna automatyzujemy wszelkie etapy ww. procesu, piszemy liczne testy automatyczne odpalane w ramach zautomatyzowanego procesu budowania aplikacji, którą następnie w sposób zautomatyzowany wdrażamy na środowiska, których provisioning również przebiega w sposób zautomatyzowany. Nawet nasza JIRA potrafi automatycznie utworzyć nowy branch w repozytorium kodu źródłowego w momencie gdy rozpoczynamy prace nad nowym zadaniem.

    Automatyzujemy już prawie wszystko co ma sens, a mimo to nadal większość firm tworzy pipeliny umożliwiające przeprowadzenie zautomatyzowanego procesu budowania, testowania i wdrażania oprogramowania w sposób manualy. Jest to szczególnie dziwne w czasach wszechobecnych mikrousłóg, gdzie każdy nowy mikroserwis skutkuje utworzeniem kolejnego pipelinu.

    Podczas warsztatu poznamy Jenkins Job DSL, który jest jednym z dostępnych rozwiązań dla przedstawionej powyżej sytuacji. Job DSL pozwoli nam zautomatyzować proces tworzenia zarówno pojedynczych jobów i widoków, jak i całych pielinów. Zobaczymy również jak w jeszcze większym stopniu ułatwić automatyzację procesu tworzenia pipelinów poprzez tworzenie własnych DSLi na bazie Job DSL.

    W ramach warsztatu:

    ✔ zobaczymy co dzieje się wewnątrz Jenkinsa podczas tworzenia jobów, 
    ✔ poznamy DSL dostarczany przez Jenkins Job DSL oraz zobaczymy za co odpowiada sam plugin, 
    ✔ zapoznamy się z API Viewer umożliwiającym odkrywanie API dostarczanego DSLa, 
    ✔ stworzymy własne joby, widoki i pipeliny, 
    ✔ przeniesiemy konfigurację pipelinów do projektów przez nie budowanych, tak aby konfiguracja specyficna dla poszególnych projektów była odseparowana od kodu generującego joby i pipeliny, 
    ✔ stworzymy własnego DSLa na bazie job-dsl, 
    ✔ napiszemy testy do naszych skryptów i DSLi.

    Warsztaty adresowane do osób mających dość żmudnego, manualnego wyklikiwania kolejnych jobów i pipelinów w Jenkinsie. Wskazana podstawowa znajomość Jenkinsa oraz języka wysokiego poziomu (np. Java, Groovy, Python).
    
    Zapewniamy nielimitowany dostęp do pysznej kawy oraz pizzę. ☺

  program: |
    1. Nakreślenie problemu jaki rozwiązuje automatyzacja procesu tworzenia jobów i pipelinów.
    2. Manualne tworzenie jobów.
    3. Poznanie wewnętrznych mechanizmóœ Jenkinsa w celu zrozumienia na czym polegać będzie automatyzacja ww. procesu.
    4. Zapoznanie się z DSLem dostarczanym przez job-dsl plugin.
    5. Zapoznanie się z API Viewer.
    6. Zapoznanie się z pluginem job-dsl oraz sposobem jego integracji z Jenkinsem.
    7. Tworzenie jobów w sposób zautomatyzowany.
    8. Wykorzystanie języka groovy do rozszerzenia możliwości DSL oraz samego Jenkinsa.
    9. Eksternalizacja konfiguracji jobów.
    10. Tworzenie widoków.
    11. Tworzenie pipelinów.
    12. Tworzenie własnego DSLa w oparciu o job-dsl.
    
    
    
---
