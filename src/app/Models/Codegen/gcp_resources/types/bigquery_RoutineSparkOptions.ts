import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface bigquery_RoutineSparkOptions {
  // Files to be placed in the working directory of each executor. For more information about Apache Spark, see Apache Spark.
  fileUris?: Array<string>;

  /*
The main file/jar URI of the Spark application.
Exactly one of the definitionBody field and the mainFileUri field must be set for Python.
Exactly one of mainClass and mainFileUri field should be set for Java/Scala language type.
*/
  mainFileUri?: string;

  // Python files to be placed on the PYTHONPATH for PySpark application. Supported file types: .py, .egg, and .zip. For more information about Apache Spark, see Apache Spark.
  pyFileUris?: Array<string>;

  // Runtime version. If not specified, the default runtime version is used.
  runtimeVersion?: string;

  // Archive files to be extracted into the working directory of each executor. For more information about Apache Spark, see Apache Spark.
  archiveUris?: Array<string>;

  // Custom container image for the runtime environment.
  containerImage?: string;

  // JARs to include on the driver and executor CLASSPATH. For more information about Apache Spark, see Apache Spark.
  jarUris?: Array<string>;

  /*
The fully qualified name of a class in jarUris, for example, com.example.wordcount.
Exactly one of mainClass and main_jar_uri field should be set for Java/Scala language type.
*/
  mainClass?: string;

  /*
Configuration properties as a set of key/value pairs, which will be passed on to the Spark application.
For more information, see Apache Spark and the procedure option list.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
*/
  properties?: Map<string, string>;

  /*
Fully qualified name of the user-provided Spark connection object.
Format: "projects/{projectId}/locations/{locationId}/connections/{connectionId}"
*/
  connection?: string;
}

export function bigquery_RoutineSparkOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "connection",
      'Fully qualified name of the user-provided Spark connection object.\nFormat: "projects/{projectId}/locations/{locationId}/connections/{connectionId}"',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "runtimeVersion",
      "Runtime version. If not specified, the default runtime version is used.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mainFileUri",
      "The main file/jar URI of the Spark application.\nExactly one of the definitionBody field and the mainFileUri field must be set for Python.\nExactly one of mainClass and mainFileUri field should be set for Java/Scala language type.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "pyFileUris",
      "Python files to be placed on the PYTHONPATH for PySpark application. Supported file types: .py, .egg, and .zip. For more information about Apache Spark, see Apache Spark.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "archiveUris",
      "Archive files to be extracted into the working directory of each executor. For more information about Apache Spark, see Apache Spark.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "containerImage",
      "Custom container image for the runtime environment.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "jarUris",
      "JARs to include on the driver and executor CLASSPATH. For more information about Apache Spark, see Apache Spark.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mainClass",
      "The fully qualified name of a class in jarUris, for example, com.example.wordcount.\nExactly one of mainClass and main_jar_uri field should be set for Java/Scala language type.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "properties",
      'Configuration properties as a set of key/value pairs, which will be passed on to the Spark application.\nFor more information, see Apache Spark and the procedure option list.\nAn object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.',
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "fileUris",
      "Files to be placed in the working directory of each executor. For more information about Apache Spark, see Apache Spark.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
