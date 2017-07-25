---
# Data dodania informacji o wydarzeniu
date: 2017-07-25
# Data wydarzenia
event_date: 2017-08-12
title: "Podstawy obsługi Robot Operating System i symulatora Gazebo"
evenea_link: "https://roboty.evenea.pl/?out=1&source=event_iframe"
lokalizacja: Sages
dlugosc: 10:00-18:00
prowadzacy: krainski
slideshare:
opis:
  informacje: |
    Cele warsztatu:
     * zapoznanie uczestników z podstawami Robot Operating System:
       * Przedstawienie ogólnej idei systemu
       * Omówienie podstawowych narzędzi systemu 
     * nauka pisania własnych aplikacji we frameworku ROS:
       * przykłady w C++
       * przykłady w Pythonie
     * omówienie podstaw symulatora Gazebo:
       * omówienie struktury plików URDF (Universal Robot Description Format)
       * dodawanie wtyczek łączących Gazebo z ROSem
     * nauka obsługi narzędzi wizualizacyjnych ROSa:
       * podstawy rqt_plot
       * podstawy rviz
       * nagrywanie i odtwarzanie sesji za pomocą narzędzia bag.

    Uczestnicy będą pracowali indywidualnie, każdy nad swoim projektem. Podczas warsztatu uczestnicy będą mogli nauczyć się jak zaprojektować prostego robota w symulatorze Gazebo, a następnie oprogramować jego ruch z wykorzystaniem bibliotek ROSa. 

    Podczas warsztatu zapewniemy pizzę w porze lunchu oraz nielimitowany dostęp do kawy, herbaty i wody.

    Wymagania: podstawy programowania w C/C++ lub Pythonie, podstawowe ogarnięcie systemu Linux (poruszanie się po katalogach, modyfikowanie plików z wykorzystaniem terminala). 

    Każdy użytkownik szkolenia musi mieć własny komputer, na którym zainstalowany jest system Ubuntu i biblioteki ROSa. Linux może być zainstalowany jako system wirtualny, na przykład przez Virtual Boxa. Polecany jest system Ubuntu 16.04 (ROS Kinetic) lub Ubuntu 14.04 (ROS Jade).
    Instalacja Linuxa z wykorzystaniem Virtual Boxa: https://askubuntu.com/questions/142549/how-to-install-ubuntu-on-virtualbox
    Instalacja systemu ROS Kinetic: http://wiki.ros.org/kinetic/Installation/Ubuntu
    Instalacja Gazebo: http://gazebosim.org/tutorials?tut=install_ubuntu
    Instalacja bibliotek łączących Gazebo z ROSem: sudo apt-get install ros-kinetic-gazebo-ros-pkgs ros-kinetic-gazebo-ros-control

  program: |

    1. Podstawy systemu ROS:
     * zastosowania
     * zasada działania:
       * master
       * nodes
       * topics
       * messages
       * pozostałe
   2. Pisanie własnego kodu:
    * minimalny przykład C++,
    * minimalny przykład Python,
    * rola CMakeLists.txt i package.xml
    * catkin - kompilator ROSa
    * ćwiczenie - samodzielne pisanie kodu
    * launch files
   3. Obsługa symulatora:
    * podstawy budowania modelów
    * integracja Gazebo z ROSem
    * wizualizacja danych w Rviz
   4. Zaawansowane ćwiczenia:
    * programowanie symulowanego robota:
      * obsługa sensorów
      * obsługa napędu
    * (bonus) zaawansowane algorytmu mapowania i planowania ścieżki


  uwaga: |

    W trosce o jakość warsztatów jesteśmy zmuszeni ograniczyć liczbę uczestników. **Kwalifikacja odbywa się na podstawie odpowiedzi udzielonych w formularzu zgłoszeniowym oraz - w dalszym kroku - kolejności zgłoszeń.** Potwierdzenie udziału w warsztatach wraz z instrukcją przygotowania środowiska otrzymasz najpóźniej na 5 dni przed planowaną datą wydarzenia.

 
---
