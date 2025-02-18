# loons
//npm i jsonwebtoken
//npm i body-parser
//npm i bcrypt
//npm i axios
mkdir backend
npm init
npm i cors mongodb nodemon express


$mycolor : red;
h1{
    $mygreen : green;
    color: $mygreen;
}
nav{
    ul{

        li{

        }
    }
}

@mixin button-style($bg-color,$text-color){
    background-color: $bg-color;
    color: $text-color;
}
.button-primary{
    @include button-style(-color, -color);
}
.button-secondary{
    @include button-style(-color, -color)
}
%button{
    padding: 10px 20px;
}
.button-primary{
    @extend %button
}


/*import */
// _variables.scss
$primary-color: #3498db;

// _buttons.scss
@import 'variables';

.button {
  background-color: $primary-color;
}

/*operation*/
$base-font-size: 16px;

h1 {
  font-size: $base-font-size * 2;
}

p {
  margin-bottom: $base-font-size / 2;
}
/*function*/

@function calculate-rem($px-value) {
    @return $px-value / 16px * 1rem;
  }
  
  h1 {
    font-size: calculate-rem(32px);
  }
