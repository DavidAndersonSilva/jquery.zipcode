/**
 * Query Address with ZipCode
 *
 * @package   jQuery.ZipCode
 * @author    David Anderson da Silva Rocha
 * @email     david.anderson.sil@live.com
 * @copyright GNU/GPL
 * @version 0.3.0.0
 */
;(function($) {
    $.fn.zipcode = function( options ) {
        // Object reference
        var root = this;
        
        // Host to query address
        var url = "http://cep.correiocontrol.com.br/";

        // Parameters defaults
        var defaults = {
            data: {
                uf: null, 
                city: null, 
                log: null, 
                district: null
            },
            autofocus: null
        };

        // Settings overwritten with json, defaults or options
        var settings = $.extend({ }, defaults, options);

        // Fill in the fields
        function autofill() {
            if( root.val().length == 8 )
            {
                // Complete Address
                var uri = url + root.val() + ".json";

                $.getJSON(uri, function( data ) {
                    // Clear and Fill in the Fields
                    if(settings.data.uf != null)
                    {
                        settings.data.uf.val();
                        settings.data.uf.val( data.uf );
                    }
                    
                    if(settings.data.city != null)
                    {
                        settings.data.city.val();
                        settings.data.city.val( data.localidade );
                    }
                    
                    if(settings.data.log != null)
                    {
                        settings.data.log.val();
                        settings.data.log.val( data.logradouro );

                    }
                    
                    if(settings.data.district != null)
                    {
                        settings.data.district.val();
                        settings.data.district.val( data.bairro );
                    }

                    // Focus after of fill in the fields
                    if(settings.autofocus != null)
                    {
                        settings.autofocus.focus();
                    }
                });
            }
        }

        // Custom event
        return this.bind("keyup", autofill);
    };
})(jQuery);