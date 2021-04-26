# ScrumTimer

This is a *decentral* Daily Scrum Timer based on localstorage, with a database of team members.

Accessible online: https://josste.github.io/ScrumTimer/

## Privacy & Philosophy
I developed this while working in a company with a very strict data protection policy.  
It is designed to **NOT** use cookies, **NOT** use any webservices and store everything in localstorage, so even if you delete cookies regularly it will persist. Unfortunately this means that you need to exchange a json string if you want to share the list with a colleague. I might extend it to use a URL for a `.json` file in the future, but at the moment it will not happen.  
The tool was developed as a response to Daily scrum meetings frequently running over time, so the main focus is to keep awareneww on the time, and let everyone speak, and making the order pseudo-random so it's not always *"Adam Adamson"* who has to go first every day.

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