# **User Testing**

After the completetion and final deployment of the website, I sent a link over to family, friends and colleagues. Some of them used the website on their phones, some on their tablets and some on their computers. Everybody was happy with how the website performed, how it was designed and its responsivenes.

### **Manual Testing**

There was ongoing testing throughout the whole development of the website. I was using the Google Developer Tools to troubleshoot issues as well as performing early deployments to see if everything on the website was functioning the way it was expected.

I also used the Google Developer Tools console to work on some of the smaller sections of the JavaScript code, also console logging the computer and user choices to check to see if they are assigned the expected values, trying different functions in the console, and using typeof to check to see if the parseInt() function was working as expected.

| Feature                                                                            | Expected Outcome                                                                                                                                                                                                                                                                                                                                    | Pass/Fail | Image(s)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| How To Play Button                                                                 | When clicked it opens the modal tab with instructions on how to play the game                                                                                                                                                                                                                                                                       | Pass      | ![How To Play Button](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/how-to-play.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Close Buttons For How To Play Tab and Win/Loss/Draw Announcements Tabs             | When clicked it closes the tab                                                                                                                                                                                                                                                                                                                      | Pass      | ![How To Play Tab Close Button](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/how-to-play-tab-close-btn.png) ![Win/Loss/Draw Tabs Close Button](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/win-loss-draw-announcement-close-btns.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| The Fire Element Icon and Fire Choice Display                                      | If the player makes the choice of fire I want their choice to be taken by them clicking on the fire icon and displayed on the choices display                                                                                                                                                                                                       | Pass      | ![The Fire Element Icon](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/fire-icon.png) ![The Fire Choice Display](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/player-chooses-fire.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| The Water Element Icon and Water Choice Display                                    | If the player makes the choice of water I want their choice to be taken by them clicking on the water icon and displayed on the choices display                                                                                                                                                                                                     | Pass      | ![The Water Element Icon](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/water-icon.png) ![The Water Choice Display](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/player-chooses-water.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| The Air Element Icon and Air Choice Display                                        | If the player makes the choice of air I want their choice to be taken by them clicking on the air icon and displayed on the choices display                                                                                                                                                                                                         | Pass      | ![The Air Element Icon](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/air-icon.png) ![The Air Choice Display](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/player-chooses-air.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| The Ice Element Icon and Ice Choice Display                                        | If the player makes the choice of ice I want their choice to be taken by them clicking on the ice icon and displayed on the choices display                                                                                                                                                                                                         | Pass      | ![The Ice Element Icon](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/ice-icon.png) ![The Ice Choice Display](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/player-chooses-ice.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Computer Choice (In The Event Of Fire Choice)                                      | I want the computer to make a choice and its choice to be displayed on the choice display.                                                                                                                                                                                                                                                          | Pass      | ![Computer Choice - Fire](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/computer-chooses-fire.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Computer Choice (In The Event Of Water Choice)                                     | I want the computer to make a choice and its choice to be displayed on the choice display.                                                                                                                                                                                                                                                          | Pass      | ![Computer Choice - Water](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/computer-chooses-water.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Computer Choice (In The Event Of Air Choice)                                       | I want the computer to make a choice and its choice to be displayed on the choice display.                                                                                                                                                                                                                                                          | Pass      | ![Computer Choice - Air](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/computer-chooses-air.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Computer Choice (In The Event Of Ice Choice)                                       | I want the computer to make a choice and its choice to be displayed on the choice display.                                                                                                                                                                                                                                                          | Pass      | ![Computer Choice - Ice](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/computer-chooses-ice.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Result Display and Player Score (In The Event Of Fire - Ice)                       | I want the player to receive a point if they have picked Fire and the computer has picked Ice and for the announcement on the Result Display to display the choices and to say "Fire wins over Ice!"                                                                                                                                                | Pass      | ![Player Score](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/player-score-plus-one.png) ![Fire - Ice Result Display](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/fire-vs-ice-result-display.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Result Display and Player Score (In The Event Of Water - Fire)                     | I want the player to receive a point if they have picked Water and the computer has picked Fire and for the announcement on the Result Display to display the choices and say "Water wins over Fire!"                                                                                                                                               | Pass      | ![Player Score](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/player-score-plus-one.png) ![Water - Fire Result Display](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/water-vs-fire-result-display.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Result Display and Player Score (In The Event Of Fire - Air)                       | I want the player to receive a point if they have picked Fire and the computer has picked Air and for the announcement on the Result Display to display the choices and say "Fire wins over Air!"                                                                                                                                                   | Pass      | ![Player Score](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/player-score-plus-one.png) ![Fire - Air Result Display](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/fire-vs-air-result-display.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Result Display and Player Score (In The Event Of Ice - Water)                      | I want the player to receive a point if they have picked Ice and the computer has picked Water and for the announcement on the Result Display to display the choices and say "Ice wins over Water!"                                                                                                                                                 | Pass      | ![Player Score](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/player-score-plus-one.png) ![Ice - Water Result Display](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/ice-vs-water-result-display.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Result Display and Computer Score (In The Event Of Fire - Water)                   | I want the computer to receive a point if it has picked Water and the player has picked Fire and for the announcement on the Result Display to display the choices and say "Fire loses to water!"                                                                                                                                                   | Pass      | ![Computer Score](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/computer-score-plus-one.png) ![Fire - Water Result Display](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/fire-vs-water-result-display.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Result Display and Computer Score (In The Event Of Air - Fire)                     | I want the computer to receive a point if it has picked Fire and the player has picked Air and for the announcement on the Result Display to display the choices and say "Air loses to Fire!"                                                                                                                                                       | Pass      | ![Computer Score](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/computer-score-plus-one.png) ![Air - Fire Result Display](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/air-vs-fire-result-display.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Result Display and Computer Score (In The Event Of Water - Ice)                    | I want the computer to receive a point if it has picked Ice and the player has picked Water and for the announcement on the Result Display to display the choices and say "Water loses to Ice!"                                                                                                                                                     | Pass      | ![Computer Score](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/computer-score-plus-one.png) ![Water - Ice Result Display](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/water-vs-ice-result-display.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Result Display and Computer Score (In The Event Of Ice - Fire)                     | I want the computer to receive a point if it has picked Fire and the player has picked Ice and for the announcement on the Result Display to display the choices and say "Ice loses to fire!"                                                                                                                                                       | Pass      | ![Computer Score](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/computer-score-plus-one.png) ![Ice - Fire Result Display](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/ice-vs-fire-result-display.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Result Display, Computer Score and Player Score (In The Event Of Matching Choices) | I want both the player and the computer to receive one point and for the Result Display to display the choices and say "It's a draw!"                                                                                                                                                                                                               | Pass      | ![Player Score](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/player-score-plus-one.png) ![Computer Score](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/computer-score-plus-one.png) ![Fire - Fire](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/fire-vs-fire-result-display.png) ![Water - Water](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/water-vs-water-result-display.png) ![Air - Air](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/air-vs-air-result-display.png) ![Ice - Ice](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/ice-vs-ice-result-display.png) |
| Result Display, Computer Score and Player Score (Specific Draw Situations)         | I want both the computer and the player to receive one point when: The player picks water and the computer picks air. The player picks air and the comptuter picks water. The player picks air and the computer picks ice. The player picks ice and the computer picks air and for the Result Display to display the choices and say "It's a draw!" | Pass      | ![Player Score](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/player-score-plus-one.png) ![Computer Score](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/computer-score-plus-one.png) ![Water - Air](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/water-vs-air-result-display.png) ![Air - Water](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/air-vs-water-result-display.png) ![Air - Ice](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/air-vs-ice-result-display.png) ![Ice - Air](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/ice-vs-air-result-display.png)     |
| The Author Name Link In The Footer (Nikolay Hristev)                               | Opens the GitHub Page of the author in a new tab.                                                                                                                                                                                                                                                                                                   | Pass      | ![Author Link](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/footer.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

### **Cross-browser Testing**

After the deployment of the website I tested it on the three main browsers, Chrome, Edge and Firefox. The website loaded and performed without a problem on every single one of the browsers.

- Chrome

![Chrome Browser Testing](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/google-chrome-testing.png)

- Edge

![Edge Browser Testing](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/microsoft-edge-testing.png)

- Mozilla Firefox

![Mozilla Firefox Browser Testing](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/mozilla-testing.png)

### **Responsiveness Testing**

I tested the website on a couple of different devices: Dell Vostro 3510, iPhone 12, Apple iPad Pro 12.9-inch 4th generation, Samsung Galaxy S9 and Samsung Galaxy S21. The website loaded very smoothly and the responsiveness of the website adjusted for each screen size.

- ## **Dell Vostro 3510**

- Home Page

![Dell Laptop Home Page Testing](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/google-chrome-testing.png)

- How To Play Tab

![Dell Laptop How To Play Tab Testing](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/dell-testing-how-to-play.png)

- Win Announcement Tab

![Dell Laptop Win Announcement Tab Testing](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/dell-testing-win-announcement.png)

- Loss Announcement Tab

![Dell Laptop Loss Announcement Tab Testing](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/dell-testing-loss-announcement.png)

- Draw Announcement Tab

![Dell Laptop Draw Announcement Tab Testing](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/dell-testing-draw-announcement.png)

- ## **iPhone 12**

- Home Page

![iPhone 12 Home Page Testing](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/iphone12-testing-home.png)

- How To Play Tab

![iPhone 12 How To Play Tab Testing](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/iphone12-testing-how-to-play.png)

- Win Announcement Tab

![iPhone 12 Win Announcement Tab Testing](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/iphone12-testing-win-announcement.png)

- Loss Announcement Tab

![iPhone 12 Loss Announcement Tab Testing](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/iphone12-testing-loss-announcement.png)

- Draw Announcement Tab

![iPhone 12 Draw Announcement Tab Testing](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/iphone12-testing-draw-announcement.png)

- ## **Apple iPad Pro 12.9-inch 4th generation**

- Home Page

![iPad Pro Home Page Testing](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/ipad-pro-testing-home.png)

- How To Play Tab

![iPad Pro How To Play Tab Testing](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/ipad-pro-testing-how-to-play.png)

- Win Announcement Tab

![iPad Pro Win Announcement Tab Testing](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/ipad-pro-testing-win-announcement.png)

- Loss Announcement Tab

![iPad Pro Loss Announcement Tab Testing](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/ipad-pro-testing-loss-announcement.png)

- Draw Announcement Tab

![iPad Pro Draw Announcement Tab Testing](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/ipad-pro-testing-draw-announcement.png)

- ## **Samsung Galaxy S9**

- Home Page

![Samsung Galaxy S9 Home Page Testing](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/samsung-galaxy-s9-testing-home.jpg)

- How To Play Tab

![Samsung Galaxy S9 How To Play Tab Testing](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/samsung-galaxy-s9-testing-how-to-play.jpg)

- Win Announcement Tab

![Samsung Galaxy S9 Win Announcement Tab Testing](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/samsung-galaxy-s9-testing-win-announcement.jpg)

- Loss Announcement Tab

![Samsung Galaxy S9 Loss Announcement Tab Testing](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/samsung-galaxy-s9-testing-loss-announcement.jpg)

- Draw Announcement Tab

![Samsung Galaxy S9 Draw Announcement Tab Testing](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/samsung-galaxy-s9-testing-draw-announcement.jpg)

- ## **Samsung Galaxy S21**

- Home Page

![Samsung Galaxy S21 Home Page Testing](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/samsung-galaxy-s21-home-testing.jpg)

- How To Play Tab

![Samsung Galaxy S21 How To Play Tab Testing](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/samsung-galaxy-s21-how-to-play-testing.jpg)

- Win Announcement Tab

![Samsung Galaxy S21 Win Announcement Tab Testing](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/samsung-galaxy-s21-win-announcement-testing.jpg)

- Loss Announcement Tab

![Samsung Galaxy S21 Loss Announcement Tab Testing](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/samsung-galaxy-s21-loss-announcement-testing.jpg)

- Draw Announcement Tab

![Samsung Galaxy S21 Draw Announcement Tab Testing](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/samsung-galaxy-s21-draw-announcement-testing.jpg)

### **Validator Testing**

- **HTML**

  - The first time I run the HTML validator it returned one warning and it was for a missing heading element in one of the sections in the html file. After speaking with my mentor he advised me to remove the section and leave just the div element.

![W3C HTML Validator First Results](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/first%20-%20html-validator-result.png)

- The second time I run the validator it returned no errors.

![W3C HTML Validator Second Results](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/second-html-validator-result.png)

- **CSS**

  - The CSS code checked out with no errors.

![W3C CSS Validator](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/css-validator-results.png)

- **JavaScript**

  - The JavaScript code returned only one warning for a function that is declared within a loop which references an outer scoped variable.

![JSHint Validator](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/jshint-validator-result.png)

### **Performance Testing**

The performance of the website was tested with Lighthouse, a feature that is part of Google Chrome's Developer Tools.

- Lighthouse Validator

![Lighthouse Testing](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/lighthouse-testing.png)

### **ADA Testing**

The website was tested for ADA compliancy, which stands for the Americans with Disabilities Act for Accessible Design. The website passed the check. I used the [Accessibe Website](https://accessibe.com/) to do the testing.

- Home Page ADA Testing

![ADA Testing](https://github.com/devnickocodes/the-elements-game/blob/main/documentation/ADA-compliancy.png)
