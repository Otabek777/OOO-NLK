$(".header__catalogBtn").click(function() {
    $(".header__catalogBtn").toggleClass("active");
    $(".header__catalog").toggleClass("open");
});
$(".header__catalog h5").click(function() {
    $(this).addClass("active");
    $(".catalog_top .back").addClass("active");
});
$(".catalog_top .back").click(function() {
    $(".header__catalog h5").removeClass("active");
    $(".catalog_top .back").removeClass("active");
});
$(".catalog_top .close").click(function() {
    $(".header__catalog").removeClass("open");
    $(".header__catalogBtn").removeClass("active");
});

$(".header__burgir").click(function() {
    if($(".header__burgir").hasClass("active")) {
        $(".header").removeClass("open");
        $(".header__burgir").removeClass("rotate");
        setTimeout(function() {
            $(".header__burgir").removeClass("active");
        }, 300);
    } else {
        $(".header").addClass("open");
        $(".header__burgir").addClass("active");
        setTimeout(function() {
            $(".header__burgir").addClass("rotate");
        }, 300);
    }
});
$(".modal-open").click(function() {
    $(".modal").addClass("active");
    setTimeout(function() {
        $(".modal").addClass("opacity");
    }, 10);
});
$(".modal__close").click(function() {
    $(".modal").removeClass("opacity");
    setTimeout(function() {
        $(".modal").removeClass("active");
    }, 400);
});

if($(".counter")) {
    var quantity = $(".counter");
    quantity.children(".plus").click(function() {
        $(this).next(".num").val( function(i, oldval) {
            return ++oldval;
        });
    });
    quantity.children(".minus").click(function() {
        if($(this).prev(".num").val() != 1) {
            $(this).prev(".num").val( function(i, oldval) {
                return --oldval;
            });
        };
    });
};

if($(".product__tabBtn")) {
    function TabClick(num) {
        $("#tabBtn-"+num).click(function() {
            $(".product__tabBtn .btn").removeClass("active");
            $(".product__tabBlock").removeClass("active");
            $(this).addClass("active");
            $("#tabBlock-"+num).addClass("active");
        });
    };
    TabClick("1");
    TabClick("2");
};
if($(".tabBtn")) {
    function TabClick(num) {
        $("#tabBtn-"+num).click(function() {
            $(".tabBtn .btn").removeClass("active");
            $(".tabBlock").removeClass("active");
            $(this).addClass("active");
            $("#tabBlock-"+num).addClass("active");
        });
    };
    TabClick("1");
    TabClick("2");
};

if(document.querySelector('.input_phone')) {
    window.addEventListener("DOMContentLoaded", function() {
        [].forEach.call( document.querySelectorAll('.tel'), function(input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }
    
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    
      });
    
    });
}