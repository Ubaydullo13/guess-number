function guess() {
    let attempts = 0;
    const maxAttempts = 10;

    let num = Math.floor(Math.random() * 30) + 1;

    while (attempts < maxAttempts) {
        let userGuess = prompt(`1 dan 30 gacha raqam kiriting! (Jami ${maxAttempts} ta urinish)`);
        userGuess = parseInt(userGuess);

        if (isNaN(userGuess)) {
            alert("Iltimos, raqam kiriting!");
        } else if (userGuess === num) {
            alert(`Siz to'g'ri topdingiz ${attempts + 1} urinishda!`);
            break;
        } else {
            attempts++;
            if (attempts === maxAttempts) {
                alert(`Sizning ${maxAttempts} urinishingiz tugadi. To'g'ri javob: ${num}`);
            } else if (userGuess < num) {
                alert(`Sizning raqamingiz kichikroq. ${maxAttempts - attempts} urinish qoldi.`);
            } else {
                alert(`Sizning raqamingiz kattaroq. ${maxAttempts - attempts} urinish qoldi.`);
            }
        }
    }
}

guess();
