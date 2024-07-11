document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM completamente cargado y analizado");

    const moneyDisplay = document.getElementById('money');
    const seedsDisplay = document.getElementById('seeds');
    const cost_plotDisplay = document.getElementById('cost_plot');
    const buySeedButton = document.getElementById('buySeedAButton');
    const buyPlotButton = document.getElementById('buyPlotButton');
    const plantButtonCarrot = document.getElementById('plantButtonCarrot');
    const plantButtonCabbage = document.getElementById('plantButtonCabbage');
    const plantButtonTomato = document.getElementById('plantButtonTomato');
    const harvestButton = document.getElementById('harvestButton');
    const mouseButton = document.getElementById('mouseButton');

    let seeds = 10;
    let plotCount = 3;

    // Variable para saber si estamos en modo de plantar
    let isPlantingCarrot = false;
    let isPlantingCabbage = false; 
    let isPlantingTomato = false; 

    // Variable para saber si estamos en modo cosechar
    let isHarvesting = false;


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

    // Añadir evento al botón de plantar tomates
    plantButtonTomato.addEventListener('click', () => {
        if (isPlantingTomato) {
            isPlantingTomato = false;
            document.body.style.cursor = "default";

        }
        else {
            isPlantingTomato = true;
            document.body.style.cursor = "url('images/seeds.cur'), auto";
        }
    });

    // Añadir evento al botón de cosechar
    harvestButton.addEventListener('click', () => {
        if (isHarvesting) {
            isHarvesting = false;
            document.body.style.cursor = "default";

        }
        else {
            isHarvesting = true;
            document.body.style.cursor = "url('images/guante.cur'), auto";
        }
    });

    // Añadir evento al botón de mouse
    mouseButton.addEventListener('click', () => {
        isHarvesting = false;
        isPlantingCarrot = false;
        isPlantingCabbage = false;
        isPlantingTomato = false;
        document.body.style.cursor = "default";
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
            else if (isPlantingTomato) {
                if (!plot.classList.contains('planted') && !plot.classList.contains('not')) {
                    // Si la parcela no está plantada, mostrar mensaje para plantar
                    if (seeds > 0) {
                        plot.classList.remove('planted');
                        plot.classList.add('tomato_1');
                        seeds--;
                        seedsDisplay.textContent = seeds;
    
                        // Simular crecimiento de la planta después de 5 segundos
                        setTimeout(() => {
                            plot.classList.remove('tomato_1');
                            plot.classList.add('tomato_2'); // Marcar la parcela como crecida
                            setTimeout(() => {
                                plot.classList.remove('tomato_2');
                                plot.classList.add('tomato_3')
                                setTimeout(() => {
                                    plot.classList.remove('tomato_3');
                                    plot.classList.add('tomato_4')
                                    plot.dataset.grown = 'true'; // Marcar la parcela como crecida
                                }, 5000);
                            }, 5000);
                        }, 5000); // 5000 milisegundos = 5 segundos

                    } else {
                        alert('No tienes suficientes semillas para plantar.');
                    }
                }
            }
            else if (isHarvesting){
                if (plot.classList.contains('carrot_3')) {
                    let moneyValue = parseInt(moneyDisplay.textContent); // Convierte el valor de texto a entero
                    moneyValue += 10; // Le suma 10 monedas
                    moneyDisplay.textContent = moneyValue; // Actualiza el valor en la página
                    plot.classList.remove('carrot_3');
                }
                if (plot.classList.contains('cabbage_3')) {
                    let moneyValue = parseInt(moneyDisplay.textContent); // Convierte el valor de texto a entero
                    moneyValue += 50; // Le suma 50 monedas
                    moneyDisplay.textContent = moneyValue; // Actualiza el valor en la página
                    plot.classList.remove('cabbage_3');
                }
                if (plot.classList.contains('tomato_4')) {
                    let moneyValue = parseInt(moneyDisplay.textContent); // Convierte el valor de texto a entero
                    moneyValue += 200; // Le suma 200 monedas
                    moneyDisplay.textContent = moneyValue; // Actualiza el valor en la página
                    plot.classList.remove('tomato_4');
                }
            }
        });
    });






    //COMPRAR SEMILLAS
    buySeedButton.addEventListener('click', () => {
        let money = parseInt(moneyDisplay.textContent);
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
        let money = parseInt(moneyDisplay.textContent);
        let cost = parseInt(cost_plotDisplay.textContent);
        if (money >= cost) {
            money -= cost;
            cost = cost*4;
            moneyDisplay.textContent = money;
            cost_plotDisplay.textContent = cost;

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


    //ESCONDER INVENTARIO
    document.getElementById('inventoryButton').addEventListener('click', function() {
        var newMenu = document.getElementById('inventory');
        if (newMenu.classList.contains('hidden')) {
            newMenu.classList.remove('hidden');
        } else {
            newMenu.classList.add('hidden');
        }
    });
});