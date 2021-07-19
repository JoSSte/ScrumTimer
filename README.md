# ScrumTimer

This is a *decentral* Daily Scrum Timer based on localstorage, with a database of team members.

Accessible online: https://josste.github.io/ScrumTimer/

[![Build Angular](https://github.com/JoSSte/ScrumTimer/actions/workflows/main.yml/badge.svg?branch=master)](https://github.com/JoSSte/ScrumTimer/actions/workflows/main.yml)

## How to use it

## Notes
* This is built using Angular and a lot of libraries that I try to make sure do not have any vulnerabilities, by keeping them updated. The only included remote access library is [httpclient](https://angular.io/guide/http) but as in all software, you cannot be 100% sure that none of your includes haven't been compromised.

## Privacy & Philosophy
I developed this while working in a company with a very strict data protection policy, and a lengthy process for onboarding tools.  
It is designed to **NOT** use cookies, **NOT** use any webservices and store everything in localstorage, so even if you delete cookies regularly it will persist. Unfortunately this means that you need to exchange a json string if you want to share the list with a colleague.
The tool was developed as a response to Daily scrum meetings frequently running over time, so the main focus is to keep awareness on the time, and let everyone speak, and making the order pseudo-random so it's not always *"Adam Adamson"* who has to go first every day.

### What is sent to the server?
Nothing. Pure and simple.  
If you have seleted the remote participant list you are in effect fetching a file from another server, so there may be some tracking there...

### What is stored on my computer?
In Localstorage (Press <kbd>F12</kbd> -  select application/storage - localstorage) there will be an entry called *settings* storing all the settings in a JSON array and an entry called *participants* also in a JSON array.

#### Localstorage in Firefox
![Firefox](src/assets/images/localstorage_firefox_0.3.0.png)
#### Localstorage in Chrome
![Chrome](src/assets/images/localstorage_chrome_0.3.0.png)



## Sample Data

``` json
[
    {
        "init": "IJ",
        "name": "Indiana Jones"
    },
    {
        "init": "PS",
        "name": "Papa Smurf"
    },
    {
        "init": "TT",
        "name": "Tintin"
    },
    {
        "init": "MM",
        "name": "Mickey Mouse"
    },
    {
        "init": "SMcD",
        "name": "Scrooge McDuck"
    },
    {
        "init": "DD",
        "name": "Donald Duck"
    }
]

```

# ngcc after `npm i`
"postinstall": "ngcc --properties es2015 browser module main --first-only --create-ivy-entry-points"