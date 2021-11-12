# _Roman Numerals_

#### _EPICODUS PRACTICE: w3:38_

#### By
* _**Ella Tanttu**_
* _**Aaron Minnick**_
* _**Ryan Ashby**_

## Technologies Used

* _CSS_
* _HTML_
* _Javscript_
* _Jest_

## Description

_Click here to see exercise: https://www.learnhowtoprogram.com/introduction-to-programming/arrays-and-looping/practice-roman-numerals_

## Setup/Installation Requirements

* _Navigate to https://github.com/aaronminnick/roman-numerals.git in your browser_
* _Clone this repository to your desktop_
* _Navigate to the top level of the directory_
* _In the terminal, run the command ```npm install``` to recreate environment._
* _Open files in VS Code to edit_

## Known Bugs

_No known issues_

## License

_{MIT Copyright (c) 2021 Ella Tanttu, Aaron Minnick, Ryan Ashby}_
_(https://opensource.org/licenses/MIT)_

## Contact Information

_Ella Tanttu ellajtanttu@gmail.com_
_Aaron Minnick abminnick@gmail.com_
_Ryan Ashby rjapsu160@gmail.com_

# _Specs_
- Write a method to convert numbers into Roman numerals. Roman numerals are based on seven symbols:

|Symbol|Value|
|---|---|
|I|1|
|V|5|
|X|10|
|L|50|
|C|100|
|D|500|
|M|1000|

- The most basic rule is that you add the value of all the symbols: so II is 2, LXVI is 66, etc.
- The exception is that there may not be more than three of the same characters in a row. Instead, you switch to subtraction. So instead of writing IIII for 4, you write IV (for 5 minus 1); and instead of writing LXXXX for 90, you write XC.
- You also have to separate ones, tens, hundreds, and thousands. In other words, 99 is XCIX, not IC. You cannot count higher than 3,999 in Roman numerals.