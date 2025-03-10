rh._.exports({"0":[[" ","Legajos"]],"1":[[" ","Legajos"]],"2":[[" ","Una vez registrados los datos personales de los empleados en la tabla ","Personas",", se deben ingresar otra serie de datos, de carácter fundamentalmente operativo en esta tabla."," ","Esta tabla es privativa de cada una de las empresas, por lo cual, el alta o modificación de los legajos tiene lugar en la empresa en la cual se está operando. Si se debe actuar sobre legajos de otra empresa, es necesario cambiarse de empresa y, luego, realizar la tarea de la cual se trate."," ","Legajo"," ","Código que se asigna a la persona en la empresa actual."," ","Cada empleado de la organización, representado por una Persona en la tabla correspondiente, puede trabajar en cualquiera de las empresas asignándole un código de legajo."," "," Personas"," ","Código de la ","Persona"," correspondiente al legajo."," "," Liquidaciones"," "," Fecha de ingreso y Fecha base de antigüedad"," ","Ambos datos se incorporan al legajo mediante una novedad de personal."," ","Esta debe informarse en relación a un ","Suceso"," cuya ","Clase de sucesos"," tenga asociado el tratamiento Ingreso."," ","La Fecha base de antigüedad"," puede modificarse directamente desde este campo, sin necesidad de registrar una novedad.\n  "," "," Fecha base de indemnización"," ","Este dato no se ingresa en forma directa sino que se incorpora conjuntamente a las dos fechas anteriores mediante una novedad de personal."," ","Está destinada al uso en las fórmulas de liquidación que se definan en relación a los conceptos indemnizatorios. Puede ser útil, por ejemplo, si al discontinuar la relación con el empleado se le debe reconocer, para el cálculo de la indemnización, la antigüedad en otra empresa del grupo."," "," Fecha de egreso"," ","Este dato no se ingresa en forma directa sino que se incorpora mediante una novedad de personal."," ","Esta se debe informar en relación a un ","Suceso"," cuya ","Clase de sucesos"," tenga asociado el tratamiento Egreso."," ","Los legajos con fecha de egreso pueden admitir liquidaciones de cualquier tipo siempre y cuando la fecha de las mismas sea anterior a la fecha de egreso."," ","Una vez alcanzada la fecha de egreso sólo se podrá efectuar liquidaciones de tipo egreso, es decir, liquidaciones cuyo tipo se haya definido con el campo Liquidación final activado."," "," Convenio"," ","Este dato es de carácter obligatorio."," ","El ","convenio"," permite informar los días de vacaciones que corresponden de acuerdo a la antigüedad del legajo y, en caso que corresponda, el plus a pagar por antigüedad."," ","En aquellos casos que el convenio tenga asignados valores de categoría, se incluirá como opción para seleccionar el correspondiente valor según corresponda."," "," Categoría"," ","Este campo esta habilitado para su carga si el convenio de trabajo asociado, tiene asignados valores de categoría, en dicho caso, permite asignar dicho código de categoría según corresponda al legajo."," ","En los casos que el convenio de trabajo no tenga asignados valores de categoría, el campo no estará disponible para su selección."," "," Centros de apropiación"," ","Permite registrar los elementos que conforman los centros de apropiación correspondientes a las familias de centros de apropiación A y B."," ","Los centros de apropiación que se definan están destinados a la imputación de cuentas que se administran mediante centros de apropiación."," ","Días de vacaciones"," ","Este dato debe completarse si el empleado acuerda con la empresa diferente cantidad de días de vacaciones para tomarse que las que corresponde liquidar de acuerdo al convenio que se le ha asociado."," ","También, en caso que no se utilice el convenio para informar la cantidad de días de vacaciones, éstos se informarán directamente en este campo y el sistema considerará que el dato corresponde a la cantidad de días de vacaciones acordadas y a liquidar."," ","Al informar días de vacaciones, es posible parametrizar el sistema para que controle que no se registran una mayor cantidad de días de los indicados en este campo."," "," Atributos"," ","Esta ficha exhibe todos los ","Atributos de Legajos"," que se han definido en la empresa. Para cada uno se debe informar el valor que corresponda al legajo."," ","El valor que se ofrece para cada uno de ellos, es el que se ha informado como valor Por defecto al momento de incorporarlos a la tabla correspondiente."," "," SIJP-ANSES"," ","En esta ficha se deben suministrar una serie de datos destinados a la generación del archivo a exportar para el aplicativo SICOSS."," ","Buena parte de ellos provienen de las tablas que se agrupan en el submenú SIJP. Al completar la información de dichas tablas debe utilizarse la codificación requerida por la Agencia de recaudación nacional . de manera que los datos puedan ser tomados por el programa correspondiente en forma correcta."," ","En particular, el campo ","Días trabajados"," se actualiza automáticamente descontando a los días de convenio que corresponden al legajo los días de licencias sin goce de haberes que se hubiesen registrado. El cálculo y la actualización del campo se realizan cuando se efectúa una apertura de liquidación. Dicho cálculo se realiza en base a la liquidación activa considerando las novedades registradas hasta ese momento."," ","El campo Fecha de jubilación es utilizado para las alertas de liquidación."," "," Reparticiones"," ","Permite indicar las reparticiones en las que participa el legajo."," "," Repartición Obra Social:"," ","  Código"," ","Código de la repartición de tipo Obra Social que corresponde al legajo."," ","El numero de inscripción de la misma será el que se incluya al generar el archivo a exportar para el aplicativo SICOSS."," "," Otras reparticiones"," ","El informar las reparticiones asociadas al legajo permite, entre otros, emitir informes por repartición."," ","  Código"," ","Código de repartición. Esta puede corresponder a alguno de los siguientes tipos: Banco, AFJP u Otras."," ","N° de inscripción"," ","Dato identificatorio del legajo en relación a la repartición informada. En el caso de un banco, por ejemplo, puede informarse el número de cuenta."," "," Datos Generales"," ","En esta ficha es posible suministrar datos relativos al empleado correspondiente al legajo como, por ejemplo, su e-mail o número de teléfono."," "," Lugar de trabajo"," ","Este dato proviene de la tabla","Lugar de trabajo"," y está destinado a la emisión de recibos."," ","Al incluir el lugar de pago en los recibos, si el legajo tiene especificado un lugar de pago, se imprime dicho lugar. En caso contrario se imprime el lugar de pago genérico correspondiente a la liquidación."," ","Oficina, e-mail, teléfonos"," ","En caso que se requieran algunos de estos datos, deberán completarse los campos correspondientes."," "," Autogestión"," ","Esta ficha muestra la información disponible sobre mánagers y empleado para autogestión. En la grilla \"Mánagers\" se detallan todos los mánagers de la Persona que poseen un legajo activo en la empresa actual, mientras que en la grilla \"Personas a cargo\" se detallan las personas que tiene a su cargo la Persona, que poseen un legajo activo en la empresa actual."," "," Publicar recibos"," ","Permite habilitar o deshabilitar la publicación de los recibos del legajo en la web de autogestión."," "," Publicar planilla ganancias"," ","Mediante este campo se dispone de la opción de no publicar la Planilla de Ganancias para determinados Legajos en la web de Autogestión. Para deshabilitar dicha publicación basta con destildar este campo."," "," Alta de Novedad de Ingreso"," ","Al grabar un registro en la tabla se ofrece, como opción, generar la novedad de ingreso."," ","Si se indica la opción ","SI",", automáticamente, se genera la apertura de la pantalla de Novedades de personal correspondiente al ingreso del mismo; por el contrario si se selecciona la opción ","NO",", solo grabará los datos asignados a la tabla de legajos, debiendo posteriormente ingresar en forma manual a las opciones de novedad de personal."," ","Definir seguridad"," ","Este botón sólo se habilita cuando el usuario pertenece al grupo Administradores y luego de indicar el legajo en el campo correspondiente."," ","Importación de legajos desde archivo externo"," "," Para tener en cuenta:"," ","El único dato que se requiere para grabar el registro es el Convenio asociado al legajo."]],"3":[["Legajos"]],"id":"150"})