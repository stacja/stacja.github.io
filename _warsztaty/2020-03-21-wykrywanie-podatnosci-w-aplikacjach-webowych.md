---
# Data dodania informacji o wydarzeniu
date: 2018-09-24
# Data wydarzenia
event_date: 2020-03-21
title: "Warsztat #367 Praktyczne sposoby wykrywania podatności w aplikacjach webowych"
lokalizacja: NiewiadomoGdansk
cena: Warsztat płatny - od 79 PLN, 8. edycja warsztatu
prowadzacy: ktrzcinska
dlugosc: 9:00-17:00
evenea_link: "https://podweb2103.evenea.pl/?out=1&source=event_iframe"
slideshare:
opis:
  krotki_opis: |

    Zastanawiasz się jak działają współcześni hackerzy oraz z jakich narzędzi korzystają? 
    Podczas warsztatu poznasz liczne techniki i narzędzia wykorzystywane do przełamywania zabezpieczeń aplikacji webowych.
    Skierowane są do osób pracujących z aplikacjami webowymi m. in. programistów i testerów, którzy chcieliby poznać podstawowe podatności, sposoby ich wykrywania oraz metody ochrony.

  informacje: |

    **Rejestracja dostępna bezpośrednio pod poniższym linkiem:** 

    https://app.evenea.pl/event/podweb2103/

    Zastanawiasz się jak działają współcześni hackerzy oraz z jakich narzędzi korzystają? 
    Podczas warsztatu poznasz liczne techniki i narzędzia wykorzystywane do przełamywania zabezpieczeń aplikacji webowych.
    Warsztaty mają na celu wprowadzenie do tematu zagrożeń bezpieczeństwa aplikacji webowych.
    Skierowane są do osób pracujących z aplikacjami webowymi m. in. programistów i testerów, którzy chcieliby poznać podstawowe podatności, sposoby ich wykrywania oraz metody ochrony.
    Na warsztatach omówimy czym jest OWASP, lista Top 10, jakie są dostępne bazy podatności oraz co możemy sprawdzić wykonując proste skanowanie portów. Główną część warsztatów będą stanowiły testy aplikacji webowej zawierającej najczęściej występujące podatności m. in. XSS, SQL Injection, CSRF, czy też błędy logiki aplikacji.
    Na warsztatach pokażemy jak korzystać z najpopularniejszych narzędzi do testów bezpieczeństwa w tym narzędzi typu lokalnego Proxy oraz narzędzi do skanowania portów, podsłuchiwania ruchu oraz przechwytywania sesji użytkowników.

    Podczas warsztatu zapewniamy dostęp do kawy, herbaty, wody. W porze obiadowej zapewniamy pizzę w wersji mięsnej lub wegetariańskiej.

  program: |
    1. Wprowadzenie
        1. Statystyki dotyczące podatności aplikacji webowych i ich konsekwencji
        1. Podstawowe informacje o testach bezpieczeństwa i testach penetracyjnych
        1. Testy bezpieczeństwa jako element testów pozafunkcjonalnych
    1. OWASP i lista OWASP Top 10
        1. Omówienie działań organizacji OWASP,
        1. Przegląd listy Top 10 i innych projektów OWASP,
        1. Omówienie wybranych narzędzi OWASP,
    1. Przypomnienie podstawowych informacji dotyczących aplikacji webowych
    1. Prezentacja wykorzystywanego przez hackerów systemu operacyjnego Kali Linux
    1. Skanowanie portów
        1. Przegląd typów skanowania m. in. TCP, TCP SYN, UDP
        1. Skanowanie portów z wykorzystaniem Nmap, wersji konsolowej i GUI (Zenmap), skanowany adres IP z wystawionym podatnym serwerem aplikacyjnym i bazą danych
        1. Przegląd innych narzędzi do skanowania portów
    1. Przegląd baz danych podatności m. in. IBM X-Force Exchange, Exploit-db, CVEDetails, NullByte
        1. Narzędzia pozwalające na automatyczne przeszukiwanie bez danych podatności m.in. OWASP Dependency Check
    1. Zbieranie informacji o celu testów z wykorzystaniem techniki Google Hacking, automatycznej analizy metadanych oraz z wykorzystaniem mało znanych przeglądarek
    1. Narzędzia typu lokalnego Proxy – instalacja Burp Suite i OWASP ZAP, konfiguracja i przechwytywanie żądań do testowej aplikacji BadStore
    1. Omówienie najważniejszych podatności aplikacji webowych, sposobów ich wykrywania oraz zalecanych metod ochrony, połączone z samodzielnym wykrywaniem podatności przez uczestników warsztatów (podatności będziemy szukać w testowej aplikacji BadStore)
        1. Ataki XSS (persistent, reflected), wykonanie ataku na testowej aplikacji
        1. Wykorzystanie podatności XSS z pomocą BeEF (Browser Exploitation Framework) np. wyświetlenie okna dialogowego, uruchomienie dźwięku, pobranie plików cookie, czy zawartości schowka
        1. Przykładowy scenariusz ataku z wykorzystaniem podatności XSS i stworzonego samodzielnie przez uczestników fałszywego okna logowania do innego systemu
        1. Ataki CSRF, przygotowanie przykładowej strony HTML wykonującej atak
        1. Ataki SQL Injection – wyciągnięcie danych z bazy w tym haszy haseł, odczytanie haszy z haseł, zalogowanie na konto administratora aplikacji, pobranie informacji przeznaczonych dla administratora
        1. Obejście logiki aplikacji np. zamówienie produktu w niższej cenie
        1. Podsłuchanie komunikacji nieszyfrowanej z wykorzystaniem Wireshark
        1. Znalezienie podatności kategorii Broken Access Control w testowej aplikacji
        1. Wykorzystanie podatności w komponentach aplikacji z wykorzystaniem narzędzia Metasploit
        1. Przeprowadzenie różnych typów ataków Slow HTTP
    1. Metody zabezpieczenia aplikacji webowych – nagłówki bezpieczeństwa i flagi plików cookie
    1. Skanery umożliwiające automatyczne testy bezpieczeństwa
        1. Przegląd najpopularniejszych skanerów, zarówno płatnych jak i open source, omówienie skanera Burp Suite Professional
        1. Demonstracja działania skanerów automatycznych
    1. Wskazówki dotyczące przygotowania raportu z testów bezpieczeństwa
    1. Przegląd wymagań na testy bezpieczeństwa/penetracyjne
    1. Wskazówki jak zostać pentesterem

  uwaga: |
    Liczba miejsc ograniczona! Organizator zastrzega sobie prawo do zmiany lokalizacji wydarzenia oraz jego odwołania w przypadku niezgłoszenia się minimalnej liczby uczestników.

---
