document.addEventListener("DOMContentLoaded", function() {
    let userValues = [];
    let input = null;


    for (let i = 1; i < 100; i++) {
        input = prompt(`Напиши ${i} значение. Если всё, то "стоп" Максимум 100 значений`);
        
        if (input === "") {
            alert("Пожалуйста, введите значение!");
            continue;
        }

        if (input === 'стоп' || input === null) {
            break;
        }

        userValues.push(input);
    }

    for (let i = 0; i < userValues.length; i++) {
        if (i < userValues.length - 1) {
            userValues.splice(i, 2, [userValues[i], userValues[i + 1]]);
        } else if (userValues.length === 1) {
            break;
        } else {
            userValues[userValues.length - 2].push(userValues.pop());
        }
    }

    const customSort = (index) => {
        const compare = (a, b) => {
            const input = prompt(`Что лучше? ${a} или ${b}? (Ответ 1 или 2)`);
            if (input == 1) {
                return -1; // a ценнее b
            } else if (input == 2) {
                return 1; // b ценнее a
            } else {
                alert("Введите значение 1 или 2!!!");
                return compare(a, b);
            }
        };

        userValues[index].sort(compare);

        return userValues[index];
    }

console.log(userValues);


    const compareAndSortValues = () => {
        for (let i = 0; i < userValues.length; i++) {
            if (userValues[i].length === 2) {
                input = prompt(`Что лучше? ${userValues[i][0]} или ${userValues[i][1]}? Ответ 1 или 2`)
                if (input == 1) {
                    continue;
                } else if (input == 2) {
                    userValues[i].reverse();
                } else {                        
                    alert("Введите значение 1 или 2!!!");
                    i--;
                }
            } else if (userValues[i].length >= 3) {
                customSort(i)
            }
        }
    }

    compareAndSortValues()
    console.log(userValues);
});
