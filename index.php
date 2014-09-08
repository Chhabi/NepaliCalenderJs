<!DOCTYPE html>
<html>
<head>
    <title>Nepali Calender</title>
    <script type="text/javascript" src="js/nepali-calender.js"></script>
    <script type="text/javascript" src="js/datemap.js"></script>
    <script type="text/javascript" src="js/nepali-date-converter.js"></script>
    <link rel="stylesheet" href="css/nepali-calender.css" />
</head>
<body>
    <div id="calender"></div>
</body>
<script>
    (function(){
        var cal = new NepaliCalender("calender");

        cal.render();
    })();
</script>
</html>