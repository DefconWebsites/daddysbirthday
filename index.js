// Get all the images
image_array = [
    'AKJG5651.JPG',
    'ARKS7604.JPG',
    'CJMO2921.JPG',
    'DKSW6439.JPG',
    'DUJP3546.JPG',
    'EXFV4442.JPG',
    'FUQV5838.JPG',
    'GGTZ7928.JPG',
    'GQGF8547.JPG',
    'HPKI8216.JPG',
    'IMG_0849.JPG',
    'IMG_0855.JPG',
    'IMG_0882.PNG',
    'IMG_E0882.JPG',
    'JHTG9387.JPG',
    'JLLX8706.JPG',
    'JZDW1520.JPG'
  ]
  compliments = [
    'I love you to the moon and back,moon and back,moon and back,moon and back,moon and back, infinity and beyond !',
    'You mean the world to me <3',
    'If my love for you was money we would be trillionares ♥',
    'You make a bad day a good one <3',
    'Youre jokes always cheer everybody up',
    'You make me so happy :)',
    'Happy birthday daddy, hope you have a great day',
    'You mean so much to me and always help everyone out through tough times',
    '♥ You are the best dad a son could ever ask for ♥',
    'I have so much respect for you.',
    'I have learned so much from our conversations.',
    'Without your wisdom and guidance, I’d be lost.',
    'You taught me how to be strong and kind.',
    'You always make me feel special.',
    'I’m super grateful that I have you as my dad.',
    'No matter how old I get, I will never stop needing you.',
    'You deserve an award for all your hard work.',
    'Well done, Dad! Because of you, I turned out awesome.',
    'Even when you don’t say a word, I learn a lot of things from you.',
    'You are a leader like no other. That’s why our family is strong.',
    'You are worth more than a hundred school teachers.',
    'You are a truly hardworking guy.',
    'You’re the funniest man I know. Thanks for all the laughs!',
    'No matter the circumstances, I know I can always count on you.',
    'I’m so lucky to have someone as loving as you in my life.',
    'Having you as my dad makes me one proud kid.',
    'I must have won the jackpot when I got you as my dad.',
    'I am feeling blessed, cared, and loved—all because of you.',
    'Don’t think for a second that your hard work as a parent has gone unnoticed. I greatly appreciate you.',
    'Dad, you rock!',
    'I feel like I could talk to you for hours and hours without ever getting bored of the conversation.',
    'You’re the dad that every child dreams of having.',
    'Whenever I count all the good things in my life, I count you twice.',
    'I admire you for being a man of integrity and principle.',
    'There’s no other father like you in the world. I’m so happy that you are mine.',
    'As a dad, you are top quality!',
    'You always seem to know how to fix everything.',
    'I believe in the quote, “If at first you don’t succeed, call Dad,” because you’re one hell of a reliable dad!',
    'Everything seems bearable when you’re around.',
    'Thank you for playing a vital role in my life.',
    'You’re the kind of father that everyone needs and deserves.',
    'Your choice of words is always spot on! I think everything you say is fair and true.',
    'Lets have a toast to my wonderful dad!',
    'Whenever I’m in need of good advice, I think of you.',
    'Your dedication as a father truly astounds me.',
    'Thank you for teaching me the best things I know—plus some other good stuff that I probably should have paid more attention to.',
    'I have overwhelming gratitude for all the tender, loving support you’ve given me.',
    'May you have nothing but good days ahead of you.',
    'You are amazing in a million different ways!',
    'There’s nothing I enjoy more than spending quality time with you.'
  ]
  function get_random_image(){
    random_compliment = Math.floor(Math.random() * compliments.length);
    // Get a random index
    random_index = Math.floor(Math.random() * image_array.length);
  
    // Get an image at the random_index
    selected_image = image_array[random_index];
    selected_compliment = compliments[random_compliment];
  
    // Display the image
    document.getElementById('image_shower').src = `./images/${selected_image}`
    document.getElementById('compliments').innerText = selected_compliment;

    compliment_box = document.getElementById('compliments');
  }





  
