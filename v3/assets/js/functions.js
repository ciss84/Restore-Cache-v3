var i = 0;
(function () {
  window.applicationCache.ondownloading;
  window.applicationCache.onprogress = function (a) {
    document.getElementById("cache-overlay").style.display = "block";
    var progress = document.getElementById("progress");
    progress.innerHTML = '<div align="center" id="myBar"></div>';
    var elem = document.getElementById("myBar");
    i = Math.round(100 * (a.loaded / a.total));
    elem.style.width = i + "%";
    if (i == 0) {
      elem.innerHTML = "";
    } else {
      elem.innerHTML = i + "%";
    }
  };
  window.applicationCache.oncached = function () {
    document.getElementById("cache-overlay").style.display = "none";
    document.getElementById("message").innerHTML =
      '<div align="center" style="color:green">Mise en cache réussi</div>';
    setTimeout(function () {
      message.innerHTML = " ";
    }, 2000);
  };
})();
function removeScript(x) {
  var nb = x;
  var obj = document.getElementsByTagName("script");
  for (var i = obj.length - 1; nb > 0; i--) {
    document.body.removeChild(obj[i]);
    nb--;
  }
}
function readcookie(){
  const cookieValue = document.cookie
  .split("; ")
  .find((row) => row.startsWith("exploit"))
  .split("=")[1];
  return cookieValue;
}
function finished() {
  

  switch (readcookie()) {
    case "mira":
      mira_finished();
      break; 
    case "mira1":
      mira_finished();
      break;
    case "mira2":
      mira_finished();
      break;     
    case "payload":
      payload_finished();
      break;
    case "binloader":
      binloader_finished();
      break;
    case "webkit":
      alert(cookieValue);
      break;
    case "jailbreak":
      jb_finished();
      break;
  }
}

function jb_finished() {
  if (main_ret == 179 || main_ret == 0) {
    document.getElementById("cs-loader").style.display = "none";
    document.getElementById("message").innerText =
      "Votre PS4 est maintenant Jailbreak jusqu'au prochain redémarrage.";
    setTimeout(function () {
      document.getElementById("message").innerText = " ";
      removeScript(1);
    }, 4000);
  } else {
    document.getElementById("message").innerText =
      "Le jailbreak a échoué! Cliquez sur Fermer le Navigateur, redémarrez votre PS4 et réessayez.";
  }
}
function binloader_finished() {
  document.getElementById("cs-loader").style.display = "none";
  setTimeout(function () {
    document.getElementById("message").innerText =
      'Mira + HEN est maintenant démarrer!\nPatientez jusqu\'à la notification "Mémoire système insuffisante"';
    /*setTimeout(function () {
      document.location.href = ".";
      read_ptr_at(0);
      notif(" ");
    }, 6000);*/
  }, 6000);
}
function mira_finished() {
  document.getElementById("cs-loader").style.display = "none";
  setTimeout(function () {
    document.getElementById("message").innerText =
      'MiraUsb ELF Loader est maintenant démarrer!\nPatientez jusqu\'à la notification "Mémoire système insuffisante"';
    /*setTimeout(function () {
      document.location.href = ".";
      read_ptr_at(0);
      notif(" ");
    }, 6000);*/
  }, 6000);
}
function mira1_finished() {
  document.getElementById("cs-loader").style.display = "none";
  setTimeout(function () {
    document.getElementById("message").innerText =
      'MiraHen Todex est maintenant démarrer!\nPatientez jusqu\'à la notification "Mémoire système insuffisante"';
    /*setTimeout(function () {
      document.location.href = ".";
      read_ptr_at(0);
      notif(" ");
    }, 6000);*/
  }, 6000);
}
function mira2_finished() {
  document.getElementById("cs-loader").style.display = "none";
  setTimeout(function () {
    document.getElementById("message").innerText =
      'Todex est maintenant démarrer!\nPatientez jusqu\'à la notification "Mémoire système insuffisante"';
    /*setTimeout(function () {
      document.location.href = ".";
      read_ptr_at(0);
      notif(" ");
    }, 6000);*/
  }, 6000);
}
function payload_finished() {
  document.getElementById("message").innerText = "La charge utile est prête!";
  setTimeout(function () {
    document.getElementById("message").innerText = " ";
    document.getElementById("cs-loader").style.display = "none";
    /*commentez la fonction suivante sur un reseau local ("type: miniweb") pour une meilleure utilisation sans les message type "mémoire système insuffisante". Ne convient pas en mode Cache 
    //
    comment the following function on a local network ("type: miniweb") for better use without "insufficient system memory" type messages. Not suitable in Cache mode*/
    //
    ////////////////
    //read_ptr_at(0);
    ////////////////
    removeScript(3);
  }, 5000);
}
function load_JB() {
  document.getElementById("message").innerText = "Jailbreak en cours";
  document.getElementById("cs-loader").style.display = "block";
  setTimeout(function () {
    var element = document.createElement("script");
    element.src = JB("c-code");
    document.body.appendChild(element);
  }, 2000);
}
function load_mira() {
  document.cookie = "exploit=payload";
  buildHTML();
  document.getElementById("message").innerText = "Injection de Mira.elf";
  document.getElementById("cs-loader").style.display = "block";
  setTimeout(function () {
    document.write(MIRA("mira") + MIRA("mirausb") + MIRA("c-code"));
  }, 1000);
}
function load_mira1() {
  document.cookie = "exploit=payload";
  buildHTML();
  document.getElementById("message").innerText = "Injection de Mira.elf";
  document.getElementById("cs-loader").style.display = "block";
  setTimeout(function () {
    document.write(MIRA("mira") + MIRA("mirahen") + MIRA("c-code"));
  }, 1000);
}
function load_mira2() {
  document.cookie = "exploit=payload";
  buildHTML();
  document.getElementById("message").innerText = "Injection des function Dex";
  document.getElementById("cs-loader").style.display = "block";
  setTimeout(function () {
    document.write(MIRA("mira") + MIRA("todex") + MIRA("c-code"));
  }, 1000);
}

