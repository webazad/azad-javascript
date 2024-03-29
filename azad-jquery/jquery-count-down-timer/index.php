<?php
/**
 * -------------------------------------------------------------------------------
 * ::	JQUERY PARACTICE CODE
 * -------------------------------------------------------------------------------
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
                </div>
            </header>
            <section class="section_one">
                <div class="container_box">
                    <div class="countdown">
                        <h2>Inline external scripting</h2>
                        <div id="countdown-item">
                            <div id="timer" data-to="3000" data-speed="2000"></div>
                            <span>Projects</span>                        
                        </div>
                        <h4>Azad</h4>
                    </div>
                </div>
            </section>
            <footer class="the_footer">
                <div class="container_box">
                    <p id="para">&copy; 2017 All Rights Reserved</p>
                </div>
            </footer>
        </div>
        <!-- SCRIPTS ARE HERE -->
        <script type="text/javascript" src="js/jquery.min.js"></script>
        <script type="text/javascript" src="js/count-to.js"></script>
        <script type="text/javascript" src="js/activation.js"></script>
    </body>
</html>