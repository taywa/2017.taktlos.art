var Infoarea = Class.create();
Infoarea.prototype = {
  initialize: function(obj, index)
  {
    this.infoarea = $("sidebar");
    this.pagebody = $("wrap");
    // Create toggle button
    this.toggle_button = document.createElement("a");
    this.toggle_button.id = "toggleinfoarea";
    this.pagebody.appendChild(this.toggle_button);
    if (!new Cookie().read("showinfoarea") || new Cookie().read("showinfoarea") == "false")
    {
      Element.setStyle(this.infoarea, {display: "none"});  
      this.toggle_button.innerHTML = "Show Infoarea";
      Element.addClassName(this.toggle_button, "show");
    } else {
      this.toggle_button.innerHTML = "Hide Infoarea";
    }
    // Add event listener
    Event.observe(this.toggle_button, "click", this.toggle.bindAsEventListener(this), false);
  },
  toggle: function()
  {
    if (Element.getStyle(this.infoarea, "display") == "none") { this.show(); }
    else { this.hide()}
  },
  show: function()
  {
    new Effect.BlindDown(this.infoarea);
    this.toggle_button.innerHTML = "Hide Infoarea";
    Element.removeClassName(this.toggle_button, "show");
    new Cookie().create("showinfoarea", "true", 360);
  },
  hide: function()
  {
    new Effect.BlindUp(this.infoarea);
    this.toggle_button.innerHTML = "Show Infoarea";         
    Element.addClassName(this.toggle_button, "show");
    new Cookie().create("showinfoarea", "false", 360);
  }
}

Event.observe(window, 'load', function(){new Infoarea()}, false);
