====
Information
===
Consulta CEP através do webservice da empresa Aviso Brasil.

===
How To Use
===
```
jQuery("#txtCep").zipcode({
	data: {
		uf: jQuery("#txtUf"), 
		city: jQuery("#txtCity"), 
        log: jQuery("#txtLog"), 
        district: jQuery("#txtDistrict")
	}, 
	autofocus: jQuery("#txtNum")
});
```