rh._.exports({"0":[[" ","Sucesos"]],"1":[[" ","Sucesos"]],"2":[[" "," Código"," ","Identifica al ","Suceso"," que se define. Alfanumérico de hasta 8 caracteres."," ","Descripción"," ","Texto que se exhibe, cada vez que se invoca al Suceso, conjuntamente con el código."," "," Establecer topes"," ","En caso que se active este campo se habilita la ficha Topes."," ","En ella se informan los topes a tener en cuenta al momento de ingresar novedades. Los valores que se informen en la ficha Topes actúan conjuntamente con los que pudieran haberse indicado en la clase de suceso asociada al suceso."," "," Varios"," ","Esta ficha permite asociar una serie de datos que determinan el perfil del suceso."," "," Clase de Suceso"," ","Seleccionar la Clase de suceso a asociar al Suceso"," ","El Tratamiento correspondiente a la Clase de sucesos que se seleccione determina el tipo de novedad al que está destinado el Suceso."," "," Documento de texto"," ","Es posible asociar un documento de Word a los sucesos que se habiliten."," ","El documento puede imprimirse cada vez que se informen novedades asociadas al suceso al cual se asocia."," ","El documento puede incluir datos particulares de los legajos para los cuáles se informa la novedad a la cual se asocia el suceso y también datos relativos a la novedad que se informa."," ","Un ejemplo puede ser el caso en que se requiera imprimir los contratos de trabajo que se pactan con los empleados. En ese caso se escribirá el documento en Word y se incluirán las variables correspondientes a los datos de los legajos que se requieran, las fechas de firma y de vencimiento del contrato y cualquier otro dato informado en la novedad que pueda resultar de interés."," "," Situación"," ","Si al informar una novedad en relación a uno o más legajos, el suceso correspondiente tiene informado un dato en este campo, dicho dato reemplaza a los que figuran en la ficha ","SIJP-ANSeS"," de los correspondientes legajos."," "," Requiere notificación"," ","En caso que al informar una novedad de personal se requiera registrar también que el empleado debe presentar un certificado que avale la misma, y realizar el seguimiento de su entrega, se debe activar este campo."," ","Por ejemplo en sucesos destinados a informar novedades relacionadas a licencias por examen o por enfermedad donde suele ser común que los empleados deban presentar los correspondientes certificados."," "," Días previstos"," ","En caso de indicar que se Requiere notificación se debe indicar, en este campo, la cantidad de días que dispone el empleado, a partir de la fecha en la que se toma la licencia, para presentar el certificado correspondiente."," "," Vinculado a la liquidación"," ","Si se activa este campo el suceso sólo se podrá asociar a novedades que se informen mediante las tareas destinadas a informar Novedades por legajo y Novedades por concepto."," "," Alerta de vencimiento"," ","Si se activa este campo la información vinculada al suceso estará disponible en las alertas."," "," Suceso de vacaciones"," ","Permite identificar a un suceso como de tipo Vacaciones."," ","Si en un determinado suceso, se encuentra tildado el campo Suceso de vacaciones y, al momento de ingresar a la tarea destinada al ingreso de novedades de este tipo, se utiliza dicho suceso, el campo Vacaciones, en la pantalla Novedades de licencias y vacaciones, aparece tildado."," "," Afecta Liquidadas"," ","Indica que afecta a la cuenta corriente de los días de vacaciones liquidadas. Se habilitan los campos bajo el título Concepto y/o variable habitual y el campo Vinculado a la liquidación se marca automáticamente y deben completarse obligatoriamente."," ","Al informarse por novedades un suceso con estas características la novedad solo afectará a la cuenta corriente de los días de vacaciones liquidados. Las novedades que incluyan los sucesos con estas características se liquidan."," "," Afecta Gozadas"," ","Indica que el suceso afecta a la cuenta corriente de los días de vacaciones gozadas, los campos bajos el título Concepto y/o variable habitual están deshabilitados, no pudiendo ingresarse ningún dato a los mismos. El campo Vinculado a la liquidación queda desmarcado. Al informarse por novedades un suceso con esta configuración la novedad sólo afectará a la cuenta corriente de los días de vacaciones. Las novedades que incluyan los sucesos con estas características no se liquidan."," "," Suceso de suspensión"," ","En caso que el suceso seleccionado corresponda a Novedades de suspensión se habilita esta opción para determinar como tales solo aquellos registros que correspondan con esta característica."," "," Suceso de incorporación a un puesto"," ","En caso que el suceso seleccionado corresponda a"," ","un tratamiento de Cambio de Puesto"," ","se habilita esta opción para determinar"," ","si el suceso corresponde a un registro de alta a un puesto determinado en el organigrama"," "," Suceso de baja en un puesto"," "," En caso que el suceso seleccionado corresponda a un tratamiento de Cambio de Puesto se habilita esta opción para determinar si el suceso corresponde a un registro de baja a un puesto determinado en el organigrama"," "," Habilitado para Autogestión"," ","Permite incorporar o quitar el Suceso a la web de autogestión. Si está habilitado, los empleados pueden solicitar licencias asociadas a este suceso desde dicha web."," ","Alias: texto que se refleja en la web de autogestión"," "," Concepto y/o variable habitual"," ","Si el Suceso está vinculado a la Liquidación es posible ingresar información en este cuadro."," ","El objetivo es informar un concepto y, si se requiere, una variable de modo que estos se ofrezcan por defecto, al utilizar el suceso."," "," Clase"," ","Se debe seleccionar la clase correspondiente al concepto a ofrecer por defecto en relación a las novedades asociadas al suceso:"," ","Haberes"," ","Retenciones"," ","Contribuciones"," ","Salario Familiar"," ","Redondeo"," "," Número"," ","Número de concepto, correspondiente a la clase indicada, que se ofrecerá por defecto."," "," Variable"," ","En el caso de sucesos que se liquidan y que no corresponden a licencias, se puede indicar la Variable que se precargará por defecto en la pantalla de carga de novedades."," ","Si el concepto que se informa en Número tiene asociada una variable requerida ésta se ofrece en este campo, pudiendo modificarse libremente."," ","Si el tratamiento del suceso corresponde a Licencia, con o sin goce de haberes, sólo es posible informar variables que acumulen por licencia."," "," Topes"," ","Esta ficha se activa solamente en caso de haber activado el campo Establecer topes."," ","Está destinada a indicar controles, en relación a los valores máximos, que se pueden informar por novedades. Los topes que se indiquen  actúan conjuntamente con los que pudieran haberse indicado en la clase de suceso asociada al suceso."," "," Por Atributo"," ","Atributo en base a cuyos valores se establecerán los valores máximos a considerar como topes."," "," Por Convenio"," ","Convenio en base a cuyos valores se establecerán los valores máximos a considerar como topes."," "," Advertencia"," ","Si está activado, en caso de informar una novedad tal que se superen los valores informados, se emite un mensaje de alerta al usuario dejando en sus manos la decisión de continuar, o no, con la tarea."," "," Restrictivo"," ","Si se activa, en caso de informar una novedad tal que se superen los valores informados, se emite un aviso de error y no se permite su registración en el sistema."," "," Topes"," ","Este cuadro está destinado a informar los valores máximos."," ","Incluirá una línea por cada valor del atributo o convenio para el cual interese informar topes."," ","Valor\n  "," ","Valor del atributo para el cual se indican los valores a considerar como máximos."," ","Novedad"," ","Tope a considerar en el ingreso de novedades."," ","Si se ingresa una novedad asociada al suceso y la cantidad o importe de la misma supera el valor que aquí se informe, se emitirá un mensaje de advertencia o prohibición, según corresponda."," ","Mes"," ","Tope mensual a tener en cuenta en relación al ingreso de novedades."," ","Si dentro de un mismo mes se informan novedades asociadas al suceso de modo tal que la suma de las cantidades o importes involucrados supere el valor que aquí se informe, se emitirá un mensaje de advertencia o prohibición, según corresponda."," ","Año"," ","Tope anual a tener en cuenta en relación al ingreso de novedades."," ","Si dentro de un determinado año se informan novedades asociadas al suceso de modo tal que la suma de las cantidades o importes involucrados supere el valor que aquí se informe, se emitirá un mensaje de advertencia o prohibición, según corresponda."," "," Días hábiles"," ","Esta ficha se habilita si se habilitó en los parámetros del sistema la licencia por días hábiles."," ","Se puede seleccionar:"," ","Por atributo"," ","Por convenio"," ","Si  se selecciona la opción “por Atributo”, se deberá seleccionar luego un atributo y todos los valores de dicho atributo que se quiere que tengan en cuenta solo los días hábiles al momento de cargar una licencia."," ","Del mismo modo, si se selecciona “Por Convenio”, se deberán seleccionar todos los convenios que se quiere que tengan en cuenta solo los días hábiles al momento de cargar una licencia.","."," ","Vale aclarar que no es posible establecer días hábiles combinados para un mismo Suceso, es decir, los días hábiles para un determinado suceso se establecen por atributo o por convenio."," "," Para tener en cuenta:"," ","Es posible definir permisos de seguridad en función a los sucesos, para más detalles sobre este tema consultar ","Cómo definir los permisos","."," ","Es posible indicar también topes en la clase de sucesos que se asocia a un suceso."," ","Si se establecen topes para un suceso y para la clase de sucesos que se ha asociado, las novedades que lo utilicen tienen en cuenta ambos valores para efectuar el control."," ","En ese caso el valor que se ingrese como novedad quedará limitado por el tope que se alcance primero. Por lo cual, en la práctica, en caso que la clase de sucesos establezca topes, los topes de los sucesos sólo tienen aplicación si son menores a los topes establecidos en la clase de sucesos que tienen asociada."," ","Los topes de una clase de sucesos establecen controles sobre la suma de las novedades correspondientes a todos los sucesos asociados a la clase de sucesos de la que se trate. Así, al informar novedades en relación a dichos sucesos, se controlará que la suma de las cantidades o importes correspondientes a las mismas no superen los valores máximos informados para la clase de suceso correspondiente."," "," Establecer topes en un suceso asociado a la carga de Vacaciones permite controlar, durante el ingreso de novedades de licencias, que los días que tomará el empleado no excedan los que tiene disponible."," ","Para establecer el control de los días de vacaciones en el ingreso de novedades, es necesario parametrizar el suceso asociado a la carga de Vacaciones tildando el check box Establecer topes."," ","Al establecer topes en un suceso de vacaciones, el sistema determina en forma automática que dicho tope sea Restrictivo no siendo necesario establecer Atributos y valores."," ","BAS Laboro controla que los días informados en el ingreso de novedades no superen los días de vacaciones pendientes de gozar."]],"3":[["Sucesos"]],"id":"158"})