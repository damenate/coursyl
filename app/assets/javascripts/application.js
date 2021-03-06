// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require d3
//= require_tree .


function updateCourse() {
  $(event.target).prop("disabled", true);
  $(event.target).closest("form").submit();
}

$(function (){
  $("input[type=submit]").on("click", updateCourse);
});

function hideLastRow() {
  last = $(".association.container").last();
  if(last) {
    last.hide();
  }
}

$(hideLastRow);

function showLastRow() {
  $(".association.container").last().show();
}

$(function (){
  $(".new-association").on("click", showLastRow);
});

function hideDeleteRow(){
  $(event.target).closest(".association.container").hide();
  $(event.target).siblings().last().prop("checked", true);
}
function clickAndDelete() {
  $(".btn-danger").on("click", hideDeleteRow);
}

$(clickAndDelete);

// function updateCourse(button){
//   button.disabled = true;
//   button.form.submit();
// }
//
// window.onload = function(){
//   var section = document.getElementsByClassName("association");
//   var last = section[section.length - 1];
//   last.style.display = "none";
// }
//
// function showNewGrade(){
//   var section = document.getElementsByClassName("association");
//   var last = section[section.length - 1];
//   last.style.display = "block";
// }
//
// function hideSection(button){
//   var hideRow = button.parentElement.parentElement.parentElement;
//   var markDestroy = button.parentElement.lastElementChild;
//   hideRow.style.display = "none";
//   markDestroy.checked = true;
// }
//











//
