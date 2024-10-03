# Lanyard-Spotify-Now-Playing

This project lets users display their current Spotify listening activity on a webpage and customize its appearance using CSS.

----

## Features
- Fetches current Spotify listening status from a Discord user (connected via the Lanyard API).
- Displays the song, artist, and album art.
- Allows for personalized styling through a CSS input field.

## Getting Started
## Prerequisites

- Discord Account
- [Join Lanyard Discord Server](discord.gg/lanyard)
- Your Discord User ID
- NodeJS and Express (For Private and Testing Purposes)

## Setup

- [Download This Repository](https://github.com/unofficialdxnny/Lanyard-Spotify-Now-Playing/archive/refs/heads/main.zip)
- Alternatively Clone This Repository `git clone https://github.com/unofficialdxnny/Lanyard-Spotify-Now-Playing.git`
- `cd Lanyard-Spotify-Now-Playing`
- `node server.js`
- Open `127.0.0.1:3000`

## Usage
- Open `index.html` in your web browser.
- Optionally, customize the appearance by entering your CSS code in the "Enter - Your CSS..." text box.
- Click "Submit" to see your Spotify listening activity, styled with your CSS if provided.

## Advanced Usage

- `discord_user_id:` The user's Discord ID.
- `css:` URL-encoded CSS code to directly apply styles. This skips the input field on the index.html.

## Examples
### 1. Modern

<img src="https://imgur.com/z9zQaGj.png">

```css
.spotify{background-color:#181818;color:white;display:flex;flex-direction:column;align-items:flex-start;padding:25px;border-radius:10px;box-shadow:0px 5px 15px rgba(0, 0, 0, 0.4);} .spotify img.album{width:70px;height:70px;margin-bottom:15px;border-radius:5px;box-shadow:0px 2px 5px rgba(0, 0, 0, 0.2);} .spotify .artist{font-weight:bold;font-size:18px;margin-bottom:5px;} .spotify .song{font-size:14px;color:#b3b3b3;} .spotify:hover{background-color:#282828;cursor:pointer;}
```

### 2. Retro Neon Vibe
<img src="https://imgur.com/AHNWVLZ.png">

```css
.spotify{background-color:#121212;color:#f0f8ff;padding:30px;border-radius:10px;box-shadow:0 5px 15px rgba(255,0,255,0.4),0 5px 15px rgba(0,255,255,0.4);} .album{border:3px solid #ff00ff;} .artist{font-family:'Courier New',monospace;font-weight:bold;}
```

### 3. Minimalist Elegance

<img src="https://imgur.com/uL4gHxE.png">

```css
.spotify{background-color:#f7f7f7;color:#333;padding:25px;border-radius:8px;box-shadow:0 4px 8px rgba(0,0,0,0.1);} .album{max-width:200px;margin:0 auto 15px auto;} .artist,.song{font-family:'Arial',sans-serif;}
```

### 4. Lo-fi / Vaporwave

<img src="https://imgur.com/liUavG6.png">

```css
.spotify{background:linear-gradient(45deg,#ff99cc,#99ccff);padding:30px;border-radius:15px;} .album{box-shadow:0 5px 10px rgba(0,0,0,0.5);} .artist,.song{font-family:'Arial Black',sans-serif;color:#fff;text-shadow:2px 2px 5px rgba(0,0,0,0.4);}
```

### 5. Midnight Groove
![image](https://github.com/user-attachments/assets/eb4f3fa9-ac72-4243-91a2-8307782e55d3)
```css
/* Main body styling to center content */body {    margin: 0;    padding: 0;    height: 100vh;    display: flex;    justify-content: center;    align-items: center;    background-color: #000;    font-family: 'Montserrat', sans-serif;}/* Container styling */.spotify {    display: flex;    flex-direction: column;    align-items: center;    justify-content: center;    background-color: #121212;    color: #fff;    padding: 20px;    border-radius: 15px;    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);    width: 100%;    max-width: 350px;    text-align: center;    transition: transform 0.3s ease, background-color 0.3s ease;}/* Album cover */.spotify .album {    width: 100%;    max-width: 250px;    height: auto;    border-radius: 10px;    object-fit: cover;    margin-bottom: 20px;    transition: transform 0.3s ease;}.spotify:hover .album {    transform: scale(1.05);}/* Song title */.spotify .song {    font-size: 1.5rem;    font-weight: 600;    margin-bottom: 10px;}/* Artist name */.spotify .artist {    font-size: 1rem;    color: #b3b3b3;}/* Hover effect */.spotify:hover {    transform: translateY(-10px);    background-color: #1db954;}/* Responsive adjustments */@media (max-width: 768px) {    .spotify {        padding: 15px;        max-width: 90%;    }    .spotify .song {        font-size: 1.3rem;    }    .spotify .album {        max-width: 200px;    }}
```
### 6. Cloud Player
![image](https://github.com/user-attachments/assets/358aeb70-7e4f-4639-8624-e0a976b816a1)

```css
/* Main body styling to center content */body {    margin: 0;    padding: 0;    height: 100vh;    display: flex;    justify-content: center;    align-items: center;    background: linear-gradient(135deg, #e0eafc, #cfdef3);    font-family: 'Roboto', sans-serif;}/* Container styling */.spotify {    display: flex;    flex-direction: column;    align-items: center;    justify-content: center;    background: linear-gradient(145deg, #ffffff, #f0f0f0);    color: #333;    padding: 25px;    border-radius: 25px;    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2), -5px -5px 20px rgba(255, 255, 255, 0.7);    width: 100%;    max-width: 400px;    text-align: center;    transition: transform 0.3s ease, box-shadow 0.3s ease;}/* Album cover */.spotify .album {    width: 100%;    max-width: 250px;    height: auto;    border-radius: 50%;    object-fit: cover;    margin-bottom: 20px;    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);    transition: transform 0.3s ease;}.spotify:hover .album {    transform: scale(1.05);}/* Song title */.spotify .song {    font-size: 1.6rem;    font-weight: 700;    color: #222;    margin-bottom: 10px;}/* Artist name */.spotify .artist {    font-size: 1rem;    color: #666;    letter-spacing: 0.5px;}/* Hover effect */.spotify:hover {    transform: translateY(-5px);    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.25), -5px -5px 30px rgba(255, 255, 255, 0.8);}/* Responsive adjustments */@media (max-width: 768px) {    .spotify {        padding: 20px;        max-width: 95%;    }    .spotify .song {        font-size: 1.4rem;    }    .spotify .album {        max-width: 200px;    }}
```

### 7. Neon Vibes
![image](https://github.com/user-attachments/assets/d238e770-7276-43cc-bb9a-27cbe975a1a2)

```css
/* Main body styling to center content */body {    margin: 0;    padding: 0;    height: 100vh;    display: flex;    justify-content: center;    align-items: center;    background: linear-gradient(135deg, #ffafbd, #ffc3a0);    font-family: 'Poppins', sans-serif;}/* Glassmorphism container */.spotify {    display: flex;    flex-direction: column;    align-items: center;    justify-content: center;    backdrop-filter: blur(10px);    background: rgba(255, 255, 255, 0.15);    padding: 30px;    border-radius: 30px;    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.37);    width: 100%;    max-width: 400px;    text-align: center;    border: 1px solid rgba(255, 255, 255, 0.18);    transition: transform 0.3s ease, box-shadow 0.3s ease;}/* Album cover */.spotify .album {    width: 100%;    max-width: 270px;    height: auto;    border-radius: 15px;    object-fit: cover;    margin-bottom: 20px;    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);    transition: transform 0.3s ease;}.spotify:hover .album {    transform: scale(1.07);}/* Song title */.spotify .song {    font-size: 1.7rem;    font-weight: 700;    color: #fff;    margin-bottom: 10px;    letter-spacing: 1px;}/* Artist name */.spotify .artist {    font-size: 1.2rem;    color: #f0e9e9;    opacity: 0.85;}/* Hover effect */.spotify:hover {    transform: translateY(-5px);    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);}/* Responsive adjustments */@media (max-width: 768px) {    .spotify {        padding: 20px;        max-width: 90%;    }    .spotify .song {        font-size: 1.4rem;    }    .spotify .album {        max-width: 230px;    }}
```

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests with improvements.

## License
This project is licensed under the Apache License: [LICENSE](https://github.com/unofficialdxnny/Lanyard-Spotify-Now-Playing/blob/main/LICENSE)

