# Pretty Table
A simple library to render tables from models and to compare tables. Modeled from [warfares/pretty-json](https://github.com/warfares/pretty-json)

## Demo

[here] (https://jacsmith21.github.io/pretty-table/)

## Dependencies

* Backbone 1.1.2 (code structure) 
* Underscore 1.7.0 (utils)
* JQuery 1.11.1 (DOM manipulation)
* [pretty-json](https://github.com/jacsmith21/pretty-json) (DOM manipulation)

## Usage

```
var data1 = {
    headers:["ApplicationName", "ApplicationVersion"],
    models:[
        {
            "ApplicationName": "zee App Name",
            "ApplicationVersion": "5",
            "somethingelse": "wow"
        },
        {
            "ApplicationName": "ppA Name",
            "ApplicationVersion": "4"
        },
        {
            "ApplicationName": "App Name",
            "ApplicationVersion": "5"
        }
    ]
};

var data2 = {
    headers:["ApplicationName", "ApplicationVersion"],
    models:[
        {
            "ApplicationName": "zee App Name",
            "ApplicationVersion": "5",
            "somethingelse": "wow"
        },
        {
            "ApplicationName": "ppA Name",
            "ApplicationVersion": "4"
        },
        {
            "ApplicationName": "App Name",
            "ApplicationVersion": "5"
        }
    ]
};

//to render a table with headers
var table1 = new PrettyTable.view.Table({
    el: $('#elem1'),
    headers: data.headers, //the headers are used to pull information from the model
    models: data.models
});

//to render a table without headers
//if headers aren't defined each row renders the complete model using (pretty-json)[https://github.com/jacsmith21/pretty-json]
var table2 = new PrettyTable.view.Table({
    el: $('#elem2'),
    models: data.models 
});

//to render two tables and match them up using the keys
//the keys make up the unique identifiers of each model so the rows can be matched
var comparer = new PrettyTable.view.Comparer({
    el: $('#elem3'),
    models1: data1.models,
    models2: data2.models,
    keys: ["ApplicationName", "ApplicationVersion"]
});

```

## Properties

PrettyTable.view.Comparer
* el: DOM elem to append Comparer
* models1: The models to display on the left hand side
* models2: The models to display on the right hand side
* headers: The headers for each table [optional]
* keys: The unique identifiers of the models used to match the rows

PrettyTable.view.Table
* el: DOM elem to append the Table
* models: The models for the rows
* headers: The headers for each table [optional]

## Other

Keys and headers are assumed to be in the first level of the table
