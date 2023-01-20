# Head-to-Head Table

## index.html
- Standard html file with table element

## index.js
- fetch API to make http request and get json file
- for in loop to find all team objects (unknown at start)
  - add each team to teams array
- use teams array to create header row
  - header is created using insertRow() and a th element for each team
- iterate through each team's opponent and wins
  - create a td element for each opponent
  - create a td element for each win value
  - if team and opponent are equal text for td element is "--"
- use teams array to create bottom header row
  - header is created using insertRow() and a th element for each team

## index.css
- red color and font from sports-reference

## test.json
- find and replace single quotes with double quotes
- syntax error with single quotes

## Final Result
- https://zachderish.github.io/sports-reference/
- ![Screenshot (92)](https://user-images.githubusercontent.com/29740457/213751819-adb6bcc0-c6d8-435e-9a71-7e9624121967.png)


