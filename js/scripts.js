var Lilac;
! function (p) {
    "use strict";
    p(document).ready(function () {
        (Lilac = {
            initialized: !1,
            mobMenuFlag: !1,
            wookHandler: null,
            wookOptions: null,
            scrollPos: 0,
            sendingMail: !1,
            mobileMenuTitle: mobileMenuTitle,
            hero100PercentHeight: hero100PercentHeight,
            map_canvas_id: map_canvas_id,
            map_color: map_color,
            map_initial_zoom: map_initial_zoom,
            map_initial_latitude: map_initial_latitude,
            map_initial_longitude: map_initial_longitude,
            use_default_map_style: use_default_map_style,
            contact_form_success_msg: contact_form_success_msg,
            contact_form_error_msg: contact_form_error_msg,
            c_days: c_days,
            c_hours: c_hours,
            c_minutes: c_minutes,
            c_seconds: c_seconds,
            countdownEndMsg: countdownEndMsg,
            init: function () {
                var e = this;
                e.initialized || (e.initialized = !0, e.build(), e.events())
            },
            build: function () {
                var e = this;
                e.isMobile(), e.wtcheck(), e.preloader(), e.navigation(), e.createMobileMenu(), e.heroHeight(), e.curvedText(), p("input, textarea").placeholder(), e.bgImageGrid(), e.googleMap(), e.createPrettyPhoto(), e.createOwlSliders(), e.createGallery(), e.countdown(), e.parallaxItems(), e.startNiceScroll()
            },
            events: function () {
                var e = this;
                e.windowResize(), e.resizeVideos(), e.contactForm(), e.buttons(), e.animateElems()
            },
            isMobile: function () {
                var e;
                e = navigator.userAgent || navigator.vendor || window.opera, (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))
            },
            preloader: function () {
                var e = setInterval(function () {
                    /loaded|complete/.test(document.readyState) && (clearInterval(e), p("#preloader").fadeOut(500))
                }, 10)
            },
            navigation: function () {
                p(".nav li a").on("click", function (e) {
                    var t = p(this),
                        a = 0;
                    "#" === t.attr("href").charAt(0) ? (e.preventDefault(), "#home" !== t.attr("href") && (a = p(t.attr("href")).offset().top - 65), p("html, body").stop().animate({
                        scrollTop: a
                    }, 1500, "easeInOutExpo", function () {
                        t.blur()
                    })) : window.open(t.attr("href"), "_self")
                });
                new Waypoint.Sticky({
                    element: p(".nav-section")
                });
                p("#wrapper > section").waypoint({
                    handler: function (e) {
                        var t = p(this),
                            a = t[0].element.id;
                        "up" === e && (a = t[0].element.previousElementSibling.id), p(".nav a").removeClass("active"), p('nav a[href="#' + a + '"]').addClass("active")
                    },
                    offset: "50%"
                }), p(window).load(function () {
                    var e = location.hash.replace("#", "");
                    "" !== e && (location.hash = "", p("html, body").stop().animate({
                        scrollTop: p("#" + e).offset().top - 65
                    }, 1500, "easeInOutExpo")), new Waypoint.Sticky({
                        element: p(".nav-section")
                    })
                })
            },
            createMobileMenu: function (e) {
                var i, t = this,
                    o = p("#wrapper"),
                    n = p.browser.mobile ? "touchstart" : "click";
                null !== e && (e = p(window).innerWidth()), e <= 975 && !t.mobMenuFlag && (p("body").prepend('<nav class="nav-mobile"><i class="fa fa-times"></i><h2><i class="fa fa-bars"></i>' + t.mobileMenuTitle + "</h2><ul></ul></nav>"), p(".nav-mobile > ul").html(p(".nav").html()), p(".nav-mobile b").remove(), p(".nav-mobile ul.dropdown-menu").removeClass().addClass("dropdown-mobile"), i = p(".nav-mobile"), p("#nav-mobile-btn").on(n, function (e) {
                    e.stopPropagation(), e.preventDefault(), setTimeout(function () {
                        o.addClass("open"), i.addClass("open"), i.getNiceScroll().show()
                    }, 25), p(document).on(n, function (e) {
                        p(e.target).hasClass("nav-mobile") || p(e.target).parents(".nav-mobile").length || (o.removeClass("open"), i.removeClass("open"), p(document).off(n))
                    }), p(">i", i).on(n, function () {
                        i.getNiceScroll().hide(), o.removeClass("open"), i.removeClass("open"), p(document).off(n)
                    })
                }), i.niceScroll({
                    autohidemode: !0,
                    cursorcolor: "#888888",
                    cursoropacitymax: "0.7",
                    cursorwidth: 10,
                    cursorborder: "0px solid #000",
                    horizrailenabled: !1,
                    zindex: "1"
                }), i.getNiceScroll().hide(), t.mobMenuFlag = !0, p(".nav-mobile li a").on("click", function (e) {
                    var t = p(this),
                        a = 0;
                    "#home" !== t.attr("href") && (a = p(t.attr("href")).offset().top - 65), p("html, body").stop().animate({
                        scrollTop: a
                    }, 1500, "easeInOutExpo", function () {
                        t.blur()
                    }), i.getNiceScroll().hide(), o.removeClass("open"), i.removeClass("open"), p(document).off(n), e.preventDefault()
                }))
            },
            wtcheck: function () {
                // :D
            },
            heroHeight: function () {
                this.hero100PercentHeight && (p("#home").css({
                    minHeight: p(window).innerHeight() + "px"
                }), p(window).resize(function () {
                    p("#home").css({
                        minHeight: p(window).innerHeight() + "px"
                    })
                }))
            },
            bgImageGrid: function () {
                var e;
                p("#freewall").length && (p("#freewall .item").each(function () {
                    var e = p(this);
                    e.width(Math.floor(260 + 200 * Math.random())), e.css({
                        "background-image": "url(" + p(">img", e).attr("src") + ")"
                    }), p(">img", e).remove()
                }), p("#freewall").appendTo("#wrapper"), (e = new Freewall("#freewall")).reset({
                    selector: ".item",
                    animate: !1,
                    cellW: 20,
                    gutterX: 0,
                    gutterY: 0,
                    onResize: function () {
                        e.fitWidth()
                    }
                }), e.fitWidth())
            },
            googleMap: function () {
                if (0 === p("#map_canvas").length || "undefined" === map_markers || 0 === map_markers.length) return !1;
                var e, s, t, a = this,
                    i = [],
                    o = 0;
                for (/^\d|\.|-$/.test(a.map_initial_latitude) && /^\d|\.|-$/.test(map_initial_longitude) || (a.map_initial_latitude = map_markers[0].latitude, a.map_initial_longitude = map_markers[0].longitude), e = new google.maps.LatLng(a.map_initial_latitude, a.map_initial_longitude), this.use_default_map_style || (i = [{
                        stylers: [{
                            hue: map_color
                        }, {
                            saturation: -75
                        }, {
                            lightness: 5
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "labels.text.fill",
                        stylers: [{
                            saturation: 20
                        }, {
                            lightness: -70
                        }]
                    }, {
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{
                            saturation: -50
                        }, {
                            lightness: 40
                        }]
                    }, {
                        featureType: "road",
                        elementType: "geometry",
                        stylers: [{
                            hue: map_color
                        }, {
                            saturation: -100
                        }, {
                            lightness: 0
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry",
                        stylers: [{
                            hue: map_color
                        }, {
                            saturation: 5
                        }, {
                            lightness: 5
                        }]
                    }, {
                        featureType: "road",
                        elementType: "geometry.stroke",
                        stylers: [{
                            saturation: 10
                        }, {
                            lightness: 0
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [{
                            saturation: 0
                        }, {
                            lightness: 20
                        }]
                    }, {
                        featureType: "transit",
                        elementType: "geometry",
                        stylers: [{
                            hue: map_color
                        }, {
                            saturation: 30
                        }, {
                            lightness: -30
                        }]
                    }]), i = new google.maps.StyledMapType(i, {
                        name: "Lilac"
                    }), e = {
                        center: e,
                        zoom: a.map_initial_zoom,
                        scrollwheel: !1,
                        panControl: !1,
                        mapTypeControl: !1,
                        zoomControl: !0,
                        zoomControlOptions: {
                            position: google.maps.ControlPosition.RIGHT_CENTER
                        }
                    }, (s = new google.maps.Map(document.getElementById(a.map_canvas_id), e)).mapTypes.set("map_style", i), s.setMapTypeId("map_style"), t = function (e) {
                        var t = e.latitude,
                            a = e.longitude,
                            i = e.icon,
                            e = e.infoWindow,
                            o = new google.maps.InfoWindow({
                                content: '<div class="infoWindow">' + e + "</div>"
                            }),
                            n = new RichMarker({
                                position: new google.maps.LatLng(t, a),
                                map: s,
                                anchor: 8,
                                anchorPoint: new google.maps.Point(0, -40),
                                shadow: "none",
                                content: '<div class="marker"><i class="fa ' + i + '"></i></div>'
                            });
                        google.maps.event.addListener(n, "click", function () {
                            o.open(s, n)
                        })
                    }; o < map_markers.length;) t(map_markers[o]), o += 1
            },
            createPrettyPhoto: function () {
                p("a[data-gal^='prettyPhoto']").prettyPhoto({
                    theme: "lilac",
                    hook: "data-gal"
                })
            },
            createOwlSliders: function () {
                p(".timeline-gallery").length && p(".timeline-gallery").owlCarousel({
                    nav: !0,
                    dots: !1,
                    responsive: {
                        0: {
                            items: 1
                        },
                        392: {
                            items: 2
                        },
                        596: {
                            items: 3
                        },
                        751: {
                            items: 2
                        },
                        975: {
                            items: 3
                        }
                    }
                }), p(".bridesmaids-groomsmen-slider").length && (p(".bridesmaids-groomsmen-slider").owlCarousel({
                    nav: !1,
                    dots: !0,
                    responsive: {
                        0: {
                            items: 1
                        },
                        590: {
                            items: 2
                        },
                        975: {
                            items: 3
                        },
                        1199: {
                            items: 4
                        }
                    }
                }), p(".bridesmaids-groomsmen-slider").on("changed.owl.carousel", function (e) {
                    e.item.count - e.page.size == e.item.index && p(e.target).find(".owl-dots div:last").addClass("active").siblings().removeClass("active")
                }), p(".bridesmaids-groomsmen-slider").each(function () {
                    0 == p(".owl-prev:visible", this).length && p(".owl-nav", this).addClass("hide"), p(".item .image .info h3", this).css({
                        "margin-top": "70px"
                    })
                }))
            },
            createGallery: function () {
                var e = p(".gallery-scroller"),
                    t = !1;
                p(".gallery-right").on("click", function () {
                    return !t && (t = !0, void e.animate({
                        scrollLeft: e.scrollLeft() + 380
                    }, function () {
                        t = !1
                    }))
                }), p(".gallery-left").on("click", function () {
                    return !t && (t = !0, void e.animate({
                        scrollLeft: e.scrollLeft() - 380
                    }, function () {
                        t = !1
                    }))
                })
            },
            curvedText: function () {
                p(".curve").length && (p(".curve").arctext({
                    radius: 1e3
                }), p(window).resize(function () {
                    p(".curve").arctext("set", {
                        radius: 1e3
                    })
                })), p(".curve2").length && (p(".curve2").arctext({
                    radius: 800,
                    dir: -1
                }), p(window).resize(function () {
                    p(".curve2").arctext("set", {
                        radius: 800,
                        dir: -1
                    })
                }));
                setInterval(function () {
                    /loaded|complete/.test(document.readyState) && (p(".curve").arctext("set", {
                        radius: 1e3
                    }), p(".curve2").arctext("set", {
                        radius: 800,
                        dir: -1
                    }))
                }, 10)
            },
            countdown: function (e, t) {
                var o, n = this,
                    s = new Date(t),
                    r = p("" + e);
                r.html('<div class="days"><span>' + n.c_days + '</span><div></div></div><div class="hours"><span>' + n.c_hours + '</span><div></div></div><div class="minutes"><span>' + n.c_minutes + '</span><div></div></div><div class="seconds"><span>' + n.c_seconds + "</span><div></div></div>"), o = setInterval(function () {
                    var e = new Date;
                    if ((i = s - e) < 0) return r.html('<div class="end">' + n.countdownEndMsg + "</div>"), clearInterval(o), !1;
                    var t = Math.floor(i / 864e5 * 1),
                        a = Math.floor(i % 864e5 / 36e5 * 1),
                        e = Math.floor(i % 864e5 % 36e5 / 6e4 * 1),
                        i = Math.floor(i % 864e5 % 36e5 % 6e4 / 1e3 * 1);
                    p(".days > div", r).html(t), p(".hours > div", r).html(a), p(".minutes > div", r).html(e), p(".seconds > div", r).html(i)
                }, 1e3)
            },
            parallaxItems: function () {
                p.browser.mobile ? p(".parallax").css({
                    "background-position": "50% 50%",
                    "background-size": "cover",
                    "background-attachment": "scroll"
                }) : p.stellar()
            },
            startNiceScroll: function () {
                p(document).ready(function () {
                    p(".gallery-scroller").niceScroll({
                        cursorcolor: "#fff",
                        cursorwidth: "0px",
                        background: "#fff",
                        cursorborder: "0px solid #1F2326",
                        zindex: "999",
                        autohidemode: !1,
                        enablemousewheel: !1,
                        touchbehavior: !0
                    })
                })
            },
            windowResize: function () {
                var t = this;
                p(window).resize(function () {
                    var e = p(window).innerWidth();
                    t.createMobileMenu(e)
                })
            },
            resizeVideos: function () {
                var e = p("iframe[src^='http://player.vimeo.com'], iframe[src^='https://player.vimeo.com'], iframe[src^='http://www.youtube.com'], iframe[src^='https://www.youtube.com'], object, embed"),
                    a = p(".videoEmbed");
                e.each(function () {
                    var e = p(this);
                    e.attr("data-aspectRatio", e.height() / e.width()).removeAttr("height").removeAttr("width")
                }), p(window).resize(function () {
                    var t = a.width();
                    e.each(function () {
                        var e = p(this);
                        e.width(t).height(t * e.attr("data-aspectRatio"))
                    })
                }).resize()
            },
            contactForm: function () {
                var u = this;
                p(".submit_form").on("click", function (e) {
                    e.preventDefault();
                    var t, a, i, o = p(this),
                        n = o.closest("form"),
                        e = p("input, textarea, .radio-lilac", n),
                        s = 0,
                        r = /\S+@\S+\.\S+/,
                        l = "contact",
                        c = !1,
                        d = [],
                        m = function (e) {
                            return encodeURIComponent(e)
                        };
                    return e.each(function () {
                        var e = p(this);
                        "hidden" === e.attr("type") ? e.hasClass("subject") ? l += "&subject=" + m(e.val()) : e.hasClass("fromName") || e.hasClass("fromname") ? l += "&fromname=" + m(e.val()) : e.hasClass("fromEmail") || e.hasClass("fromemail") ? l += "&fromemail=" + m(e.val()) : (e.hasClass("emailTo") || e.hasClass("emailto")) && (l += "&emailto=" + m(e.val())) : e.hasClass("required") && "" === e.val() || "email" === e.attr("type") && "" !== e.val() && !1 === r.test(e.val()) ? (e.addClass("invalid"), c = !0) : "recaptcha_response_field" !== e.attr("id") && (e.removeClass("invalid"), e.hasClass("subject") ? (l += "&subject=" + m(e.val()), l += "&subject_label=" + e.attr("name")) : e.hasClass("fromName") || e.hasClass("fromname") ? (l += "&fromname=" + m(e.val()), l += "&fromname_label=" + e.attr("name")) : e.hasClass("fromEmail") || e.hasClass("fromemail") ? (l += "&fromemail=" + m(e.val()), l += "&fromemail_label=" + e.attr("name")) : "radio" === e.attr("type") ? p("input[id='" + e.attr("id") + "']").is(":checked") && (l += "&field" + s + "_label=" + m(e.attr("name")), l += "&field" + s + "_value=" + m(e.val()), s += 1) : (e.hasClass("radio-lilac") ? (l += "&field" + s + "_label=" + e.data("value"), l += "&field" + s + "_value=" + p(".active", e).data("value")) : (l += "&field" + s + "_label=" + e.attr("name"), l += "&field" + s + "_value=" + m(e.val())), s += 1))
                    }), l += "&len=" + s, t = function () {
                        o.width(o.width()), p("i", o).each(function () {
                            var e = p(this),
                                t = e.attr("class");
                            e.removeClass(t).addClass("fa fa-times").delay(1500).queue(function (e) {
                                p(this).removeClass("fa fa-times").addClass(t), e()
                            })
                        }), o.addClass("btn-danger").delay(1500).queue(function (e) {
                            p(this).removeClass("btn-danger"), e()
                        }), p(".form_status_message").html('<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + contact_form_error_msg + "</div>")
                    }, a = function () {
                        o.width(o.width()), p("i", o).each(function () {
                            var e = p(this),
                                t = e.attr("class");
                            e.removeClass(t).addClass("fa fa-check").delay(1500).queue(function (e) {
                                p(this).removeClass("fa fa-check").addClass(t), e()
                            })
                        }), o.addClass("btn-success").delay(1500).queue(function (e) {
                            p(this).removeClass("btn-success"), e()
                        }), p(".form_status_message").html('<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + contact_form_success_msg + "</div>")
                    }, i = function () {
                        p("i", o).each(function (e) {
                            p(this).removeClass("fa fa-cog fa-spin").addClass(d[e])
                        }), o.removeClass("disabled")
                    }, c || u.sendingMail ? t() : (u.sendingMail = !0, p("i", o).each(function (e) {
                        var t = p(this);
                        d[e] = t.attr("class"), t.removeClass(d[e]).addClass("fa fa-cog fa-spin")
                    }), o.addClass("disabled"), p.ajax({
                        type: "POST",
                        url: "contact.php",
                        data: l,
                        success: function (e) {
                            i(), "ok" === e ? (a(), n[0].reset()) : t(), u.sendingMail = !1
                        },
                        error: function () {
                            i(), t(), u.sendingMail = !1
                        }
                    })), !1
                })
            },
            buttons: function () {
                p(".nav-logo, .scrollto").on("click", function (e) {
                    var t = p(this),
                        a = 0;
                    e.preventDefault(), "#home" !== t.attr("href") && (a = p(t.attr("href")).offset().top - 65), p("html, body").stop().animate({
                        scrollTop: a
                    }, 1500, "easeInOutExpo", function () {
                        t.blur()
                    })
                }), p(".bridesmaids-groomsmen-buttons .btn").on("click", function (e) {
                    e.preventDefault();
                    var t = p(this),
                        e = t.data("slider");
                    t.hasClass("active") || (p(".bridesmaids-groomsmen-slider").addClass("hide").css({
                        opacity: 0
                    }), p("#" + e).removeClass("hide").delay(500).animate({
                        opacity: 1
                    }, 500)), p(".bridesmaids-groomsmen-buttons .btn").removeClass("active"), t.addClass("active")
                }), p(".radio-lilac button").on("click", function (e) {
                    e.preventDefault();
                    e = p(this);
                    if (e.hasClass("active")) return !1;
                    e.parent().find("button").removeClass("active"), e.addClass("active")
                }), p(".add_button").on("click", function (e) {
                    e.preventDefault();
                    var t = p(this),
                        a = t.data("wrapper"),
                        i = parseInt(p("#" + a).data("count"), 10) + 1 || 1,
                        o = p("#" + t.data("input")),
                        e = o.val();
                    if ("" === e) return o.addClass("invalid"), !1;
                    e = '<div class="input-group"><input type="text" class="form-control" name="' + t.data("input") + "_" + i + '" value="' + e + '" /><span class="input-group-addon"><i class="fa fa-trash"></i></span></div>', p("#" + a).data("count", i).append(e), o.val(""), o.removeClass("invalid")
                }), p(".add_list").on("click", ".input-group-addon", function () {
                    p(this).closest(".input-group").remove()
                })
            },
            animateElems: function () {
                if (p.browser.mobile) return !1;

                function e() {
                    p("[data-animation-delay]").each(function () {
                        var e = p(this),
                            t = p(window).scrollTop(),
                            a = p(window).height(),
                            i = parseInt(e.attr("data-animation-delay"), 10),
                            o = e.data("animation-direction");
                        if (void 0 === o) return !1;
                        e.addClass("animate-" + o), t + a >= e.offset().top && (isNaN(i) || 0 === i ? e.removeClass("animate-" + o).addClass("animation-" + o) : setTimeout(function () {
                            e.removeClass("animate-me").addClass("animation-" + o)
                        }, i))
                    })
                }
                751 <= p(window).innerWidth() && (p(window).scroll(function () {
                    e()
                }), e())
            }
        }).init()
    })
}(jQuery);