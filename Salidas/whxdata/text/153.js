rh._.exports({"0":[[" ","De liquidación por concepto"]],"1":[["De liquidación por concepto"]],"2":[[" ","De liquidación por concepto"]],"3":[[" ","Esta tarea permite informar novedades Vinculadas a la liquidación para uno o más legajos."," ","Si bien es posible informar novedades de personal, la tarea está destinada fundamentalmente al ingreso de novedades a utilizar en el proceso de liquidación, es decir, conceptos y valores de variables, dejando el ingreso de las novedades de personal a las tareas específicamente diseñadas a tal fin."," "," Suceso"," ","Se debe informar un ","Suceso"," que se haya definido como ","Vinculado a la liquidación","."," ","Para informar novedades destinadas al proceso de liquidación, la ","Clase de Sucesos"," asociada al Suceso debe tener asociado el tratamiento ","Sin particularidad","."," ","Para el caso de novedades de personal, el tratamiento asociado al Suceso depende del tipo de novedad a informar."," ","Si el suceso que se informa tiene asociados un Concepto y/o variable habitual, éstos se precargan en los campos correspondientes."," ","Se debe tener en cuenta que sólo se pueden informar novedades para los sucesos no denegados para el usuario actual según la ","definición de permisos","."," "," Validez"," ","Indica las liquidaciones para las cuales será valida la novedad que se informa."," "," Todas las liquidaciones"," ","La novedad será valida para todas las liquidaciones que se habiliten siempre y cuando sus períodos incluyan la fecha de vigencia de dicha novedad."," "," Tipo de liquidación"," ","La novedad será válida sólo para las liquidaciones del tipo que se indica cuyos períodos incluyan la fecha de vigencia de la misma."," ","Si bien el campo exhibe el Tipo de liquidación correspondiente a la liquidación actual, la información puede modificarse libremente."," "," Vigencia"," ","Permite informar el rango de fechas en el cual es válida la novedad."," ","La novedad se incluirá en las liquidaciones que se hayan indicado en el cuadro Validez siempre y cuando el período de las mismas incluyan la vigencia que se informe en este cuadro."," "," Rango de fechas"," ","Los campos Desde y Hasta indican la vigencia de la novedad."," "," Sin vencimiento"," ","Activando este campo la novedad tiene vigencia desde la fecha informada en el campo Desde y no tiene vencimiento."," "," Concepto/Variable:"," ","Si el suceso que se asocia a la novedad tiene asociados un concepto y/o variable habitual éstos se ofrecerán como valores por defecto en los campos correspondientes de este cuadro, pudiendo modificarse libremente."," ","Si el concepto que se informa tiene asociada una variable requerida, ésta tiene prioridad sobre la variable habitual correspondiente al Suceso, en caso que existiese."," ","Se debe tener en cuenta que sólo se pueden informar los conceptos y/o variables no denegados para el usuario actual según la ","definición de permisos","."," "," Clase"," ","Clase del concepto a informar en la novedad."," ","Si la tarea se utiliza para informar solamente valores de variable, el campo se puede dejar sin información."," ","Si el suceso tiene asociada una clase de concepto, ésta se ofrece como valor por defecto en este campo."," ","Número"," ","Código del concepto que se informa como novedad."," ","Sólo se debe ingresar si se indicó una clase de concepto en el campo anterior."," ","Si el suceso tiene asociado un número de concepto, éste se ofrece como valor por defecto en este campo."," ","Observaciones"," ","Permite registrar un texto de hasta 50 caracteres destinado a la emisión de recibos."," ","La observación que se ingresa está disponible en el formato de emisión de recibos para reemplazar o ser adicionada a la descripción del concepto al cual corresponde."," ","Si el concepto que se informa como novedad tiene asociada una observación, ésta se ofrece como valor por defecto en este campo."," ","Variable"," ","Se debe ingresar el código de la variable a informar en la novedad. Esta puede, o no, estar relacionada al concepto informado."," ","Si se indicó un concepto en el campo Número y éste fue definido con ","Variable requerida",", exhibe la variable informada en ese campo."," ","Si el suceso tiene asociada una variable, ésta se ofrece como valor por defecto en este campo."," ","Observaciones"," ","Permite registrar un texto de hasta 50 caracteres destinado a la emisión de recibos."," ","La observación que se ingresa está disponible en el formato de emisión de recibos para reemplazar o ser adicionada a la descripción del concepto al cual corresponde."," ","Si el concepto que se informa como novedad tiene asociada una observación, ésta se ofrece como valor por defecto en este campo."," "," Fecha de ocurrencia"," ","Fecha en que se registra la novedad."," "," Vincular a Simulación"," ","En caso que se active, se indica que la novedad afectará a la o las liquidaciones de simulación de un determinado período."," ","Las novedades vinculadas a una liquidación de simulación solo serán liquidadas en dicha simulación y también serán eliminadas en caso que la simulación lo sea."," ","Es importante aclarar que si se informan novedades sin especificar un Tipo de liquidación asociado, dicha novedad también afectará a la liquidación de simulación. Así mismo existe la posibilidad de crear una novedad de liquidación asociando dicha novedad a un tipo de liquidación simulación creada en el periodo, pero sin vincularla a la misma, con lo cual, aunque se elimine la liquidación, la novedad permanece."," "," Centro de apropiación"," "," Si la novedad se debe imputar a algún centro de apropiación, en particular, se deben ingresar los correspondientes códigos."," ","Si no se ingresa información se asume que la novedad corresponde a los centros de apropiación asociados al legajo en la tabla ","Legajos"," o a los que se hayan informado como novedad mediante la tarea ","Novedades de rotación de personal",", en correspondencia a la fecha de vigencia de la novedad."," ","Se debe tener en cuenta que sólo se pueden informar los centros de apropiación no denegados para el usuario actual según la ","definición de permisos","."," "," Legajos"," "," Novedades"," ","Legajo"," ","Código del legajo para el cual se informa la novedad."," ","El código puede digitarse y también, en caso que la novedad se informe para varios legajos, es posible seleccionarlos conjuntamente en la ventana de búsqueda y selección."," ","Se debe tener en cuenta que sólo se pueden informar los legajos no denegados para el usuario actual según la ","definición de permisos","."," ","Valor"," ","Valor a asignar a la variable informada en el campo Variable."," ","Para ingresar el valor directamente se debe indicar Nuevo valor."," ","Si se desea que el valor sea calculado por el sistema en base al valor actual de la variable se deben utilizar los botones ","Modificación aplicando porcentajes"," y ","Modificación aplicando importe","."," ","Para ver los detalles relativos a la carga de los valores de la variable ver ","Modificación de valores","."," ","Vigente"," ","Exhibe el valor actual de la variable. Para ello se debe presionar el botón ","Valores vigentes","."," ","Final"," ","Valor resultante de la variable. Tiene en cuenta el valor vigente y el valor informado o modificación que se haya indicado."," ","Para visualizarlo se debe presionar el botón Valores vigentes."," ","Modificación de valores"," ","Para ingresar los valores de la variable se dispone de tres botones:"," "," Nuevo valor"," "," Modificación aplicando importe"," "," Modificación adicionando importe"," ","Para ingresar los nuevos valores, uno por uno, se debe seleccionar Nuevo valor e ingresar los valores a asignar a la variable en la columna Valor. En ese caso la columna Final, destinada a mostrar los valores resultantes de la variable, exhibirá los mismos valores que se han ingresado en la columna  Nuevo valor."," ","Si se desea incrementar en una suma fija el valor de la variable, se debe seleccionar ","Modificación adicionando"," ","importe"," e informar el importe a adicionar."," ","Si se desea afectar a los valores de la variable por un porcentaje se debe seleccionar ","Modificación aplicando"," ","porcentaje"," e ingresar el porcentaje a aplicar en el campo correspondiente."," ","En ambos casos se debe presionar el botón ","Valores vigentes a"," para visualizar el valor vigente y el valor final de la variable a una determinada liquidación."," ","También, en ambos casos, esta forma de actualizar los contenidos de una variable no es aplicable para variables que fueron definidas como acumulativas."," "," Valores vigentes"," ","Sólo se activa en caso de haber indicado una variable en el campo ","Variable","."," ","Al presionarlo, para los legajos que se hayan indicado se exhibe, en la columna ","Vigentes",", los valores actuales de la variable indicada en el campo ","Variable","."," ","  Grabar"," ","Si las variables o sucesos establecen topes y éstos se han superado, se emite un mensaje de advertencia o prohibición, según corresponda."," ","Si la novedad es de personal y tiene un documento asociado se pide confirmación para continuar con la tarea y, en caso afirmativo, se da la posibilidad de imprimir, o no, dicho documento."," ","Importación de datos desde archivos externos"," "," Para tener en cuenta:"," ","Para poder grabar la novedad se requiere que, al menos, ésta incluya una variable o un concepto de liquidación. Por lo cual, no es posible utilizar la tarea para informar novedades de personal en forma aislada. estas deberán acompañarse de alguna variable o concepto de liquidación."," ","Si la novedad es de personal y fue ingresada en relación a un atributo, en caso de tener documento de texto asociado, se imprimirán tantos documentos como legajos cumplan con el atributo y valor informados."]],"id":"153"})