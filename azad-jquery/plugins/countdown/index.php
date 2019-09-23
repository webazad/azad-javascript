<?php
/**
*-------------------------------------------------------------------------------
* ::	JQUERY PARACTICE CODE
*-------------------------------------------------------------------------------
*/
?>
<!DOCTYPE html>
<html lang="en-US">
    <head>
        <title>jQuery</title>
        <meta charset="utf-8" />
        <link rel="stylesheet" type="text/css" href="css/style.css" />
    </head>
    <body>
        <div class="big_wrapper">
            <header class="the_header">
                <div class="container_box">
                    <h1 name="top" class="main_logo">jQuery</h1>
                    <a class="linked" href="http://www.google.com">Google</a>
                </div>
            </header>
            <section class="section_one">
                <div class="container_box">
                    <h2>Inline external scripting</h2>
                    <div id="countdown">
                        <span class="days">00</span> days
                        <span class="hours">00</span> hours
                        <span class="mins">00</span> minutes
                        <span class="secs">00</span> seconds
                    </div>
                </div>
            </section>
            <footer class="the_footer">
                <div class="container_box">
                    <p id="para">&copy; 2017 All Rights Reserved</p>
                </div>
            </footer>
        </div>
        <script type="text/javascript" src="js/jquery.min.js"></script>
        <script type="text/javascript" src="js/countdown.jquery.js"></script>
        <script type="text/javascript" src="js/activate.js"></script>
    </body>
</html>