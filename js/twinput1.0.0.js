(function ($) {
  var isInternetExplorer;
  $.fn.jqueryInputTypeWriting = function (option) {
    isInternetExplorer = navigator.appName == "Microsoft Internet Explorer";
    var opt = $.extend(
      {
        speed: 100,
        delay: 1000,
        keywords: ["keywords"],
      },
      option || {}
    );
    if (typeof opt.keywords == "string") {
      opt.keywords = [opt.keywords];
    }
    return this.each(function () {
      var input = $(this);
      var inputElement = input.get(0);
      var keywordsIndex, inputIndex, keywords;
      //var input = input;
      function st() {
        keywordsIndex = inputIndex = 0;
        keywords = opt.keywords[keywordsIndex];
        input.show();
        typeWriting();
      }
      input.focus(function () {
        if (!isInternetExplorer) {
          $(input).attr("placeholder", "");
        } else {
          input.val("");
        }
        var typeWritingInput = $.data(inputElement, "tw_input");
        if (typeWritingInput) {
          clearTimeout(typeWritingInput);
          $.data(inputElement, "tw_input", false);
        } else {
          $(this).select();
        }
      });
      input.blur(function () {
        if (input.val() == "") {
          st();
        }
      });
      function typeWriting() {
        if (!isInternetExplorer) {
          $(input).attr("placeholder", keywords.substring(0, inputIndex++) + "|");
        } else {
          input.val(keywords.substring(0, inputIndex++) + "|");
        }
        if (inputIndex > keywords.length) {
          $.data(
            inputElement,
            "tw_input",
            setTimeout(function () {
              if (++keywordsIndex >= opt.keywords.length) {
                keywordsIndex = 0;
              }
              keywords = opt.keywords[keywordsIndex];
              inputIndex = 0;
              typeWriting();
            }, opt.delay)
          );
        } else {
          $.data(inputElement, "tw_input", setTimeout(typeWriting, opt.speed));
        }
      }
      if (!input.val()) {
        st();
      }
    });
  };
})(jQuery);
