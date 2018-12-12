$(document).ready(function() {
    $("form").submit(function() {
        var data = serializeFormToObject($(this));
        JSON.stringify(data);
    });

    function serializeFormJSON(form) {
        var o = {};
        var a = form.serializeArray();
        $.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    }

    function serializeFormToObject(form) {
        var o = {};
        var a = form.serializeArray();
        $(':input', form).each(function() {
            switch(this.type) {
                case "checkbox":
                    if (o[this.name]) {
                        if (!o[this.name].push) {
                            o[this.name] = [o[this.name]];
                        }
                        o[this.name].push(this.checked);
                    } else {
                        o[this.name] = this.checked;
                    }
                    break;
                case "select-multiple":
                    var items = [];
                    $.each($("#" + this.id + " option:selected"), function() {            
                        items.push($(this).val());
                    });
                    if (o[this.name]) {
                        if (!o[this.name].push) {
                            o[this.name] = [o[this.name]];
                        }
                        o[this.name].push(items.join(", "));
                    } else {
                        o[this.name] = items.join(", ");
                    }
                    break;
                case "submit":
                    break;
                default:
                    if (o[this.name]) {
                        if (!o[this.name].push) {
                            o[this.name] = [o[this.name]];
                        }
                        o[this.name].push(this.value || '');
                    } else {
                        o[this.name] = this.value || '';
                    }
            }
        });
        return o;
    }
});