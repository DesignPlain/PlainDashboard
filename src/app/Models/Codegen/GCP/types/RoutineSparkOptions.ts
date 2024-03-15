export interface RoutineSparkOptions {
  // Custom container image for the runtime environment.
  ContainerImage?: string;

  /*
The fully qualified name of a class in jarUris, for example, com.example.wordcount.
Exactly one of mainClass and main_jar_uri field should be set for Java/Scala language type.
*/
  MainClass?: string;

  /*
The main file/jar URI of the Spark application.
Exactly one of the definitionBody field and the mainFileUri field must be set for Python.
Exactly one of mainClass and mainFileUri field should be set for Java/Scala language type.
*/
  MainFileUri?: string;

  // JARs to include on the driver and executor CLASSPATH. For more information about Apache Spark, see Apache Spark.
  JarUris?: Array<string>;

  /*
Configuration properties as a set of key/value pairs, which will be passed on to the Spark application.
For more information, see Apache Spark and the procedure option list.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
*/
  Properties?: Map<string, string>;

  // Python files to be placed on the PYTHONPATH for PySpark application. Supported file types: .py, .egg, and .zip. For more information about Apache Spark, see Apache Spark.
  PyFileUris?: Array<string>;

  // Runtime version. If not specified, the default runtime version is used.
  RuntimeVersion?: string;

  // Archive files to be extracted into the working directory of each executor. For more information about Apache Spark, see Apache Spark.
  ArchiveUris?: Array<string>;

  /*
Fully qualified name of the user-provided Spark connection object.
Format: "projects/{projectId}/locations/{locationId}/connections/{connectionId}"
*/
  Connection?: string;

  // Files to be placed in the working directory of each executor. For more information about Apache Spark, see Apache Spark.
  FileUris?: Array<string>;
}
