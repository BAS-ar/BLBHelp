rh._.exports({"0":[[" ","Liquidaciones"]],"1":[[" ","Liquidaciones"]],"2":[[" ","Este proceso permite efectuar la liquidación de uno o más legajos."," ","Al ejecutarse, recorre todas las novedades vigentes para los legajos que se indican y, en base a dicha información, genera los correspondientes recibos."," ","La generación se realiza en el orden de los legajos."," ","En caso que en los parámetros del sistema se haya indicado que el método de numeración de los recibos es al liquidar, el proceso genera recibos numerados."," ","Se debe tener en cuenta que sólo se pueden liquidar aquellos legajos no denegados para el usuario actual según la ","definición de permisos","."," "," Liquidación"," ","Permite indicar los datos que identifican a la liquidación a realizar."," "," Tipo"," ","Tipo de liquidación que corresponde a la liquidación a realizar."," ","El sistema ofrece el tipo de la liquidación que se encuentra activa. Este puede modificarse libremente."," ","Es importante tener en cuenta que se ofrecen todas las liquidaciones disponibles, incluso las que sean de tipo Simulación. En caso de elegir una liquidación de este tipo, el sistema muestra un texto de color azul."," "," Mes"," ","Mes correspondiente a la liquidación a realizar."," ","El sistema ofrece el mes correspondiente a la liquidación que se encuentra activa. Este puede modificarse libremente."," "," Legajos"," ","Permite indicar los legajos para los cuales se realiza el proceso de liquidación."," "," Legajo"," ","Códigos correspondientes a los legajos a liquidar."," ","En caso de indicar más de uno, se puede utilizar el - para indicar rangos y la , para separarlos."," ","Si se deja en blanco se incluye a todos los legajos."," ","Se debe tener en cuenta que sólo se pueden informar aquellos legajos no denegados para el usuario actual según la ","definición de permisos","."," "," Lugar de trabajo"," ","Si se desea establecer un filtro en base a un lugar de trabajo, éste se deberá informar en este campo."," "," Atributos"," ","Permite indicar los atributos y sus respectivos valores en base a los cuáles se seleccionan los legajos a liquidar."," ","En caso de indicar más de un atributo, se incluirán los legajos que cumplan con todos simultáneamente."," ","En caso de que también se hayan indicado legajos, sólo se incluirán aquellos que además cumplan con todos los atributos informados."," "," Atributo"," ","En este cuadro se deben informar los códigos de atributo en base a los cuales se realiza la selección de legajos."," ","Al informar los códigos se exhiben las descripciones correspondientes."," ","Se debe tener en cuenta que sólo se pueden informar los atributos no denegados para el usuario actual en la ","definición de permisos","."," "," Valor"," ","Valor correspondiente al atributo, indicado en la línea, en base al cual se determinan los legajos a incluir en la emisión."," "," Avance del Proceso"," ","Este cuadro indica el porcentaje de avance de la liquidación y exhibe los conceptos que se van liquidando durante la misma."," "," Grabar"," ","Si al aprobar el proceso el sistema encuentra que dentro del rango de legajos a liquidar existen algunos ya liquidados, emite un mensaje de aviso al operador (Figura 6-Aviso)."," ","Si se contesta ","Sí"," se liquidan todos los legajos del rango seleccionado, reliquidando los que ya se encuentren liquidados."," ","Contestando ","No",", en cambio, se liquidan únicamente los legajos del rango que no se encuentren liquidados."," ","Seleccionado ","Cancelar"," se da por cancelada la tarea sin realizar ningún proceso."," ","Al finalizar el proceso, opcionalmente, pueden consultarse en un archivo los errores que fueron encontrados. Estos consisten fundamentalmente en conceptos de liquidación que incluyen variables que no fueron valorizadas, es decir, para las cuales no existe una novedad vigente que les asigne un valor. Para cada legajo en el cual se presentaron errores, se exhibe el concepto y, en relación a él, las variables que por no tener valor asignado, fueron valorizadas con cero."," ","Al final del reporte se muestra un resumen detallando el total de legajos que presentaron errores y el total de variables no valorizadas. La información puede almacenarse en un archivo."," ","También, al finalizar el proceso, se ofrece la posibilidad de exhibir información resumen de la liquidación que, si se requiere, puede almacenarse en un archivo. Esta incluye:"," ","Fecha y hora de inicio del proceso"," ","Fecha y hora de finalización del proceso"," ","Cantidad de legajos liquidados"," ","Tiempo promedio de liquidación por legajo"," "," Para tener en cuenta:"," ","Si en los parámetros del sistema se ha indicado que el método de numeración de los recibos es al liquidar, los números se asignan en el orden en que se liquidan los legajos, es decir, por orden de código."," ","La numeración se realiza a partir del número que figura, en los parámetros generales, en el campo Número del próximo recibo. A partir de dicho número, la asignación se realiza en forma secuencial."," ","En caso que existan números posteriores al que figura en el campo Número de próximo recibo que ya estén asignados, éstos se saltean y se continúa la numeración en el inmediato posterior que se encuentre disponible."," ","Si al realizar el proceso, el sistema encuentra que ya existen recibos para algunos o todos los legajos del rango a liquidar, automáticamente los elimina y sustituye por los que surgen del nuevo proceso de liquidación. Por lo cual, para reliquidar legajos, no es necesario anularlos previamente."," ","Es posible efectuar liquidaciones diferentes a la liquidación activa, la única condición que se requiere es que la liquidación haya sido creada previamente mediante la tarea Apertura de liquidación, que no existan liquidaciones posteriores para los legajos a liquidar y que no se encuentre cerrada."," ","Al finalizar el proceso de liquidación, si se desea, pueden consultarse en un archivo los errores que fueron encontrados. Dichos errores consisten fundamentalmente en conceptos de liquidación que incluyen variables que no fueron valorizadas, es decir, para las cuales no existe una novedad vigente que les asigne un valor."," "," Comentario"," ","Vale la pena destacar que si bien es posible reliquidar un legajo sin que sea necesario anular previamente la liquidación, si la necesidad de reliquidar se origina en que se cometió algún error en el ingreso de novedades y éstas deben eliminarse, el sistema controla que al momento de eliminar las novedades de determinado legajo, éste no esté liquidado ni en esa liquidación ni en ninguna posterior. Por lo cual, en ese caso, obligatoriamente deberá procederse a la anulación de la liquidación y, una vez que ésta se ha anulado, se podrán realizar todas las modificaciones de novedades que correspondan; luego, se podrá reliquidar nuevamente."]],"3":[["Liquidaciones"]],"id":"130"})