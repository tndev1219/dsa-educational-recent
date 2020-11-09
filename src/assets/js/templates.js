Handlebars.registerPartial("partial", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return " testing testing test hellothis test !!!whatever partial$$$$$$$$$$$$$$$$$$!";
},"useData":true}));
this["MyApp"] = this["MyApp"] || {};
this["MyApp"]["templates"] = this["MyApp"]["templates"] || {};
this["MyApp"]["templates"]["App"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "This is the app!\n"
    + ((stack1 = container.invokePartial(partials.partial,depth0,{"name":"partial","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});