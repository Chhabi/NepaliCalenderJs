<!DOCTYPE html>
<html>
<head>
    <title>Nepali Calender</title>
    <script type="text/javascript" src="js/nepali-calender.js"></script>
    <script type="text/javascript" src="js/datemap.js"></script>
    <script type="text/javascript" src="js/nepali-date-converter.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/nepali-calender.css" />

</head>
<body>
<div class="container">

    <div class="row">

        <div id="calender" class="col-sm-12"></div>
    </div>

</div>

</body>
<script>
    (function($){
        var cal = new NepaliCalender("calender");
        var dateToShow = new Date();
        cal.render(dateToShow);

        $("#calender").on('click',".btn-prev",function() {
            dateToShow.setMonth(dateToShow.getMonth()-1);
            console.log(dateToShow);
            cal.render(dateToShow);
        });

        $("#calender").on('click',".btn-next",function() {
            dateToShow.setMonth(dateToShow.getMonth()+1);
            cal.render(dateToShow);
        });
        $("#calender").on('click',".btn-today",function() {
            dateToShow = new Date();
            cal.render(dateToShow);
        });

        $("#calender").on('click','.weekday', function(){
           alert($(this).attr("data-date"));
        });


    })(jQuery);
</script>
</html>