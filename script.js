document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM completamente cargado y analizado");

    const moneyDisplay = document.getElementById('money');
    const seedsDisplay = document.getElementById('seeds');
    const buySeedButton = document.getElementById('buySeedAButton');
    const buyPlotButton = document.getElementById('buyPlotButton');
    const plantButtonCarrot = document.getElementById('plantButtonCarrot');
    const plantButtonCabbage = document.getElementById('plantButtonCabbage');

    let money = 200;
    let seeds = 10;
    let plotCount = 3;

    // Variable para saber si estamos en modo de plantar
    let isPlantingCarrot = false;
    let isPlantingCabbage = false; 


    // Añadir evento al botón de plantar zanahorias
    plantButtonCarrot.addEventListener('click', () => {
        if (isPlantingCarrot) {
            isPlantingCarrot = false;
            document.body.style.cursor = "default";

        }
        else {
            isPlantingCarrot = true;
            document.body.style.cursor = "url('images/seeds.cur'), auto";
        }
    });

    // Añadir evento al botón de plantar papas
    plantButtonCabbage.addEventListener('click', () => {
        if (isPlantingCabbage) {
            isPlantingCarrot = false;
            document.body.style.cursor = "default";

        }
        else {
            isPlantingCabbage = true;
            document.body.style.cursor = "url('images/seeds.cur'), auto";
        }
    });

    // Añadir evento a todas las parcelas
    const plots = document.querySelectorAll('.plot');


    // PLANTAR SEMILLAS
    plots.forEach(plot => {
        plot.addEventListener('click', () => {
            if (isPlantingCarrot) {
                if (!plot.classList.contains('planted') && !plot.classList.contains('not')) {
                    // Si la parcela no está plantada, mostrar mensaje para plantar
                    if (seeds > 0) {
                        plot.classList.remove('planted');
                        plot.classList.add('carrot_1');
                        seeds--;
                        seedsDisplay.textContent = seeds;
    
                        // Simular crecimiento de la planta después de 5 segundos
                        setTimeout(() => {
                            plot.classList.remove('carrot_1');
                            plot.classList.add('carrot_2'); // Marcar la parcela como crecida
                            setTimeout(() => {
                                plot.classList.remove('carrot_2');
                                plot.classList.add('carrot_3')
                                plot.dataset.grown = 'true'; // Marcar la parcela como crecida
                            }, 5000);
                        }, 5000); // 5000 milisegundos = 5 segundos

                    } else {
                        alert('No tienes suficientes semillas para plantar.');
                    }
                }
            }
            else if (isPlantingCabbage) {
                if (!plot.classList.contains('planted') && !plot.classList.contains('not')) {
                    // Si la parcela no está plantada, mostrar mensaje para plantar
                    if (seeds > 0) {
                        plot.classList.remove('planted');
                        plot.classList.add('cabagge_1');
                        seeds--;
                        seedsDisplay.textContent = seeds;
    
                        // Simular crecimiento de la planta después de 5 segundos
                        setTimeout(() => {
                            plot.classList.remove('cabbage_1');
                            plot.classList.add('cabbage_2'); // Marcar la parcela como crecida
                            setTimeout(() => {
                                plot.classList.remove('cabbage_2');
                                plot.classList.add('cabbage_3')
                                plot.dataset.grown = 'true'; // Marcar la parcela como crecida
                            }, 5000);
                        }, 5000); // 5000 milisegundos = 5 segundos

                    } else {
                        alert('No tienes suficientes semillas para plantar.');
                    }
                }
            }
        });
    });






    //COMPRAR SEMILLAS
    buySeedButton.addEventListener('click', () => {
        if (money >= 5) {
            money -= 5;
            seeds++;
            moneyDisplay.textContent = money;
            seedsDisplay.textContent = seeds;
        } else {
            alert('No tienes suficiente dinero para comprar una semilla.');
        }
    });


    //COMPRAR PARCELAS
    buyPlotButton.addEventListener('click', () => {
        if (money >= 20) {
            money -= 20;
            moneyDisplay.textContent = money;

            plotCount++;

            // Seleccionar la primera parcela con la clase 'plot not'
            const firstNotPlot = document.querySelector('.plot.not');

            if (firstNotPlot) {
                // Cambiar la clase de 'plot not' a 'plot'
                firstNotPlot.className = 'plot w-24 h-24 m-2 flex justify-center items-center';

                // Añadir el evento de clic para la nueva parcela
                firstNotPlot.addEventListener('click', () => handlePlotClick(firstNotPlot));
            } else {
                alert('No hay parcelas disponibles para comprar.');
            }
        } else {
            alert('No tienes suficiente dinero para comprar una parcela.');
        }
    });




    //ESCONDER MENU PARA COMPRAR SEMILLAS
    document.getElementById('buySeed').addEventListener('click', function() {
        var newMenu = document.getElementById('seedMenu');
        if (newMenu.classList.contains('hidden')) {
            newMenu.classList.remove('hidden');
        } else {
            newMenu.classList.add('hidden');
        }
    });

    //ESCONDER MENU PARA PLANTAR SEMILLAS
    document.getElementById('plantButton').addEventListener('click', function() {
        var newMenu = document.getElementById('plantMenu');
        if (newMenu.classList.contains('hidden')) {
            newMenu.classList.remove('hidden');
        } else {
            newMenu.classList.add('hidden');
        }
    });

    document.getElementById("animalButton").addEventListener("click", function() {
        window.location.href = "corral.html";
    });

    document.getElementById("indexButton").addEventListener("click", function() {
        window.location.href = "index.html";
    });        
});