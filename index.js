function open_tab(evt, tabName) {
  var i, tab_info, tablinks;
  tab_info = document.getElementsByClassName("tab_info");
  for (i = 0; i < tab_info.length; i++) {
    tab_info[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}