const schema = {
    "type": "object",
    "properties": {
        "resultList": {
            "type": "array",
            "items": [{
                "type": "object",
                "properties": {
                    "mdmCode": {"type": "string"},
                    "kapitaleinsatzSpalte": {"type": "string"},
                    "gebuehrenSpalte": {"type": "string"},
                    "steuerSpalte": {"type": "string"},
                    "zinsenSpalte": {"type": "string"},
                    "kapitaleinsatzSpalteKW": {"type": "string"},
                    "gebuehrenSpalteKW": {"type": "string"},
                    "steuerSpalteKW": {"type": "string"},
                    "zinsenSpalteKW": {"type": "string"},
                    "saldenSpalteNegiert": {"type": "boolean"},
                    "gebuehrenSpalteNegiert": {"type": "boolean"},
                    "steuerSpalteNegiert": {"type": "boolean"},
                    "zinsenSpalteNegiert": {"type": "boolean"},
                    "ausschuettungSpalteNegiert": {"type": "boolean"}
                },
                "required": ["mdmCode"]
            }]
        }
    },
    "required": ["resultList"]
}

pm.test("Validate schema", () => {
    pm.response.to.have.jsonSchema(schema);
});


---------------------------
---------------------------

matches to this: 

{
    "resultList": [
        {
            "mdmCode": "HIERISTEINSTRING",
            "beschreibung": "HIERISTEINSTRING"",
            "kapitaleinsatzSpalte": "HIERISTEINSTRING",
            "gebuehrenSpalte": "HIERISTEINSTRING",
            "steuerSpalte": "HIERISTEINSTRING",
            "zinsenSpalte": "HIERISTEINSTRING",
            "steuerSpalteNegiert": true,
            "zinsenSpalteNegiert": true,
            "ausschuettungSpalteNegiert": true
        },
		...
	]
}
