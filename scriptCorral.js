document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM completamente cargado y analizado");

    document.getElementById("animalButton").addEventListener("click", function() {
        window.location.href = "corral.html";
    });

    document.getElementById("indexButton").addEventListener("click", function() {
        window.location.href = "index.html";
    });
    
    const moneyDisplay = document.getElementById('money');
    const buyCorralButton = document.getElementById('buyCorralButton');

    let money = 200;
    
    let corralCount = 0;

    if (buyCorralButton && moneyDisplay) {
        buyCorralButton.addEventListener('click', () => {
            if (money >= 100) {
                money -= 100;
                moneyDisplay.textContent = money;
    
                corralCount++;
                const firstNotCorral = document.querySelector('.corral.not');
    
                if (firstNotCorral) {
                    firstNotCorral.classList.remove('not');
                    firstNotCorral.classList.add('w-84', 'h-84', 'm-2', 'flex', 'justify-center', 'items-center');
    
                    if (!firstNotCorral.hasListener) {
                        firstNotCorral.addEventListener('click', () => handleCorralClick(firstNotCorral));
                        firstNotCorral.hasListener = true;
                    }
                } else {
                    alert('No hay corrales disponibles para comprar.');
                }
            } else {
                alert('No tienes suficiente dinero para comprar un corral.');
            }
        });
    } else {
        console.error('buyCorralButton or moneyDisplay not found in the DOM.');
    }
    
    const corrales = document.querySelectorAll('.corral');
    
    corrales.forEach(corral => {
        if (!corral.hasListener) {
            corral.addEventListener('click', () => {
                if (corral.classList.contains('not')) {
                    alert('No posees este corral.');
                    return;
                }
    
                if (money < 50) {
                    alert('No tienes suficiente dinero para añadir una vaca.');
                    return;
                }
    
                if (corral.classList.contains('vaca4')) {
                    alert('No tienes suficiente espacio.');
                } else if (corral.classList.contains('vaca3')) {
                    corral.classList.remove('vaca3');
                    corral.classList.add('vaca4');
                    money -= 50;
                } else if (corral.classList.contains('vaca2')) {
                    corral.classList.remove('vaca2');
                    corral.classList.add('vaca3');
                    money -= 50;
                } else if (corral.classList.contains('vaca1')) {
                    corral.classList.remove('vaca1');
                    corral.classList.add('vaca2');
                    money -= 50;
                } else {
                    corral.classList.add('vaca1');
                    money -= 50;
                }
    
                moneyDisplay.textContent = money;
            });
            corral.hasListener = true;
        }
    });

    // Función para contar el número de vacas
function countCows() {
    let totalCows = 0;
    corrales.forEach(corral => {
        if (corral.classList.contains('vaca1')) totalCows++;
        if (corral.classList.contains('vaca2')) totalCows += 2;
        if (corral.classList.contains('vaca3')) totalCows += 3;
        if (corral.classList.contains('vaca4')) totalCows += 4;
    });
    return totalCows;
}

// Incrementar el dinero cada 5 segundos según el número de vacas
setInterval(() => {
    const totalCows = countCows();
    money += totalCows;
    moneyDisplay.textContent = money;
}, 5000);
    
});