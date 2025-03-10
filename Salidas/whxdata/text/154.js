rh._.exports({"0":[[" ","De liquidación por legajo"]],"1":[[" ","De Liquidación por Legajo"]],"2":[[" ","Esta tarea permite informar novedades Vinculadas a la liquidación para uno o más legajos."," ","Si bien es posible informar novedades de personal, la tarea está destinada fundamentalmente al ingreso de novedades a utilizar en el proceso de liquidación, es decir, conceptos y valores de variables, dejando el ingreso de las novedades de personal a las tareas específicamente diseñadas a tal fin."," "," Suceso"," ","Se debe informar un ","Suceso"," que se haya definido como ","Vinculado a la liquidación","."," ","Para informar novedades destinadas al proceso de liquidación, la ","Clase de Sucesos"," asociada al Suceso debe tener asociado el tratamiento ","Sin particularidad","."," ","Para el caso de novedades de personal, el tratamiento a asociar al Suceso depende del tipo de novedad a informar."," ","Se debe tener en cuenta que sólo se pueden informar novedades para aquellos sucesos no denegados para el usuario según la ","definición de permisos","."," "," Validez"," ","Indica las liquidaciones para las cuales será valida la novedad que se informa."," "," Todas las liquidaciones"," ","La novedad será valida para todas las liquidaciones que se habiliten cuyos sus períodos incluyan la fecha de vigencia de dicha novedad."," "," Tipo de liquidación"," ","La novedad será válida sólo para las liquidaciones del tipo que se indica cuyos períodos incluyan la fecha de vigencia de la misma."," ","Si bien el campo exhibe el Tipo de liquidación correspondiente a la liquidación actual, la información puede modificarse libremente."," "," Vigencia"," ","Permite informar el rango de fechas en el cual es válida la novedad."," ","La novedad se incluirá en las liquidaciones que se hayan indicado en el cuadro Validez siempre y cuando el período de las mismas incluya la vigencia que se informe en este cuadro."," "," Rango de fechas"," ","Los campos Desde y Hasta indican la vigencia de la novedad."," "," Sin vencimiento"," ","Activando este campo la novedad tiene vigencia desde la fecha informada en el campo Desde y no tiene vencimiento."," "," Novedad para:"," "," Según que la novedad sea para un legajo en particular o para un grupo de legajos, se debe informar el código correspondiente al legajo, el atributo y el valor del mismo ó el convenio que definen al grupo de legajos."," ","Se debe tener en cuenta que sólo se pueden informar aquellos legajos y atributos no denegados para el usuario según la ","definición de permisos","."," ","Al registrar el legajo o el código del valor del atributo, si el suceso tiene asociados un Concepto y/o variable habitual, éstos se precargan en los campos correspondientes."," "," Conceptos de liquidación y variables"," ","Es posible registrar simultáneamente, en una misma novedad, varios conceptos y variables. Las variables pueden ser las requeridas por los conceptos que se informan u otras destinadas a conceptos informados en otras novedades."," ","Se debe tener en cuenta que sólo se pueden informar los conceptos y/o variables no denegados para el usuario actual según la ","definición de permisos","."," "," Conceptos de liquidación"," ","En esta tabla se ingresan los conceptos a informar como novedad."," ","Si el suceso que se asocia a la novedad tiene asociados un concepto y/o variable habitual éstos se ofrecerán como valores por defecto en los campos correspondientes de esta tabla, pudiendo modificarse libremente."," ","Clase"," ","Se debe seleccionar la que corresponda al concepto a informar."," ","Si la novedad sólo incluye valores de variables, el campo puede dejarse sin dato."," ","Si el suceso tiene asociada una clase de concepto, ésta se ofrece como valor por defecto en este campo."," ","Número"," ","Código del concepto a informar como novedad."," ","El número puede digitarse y también, en caso que la novedad incluya varios conceptos del tipo indicado, es posible seleccionarlos conjuntamente en la ventana de búsqueda y selección."," ","Si el suceso tiene asociado un número de concepto, éste se ofrece como valor por defecto en este campo."," "," Variables definibles"," ","Variable"," ","Se debe ingresar el código de la variable a informar en la novedad."," ","SI el sistema exhibe una variable en este campo significa que ésta figura como \"Variable requerida\" en algún concepto que se ha informado como novedad en una instancia anterior pero que, en esa oportunidad, no se ha informado el valor a asignar a la misma. Es por ello que se la requiere nuevamente."," ","Si el suceso tiene asociada una variable, ésta se ofrece como valor por defecto en este campo."," ","Valor"," ","Valor a asignar a la variable que figura en el campo Variable."," ","En caso de que ya se hayan informado novedades para la variable en cuestión, el valor reemplazará al existente o se adicionará a él, según que la variable \"Acumule valores\" o no."," ","Observaciones"," ","Permite registrar un texto de hasta 50 caracteres destinado a la emisión de recibos."," ","La observación que se ingresa está disponible en el formato de emisión de recibos para reemplazar o ser adicionada a la descripción del concepto al cual corresponde."," ","Si el concepto que se informa como novedad tiene asociada una observación, ésta se ofrece como valor \"por defecto\" en este campo."," "," Vincular a Simulación"," ","Si se activa, se indica que la novedad afectará a la o las liquidaciones de simulación de un determinado período."," ","Las novedades vinculadas a una liquidación de simulación solo serán liquidadas en dicha simulación y también serán eliminadas en caso que la simulación lo sea."," ","Es importante aclarar que si se informan novedades sin especificar un Tipo de liquidación asociado, dicha novedad también afectará a la liquidación de simulación."," ","Así mismo existe la posibilidad de crear una novedad de liquidación asociando dicha novedad a un tipo de liquidación simulación creada en el periodo, pero sin vincularla a la misma, con lo cual, aunque se elimine la liquidación, la novedad permanece."," "," Centro de apropiación"," "," Si la novedad se debe imputar a uno o a dos centros de apropiación, en particular, se deben ingresar los correspondientes códigos."," ","Si no se ingresa información se asume que la novedad corresponde a los centros de apropiación asociados al legajo en la tabla ","Legajos"," o a los que se hayan informado como novedad mediante la tarea ","Novedades de rotación de personal",", en correspondencia a la fecha de vigencia de la novedad."," ","Se debe tener en cuenta que sólo se pueden informar aquellos centros de apropiación no denegados para el usuario según la ","definición de permisos","."," "," Consulta de conceptos y variables vigentes"," ","Permite consultar las novedades vigentes para una liquidación determinada."," ","El sistema ofrece, por defecto, los datos correspondientes a la liquidación actual pero es posible ingresar los datos correspondientes a cualquier liquidación."," ","Para realizar la consulta se debe presionar el botón ","Refrescar","."," "," Administración de personal"," ","Esta ficha sólo se habilita si el ","Suceso"," tiene asociado alguno de los siguientes tratamientos:"," ","Adelanto de haberes"," ","Contrato de trabajo"," ","Evaluación"," ","Egreso, Ingreso o Reingreso"," ","Sanción disciplinaria"," ","Según cual sea el tratamiento del Suceso son los datos que se deben completar."," ","En el caso de ","Egreso",", ","Ingreso"," y ","Reingreso"," se deben informar las fechas correspondientes a tales situaciones. Si se trata de un ","Adelanto de haberes"," se debe ingresar el importe correspondiente."," ","Para los ","Contratos de trabajo"," se deben informar las fechas en la cuáles se producen sus vencimientos."," ","Para ","Evaluaciones"," se solicita el resultado de las mismas y, por último, para una ","Sanción"," ","disciplinaria",", la fecha desde la cual entra en vigencia y la cantidad de días que abarca."," "," Notificaciones"," ","Esta ficha sólo se habilita si el ","Suceso"," asociado a la novedad se ha definido con el campo Requiere notificación activado."," "," Fecha prevista"," ","Exhibe una fecha que corresponde a la fecha de la novedad más la cantidad de días que figuran en el campo Días previstos del suceso informado."," "," Notificación efectuada"," ","Se debe activar en caso que al momento de registrar la novedad ya se haya realizado la notificación."," "," Fecha"," ","Corresponde a la fecha en la cual se realizó la notificación. Sólo debe completarse en caso de haber indicado que la notificación fue efectuada."," "," Comentario"," ","Si se requiere es posible informar un texto asociado a la notificación."," "," Grabar"," ","Si las variables o sucesos establecen topes y éstos se han superado, se emite un mensaje de advertencia o prohibición, según corresponda."," ","Si la novedad es de personal y tiene un documento asociado se pide confirmación para continuar con la tarea y, en caso afirmativo, se da la posibilidad de imprimir, o no, dicho documento."," "," Para tener en cuenta:"," ","Para poder consultar novedades en la ficha Consulta de conceptos y variables vigentes se debe presionar el botón Refrescar. Por lo cual, tanto al ingresar a la ficha como en el caso que estando en ella se cambia la liquidación a consultar, se debe volver a presionar dicho botón. Una vez presionado es deshabilitado automáticamente."," ","Para poder grabar la novedad se requiere que, al menos, ésta incluya una variable o un concepto de liquidación. Por lo cual, no es posible utilizar la tarea para informar novedades de personal en forma aislada; éstas deberán acompañarse de alguna variable o concepto de liquidación."," ","Si la novedad es de personal y fue ingresada en relación a un atributo, en caso de tener documento de texto asociado, se imprimirán tantos documentos como legajos cumplan con el atributo y valor informados."," ","El sistema evalúa que el Mes y Año para el que fue ingresada la novedad sea el mismo de la liquidación actual, caso contrario informa de la situación mediante un mensaje y el usuario dispone si desea actualizarla o no."," ","Bas Laboro evalúa también, que el Tipo de liquidación para el que fue ingresada la novedad sea el mismo de la liquidación actual, caso contrario informa mediante un mensaje y el usuario dispone si desea actualizarla o no. Si no se ingresó un tipo particular de liquidación esta evaluación queda sin efecto."]],"3":[["De liquidación por legajo"]],"id":"154"})