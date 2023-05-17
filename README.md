<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/projnull/n_chaotic_leonis">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Chaotic Leonis</h3>

  <p align="center">
    A self hosted discord bot, written in NodeJS using discord.js, that forwards RSS channels to your discord server.
    <br />
    <a href="https://github.com/projnull/n_chaotic_leonis"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://discord.gg/qCWD6Ka2qD">View Demo</a>
    ·
    <a href="https://github.com/projnull/n_chaotic_leonis/issues">Report Bug</a>
    ·
    <a href="https://github.com/projnull/n_chaotic_leonis/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://discord.gg/qCWD6Ka2qD)

Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `projnull`, `n_chaotic_leonis`, `mobilex1122`, `linkedin_username`, `mobilex1122.eu`, `null`, `Chaotic Leonis`, `A self hosted discord bot, written in NodeJS using discord.js, that forwards RSS channels to your discord server.`

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Next][Node.js]][Node-url]
* [![Discord][Discord.js]][discordjs-url]
* ![RSS][rss]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To self host the bot for your own server, follow the instructions below, or you can use docker to run it quickly with little configuration.

**Note:** *The docker image is currently not avabiable, but support will be added in the future.*

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a discord bot API Key at [https://discord.com/developers](https://discord.com/developers)
2. Get an API key at [https://multiavatar.com/](https://api.multiavatar.com/)
3. Clone the repo
   ```sh
   git clone https://github.com/projnull/n_chaotic_leonis.git
   ```
4. Copy config.example.ts as config.ts and change it's values to match your tokens
   **DO NOT ENABLE AUTO UPDATE OR INIT MESSAGE UNTIL A CHANNEL ID HAS BEEN SET!**
5. Install NPM packages
   ```sh
   npm install
   ```
6. Run the bot
   ```sh
   npm run start
   ```
7. Set the target channel on discord
   ```
   /channelid
   ```
   Set the channel id in the `config.ts` file.
   ```ts
   export const channels = ["CHENNEL_ID_HERE"];
   ```
8. Enable auto update and restart the bot


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Coming soon...

_For more examples, please refer to the (non existent) [Documentation](https://github.com/projnull/n_chaotic_leonis)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Core Functionality
- [ ] Env file for tokens
- [ ] Docker image
- [ ] Configuration from server using commands
    - [ ] Toggleable feed channels from settings command
    - [ ] Feed channels configuration using settings command

See the [open issues](https://github.com/projnull/n_chaotic_leonis/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Mobilex1122 - [@mobilex1122](https://twitter.com/mobilex1122) - null@mobilex1122.eu

Project Link: [https://github.com/projnull/n_chaotic_leonis](https://github.com/projnull/n_chaotic_leonis)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Discord.js](https://discord.js.org/)
* [Shields.io](https://shields.io/)
* [ReadMe Template](https://github.com/othneildrew/Best-README-Template/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/projnull/n_chaotic_leonis.svg?style=for-the-badge
[contributors-url]: https://github.com/projnull/n_chaotic_leonis/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/projnull/n_chaotic_leonis.svg?style=for-the-badge
[forks-url]: https://github.com/projnull/n_chaotic_leonis/network/members
[stars-shield]: https://img.shields.io/github/stars/projnull/n_chaotic_leonis.svg?style=for-the-badge
[stars-url]: https://github.com/projnull/n_chaotic_leonis/stargazers
[issues-shield]: https://img.shields.io/github/issues/projnull/n_chaotic_leonis.svg?style=for-the-badge
[issues-url]: https://github.com/projnull/n_chaotic_leonis/issues
[license-shield]: https://img.shields.io/github/license/projnull/n_chaotic_leonis.svg?style=for-the-badge
[license-url]: https://github.com/projnull/n_chaotic_leonis/blob/master/LICENSE.txt
[product-screenshot]: images/screenshot.png
[Node.js]: https://img.shields.io/badge/Node.js-6DA55F.svg?logo=node.js&style=for-the-badge&logoColor=white
[Node-url]: https://nodejs.org/en
[Discord.js]: https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white
[discordjs-url]: https://discord.js.org/
[rss]: https://img.shields.io/badge/rss-F88900?style=for-the-badge&logo=rss&logoColor=white