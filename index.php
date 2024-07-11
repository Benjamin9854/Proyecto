<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Millionaire farmer</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="styles.css">
</head>
<body class="bg-gray-100 text-gray-900">

    <!--INFORMACION!-->
    <!--INFORMACION!-->
    <div class="flex justify-center my-4">
        <h1 class="text-5xl font-bold title">Millionaire Farmer</h1>
    </div>
    <div id="stats" class="mb-4">
        <p>Dinero: $<span id="money" class="font-bold">200</span></p>
        <p>Semillas: <span id="seeds" class="font-bold">10</span></p>
    </div>



    <!--PARCELAS!-->
    <!--PARCELAS!-->
    <div id="farm-container">
        <div class="plot not w-24 h-24 m-2 flex justify-center items-center" id="plot1"></div>
        <div class="plot not w-24 h-24 m-2 flex justify-center items-center" id="plot2"></div>
        <div class="plot not w-24 h-24 m-2 flex justify-center items-center" id="plot3"></div>
        <div class="plot not w-24 h-24 m-2 flex justify-center items-center" id="plot4"></div>
        <div class="plot not w-24 h-24 m-2 flex justify-center items-center" id="plot5"></div>
        <div class="plot not w-24 h-24 m-2 flex justify-center items-center" id="plot6"></div>
        <div class="plot not w-24 h-24 m-2 flex justify-center items-center" id="plot7"></div>
        <div class="plot not w-24 h-24 m-2 flex justify-center items-center" id="plot8"></div>
        <div class="plot not w-24 h-24 m-2 flex justify-center items-center" id="plot9"></div>
        <div class="plot not w-24 h-24 m-2 flex justify-center items-center" id="plot10"></div>
        <div class="plot not w-24 h-24 m-2 flex justify-center items-center" id="plot11"></div>
        <div class="plot not w-24 h-24 m-2 flex justify-center items-center" id="plot12"></div>
        <div class="plot not w-24 h-24 m-2 flex justify-center items-center" id="plot13"></div>
        <div class="plot not w-24 h-24 m-2 flex justify-center items-center" id="plot14"></div>
        <div class="plot not w-24 h-24 m-2 flex justify-center items-center" id="plot15"></div>
        <div class="plot not w-24 h-24 m-2 flex justify-center items-center" id="plot16"></div>
        <div class="plot not w-24 h-24 m-2 flex justify-center items-center" id="plot17"></div>
        <div class="plot not w-24 h-24 m-2 flex justify-center items-center" id="plot18"></div>
        <div class="plot not w-24 h-24 m-2 flex justify-center items-center" id="plot19"></div>
        <div class="plot not w-24 h-24 m-2 flex justify-center items-center" id="plot20"></div>
        <div class="plot not w-24 h-24 m-2 flex justify-center items-center" id="plot21"></div>
        <div class="plot not w-24 h-24 m-2 flex justify-center items-center" id="plot22"></div>
    </div>

    <!--MENU LATERAL PARA COMPRAR!-->
    <!--MENU LATERAL PARA COMPRAR!-->
    <div class="flex flex-col fixed top-0 right-0 mt-5 mr-3">
        <button type="button" class="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-t-xl hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-black dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-black dark:focus:text-white">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-logout"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" /><path d="M9 12h12l-3 -3" /><path d="M18 15l3 -3" /></svg>
        </button>
        <button type="button" class="flex items-center px-4 py-2 bg-white border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-black dark:bg-blue-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-blue-700 dark:focus:ring-black dark:focus:text-white">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-building-cottage"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l18 0" /><path d="M4 21v-11l2.5 -4.5l5.5 -2.5l5.5 2.5l2.5 4.5v11" /><path d="M12 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M9 21v-5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v5" /></svg>
        </button>
        <button type="button" class="flex items-center px-4 py-2 bg-white border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-black dark:bg-orange-700 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-orange-600 dark:focus:ring-black dark:focus:text-white">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-pig"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 11v.01" /><path d="M16 3l0 3.803a6.019 6.019 0 0 1 2.658 3.197h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-1.342a6.008 6.008 0 0 1 -1.658 2.473v2.027a1.5 1.5 0 0 1 -3 0v-.583a6.04 6.04 0 0 1 -1 .083h-4a6.04 6.04 0 0 1 -1 -.083v.583a1.5 1.5 0 0 1 -3 0v-2l0 -.027a6 6 0 0 1 4 -10.473h2.5l4.5 -3z" /></svg>
        </button>
        <button id="buySeed" type="button" class="flex items-center px-4 py-2 bg-white border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-black dark:bg-green-700 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-black dark:focus:text-white">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-plant"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 15h10v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4z" /><path d="M12 9a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3" /><path d="M12 11a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3" /><path d="M12 15l0 -6" /></svg>
        </button>
        <button type="button" class="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-b-xl hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-black dark:bg-purple-700 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-purple-600 dark:focus:ring-black dark:focus:text-white">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-loop-right-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 21v-6m0 -6v-1a4 4 0 1 0 -4 4h13" /><path d="M17 16l4 -4l-4 -4" /></svg>
        </button>
    </div>

    <!--SUB MENU PARA COMPRAR SEMILLAS!-->
    <div  id="seedMenu" class="flex-col fixed top-20 right-20 mt-5 mr-3 hidden">
        <button id="buySeedAButton" type="button" class="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-t-xl hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-black dark:bg-green-700 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-black dark:focus:text-white">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-carrot"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21s9.834 -3.489 12.684 -6.34a4.487 4.487 0 0 0 0 -6.344a4.483 4.483 0 0 0 -6.342 0c-2.86 2.861 -6.347 12.689 -6.347 12.689z" /><path d="M9 13l-1.5 -1.5" /><path d="M16 14l-2 -2" /><path d="M22 8s-1.14 -2 -3 -2c-1.406 0 -3 2 -3 2s1.14 2 3 2s3 -2 3 -2z" /><path d="M16 2s-2 1.14 -2 3s2 3 2 3s2 -1.577 2 -3c0 -1.86 -2 -3 -2 -3z" /></svg>
        </button>
        <button type="button" class="flex items-center px-4 py-2 bg-white border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-black dark:bg-green-700 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-black dark:focus:text-white">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-pizza"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 21.5c-3.04 0 -5.952 -.714 -8.5 -1.983l8.5 -16.517l8.5 16.517a19.09 19.09 0 0 1 -8.5 1.983z" /><path d="M5.38 15.866a14.94 14.94 0 0 0 6.815 1.634a14.944 14.944 0 0 0 6.502 -1.479" /><path d="M13 11.01v-.01" /><path d="M11 14v-.01" /></svg>
        </button>
        <button type="button" class="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-b-xl hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-black dark:bg-green-700 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-black dark:focus:text-white">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-apple"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 14m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M12 11v-6a2 2 0 0 1 2 -2h2v1a2 2 0 0 1 -2 2h-2" /><path d="M10 10.5c1.333 .667 2.667 .667 4 0" /></svg>
        </button>
    </div>


    <!--MENU LATERAL PARA PLANTAR Y COSECHAR!-->
    <!--MENU LATERAL PARA PLANTAR Y COSECHAR!-->
    <div class="flex flex-col fixed top-0 left-0 mt-5 ml-3">
        <button id="plantButton" type="button" class="flex flex-col items-center px-2 py-2 bg-white border border-gray-200 rounded-t-xl hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-black dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-black dark:focus:text-white">
            <span class="mb-1">Plantar</span>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-trowel"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14.42 9.058l-5.362 5.363a1.978 1.978 0 0 1 -3.275 -.773l-2.682 -8.044a1.978 1.978 0 0 1 2.502 -2.502l8.045 2.682a1.978 1.978 0 0 1 .773 3.274z" /><path d="M10 10l6.5 6.5" /><path d="M19.347 16.575l1.08 1.079a1.96 1.96 0 0 1 -2.773 2.772l-1.08 -1.079a1.96 1.96 0 0 1 2.773 -2.772z" /></svg>
        </button>
        <button id="harvestButton" type="button" class="flex flex-col items-center px-2 py-2 bg-white border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-black dark:bg-green-700 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-black dark:focus:text-white">
            <span class="mb-1">Cosechar</span>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-hand-stop"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 13v-7.5a1.5 1.5 0 0 1 3 0v6.5" /><path d="M11 5.5v-2a1.5 1.5 0 1 1 3 0v8.5" /><path d="M14 5.5a1.5 1.5 0 0 1 3 0v6.5" /><path d="M17 7.5a1.5 1.5 0 0 1 3 0v8.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" /></svg>
        </button>
        <button id="mouseButton" type="button" class="flex flex-col items-center px-2 py-2 bg-white border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-black dark:bg-red-700 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-black dark:focus:text-white">
            <span class="mb-1">Cancelar</span>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-pointer"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3.039 4.277l3.904 13.563c.185 .837 .92 1.516 1.831 1.642l.17 .016a2.2 2.2 0 0 0 1.982 -1.006l.045 -.078l1.4 -2.072l4.05 4.05a2.067 2.067 0 0 0 2.924 0l1.047 -1.047c.388 -.388 .606 -.913 .606 -1.461l-.008 -.182a2.067 2.067 0 0 0 -.598 -1.28l-4.047 -4.048l2.103 -1.412c.726 -.385 1.18 -1.278 1.053 -2.189a2.2 2.2 0 0 0 -1.701 -1.845l-13.524 -3.89a1 1 0 0 0 -1.236 1.24z" /></svg>
        </button>
        <button id="buyPlotButton" type="button" class="flex flex-col items-center px-2 py-2 bg-white border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-black dark:bg-yellow-600 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-yellow-500 dark:focus:ring-black dark:focus:text-white">
            <span class="mb-1">Parcela</span>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-moneybag"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9.5 3h5a1.5 1.5 0 0 1 1.5 1.5a3.5 3.5 0 0 1 -3.5 3.5h-1a3.5 3.5 0 0 1 -3.5 -3.5a1.5 1.5 0 0 1 1.5 -1.5z" /><path d="M4 17v-1a8 8 0 1 1 16 0v1a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /></svg>
            <span id="cost_plot" class="mt-1">20</span>
        </button>
        <button  id="inventoryButton" type="button" class="flex flex-col items-center px-2 py-2 bg-white border border-gray-200 rounded-b-xl hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-black dark:bg-purple-700 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-purple-600 dark:focus:ring-black dark:focus:text-white">
            <span class="mb-1">Inventario</span>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
        </button>
    </div>

    <!--SUB MENU PARA PLANTAR SEMILLAS!-->
    <!--SUB MENU PARA PLANTAR SEMILLAS -->
    <div id="plantMenu" class="flex flex-row fixed top-0 left-20 mt-5 ml-3 hidden">
        <button id="plantButtonCarrot" type="button" class="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-l-xl hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-black dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-black dark:focus:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-carrot"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21s9.834 -3.489 12.684 -6.34a4.487 4.487 0 0 0 0 -6.344a4.483 4.483 0 0 0 -6.342 0c-2.86 2.861 -6.347 12.689 -6.347 12.689z" /><path d="M9 13l-1.5 -1.5" /><path d="M16 14l-2 -2" /><path d="M22 8s-1.14 -2 -3 -2c-1.406 0 -3 2 -3 2s1.14 2 3 2s3 -2 3 -2z" /><path d="M16 2s-2 1.14 -2 3s2 3 2 3s2 -1.577 2 -3c0 -1.86 -2 -3 -2 -3z" /></svg>
        </button>
        <button id="plantButtonCabbage" type="button" class="flex items-center px-4 py-2 bg-white border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-black dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-black dark:focus:text-white">
            <svg enable-background="new 0 0 50 50" width="24" height="24" version="1.1" viewBox="0 0 50 50" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Layer_23"/><g id="Layer_22"/><g id="Layer_21"/><g id="Layer_20"/><g id="Layer_19"><path clip-rule="evenodd" fill="white" d="M19.159,26.214l1.16-4.531l-2.418-0.617l-1.16,4.531L19.159,26.214z    M13.52,32.464l-3.339-3.281L8.43,30.965l3.339,3.281L13.52,32.464z M21.154,32.316l0.261,4.674l2.495-0.137l-0.261-4.674   L21.154,32.316z M26.253,24.329l4.084,2.296l1.224-2.183l-4.083-2.296L26.253,24.329z M37.865,23.571l-1.161,4.53l2.418,0.617   l1.16-4.531L37.865,23.571z M5.04,22.881c-2.385,1.937-4.257,4.091-4.836,6.686c-1.683,7.534,7.434,13.716,13.574,14.845   c10.535,1.937,22.947-4.154,29.998-11.71c4.166-4.461,7.697-10.873,5.602-17.093c-1.753-5.205-7.672-9.445-12.898-10.216   c-6.976-1.03-11.832,2.849-17.147,6.665C13.786,16.038,7.294,21.051,5.04,22.881z M36.069,8.2   c4.212,0.622,9.224,4.155,10.624,8.308c1.735,5.155-1.584,10.614-4.992,14.264c-6.378,6.834-17.852,12.614-27.414,10.855   c-4.312-0.793-12.59-5.764-11.322-11.45c0.413-1.848,1.918-3.523,3.86-5.1c2.238-1.817,8.671-6.786,14.159-10.724   C25.55,11.078,30.067,7.312,36.069,8.2z M33.563,12.72l-2.457,0.441l0.828,4.604l2.457-0.441L33.563,12.72z" fill-rule="evenodd"/></g><g id="Layer_18"/><g id="Layer_17"/><g id="Layer_16"/><g id="Layer_15"/><g id="Layer_14"/><g id="Layer_13"/><g id="Layer_12"/><g id="Layer_11"/><g id="Layer_10"/><g id="Layer_9"/><g id="Layer_8"/><g id="Layer_7"/><g id="Layer_6"/><g id="Layer_5"/><g id="Layer_4"/><g id="Layer_3"/><g id="Layer_2"/></svg>
        </button>
        <button id="plantButtonTomato" type="button" class="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-r-xl hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-black dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-black dark:focus:text-white">
            <svg fill="white" height="24" width="24" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511 511" xml:space="preserve"><g> <path d="M480.319,169.292c-18.49-27.611-44.624-49.346-77.675-64.601c-21.801-10.062-41.29-13.408-60.124-13.839 c5.811-3.439,10.508-6.253,13.949-8.358c8.272-5.061,10.496-6.421,10.542-10.896c0.027-2.646-1.352-5.13-3.613-6.505 c-33.84-20.583-64.1-0.633-88.414,15.398c-3.182,2.098-6.319,4.164-9.374,6.079c0.64-5.707,1.205-12.394,1.448-19.564 c0.97-28.565-3.56-50.056-13.462-63.874c-2.355-3.286-6.892-4.114-10.256-1.871l-24,16c-3.289,2.192-4.312,6.562-2.337,9.986 c7.363,12.77,24.744,45.87,29.667,66.76c-7.665-2.73-17.631-7.868-27.371-12.889c-31.277-16.125-70.202-36.195-96.444-15.504 c-1.951,1.539-3.022,3.967-2.844,6.446c0.301,4.2,2.472,5.529,10.548,10.475c3.728,2.283,8.908,5.382,15.396,9.211 c0.527,0.311,1.055,0.622,1.582,0.933c-12.411,1.947-25.327,5.621-39.179,12.015c-33.052,15.255-59.186,36.99-77.675,64.601 C10.323,199.695,0,236.285,0,278.046c0,56.239,27.328,114.408,74.977,159.591c23.815,22.583,51.093,40.441,81.077,53.081 C187.983,504.176,221.442,511,255.5,511s67.517-6.824,99.446-20.283c29.983-12.639,57.262-30.498,81.077-53.081 C483.672,392.454,511,334.285,511,278.046C511,236.285,500.677,199.695,480.319,169.292z M283.241,93.014 c19.329-12.746,39.216-25.855,60.391-20.285c-9.19,5.516-22.289,13.202-32.383,19.06c-0.251,0.146-0.487,0.307-0.715,0.476 c-3.409,0.305-6.827,0.634-10.265,0.967c-6.543,0.633-13.199,1.269-20.058,1.776C281.218,94.347,282.227,93.682,283.241,93.014z M301.713,108.162c1.092-0.105,2.177-0.21,3.259-0.314c9.281,2.102,15.948,6.633,20.343,13.846 c7.189,11.797,6.805,28.128,5.358,39.268c-13.37-12.03-37.954-33.638-60.076-50.343 C281.511,110.101,291.738,109.126,301.713,108.162z M233.442,25.887l11.606-7.737c5.09,10.809,7.521,26.455,7.088,45.905 C245.7,48.78,237.948,34.08,233.442,25.887z M233.506,110.232c-20.237,16.15-41.265,37.016-53.352,49.48 c-1.324-11.705-1.084-27.131,5.511-37.983c4.395-7.232,11.068-11.775,20.363-13.88c1.084,0.104,2.167,0.208,3.261,0.314 C217.135,108.92,225.14,109.684,233.506,110.232z M142.952,72.502c18.621-3.761,44.715,9.201,66.956,20.649 c-1.198-0.116-2.393-0.23-3.587-0.344c-0.005,0-0.01-0.001-0.016-0.001c-10.8-1.03-21.447-1.941-32.256-2.004 C162.84,84.301,151.124,77.414,142.952,72.502z M425.702,426.752c-22.501,21.336-48.268,38.207-76.583,50.143 C319.045,489.572,287.547,496,255.5,496s-63.545-6.428-93.62-19.105c-28.315-11.936-54.081-28.806-76.583-50.143 C40.623,384.389,15,330.188,15,278.046c0-38.736,9.469-72.518,28.145-100.408c16.932-25.286,40.988-45.246,71.498-59.328 c21.058-9.719,39.619-12.52,58.196-12.52c2.076,0,4.154,0.046,6.235,0.11c-2.338,2.391-4.422,5.065-6.229,8.038 c-15.288,25.158-5.002,62.063-4.557,63.623c0.745,2.608,2.84,4.61,5.479,5.236c0.575,0.137,1.155,0.203,1.732,0.203 c2.07,0,4.079-0.858,5.516-2.418c0.424-0.46,39.323-42.544,70.558-65.292c32.536,22.901,78.329,65.249,78.828,65.711 c1.405,1.302,3.232,1.999,5.099,1.999c0.674,0,1.353-0.091,2.019-0.277c2.51-0.702,4.476-2.656,5.192-5.163 c0.445-1.559,10.731-38.464-4.557-63.623c-1.808-2.976-3.894-5.652-6.235-8.044c20.695-0.639,41.023,1.609,64.437,12.416 c30.51,14.082,54.566,34.042,71.498,59.328C486.531,205.528,496,239.31,496,278.046C496,330.188,470.378,384.389,425.702,426.752z" /> <path d="M440.504,170.429c-2.801-3.053-7.545-3.255-10.597-0.454c-3.052,2.801-3.255,7.545-0.454,10.597 C452.377,205.547,464,238.342,464,278.046c0,7.906-0.741,16.022-2.202,24.124c-0.735,4.076,1.973,7.977,6.05,8.712 c0.45,0.081,0.898,0.121,1.34,0.121c3.559,0,6.718-2.544,7.372-6.17c1.619-8.978,2.44-17.99,2.44-26.787 C479,234.467,466.048,198.259,440.504,170.429z"/> <path d="M48.042,294.57C47.351,289.034,47,283.474,47,278.046c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5 c0,6.047,0.39,12.232,1.157,18.382c0.474,3.795,3.705,6.572,7.433,6.572c0.31,0,0.623-0.02,0.938-0.059 C45.639,302.428,48.555,298.68,48.042,294.57z"/><path d="M410.258,145.209c-6.581-4.206-13.654-8.062-21.024-11.463c-3.762-1.736-8.217-0.094-9.953,3.667 c-1.736,3.761-0.094,8.217,3.667,9.953c6.753,3.117,13.224,6.644,19.233,10.484c1.251,0.8,2.649,1.181,4.031,1.181 c2.474,0,4.896-1.223,6.327-3.462C414.769,152.077,413.748,147.439,410.258,145.209z"/><path d="M55.213,325.045c-1.351-3.916-5.621-5.994-9.536-4.644c-3.916,1.351-5.995,5.621-4.644,9.536 c10.539,30.543,29.891,59.756,55.963,84.479c1.451,1.375,3.307,2.058,5.159,2.058c1.986,0,3.969-0.784,5.444-2.339 c2.85-3.006,2.724-7.753-0.282-10.603C82.986,380.46,64.969,353.32,55.213,325.045z"/></g> </svg>
        </button>
    </div>


    <!--INVENTARIO PARA VER Y VENDER!-->
    <!--INVENTARIO PARA VER Y VENDER!-->
    <div id="inventory" class="mb-4 hidden">
        <div class="flex flex-row space-x-4">
            <div class="flex flex-col items-center mb-4">
                <span class="font-bold mb-2">Semillas</span>
                <p>Zanahorias: <span id="carrotSeeds" class="font-bold">10</span></p>
                <p>Papas: <span id="potatoSeeds" class="font-bold">8</span></p>
                <p>Tomates: <span id="tomatoSeeds" class="font-bold">5</span></p>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold mb-2">Cosecha</span>
                <div class="flex flex-row space-x-4">
                    <div class="mb-2">
                        <p>Zanahorias: <span id="carrotHarvest" class="font-bold">20</span></p>
                        <button class="bg-green-500 text-white px-2 py-1 rounded mt-1">Vender ($100)</button>
                    </div>
                    <div class="mb-2">
                        <p>Papas: <span id="potatoHarvest" class="font-bold">15</span></p>
                        <button class="bg-green-500 text-white px-2 py-1 rounded mt-1">Vender ($75)</button>
                    </div>
                    <div class="mb-2">
                        <p>Tomates: <span id="tomatoHarvest" class="font-bold">10</span></p>
                        <button class="bg-green-500 text-white px-2 py-1 rounded mt-1">Vender ($50)</button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
        
    </div>


    <!--SCRIPT!-->
    <!--SCRIPT!-->
    <script src="script.js"></script>
</body>
</html>