function load_binloader() {
  document.cookie = "exploit=payload";
  buildHTML();
  document.getElementById("message").innerText = "Injectet votre bin par netcat";
  document.getElementById("cs-loader").style.display = "block";
  setTimeout(function () {
    document.write(MIRA("mira") + MIRA("mirahen2") + MIRA("c-code"));
  }, 1000);
}

function inject_payload(payload) {
  document.cookie = "exploit=payload";
  buildHTML();
  document.getElementById("cs-loader").style.display = "block";
  document.getElementById("message").innerText = "Injection de la charge utile";
  setTimeout(function () {
    document.write(MIRA("mira") + SCPAYLOAD(payload) + MIRA("c-code"));
  }, 1000);
}

function buildHTML() {
  if (document.getElementById("table") == null) {
    document.write(
      "<head>" +
        '<meta charset="utf-8" />' +
        '<link rel="stylesheet" href="./assets/css/style.css">' +
        "<title>PS4Host_6.72 V2.0.1 par Lgic-68 C.S</title>" +
        "</head>" +
        "<body>" +
        "<header>" +
        '<div class="content-title">' +
        '<h1 id="title">Host 6.72 Mod by Mugiwara</h1>' +
        "</div>" +
        '<div class="container headerbtn" align="center" id="header">' +
        '<a href="#" class="btnHeader" onclick="load_JB(); return false">Jailbreak</a>' +
        '<a href="#" class="btnHeader" onclick="load_mira1(); return false">MiraHen Todex</a>' +     
        '<a href="#" class="btnHeader" onclick="load_mira(); return false">MiraUsb ELF Loader</a>' +      
        '<a href="#" class="btnHeader" onclick="load_binloader(); return false">BinLoader</a>' +

        "</div>" +
        "</header>" +
        '<table id="table">' +
        '<tr align="center">' + 
        '<th><a href="#" class="btn" onclick="inject_payload(\'dumper\'); return false">Dumper</a></th>' +
        '<th><a href="#" class="btn" onclick="inject_payload(\'dumper2\'); return false">Dumper v1.8</a></th>' +
        '<th><a href="#" class="btn" onclick="inject_payload(\'app2usb\'); return false">App2Usb</a></th>' +
        '<th><a href="#" class="btn" onclick="inject_payload(\'ftp\'); return false">FTP</a></th>' +
        '<th><a href="#" class="btn" onclick="inject_payload(\'desabler\'); return false">Désactiver MAJ</a></th>' +
        '<th><a href="#" class="btn" onclick="inject_payload(\'enabler\'); return false">Activer MAJ</a></th>' +
        '<th><a href="#" class="btn" onclick="inject_payload(\'history\'); return false">Historique navigateur</a></th>' +
        "</tr>" +
        '<tr align="center">' +
        '<th><a href="#" class="btn" onclick="inject_payload(\'browser\'); return false">Activer navigateur</a></th>' +
        '<th><a href="#" class="btn" onclick="inject_payload(\'backupDTB\'); return false">SAV DTB</a></th>' +
        '<th><a href="#" class="btn" onclick="inject_payload(\'restoreDTB\'); return false">Restaure DTB</a></th>' +
        '<th><a href="#" class="btn" onclick="inject_payload(\'rifs\'); return false">Rennomer RIF</a></th>' +
        '<th><a href="#" class="btn" onclick="inject_payload(\'dumperKernel\'); return false">Dumper Noyau</a></th>' +
        '<th><a href="#" class="btn" onclick="inject_payload(\'fan\'); return false">Ventilo Turbo</a></th>' +
        '<th><a href="#" class="btn" onclick="inject_payload(\'kernelClock\'); return false">Horloge noyau</a></th>' +
        "</tr>" +
        '<tr align="center">' +
        '<th><a href="#" class="btn" onclick="inject_payload(\'WebRTE\'); return false">Activation Du WebRTE</a></th>' +
        '<th><a href="#" class="btn" onclick="inject_payload(\'linux\'); return false">Activation De Linux</a></th>' +
        "</tr>" +
        "</table>" +
        "<footer>" +
        '<div id="message" class="message"></div>' +
        '<div id="cs-loader" class="cs-loader" style="display:none">' +
        '<div class="cs-loader-inner">' +
        "<label></label>" +
        "<label></label>" +
        "<label></label>" +
        "<label></label>" +
        "<label></label>" +
        "<label></label>" +
        "</div>" +
        "</div>" +
        "</footer>" +
        "</body>"
    );
  }
}

/*
function cssLink() {
  var link = document.createElement("meta");
  link.setAttribute("charset", "utf-8");
  var Csslink = document.createElement("link");
  Csslink.rel = "stylesheet";
  Csslink.type = "text/css";
  Csslink.href = "assets/css/style.css";
  document.getElementsByTagName("head")[0].appendChild(Csslink);
  document.getElementsByTagName("head")[0].appendChild(link);
}*/

/*
(function () {
  if (document.cookie.indexOf("webkit=0") >= 0) {
  } else {
    document.cookie = "webkit=0";
    var tabexploit = [
      "exploit",
      "helpers",
      "malloc",
      "rop",
      "syscalls",
      "syscalls2",
    ];
   setTimeout(function () {
      for (var i = 0; i < tabexploit.length; i++) {
        var element = document.createElement("script");
        element.src = WEBKIT(tabexploit[i]);
        document.head.appendChild(element);
      }
    }, 1000);
  }
})();*/
