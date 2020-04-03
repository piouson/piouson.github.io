# JSON - JavaScript Object Notation
Visit [piouson.github.io](https://piouson.github.io/responsive-web-design/4-doc-page/){:target="_blank"} for HTML version.

## What is JSON
Javascript Object Notation (JSON) is a lightweight data-interchange language. It is easy for humans to read and write. It is easy for machines to parse and generate.

JSON is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages.

## JSON Syntax
JSON can be written in two forms:
* **Object** - a collection of **Name-Value** pairs enclosed in curly brackets `{}`.
* **Array** - an ordered list of **Values** enclosed in square brackets `[]`.

A basic example of a name-value pair.
`"name":"Adam"`

A name-value pair cannot be enclosed in single quotes, double quotes must be used.
`'name':'Adam'`

Multiple name-value pairs must be seperated by commas `,`.
```json
"firstName":"Adam", 
"lastName":"Banks", 
"age":28
```

The complete syntax of a JSON object includes a pair of curly brackets.
`{ "name":"Adam" }`

The complete syntax of a JSON array includes a pair of square brackets.
`[ "Adam","Abel","Alex" ]`

## JSON Data Types
The following are the JSON data types:
* Object (JSON Object)
* String
* Number
* Boolean
* Array
* Null

## JSON Objects
As mentioned before, JSON object include curly braces.
`{ "name":"Adam" }`

An example of multiple name-value pairs.
```json
{
	"firstName":"Adam", 
	"lastName":"Banks", 
	"age":28
}
```

JSON Values can also be objects.
`{ "student":{ "name":"Adam" } }`
```json
{
	"student": {
		"firstName":"Adam", 
		"lastName":"Banks", 
		"age":28
	}
}
```

## JSON String
JSON Values can be a string, as we have seen above, "this is a string". 
In addition, the following characters must be escaped with a `\` when used in a JSON string:
* \" (double quotes)
* \\ (backslash)
* \/ (forward slash)
* \b (backspace)
* \f (form feed)
* \t (tab)
* \n (new line)
* \r (carriage return)
* \u followed by hexadecimal characters (e.g., the smiley emoticon \u263A)

## JSON Number
JSON Values can be positive or negative numbers **without the quotes.**
* Integers
* Decimals
* Exponents
```json
{
	"quantity": 13,
	"price": 5.99,
	"latitude": 42.210345,
	"longitude": -118.894329,
	"speed": 2.998E+8
}
```

## JSON Boolean
JSON Values can be `true` or `false`, all **lowercase**, and **without the quotes.**
```json
{
	"name":"Adam Banks",
	"age":28,
	"employed":false,
	"married":true
}
```

## JSON Array
JSON Values can be Arrays. This is a list of any of the JSON data types, object, string, number, array, boolean or null. All the Values in an Array must be of the same data type.
```json
{
	"name":"Adam Banks",
	"age":28,
	"children": [ 
		"Mike", 
		"Ari", 
		"Luna" 
	]
}
```

## JSON Null
JSON Values can be `null`, all **lowercase**, and **without the quotes.**
```json
{
	"name":"Adam Banks",
	"age":28,
	"children": null
}
```

## JSON Schema
JSON Schema is a vocabulary that allows you to annotate and validate JSON documents.
The list of data types available in JSON leads to all kinds of data representation. JSON Schema allows you to define what is valid and acceptable in your JSON document, like:
* Describes your existing data format(s).
* Provides clear human- and machine- readable documentation.
* Validates data which is useful for:
	* Automated testing.
	* Ensuring quality of client submitted data.

The JSON document being validated or described is called the instance, and the document containing the validation description is called the schema.

The most basic schema is a blank JSON object. This accepts anything, as long as it’s valid JSON
```json
{}
```

You can also use `true` to represent a schema that matches anything, or `false` for a schema that matches nothing.
```json
true
```

```json
false
```

Here is a complete example of a schema document
```json
{
	"$id": "https://your-domain.com/example.schema.json",
	"$schema": "http://json-schema.org/schema#",
	"title": "Student Record",
	"description": "Validating a student record.",
	"type": "object",
	"required": [ "firstName", "lastName", "age", "email" ],
	"properties": {
		"firstName": {
			"type": "string",
			"minLength": 2,
			"maxLength": 50
		},
		"lastName": {
			"type": "string",
			"minLength": 2,
			"maxLength": 50
		},
		"middleName": {
			"type": "string",
			"minLength": 2,
			"maxLength": 50
		},
		"age": {
			"type": "number",
			"minimum": 18,
			"maximum": 180
		},
		"email": {
			"type": "string",
			"pattern": "^[a-z0-9_-]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,10})$"
		},
		"married": {
			"type": "boolean"
		}
	}
}
```

## References
All documentation on this page is taken from [JSON.org](https://www.json.org) and [JSON-Schema.org](http://json-schema.org)