<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>High Roller</title>
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" href"#">
    <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet">
  </head>
  <body>
    <div class="game_container">
      <div class="title_container">
        <h1 style="text-align:center;">High Roller</h1>
      </div>
  <!--  Type name here ------------------------------------------------->
      <div class="name_entry">
        <?php
                  $player1name = $_POST['Player1'];
                  $player2name = $_POST['Player2'];
                  echo "<span class='pnames'>$player1name <strong>VS</strong> </span>";
                  echo "<span class='pnames'>$player2name</span>";
        ?>

      </div>
      <!--_____________ Next move button ________________________________-->
      <div class="next-move-container">
        <p id="roll">ROLL!</p>
      </div>
      <!-- ___________________________Main body _____________________ -->
<div class="body_container">

        <div class="dice_container">
            <?php
              $dice = 1;
              while($dice <= 5){
              echo  "<div  class='dice'><p id='diceText"."$dice'class='dice-text'></p></div>";
              $dice++;
              }
            ?>
        </div>
        <!-- _____________________ Score Card ___________________________-->
  <div class="score_container">

          <?php
          $player = 1;
          while($player <= 2){
            echo "<div class='score_card'>";
            $i = 1;
            while($i <=6){
            print "<p id='d$i"."high-p"."$player'> $i High <input class='p$player"."score' id='p$player"."score"."$i' type='text'></p>";
            $i++;
              }


          echo "<p>2 of a kind<input type='text' class='p$player"."score' id='p$player"."score7'></p>";
          echo "<p>3 of a kind<input type='text' class='p$player"."score' id='p$player"."score8'></p>";
          echo "<p>4 of a kind<input type='text' class='p$player"."score' id='p$player"."score9'></p>";
          echo "<p>5 of a kind<input type='text' class='p$player"."score' id='p$player"."score10'></p>";
          echo "<p>Full House<input type='text' class='p$player"."score' id='p$player"."score11'></p>";
          echo "<p>Low straight<input type='text' class='p$player"."score' id='p$player"."score12'></p>";
          echo "<p>High straight<input type='text' class='p$player"."score' id='p$player"."score13'></p>";
          echo "<p>Bonus<input type='text' class='p$player"."score' id='p$player"."score14'></p>";
          echo "<p id='p$player"."total' class='totalscores'>Player $player score:</p>";

          echo "</div>";

          $player++;
            }
             ?>
</div>
<div class="dice_container">
  <?php
    $newDice = 1;
    while($newDice <=5){
      echo "<div class='dice'><p class='dice-text' id='newDice"."$newDice'></p></div>";
      $newDice++;
    }

   ?>
</div>
<button class="nextTurn">End Turn</button>

      </div>


    </div>
    <div class="instructions">
      <p><strong>Appearance</strong> Press F11 to make the game full screen.  Press Ctrl and + or control and - (minus) to make the board fit onloadedmetadata="onto the screen comfortably"</p>
      <p><strong>Objective:</strong> Get the highest score by completing all the dice combinations</p><br />
      <p><strong>Game Play: </strong></p><br />
      <p><strong>Rolling and keeping dice:</strong>Click 'ROLL!' to randomise the 5 dice on the left hand side.
      When you see dice you would like to keep, click on your selected dice and it will move into storage on the right hand side.
     you have a maximum of 3 rolls. At the end of your turn you must choose the best combination out the the dice stored on the right hand side</p>


    </div>
    <script type="text/javascript" src="javascript.js"></script>

    </script>
  </body>
</html>
