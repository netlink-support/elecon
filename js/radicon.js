var radicon = {
  url: "http://beta.netlink.co.in/elecon/",
  ajaxCustom: function (url, data, callback, callback_custom_variable_1) {
    $.ajax({
      url: url,
      data: data,
      method: "POST",
      async: true,
      success: function (ret) {
        if (typeof callback === "function") {
          if (typeof callback_custom_variable_1 !== "undefined") {
            callback(ret, callback_custom_variable_1);
          } else {
            callback(ret);
          }
        }
      },
      error: function (err) {
        alert("Error, Please try again later");
      },
    });
  },
  changeLanguage: function (value) {
    if (value == "" || value == 0) {
      alert("Please select language");
      return false;
    }

    $.ajax({
      url: radicon.ajax_url,
      data: {
        language: value,
      },
      method: "POST",
      async: false,
      success: function (ret) {
        window.location.reload();
      },
      error: function (err) {
        alert("Error changing language, Please try again later");
      },
    });
  },
  subscribeNews: function (email) {
    $("#news_sub_info").html("");
    var data = {
      email: email,
    };
    radicon.ajaxCustom(radicon.url + "ajax/news_sub/", data, function (html) {
      $("#news_sub_info").html(html);
    });
  },
  showCustomError: function (err, er_type) {
    if (typeof er_type !== "undefined" && er_type !== "") {
      if (er_type == "error") {
        $(".alert").removeClass("alert-warning");
        $(".alert").addClass("alert-danger");
      }
      if (er_type == "info") {
        $(".alert").removeClass("alert-warning");
        $(".alert").addClass("alert-info");
      }
      if (er_type == "success") {
        $(".alert").removeClass("alert-warning");
        $(".alert").addClass("alert-success");
      }
    } else {
      $(".alert").removeClass("alert-danger");
      $(".alert").removeClass("alert-info");
      $(".alert").removeClass("alert-success");
      $(".alert").removeClass("alert-warning");
      $(".alert").addClass("alert-warning");
    }
    $("#alert_text").html(err);
    $(".alert-msg").show();
    $(".alert").show();
    $(".alert-msg").delay(6000).fadeOut(500);
  },
  isValidEmailAddress: function (email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  },
  isValidNumber: function (number) {
    var regex = /^[- +()]*[0-9][- +()0-9]*$/;
    return regex.test(number);
  },
  submitModalForm: function (form_id, type) {
    if (typeof grecaptcha === "undefined") {
      console.error("reCAPTCHA CDN not found or not loaded.");
      $("#form_response").prepend(
        '<p style="font-size: 17px; font-weight: 600;" class="text-danger">There was some problem, please try again after sometime.</p>'
      );
      return;
    }
    grecaptcha.enterprise
      .execute("6LeXDOgqAAAAANlvzxmlVFflpW3xwhPppPG4BTUI", {
        action: "submit",
      })
      .then(function (token) {
        $(".recaptchaResponse").val(token);
        //$.blockUI({css: {backgroundColor: '#FFFFFF', zIndex: 9999999}, message: '<p style="font-size: 24px;margin:0; color:#086799">One moment please...</p>'});
        var data = $(form_id).serialize();

        var modal_id = $("#modal_id").val();
        var path = "";
        if (type == "download") {
          if ($("#catalog_email").val() == "") {
            alert("Please enter email");
            return false;
          }
          if (!radicon.isValidEmailAddress($("#catalog_email").val())) {
            alert("Please enter valid email id");
            return false;
          }
          if ($("#catalog_name").val() == "") {
            alert("Please enter name");
            return false;
          }
          if ($("#catalog_mobile").val() == "") {
            alert("Please enter mobile number");
            return false;
          }
          var mobileNumber = $("#catalog_mobile").val();
          if (!/^\d{8,15}$/.test(mobileNumber)) {
            alert("Please enter numbers only, 8 to 15 digits.");
            return false;
          }
          if ($("#catalog_mobile").val() != "") {
            var Chars = "0123456789";
            for (var i = 0; i < $("#catalog_mobile").val().length; i++) {
              if (Chars.indexOf($("#catalog_mobile").val().charAt(i)) == -1) {
                alert(
                  "8 to 15 digits mobile number only (no hyphens or brackets allowed)."
                );
                $("#catalog_mobile").focus();
                return false;
              }
            }
          }
          if ($("#catalog_company").val() == "") {
            alert("Please enter company");
            return false;
          }
          if (!/^[a-zA-Z\s\.]*$/g.test($("#catalog_company").val())) {
            alert("Invalid company name");
            return false;
          }
          if ($("#catalog_city").val() == "") {
            alert("Please enter city");
            return false;
          }
          var value = $("#catalog_city").val();
          var lastChar = value.slice(-1);
          if (/[^a-zA-Z\s]/.test(lastChar)) {
            alert(
              "Please enter city name in characters only."
            );
            $("#catalog_city").val() = value.slice(0, -1); 
          }
          if ($("#catalog_country").val() == "") {
            alert("Please enter country");
            return false;
          }
          path = "ajax/modal_form/";
        } else if (type == "inquiry") {
          if ($("#inquiry_email").val() == "") {
            alert("Please enter email");
            return false;
          }

          if ($("#inquiry_name").val() == "") {
            alert("Please enter name");
            return false;
          }
          if ($("#inquiry_contact").val() == "") {
            alert("Please enter contact number");
            return false;
          }
          var mobileNumber = $("#inquiry_contact").val();
          if (!/^\d{8,15}$/.test(mobileNumber)) {
            alert("Please enter numbers only, 8 to 15 digits.");
            return false;
          }
          if ($("#inquiry_contact").val() != "") {
            var Chars = "0123456789";
            for (var i = 0; i < $("#inquiry_contact").val().length; i++) {
              if (Chars.indexOf($("#inquiry_contact").val().charAt(i)) == -1) {
                alert(
                  "8 to 15 digit mobile number only (no hyphens or brackets allowed)."
                );
                $("#inquiry_contact").focus();
                return false;
              }
            }
          }
          if ($("#inquiry_city").val() == "") {
            alert("Please enter city");
            return false;
          }
          var value = $("#inquiry_city").val();
          var lastChar = value.slice(-1);
          if (/[^a-zA-Z\s]/.test(lastChar)) {
            alert(
              "Please enter city name in characters only."
            );
            $("#inquiry_city").val() = value.slice(0, -1); 
          }
          if ($("#inquiry_country").val() == "") {
            alert("Please enter country");
            return false;
          }

          if ($("#inquiry_company").val() == "") {
            alert("Please enter company name");
            return false;
          }
          path = "ajax/product_inquiry/";
        } else if (type == "div_inquiry") {
          if ($("#inquiry_email_d").val() == "") {
            alert("Please enter email");
            return false;
          }
          if ($("#inquiry_name_d").val() == "") {
            alert("Please enter name");
            return false;
          }
          if ($("#inquiry_contact_d").val() == "") {
            alert("Please enter mobile number");
            return false;
          }
          var mobileNumber = $("#inquiry_contact_d").val();
          if (!/^\d{8,15}$/.test(mobileNumber)) {
            alert("Please enter numbers only, 8 to 15 digits.");
            return false;
          }
          if ($("#inquiry_contact_d").val() != "") {
            var Chars = "0123456789";
            for (var i = 0; i < $("#inquiry_contact_d").val().length; i++) {
              if (Chars.indexOf($("#inquiry_contact_d").val().charAt(i)) == -1) {
                alert(
                  "8 to 15 digits mobile number only (no hyphens or brackets allowed)."
                );
                $("#inquiry_contact_d").focus();
                return false;
              }
            }
          }
          if ($("#inquiry_company_d").val() == "") {
            alert("Please enter company");
            return false;
          }
          if (!/^[a-zA-Z\s\.]*$/g.test($("#inquiry_company_d").val())) {
            alert("Invalid company name");
            return false;
          }
          if ($("#inquiry_city_d").val() == "") {
            alert("Please enter city");
            return false;
          }
          var value = $("#inquiry_city_d").val();
          var lastChar = value.slice(-1);
          if (/[^a-zA-Z\s]/.test(lastChar)) {
            alert(
              "Please enter city name in characters only."
            );
            $("#inquiry_city_d").val() = value.slice(0, -1); 
          }
          if ($("#inquiry_country_c").val() == "") {
            alert("Please enter country");
            return false;
          }
          path = "ajax/division_inquiry/";
        }

        $(modal_id).modal("hide");
        $($("#modal_id_c").val()).modal("hide");
        $($("#modal_id_d").val()).modal("hide");

        if (type == "download") {
          radicon.showCustomError(
            "Thank you for your interest in Elecon products, a link to download the catalog/brochure has been sent to <b>" +
              $("#catalog_email").val() +
              "</b>.",
            "success"
          );
        } else if (type == "div_inquiry" || type == "inquiry") {
          radicon.showCustomError(
            "Thank you for your interest in Elecon products, we will revert shortly.",
            "success"
          );
        }

        //        if (type == 'download')
        //        {
        //            var a = document.createElement('A');
        //            var filePath = js_base + $('#doc_path_c').val() + $('#doc_name_c').val();
        //            a.href = filePath;
        //            a.download = filePath.substr(filePath.lastIndexOf('/') + 1);
        //            document.body.appendChild(a);
        //            a.click();
        //            document.body.removeChild(a);
        //        }

        radicon.ajaxCustom(radicon.url + path, data, function (html) {});
      })
      .catch(function (error) {
        $("#form_response").prepend(
          '<p style="font-size: 17px; font-weight: 600;" class="text-danger">reCAPTCHA verification failed. Please try again.</p>'
        );
      });
    //$.unblockUI();
  },
};
