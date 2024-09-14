import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dataplex_TaskSparkInfrastructureSpec,
  dataplex_TaskSparkInfrastructureSpec_GetTypes,
} from "./dataplex_TaskSparkInfrastructureSpec";

export interface dataplex_TaskSpark {
  // Cloud Storage URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
  archiveUris?: Array<string>;

  // Cloud Storage URIs of files to be placed in the working directory of each executor.
  fileUris?: Array<string>;

  /*
Infrastructure specification for the execution.
Structure is documented below.
*/
  infrastructureSpec?: dataplex_TaskSparkInfrastructureSpec;

  // The name of the driver's main class. The jar file that contains the class must be in the default CLASSPATH or specified in jar_file_uris. The execution args are passed in as a sequence of named process arguments (--key=value).
  mainClass?: string;

  // The Cloud Storage URI of the jar file that contains the main class. The execution args are passed in as a sequence of named process arguments (--key=value).
  mainJarFileUri?: string;

  // The Gcloud Storage URI of the main Python file to use as the driver. Must be a .py file. The execution args are passed in as a sequence of named process arguments (--key=value).
  pythonScriptFile?: string;

  // The query text. The execution args are used to declare a set of script variables (set key='value';).
  sqlScript?: string;

  // A reference to a query file. This can be the Cloud Storage URI of the query file or it can the path to a SqlScript Content. The execution args are used to declare a set of script variables (set key='value';).
  sqlScriptFile?: string;
}

export function dataplex_TaskSpark_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "infrastructureSpec",
      "Infrastructure specification for the execution.\nStructure is documented below.",
      () => dataplex_TaskSparkInfrastructureSpec_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mainClass",
      "The name of the driver's main class. The jar file that contains the class must be in the default CLASSPATH or specified in jar_file_uris. The execution args are passed in as a sequence of named process arguments (--key=value).",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mainJarFileUri",
      "The Cloud Storage URI of the jar file that contains the main class. The execution args are passed in as a sequence of named process arguments (--key=value).",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "pythonScriptFile",
      "The Gcloud Storage URI of the main Python file to use as the driver. Must be a .py file. The execution args are passed in as a sequence of named process arguments (--key=value).",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sqlScript",
      "The query text. The execution args are used to declare a set of script variables (set key='value';).",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sqlScriptFile",
      "A reference to a query file. This can be the Cloud Storage URI of the query file or it can the path to a SqlScript Content. The execution args are used to declare a set of script variables (set key='value';).",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "archiveUris",
      "Cloud Storage URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "fileUris",
      "Cloud Storage URIs of files to be placed in the working directory of each executor.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
