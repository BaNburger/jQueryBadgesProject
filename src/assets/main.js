$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/2492580.json',
    dataType: 'jsonp',
    success: function(response) {
      addcourses(response.courses.completed);
    }
  });

  function addcourses(courses) {
    var $badges = $('#badges');
    courses.forEach(function(course) {
      var $course = $('<div />', {
        'class': 'course'
      }).appendTo($badges)

      var $title = $('<h3 />', {
        text: course.title
      }).appendTo($course);

      var $image = $('<img />', {
        src: course.badge
      }).appendTo($course);

      var $anchor = $('<a />', {
        'class': 'btn btn-primary',
        target: '_blank',
        href: course.url,
        text: 'See Course'
      }).appendTo($course);
    })
  }

});
