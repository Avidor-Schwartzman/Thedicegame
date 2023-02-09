function magic() {
    const num1 = Math.ceil(Math.random() * 6);
    const num2 = Math.ceil(Math.random() * 6);
    const dice1Img = document.querySelector("#dice1");
    const dice2Img = document.querySelector("#dice2");
    const counter = document.querySelector("#counter");
    let currentCount = parseInt(counter.textContent.split(":")[1], 10) || 0;
  
    dice1Img.src = `${num1}.jpg`;
    dice2Img.src = `${num2}.jpg`;
  
    if (num1 === num2) {
      currentCount += 1;
      counter.textContent = `מספר הפעמים שיצא לך דאבל: ${currentCount}`;
      console.log("Congratulations, you got a match!");
  
      const successMessages = [
        "סחתיקה על הדובל!",
        "מה זה? למדת לשחק בכלא 4?",
        "מי זאת שקמה על הבוקר עם הלוק של הביוקר?!",
        "הופה! עכשיו אפשר לשחק",
      ];
      
      const successMessage = document.createElement("p");
      successMessage.textContent = successMessages[currentCount % 4];
      document.body.appendChild(successMessage);
    }
    
  }
  
  