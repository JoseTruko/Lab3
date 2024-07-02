(function($){

    const sketchfabWidgetHandle=function($scope,$){
        console.log("prueba")
    }
    $(window).on("elementor/frontend/init", function(){
        elementorFrontend.hooks.addAction("forntend/element_ready/sketchfab-widget.default"),
        sketchfabWidgetHandle;
    })

})(Jquery);