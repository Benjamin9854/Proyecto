document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM completamente cargado y analizado");
    
    const moneyDisplay = document.getElementById('money');
    const carrotseedsDisplay = document.getElementById('carrotSeeds');
    const cabbageseedsDisplay = document.getElementById('cabbageSeeds');
    const tomatoseedsDisplay = document.getElementById('tomatoSeeds');
    const buyCarrotSeedButton = document.getElementById('buyCarrotSeedButton');
    const buyCabbageSeedButton = document.getElementById('buyCabbageSeedButton');
    const buyTomatoSeedButton = document.getElementById('buyTomatoSeedButton');
    const cost_plotDisplay = document.getElementById('cost_plot');
    const buyCorralButton = document.getElementById('buyCorralButton');
    const plantButtonCarrot = document.getElementById('plantButtonCarrot');
    const plantButtonCabbage = document.getElementById('plantButtonCabbage');
    const plantButtonTomato = document.getElementById('plantButtonTomato');
    const harvestButton = document.getElementById('harvestButton');
    const carrotHarvestDisplay = document.getElementById('carrotHarvest');
    const cabbageHarvestDisplay = document.getElementById('cabbageHarvest');
    const tomatoHarvestDisplay = document.getElementById('tomatoHarvest');
    const mouseButton = document.getElementById('mouseButton');
    const sellCarrotButton = document.getElementById('sellCarrotButton');
    const sellCabbageButton = document.getElementById('sellCabbageButton');
    const sellTomatoButton = document.getElementById('sellTomatoButton');
    const cambiarButton = document.getElementById('cambiarButton');

    let carrotSeeds = parseInt(carrotseedsDisplay.textContent);
    let cabbageSeeds = parseInt(cabbageseedsDisplay.textContent);
    let tomatoSeeds = parseInt(tomatoseedsDisplay.textContent);

    let carrotHarvest = parseInt(carrotHarvestDisplay.textContent);
    let cabbageHarvest = parseInt(cabbageHarvestDisplay.textContent);
    let tomatoHarvest = parseInt(tomatoHarvestDisplay.textContent);
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


    // PLANTAR SEMILLAS Y COSECHAR PLANTAS
    plots.forEach(plot => {
        plot.addEventListener('click', () => {
            if (isPlantingCarrot) {
                if (!plot.classList.contains('planted') && !plot.classList.contains('not')) {
                    // Si la parcela no está plantada, mostrar mensaje para plantar
                    if (carrotSeeds > 0) {
                        plot.classList.remove('planted');
                        plot.classList.add('carrot_1');
                        carrotSeeds--;
                        carrotseedsDisplay.textContent = carrotSeeds;
    
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
                        alert('!Sin semillas de zanahoria¡');
                    }
                }
            }
            else if (isPlantingCabbage) {
                if (!plot.classList.contains('planted') && !plot.classList.contains('not')) {
                    // Si la parcela no está plantada, mostrar mensaje para plantar
                    if (cabbageSeeds > 0) {
                        plot.classList.remove('planted');
                        plot.classList.add('cabagge_1');
                        cabbageSeeds--;
                        cabbageseedsDisplay.textContent = cabbageSeeds;
    
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
                    if (tomatoSeeds > 0) {
                        plot.classList.remove('planted');
                        plot.classList.add('tomato_1');
                        tomatoSeeds--;
                        tomatoseedsDisplay.textContent = tomatoSeeds;
    
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
                    carrotHarvest += 1 //Le suma la cosecha
                    carrotHarvestDisplay.textContent = carrotHarvest; // Actualiza el valor en la página
                    plot.classList.remove('carrot_3');
                }
                if (plot.classList.contains('cabbage_3')) {
                    cabbageHarvest += 1 //Le suma la cosecha
                    cabbageHarvestDisplay.textContent = cabbageHarvest; // Actualiza el valor en la página
                    plot.classList.remove('cabbage_3');
                }
                if (plot.classList.contains('tomato_4')) {
                    tomatoHarvest += 1 //Le suma la cosecha
                    tomatoHarvestDisplay.textContent = tomatoHarvest; // Actualiza el valor en la página
                    plot.classList.remove('tomato_4');
                }
            }
        });
    });






    //COMPRAR SEMILLAS
    buyCarrotSeedButton.addEventListener('click', () => {
        let money = parseInt(moneyDisplay.textContent);
        if (money >= 5) {
            money -= 5;
            carrotSeeds++;
            moneyDisplay.textContent = money;
            carrotseedsDisplay.textContent = carrotSeeds;
        } else {
            alert('No tienes suficiente dinero');
        }
    });
    buyCabbageSeedButton.addEventListener('click', () => {
        let money = parseInt(moneyDisplay.textContent);
        if (money >= 25) {
            money -= 25;
            cabbageSeeds++;
            moneyDisplay.textContent = money;
            cabbageseedsDisplay.textContent = cabbageSeeds;
        } else {
            alert('No tienes suficiente dinero');
        }
    });
    buyTomatoSeedButton.addEventListener('click', () => {
        let money = parseInt(moneyDisplay.textContent);
        if (money >= 100) {
            money -= 100;
            tomatoSeeds++;
            moneyDisplay.textContent = money;
            tomatoseedsDisplay.textContent = tomatoSeeds;
        } else {
            alert('No tienes suficiente dinero');
        }
    });

    //VENDER COSECHA
    sellCarrotButton.addEventListener('click', () => {
        if(carrotHarvest > 0){
            carrotHarvest--;
            carrotHarvestDisplay.textContent = carrotHarvest;
            let moneyValue = parseInt(moneyDisplay.textContent); // Convierte el valor de texto a entero
            moneyValue += 10; // Le suma 10 monedas
            moneyDisplay.textContent = moneyValue; // Actualiza el valor en la página
        }   
    });

    sellCabbageButton.addEventListener('click', () => {
        if(cabbageHarvest > 0){
            cabbageHarvest--;
            cabbageHarvestDisplay.textContent = cabbageHarvest;
            let moneyValue = parseInt(moneyDisplay.textContent); // Convierte el valor de texto a entero
            moneyValue += 40; // Le suma 50 monedas
            moneyDisplay.textContent = moneyValue; // Actualiza el valor en la página
        }   
    });

    sellTomatoButton.addEventListener('click', () => {
        if(tomatoHarvest > 0){
            tomatoHarvest--;
            tomatoHarvestDisplay.textContent = tomatoHarvest;
            let moneyValue = parseInt(moneyDisplay.textContent); // Convierte el valor de texto a entero
            moneyValue += 150; // Le suma 10 monedas
            moneyDisplay.textContent = moneyValue; // Actualiza el valor en la página
        }   
    });



    

    //CAMBIAR DE RANCHO
    cambiarButton.addEventListener('click', () => {
        const currentUrl = window.location.href;
        if (currentUrl.endsWith('/Proyecto/')) {
            window.location.href = currentUrl + 'corral';
        } else if (currentUrl.endsWith('/Proyecto/corral')) {
            window.location.href = currentUrl.replace('/corral', '');
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
    
    let cost = parseInt(cost_plotDisplay.textContent);

if (buyCorralButton && moneyDisplay) {
    buyCorralButton.addEventListener('click', () => {
        if (money >= cost) {
            money -= cost;
            cost *= 4;
            moneyDisplay.textContent = money;            
            cost_plotDisplay.textContent = cost;
            const firstNotCorral = document.querySelector('.corral.not');

            if (firstNotCorral) {
                firstNotCorral.classList.remove('not');
                firstNotCorral.classList.add('w-84', 'h-84', 'm-2', 'flex', 'justify-center', 'items-center');
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
    corral.addEventListener('click', () => {
        if (isPlantingCarrot) {
            if (!corral.classList.contains('pollo12') && !corral.classList.contains('not')) {
                if (corral.classList.contains('not')) {
                    alert('No posees este corral.');
                    return;
                }

                if (money < 10) {
                    alert('No tienes suficiente dinero para añadir un pollo.');
                    return;
                }

                if (corral.classList.contains('pollo12')) {
                    alert('No tienes suficiente espacio.');
                } else if (corral.classList.contains('pollo11')) {
                    corral.classList.remove('pollo11');
                    corral.classList.add('pollo12');
                    money -= 10;
                } else if (corral.classList.contains('pollo10')) {
                    corral.classList.remove('pollo10');
                    corral.classList.add('pollo11');
                    money -= 10;
                } else if (corral.classList.contains('pollo9')) {
                    corral.classList.remove('pollo9');
                    corral.classList.add('pollo10');
                    money -= 10;
                }
                else if (corral.classList.contains('pollo8')) {
                    corral.classList.remove('pollo8');
                    corral.classList.add('pollo9');
                    money -= 10;
                } else if (corral.classList.contains('pollo7')) {
                    corral.classList.remove('pollo7');
                    corral.classList.add('pollo8');
                    money -= 10;
                } else if (corral.classList.contains('pollo6')) {
                    corral.classList.remove('pollo6');
                    corral.classList.add('pollo7');
                    money -= 10;
                } else if (corral.classList.contains('pollo5')) {
                    corral.classList.remove('pollo5');
                    corral.classList.add('pollo6');
                    money -= 10;
                } else if (corral.classList.contains('pollo4')) {
                    corral.classList.remove('pollo4');
                    corral.classList.add('pollo5');
                    money -= 10;
                } else if (corral.classList.contains('pollo3')) {
                    corral.classList.remove('pollo3');
                    corral.classList.add('pollo4');
                    money -= 10;
                } else if (corral.classList.contains('pollo2')) {
                    corral.classList.remove('pollo2');
                    corral.classList.add('pollo3');
                    money -= 10;
                }  else if (corral.classList.contains('pollo1')) {
                    corral.classList.remove('pollo1');
                    corral.classList.add('pollo2');
                    money -= 10;
                }else {
                    corral.classList.add('pollo1');
                    money -= 10;
                }

                moneyDisplay.textContent = money;
            }
        } else if (isPlantingCabbage) {
            if (!corral.classList.contains('cerdo6') && !corral.classList.contains('not')) {
                if (corral.classList.contains('not')) {
                    alert('No posees este corral.');
                    return;
                }

                if (money < 50) {
                    alert('No tienes suficiente dinero para añadir un cerdo.');
                    return;
                }

                if (corral.classList.contains('cerdo6')) {
                    alert('No tienes suficiente espacio.');
                } else if (corral.classList.contains('cerdo5')) {
                    corral.classList.remove('cerdo5');
                    corral.classList.add('cerdo6');
                    money -= 50;
                } else if (corral.classList.contains('cerdo4')) {
                    corral.classList.remove('cerdo4');
                    corral.classList.add('cerdo5');
                    money -= 50;
                } else if (corral.classList.contains('cerdo3')) {
                    corral.classList.remove('cerdo3');
                    corral.classList.add('cerdo4');
                    money -= 50;
                } 
                else if (corral.classList.contains('cerdo2')) {
                    corral.classList.remove('cerdo2');
                    corral.classList.add('cerdo3');
                    money -= 50;
                } else if (corral.classList.contains('cerdo1')) {
                    corral.classList.remove('cerdo1');
                    corral.classList.add('cerdo2');
                    money -= 50;
                } else {
                    corral.classList.add('cerdo1');
                    money -= 50;
                }

                moneyDisplay.textContent = money;
            }
        }
        else if (isPlantingTomato) {
            if (!corral.classList.contains('vaca4') && !corral.classList.contains('not')) {
                if (corral.classList.contains('not')) {
                    alert('No posees este corral.');
                    return;
                }

                if (money < 100) {
                    alert('No tienes suficiente dinero para añadir una vaca.');
                    return;
                }

                if (corral.classList.contains('vaca4')) {
                    alert('No tienes suficiente espacio.');
                } else if (corral.classList.contains('vaca3')) {
                    corral.classList.remove('vaca3');
                    corral.classList.add('vaca4');
                    money -= 100;
                } else if (corral.classList.contains('vaca2')) {
                    corral.classList.remove('vaca2');
                    corral.classList.add('vaca3');
                    money -= 100;
                } else if (corral.classList.contains('vaca1')) {
                    corral.classList.remove('vaca1');
                    corral.classList.add('vaca2');
                    money -= 100;
                } else {
                    corral.classList.add('vaca1');
                    money -= 100;
                }

                moneyDisplay.textContent = money;
            }
        } else if (isHarvesting) {
            //pollos
            if (corral.classList.contains('pollo12')) {
                corral.classList.remove('pollo12');
                corral.classList.add('pollo11');
                money += 5;
                alert('Has vendido un pollo.');
            } else if (corral.classList.contains('pollo11')) {
                corral.classList.remove('pollo11');
                corral.classList.add('pollo10');
                money += 5;
                alert('Has vendido un pollo.');
            } else if (corral.classList.contains('pollo10')) {
                corral.classList.remove('pollo10');
                corral.classList.add('pollo9');
                money += 5;
                alert('Has vendido un pollo.');
            } else if (corral.classList.contains('pollo9')) {
                corral.classList.remove('pollo9');
                corral.classList.add('pollo8');
                money += 5;
                alert('Has vendido un pollo.');
            }
            if (corral.classList.contains('pollo8')) {
                corral.classList.remove('pollo8');
                corral.classList.add('pollo7');
                money += 5;
                alert('Has vendido un pollo.');
            } else if (corral.classList.contains('pollo7')) {
                corral.classList.remove('pollo7');
                corral.classList.add('pollo6');
                money += 5;
                alert('Has vendido un pollo');
            } else if (corral.classList.contains('pollo6')) {
                corral.classList.remove('pollo6');
                corral.classList.add('pollo5');
                money += 5;
                alert('Has vendido un pollo.');
            } else if (corral.classList.contains('pollo5')) {
                corral.classList.remove('pollo5');                
                corral.classList.add('pollo4');
                money += 5;
                alert('Has vendido un pollo.');
            } 
            if (corral.classList.contains('pollo4')) {
                corral.classList.remove('pollo4');
                corral.classList.add('pollo3');
                money += 5;
                alert('Has vendido un pollo.');
            } else if (corral.classList.contains('pollo3')) {
                corral.classList.remove('pollo3');
                corral.classList.add('pollo2');
                money += 5;
                alert('Has vendido un pollo.');
            } else if (corral.classList.contains('pollo2')) {
                corral.classList.remove('pollo2');
                corral.classList.add('pollo1');
                money += 5;
                alert('Has vendido un pollo.');
            } else if (corral.classList.contains('pollo1')) {
                corral.classList.remove('pollo1');
                money += 5;
                alert('Has vendido un pollo');
            } 
            // cerdos
            else if (corral.classList.contains('cerdo6')) {
                corral.classList.remove('cerdo6');
                corral.classList.add('cerdo5');
                money += 25;
                alert('Has vendido un cerdo.');
            } else if (corral.classList.contains('cerdo5')) {
                corral.classList.remove('cerdo5');
                corral.classList.add('cerdo4');
                money += 25;
                alert('Has vendido un cerdo.');
            }
            else if (corral.classList.contains('cerdo4')) {
                corral.classList.remove('cerdo4');
                corral.classList.add('cerdo3');
                money += 25;
                alert('Has vendido un cerdo.');
            } else if (corral.classList.contains('cerdo3')) {
                corral.classList.remove('cerdo3');
                corral.classList.add('cerdo2');
                money += 25;
                alert('Has vendido un cerdo.');
            } else if (corral.classList.contains('cerdo2')) {
                corral.classList.remove('cerdo2');
                corral.classList.add('cerdo1');
                money += 25;
                alert('Has vendido un cerdo.');
            } else if (corral.classList.contains('cerdo1')) {
                corral.classList.remove('cerdo1');
                money += 25;
                alert('Has vendido una cerdo.');
            }
            //vacas
            else if (corral.classList.contains('vaca4')) {
                corral.classList.remove('vaca4');
                corral.classList.add('vaca3');
                money += 50;
                alert('Has vendido una vaca.');
            } else if (corral.classList.contains('vaca3')) {
                corral.classList.remove('vaca3');
                corral.classList.add('vaca2');
                money += 50;
                alert('Has vendido una vaca.');
            } else if (corral.classList.contains('vaca2')) {
                corral.classList.remove('vaca2');
                corral.classList.add('vaca1');
                money += 50;
                alert('Has vendido una vaca.');
            } else if (corral.classList.contains('vaca1')) {
                corral.classList.remove('vaca1');
                money += 50;
                alert('Has vendido una vaca.');
            }
            else {
                alert('No tienes animales para vender.');
            }
            
            moneyDisplay.textContent = money;
        }
    });
});


    // Función para contar el número de animales
    function countChickens() {
        let totalChickens = 0;
        corrales.forEach(corral => {
            if (corral.classList.contains('pollo1')) totalChickens++;
            if (corral.classList.contains('pollo2')) totalChickens += 2;
            if (corral.classList.contains('pollo3')) totalChickens += 3;
            if (corral.classList.contains('pollo4')) totalChickens += 4;
            if (corral.classList.contains('pollo5')) totalChickens += 5;
            if (corral.classList.contains('pollo6')) totalChickens += 6;
            if (corral.classList.contains('pollo7')) totalChickens += 7;
            if (corral.classList.contains('pollo8')) totalChickens += 8;
            if (corral.classList.contains('pollo9')) totalChickens += 9;
            if (corral.classList.contains('pollo10')) totalChickens += 10;
            if (corral.classList.contains('pollo11')) totalChickens += 11;
            if (corral.classList.contains('pollo12')) totalChickens += 12;
        });
        return totalChickens;
    }

    function countPigs() {
        let totalPigs = 0;
        corrales.forEach(corral => {
            if (corral.classList.contains('cerdo1')) totalPigs++;
            if (corral.classList.contains('cerdo2')) totalPigs += 2;
            if (corral.classList.contains('cerdo3')) totalPigs += 3;
            if (corral.classList.contains('cerdo4')) totalPigs += 4;            
            if (corral.classList.contains('cerdo5')) totalPigs += 5;
            if (corral.classList.contains('cerdo6')) totalPigs += 6;
        });
        return totalPigs;
    }

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
    const totalChickens = countChickens();
    const totalPigs = countPigs();
    const totalCows = countCows();
    money = parseInt(moneyDisplay.textContent);    
    money += totalChickens;
    money += totalPigs * 4;
    money += totalCows * 16;
    moneyDisplay.textContent = money;
}, 2000);
    
});