rh._.exports({"0":[[" ","Conceptos de liquidación"]],"1":[["Conceptos de liquidación"]],"2":[[" ","Esta tabla permite definir los conceptos que se liquidan a los empleados. Estos pueden corresponder a haberes, retenciones, contribuciones, salario familiar o redondeos."," ","Se pueden establecer permisos de seguridad por conceptos. Para más detalle sobre este tema consultar el apartado ","Cómo definir los permisos","."," "," Clase"," ","Se debe seleccionar alguna entre:"," ","Haberes"," ","Retenciones"," ","Salario Familiar"," ","Contribuciones"," ","Redondeo"," ","La clase determina el orden en que se liquidan los conceptos y la columna del recibo donde se exhiben."," ","Número"," ","Número que identifica al concepto."," ","Es posible numerar los conceptos de cada clase desde 1 hasta 9999"," "," Sin retenciones"," ","Este campo está destinado a los conceptos de Haberes e indica si sobre él se efectuarán, o no, las retenciones que se definan."," ","Además los haberes con retenciones y los haberes sin retenciones se exhiben en los recibos en dos columnas diferentes."," "," Auxiliar"," ","Indica que si bien se ha de calcular el importe del concepto, éste no se incluirá en el recibo de sueldo."," ","Los conceptos auxiliares están destinados a fórmulas de liquidación complejas donde se deben realizar cálculos parciales intermedios de modo de obtener luego, en otro concepto, el resultado final."," "," Ganancias"," ","Este campo está destinado a indicar si el concepto participa del cálculo de la retención de dicho impuesto."," ","Esto permite que algunos informes y consultas del sistema manejen en forma conjunta todos los conceptos relacionados con la retención del impuesto a las ganancias de modo de incluirlos, o no, según se requiera."," "," Imputaciones contables por defecto"," ","Este cuadro permite indicar las cuentas del plan de cuentas que se debitan y acreditan al liquidar el concepto."," ","Las cuentas que se informan serán las que se imputen al liquidar el concepto, excepto en las liquidaciones que correspondan a tipos de liquidación para los cuáles se han indicado, específicamente, otras imputaciones contables."," "," Debe"," ","Imputación contable que se debita con el importe del concepto."," ","Puede imputarse directamente o a través de uno o dos centros de costos según las subcuentas que se hayan indicado en su definición."," "," Haber"," ","Imputación contable que se acredita con el importe del concepto."," ","Puede imputarse directamente o a través de uno o dos centros de costos según las subcuentas que se hayan indicado en su definición."," "," Fórmula"," ","Esta ficha está destinada fundamentalmente a la escritura de la fórmula a asociar al concepto."," ","Recibo\n  "," ","La información que se ingresa en este cuadro está destinada a la impresión del los recibos de sueldos."," "," Variable"," ","El contenido de la variable que acá se indique figurará en los recibos en una columna exclusivamente destinada a tal fin."," ","Por ejemplo, si se define un concepto Presentismo, y se indica en el campo ","Variable"," la variable ","ppr"," (porcentaje que se liquida) y, en el campo ","Unidad",", el símbolo \"","%\"",". El contenido de la variable ","ppr"," y el símbolo se exhiben en la cuarta y quinta columnas del recibo."," ","Unidad"," ","La unidad que se indica en este campo se exhibirá en la columna mencionada en el párrafo anterior a la derecha del contenido de la variable."," "," Comentarios"," ","Los campos Variable y Unidad son útiles cuando se desea incluir en el recibo, en relación a los conceptos, porcentajes o cantidades que han intervenido en su cálculo."," ","Por ejemplo, en el caso del concepto Presentismo, si éste se calcula como un 8.33% del sueldo bruto, puede indicarse en el campo Variable aquella que almacena el porcentaje 8.33 y, en el campo Unidad, indicar %."," ","Observaciones"," ","Texto que se incluirá en la impresión del recibo ya sea para reemplazar o para agregar a la descripción del concepto."," ","Esta observación se ofrece en el ingreso de novedades, como observación por defecto, pudiendo modificarse o directamente sustituirse por el texto que se requiera."," "," Variable requerida"," ","Este campo está destinado a las tareas de ingreso de novedades, Por concepto y Por legajo."," ","En caso que se desee que al informar un concepto en dichas tareas, el sistema exhiba una variable y solicite el valor de la misma, dicha variable debe informarse en este campo."," ","Así la tarea de ingreso de novedades actúa de ayuda memoria recordando al usuario que deben informarse determinadas variables."," "," Generador de fórmulas"," ","Este botón permite acceder al ","Generador de fórmulas",", asistente destinado a la escritura de la fórmula mediante la cual se calculará el importe del concepto."," "," Acumuladores definibles asociados"," ","En esta ficha se informan los acumuladores en los cuáles participa el concepto y, en caso que su importe se prorratee, la forma en que se realiza dicho prorrateo."," ","Acumuladores definibles\n  "," ","En esta tabla se indican los códigos de los acumuladores que se actualizan con el importe del concepto y si el importe de éste se suma o se resta a los contenidos de los mismos."," "," Información para prorrateo"," ","Es posible indicar que el importe de un concepto de liquidación se distribuya uniformemente a lo largo de determinados períodos. Para ello se debe indicar que dicho importe actualice los acumuladores, prorrateándose."," ","Para que el importe del concepto se prorratee en un acumulador se requiere también que en la definición de éste se indique Considera importes prorrateados."," "," No prorratea"," ","Si está activada el importe del concepto no se prorratea en ningún acumulador."," ","En meses restantes del año"," ","Se consideran los meses que restan del año (sin considerar el actual), se divide el importe del concepto entre esa cantidad de meses y se actualizan con dicho importe los acumuladores que han sido definidos con el campo Considera importes prorrateados."," ","En año calendario"," ","El importe del concepto se prorratea en relación a la cantidad de meses del año, en los acumuladores que correspondan."," ","En varios meses"," ","Este cuadro permite seleccionar determinados meses a tener en cuenta en el prorrateo."," "," Mes de liquidación"," ","Permite indicar si el mes correspondiente a la liquidación se debe tener en cuenta en el prorrateo."," ","Meses anteriores"," ","Número de 1 a 12 que indica la cantidad de meses anteriores al de la liquidación que se deben tener en cuenta al prorratear el importe."," ","Meses siguientes"," ","Número de 1 a 12 que indica la cantidad de meses posteriores al de la liquidación que se deben tener en cuenta al prorratear el importe."," "," Prorratea para ganancias"," ","Permite indicar si el importe del concepto se prorratea también para ganancias."," ","Para que los acumuladores se actualicen con el importe correspondiente, deben tener activada, además del campo Considera importes prorrateados, la opción Todos los meses del presente año impositivo, anteriores al mes de pago."," "," Para tener en cuenta:"," ","Cuando se prorratean meses hacia atrás, ya sea que se seleccione en año calendario o meses anteriores, se considera, para cada legajo, solamente los meses en que se le efectuaron liquidaciones. Es decir que, por ejemplo, si el concepto indica prorratear 4 meses anteriores, pero a un legajo se le han liquidado 3 meses anteriores, el prorrateo se efectuará sobre 3 meses."," ","También, en ambos casos, se debe tener en cuenta la fecha indicada en el parámetro Inicio de liquidación con el sistema."," ","Este parámetro está destinado a los casos en que se comienza a utilizar el sistema en determinada fecha y deben prorratearse meses hacia atrás que abarcan períodos anteriores a la fecha en que se comenzó a utilizar BAS Laboro."," ","Cuando un concepto indica prorratear en año calendario o en meses anteriores, el sistema consulta el parámetro y, si éste indica una fecha posterior al primer mes afectado por el prorrateo, se completa la información entre las dos fechas con las novedades existentes en el sistema en relación a Ingresos, Egresos, Reingresos y Licencias sin goce de sueldos)."," ","Así, si por ejemplo un concepto indica prorrateo en el año calendario, si el parámetro indica 08/2003 y si se está liquidando el mes 08/2003, para un legajo que ingresó el día 15/05/2003, el cálculo es el siguiente:"," ","Como el prorrateo indica en año calendario, debe realizarse desde enero/2003 a diciembre/2003. Como enero/2003 es anterior a agosto/2003, el sistema consulta las novedades de los tipos mencionados (Ingreso, Egreso, Reingreso y Licencias sin goce de sueldos) que ocurrieron en esos meses, encontrando el ingreso del legajo en mayo/2003. Por lo cual, para el prorrateo, considera los meses comprendidos entre mayo y diciembre pues el legajo tiene ingreso en mayo. De este modo el importe del concepto se divide en 8 partes iguales que se distribuyen en los meses de mayo, junio, julio, agosto, setiembre, octubre, noviembre y diciembre."," ","En caso que un legajo no haya tenido liquidaciones anteriores a la fecha indicada en Inicio de liquidación con el sistema y el método de prorrateo indique N meses anteriores, no se efectúa ningún prorrateo."," ","En caso que el sistema detecte que se han efectuado liquidaciones anteriores al mes que indica el parámetro Inicio de liquidación con el sistema el prorrateo asume la menor de las fechas entre la fecha de liquidación y la fecha de liquidación."," "," Tipos de liquidación"," ","Esta ficha indica los tipos de liquidación para los cuáles se encuentra habilitado el concepto del cual se trate y, en caso que corresponda, las cuentas que corresponde imputar."," "," Liquidaciones"," ","En esta tabla se deben indicar los tipos de liquidación para los cuáles se habilita la liquidación del concepto."," ","La tabla es de doble entrada, por lo cual, al incorporar un tipo de liquidación, éste exhibirá también el concepto para el cual se ha habilitado."," ","Código\n  "," ","Tipo de liquidación para el cual se habilita el concepto. AL acceder a la ventana de búsqueda pueden seleccionarse, en forma conjunta, todos los tipos de liquidación en las cuales participa el concepto."," "," Imputaciones contables"," ","Si se requiere, se deben indicar, las cuentas a imputar al liquidar el concepto."," ","Si los campos se dejan sin dato se imputan las cuentas informadas en el cuadro Imputaciones contables por defecto."," ","Debe\n  "," ","Imputación contable a debitar cuando se liquida el concepto."," ","Haber\n  "," ","Imputación contable a acreditar cuando se liquida el concepto."," "," Meses de liquidación"," ","Esta ficha permite indicar para qué meses se habilita el concepto que se define. Para ello bastará indicar, con un tilde, los meses que correspondan."," ","Al incorporar un nuevo concepto a la tabla, éste queda habilitado para ser liquidado en todos los meses del año."," ","Todos\n  "," ","Activando este botón se tildan en forma automática todos los meses del año."," "," Ninguno"," ","Activando este botón se destildan en forma automática todos los meses del año."," "," Centros de costos"," ","Las cuentas del plan de cuentas que se informan en los campos Debe o Haber del cuadro Imputación contable pueden imputarse a través de uno o de dos centros de costos, según se requiera."," ","Los importes a imputar a cada centro de costos se pueden determinar en base a diferentes criterios y éstos se deben informan en esta ficha."," ","La cantidad de días en base a la cual se realiza el prorrateo puede ser específicamente la que corresponde al período que se liquida o puede ser fija, independientemente del mes que se está liquidando."," ","Esto depende de la información que figure en el cuadro ","Prorrateo",", a ficha Inicialización de los ","Parámetros generales del sistema","."," ","Si se indica ","Cantidad de días del período a liquidar"," se divide la cantidad de días que el legajo trabajó en cada centro de costos por la cantidad de días del periodo."," ","Si se indica ","Cantidad de días del convenio",", en lugar de considerar la cantidad de días correspondiente al período a liquidar, se considera la cantidad de días que figura en el convenio asociado al legajo."," ","Si el concepto indica que el prorrateo es Por legajo automáticamente se consideran la cantidad de días del período que se liquida."," ","El centro de costo depende de",":"," ","Permite indicar el criterio en base al cual el importe del concepto se imputa a los centros de costos habilitados."," "," la novedad de la variable requerida"," ","Se puede aplicar en los casos en que el concepto requiere que se informe por novedad una variable. Para poder utilizarlo se requiere que la variable en cuestión se haya definido como acumulativa por ingreso de novedades."," ","Cada vez que se informe una novedad para la variable, se deberá indicar el centro de costos al que se imputa el importe correspondiente."," ","En caso que al informar la novedad no se indique ningún centro de costos, se utilizará el centro de costos en el cual estuvo el legajo el último día del período que se está liquidando."," ","Por lo cual, si no se informó ninguna rotación de personal, se tomará el centro que figura en el legajo y, si se informaron rotaciones del personal, se considerará el centro que corresponde al último día del período. SI ninguna de las rotaciones informadas incluye el día correspondiente al último día del período, y si no hay centro de costos informado en el legajo, se imputa directamente la cuenta sin imputar ningún centro de costos."," ","legajo"," ","Este método de prorrateo tiene en cuenta el centro de costos informado en el legajo y todas las novedades relativas a rotaciones de personal dentro del período liquidado."," ","Los factores que se utilizan al momento de realizar el prorrateo del importe entre los distintos centros surgen de la proporción de días que el legajo estuvo en cada centro en relación a los días totales que abarca el período."," ","En caso que las rotaciones informadas no cubran todo el período de liquidación, los días restantes se imputan al centro de costos informado en el legajo."," ","la novedad del concepto"," ","Se aplica cuando se requiere imputar directamente el importe resultante de liquidar el concepto a un centro de costos."," ","En este caso tanto el centro de costos como el concepto correspondiente se informan, simultáneamente, al informar la novedad relativa al concepto. Por lo cual, el importe del concepto se imputa en su totalidad al centro de costos indicado al informar la novedad. Esto es así independientemente de los centros de costos que tenga asociado el legajo y de las rotaciones de personal que se hayan informado en relación al mismo."," ","En caso que al informar la novedad no se indique ningún centro de costos, se imputará el centro de costos en el que estuvo el legajo el último día del período que se está liquidando. Por lo cual, si no se informó ninguna rotación de personal, se tomará el centro que figura en el legajo y, si se informaron rotaciones del personal, se considerará el centro que corresponde al último día del período que se liquida, es decir, el centro de costos correspondiente a la fecha Hasta del período."," ","SI ninguna de las rotaciones informadas incluye el día correspondiente al último del período, y si no hay centro de costos informados en el legajo, no se imputa ningún centro de costos."," ","la distribución de la misma liquidación"," ","En este caso se tienen en cuenta los centros de costos que se imputan en esa misma liquidación por otros conceptos."," ","Los centros de costos a imputar y la proporción en la cual serán imputados surgen de todos los conceptos que se liquidan conjuntamente con aquel que indica prorrateo según la distribución de la liquidación."," "," la distribución de liquidaciones anteriores"," ","En este caso los porcentajes en base a los cuáles se efectúa el prorrateo del importe del concepto surgen de la forma en que se imputaron los centros de costos en liquidaciones efectuadas con anterioridad a la que corresponde a la liquidación de dicho concepto."," ","Es posible prorratear el importe en función de lo que se ha liquidado en el último:"," ","Mes"," ","Bimestre"," ","Trimestre"," ","Cuatrimestre"," ","Semestre"," ","Año"," ","Desde el último cálculo de Aguinaldo"," ","Los períodos Bimestre, Trimestre, Cuatrimestre, Semestre y Año se definen en forma independiente del mes de liquidación, es decir, no son relativos a la misma."," ","Es decir que se consideran como Bimestres: enero-febrero, marzo-abril, mayo-junio, etc. Si, por ejemplo, se está liquidando mayo o junio, se considera marzo-abril como bimestre anterior."," ","Del mismo modo, se consideran como cuatrimestres los períodos: enero-abril, mayo-agosto y setiembre-diciembre. Por ejemplo, para liquidaciones realizadas en los meses mayo, junio, julio y agosto, el cuatrimestre anterior será enero-abril."," ","En caso que se seleccione Aguinaldo se consideran las liquidaciones realizadas desde la última liquidación en que se incluyó un concepto de aguinaldo al legajo, hasta la liquidación actual, inclusive."," ","Si un concepto indica este método de prorrateo, y si el sistema no encuentra ninguna distribución en relación a centros de costos en el período indicado (mes, bimestre, etc.), imputa el importe del concepto al centro de costos donde se desempeñó el legajo el último día del período de liquidación. En caso que no se haya informado ninguno, la cuenta se imputa directamente, sin tener en cuenta ninguna subcuenta."," ","También, en caso que haya diferencias de redondeo entre el importe liquidado en relación al concepto y los importes prorrateados, la diferencia se asigna a alguno de los centros de apropiación que participan del prorrateo."," "," Auxiliar habilitado para prorrateo"," ","La activación de esta opción permite utilizar conceptos auxiliares para establecer una distribución fija de los importes a liquidar y afectar, manteniendo dicha proporción, a los diferentes centros de costos."," ","Veamos un ejemplo:"," ","Supongamos que un empleado, que cobra un sueldo mensual, desempeña sus tareas en tres centros de costos a lo largo del mes."," ","La proporción en tiempo que divide sus tareas es la siguiente:"," ","Administración: 20%"," "," Producción: 50%"," "," Ventas:  30%"," ","Para prorratear todos los conceptos que se van a liquidar al empleado (haberes, retención, etc.) en forma correcta, se define un concepto auxiliar con las siguientes características:"," ","Contiene en su fórmula de cálculo una variable que acumula por ingreso de Novedad y es informada como variable requerida."," ","Está definido como Auxiliar habilitado para prorratear"," ","El centro de costos depende de: La novedad de la variable requerida"," ","Se informa una novedad sin vencimiento para cada centro asignando a la variable requerida el valor que corresponda (Ej. Administración: 20, Ventas: 30)."," ","El resto de los conceptos a liquidar se definen, en la ficha Centros de costos, con la opción ","la distribución de la misma liquidación","."," ","Como conclusión observamos que, el concepto auxiliar marca la distribución de la liquidación a través del ingreso de valores a la variable y, el resto de los conceptos adoptaran dicha distribución."," "," Comentarios"," ","El orden en que el sistema liquida los conceptos es: Haberes, Retenciones, Salario Familiar y, por último, los conceptos de Redondeo."," ","Para una misma clase, los conceptos se liquidan en orden numérico. El orden de liquidación es importante pues muchas veces hay conceptos que actualizan acumuladores que luego son utilizados por otros conceptos, por lo cual, deberán liquidarse primero de modo de actualizar los importes de dichos acumuladores. Si por ejemplo, el concepto Presentismo al cálculo del Presentismo en base al básico y a la antigüedad. En este caso el número a asignar al concepto Presentismo deberá ser superior a los que corresponden al Básico y a la Antigüedad de modo que al momento de liquidarlo el importe del acumulador se encuentre actualizado."," ","También la clase de los conceptos determina la columna en la cual éstos se exhiben en los recibos. Los conceptos de haberes pueden aparecer en dos columnas, una destinada a los haberes con retención y otra destinada a los haberes sin retención. La diferencia entre unos y otros radica en que se active, o no, el campo Sin retenciones de la tabla en la cual se los define."," ","Si el recibo incluye conceptos de redondeo y de salario familiar éstos se exhiben en la columna destinada a los haberes sin retenciones, los conceptos de retenciones se exhiben en una columna específica mientras que, las contribuciones, nunca forman parte del recibo de haberes."," "," Atención"," ","Es importante tener en cuenta que para que el sistema realice el prorrateo de centro de costos en base a la distribución de importes en las liquidaciones anteriores, deben haberse emitido los resúmenes contables de las liquidaciones anteriores que correspondan (bimestre, trimestre, etc.). Esto es así pues el cálculo del prorrateo entre centros de costos se efectúa al momento de emitir el resumen contable, por lo cual, si no se ha emitido, no se ha realizado ningún prorrateo."," ","Es muy importante tener presente que para que un concepto actualice el contenido de acumuladores prorrateando su importe, además de indicar tal situación en el concepto, se debe indicar también en el acumulador. En caso contrario, por más que en el concepto se indique que prorratee, los importes de los mismos no serán prorrateados."," "," Para tener en cuenta:"," ","Es posible definir permisos de seguridad en función a los conceptos, para más detalles sobre este tema consultar ","Cómo definir los permisos","."," ","En caso que se requiera, se dispone de la variable predefinida MSA que devuelve el valor 1 si en la liquidación se liquidaron conceptos que puedan haber modificado el valor de un acumulador que considera importes prorrateados."," ","A pesar de que un concepto esté habilitado para un determinado tipo de liquidación, sólo será liquidado si se lo informa como novedad para una liquidación de ese tipo. Del mismo modo, a pesar de que se informe un concepto como novedad en una liquidación, si éste no ha sido habilitado para liquidaciones de ese tipo, no será liquidado."]],"3":[[" ","Conceptos de liquidación"]],"id":"169"})