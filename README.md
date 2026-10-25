# Biolink (Customizable Single File)

Ten projekt to w pełni działająca wizytówka (biolink) z wieloma animacjami, ekranem ładowania (boot terminal) i żartem "ransomware".
Wszystko zostało zamknięte w jednym pliku `index.html`, dzięki czemu jest to niezwykle proste do opublikowania i hostowania.

## Jak zmienić dane?

Otwórz plik `index.html` w dowolnym edytorze tekstu.
Na samej górze pliku, w sekcji `<head>`, znajdziesz blok `window.CONFIG`.
Zmieniając wartości w tej sekcji, automatycznie zaktualizujesz zawartość na całej stronie, łącznie z terminalem, tytułem okna oraz zawartością główną.

```html
<script>
    window.CONFIG = {
        themeColor: "#ffffff", // Kolor główny tekstu/przycisków
        accentColor: "#ff0000", // Kolor akcentów (np. neon-red w CSS)
        username: "twój_nick", // Zmienia nick wszędzie: tytuł, terminal, nazwy plików
        discordId: "twoj_discord_id", // Opcjonalnie Discord ID
        avatarPath: "assets/avatar.png", // Ścieżka do Twojego zdjęcia profilowego (np. możesz dodać obok własny avatar.png)
        musicUrl: "assets/muzyka.mp3", // Link do muzyki (URL zewnętrzny lub lokalna ścieżka do mp3/wav)
        trackTitle: "nazwa_kawałka",
        about: "Krótki opis...",
        projects: "projects/ (soon)",
        contactLinks: {
            discord: "twój_discord", // Podaje tekst do skopiowania przy kliknięciu (wykryje ikonkę Discorda)
            telegram: "https://t.me/twój_telegram", // Link otworzy się w nowej karcie (wykryje ikonkę Telegrama)
            github: "https://github.com/twój_github"
        },
        skills: [
            // Podaj nazwę skilla i opcjonalnie kod SVG, żeby wyświetliła się obok niego ikonka.
            { name: "C++", icon: '<svg viewBox="0 0 128 128"><path d="..." fill="#00599c"/></svg>' }
        ]
    };
</script>
```

## Funkcje
- **Jeden plik**: Wszystkie skrypty (JS) i style (CSS) są wbudowane w plik `index.html`.
- **Automatyczne ikonki Social Media**: Skrypt sam wykrywa klucze w sekcji `contactLinks` (np. "discord", "github", "telegram", "tiktok", "steam") i dobiera odpowiednią ikonę. Jeśli przypisana wartość to URL (zaczyna się od `http`), przycisk otworzy nową stronę. Jeśli to np. nick, przycisk skopiuje go do schowka.
- **Motywy i Kolory**: Definiuj główny kolor oraz kolor akcentowy w konfiguracji.
- **Muzyka**: Skrypt pobiera `musicUrl` z configu i tworzy wbudowany odtwarzacz. Muzyka startuje po pierwszej interakcji użytkownika (wymóg przeglądarek).
- **Zmienne wszędzie**: Jeśli wpiszesz swoj nick "bluvs", animacja terminala pokaże logowanie do "bluvs", symulacja ransomware wyświetli plik "bluvs.exe", na głównej stronie pokaże się nick "bluvs", itd.

## Pliki powiązane
- Wszelkie media takie jak muzyka (`.mp3`), awatar (`avatar.png`), tło (`background.mp4`) trzymaj w tym samym folderze, lub podawaj odpowiednie ścieżki (URL) w konfiguracji.
