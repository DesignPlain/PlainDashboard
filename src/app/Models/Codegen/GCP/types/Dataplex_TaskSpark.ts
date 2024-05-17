import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataplex_TaskSparkInfrastructureSpec,
  Dataplex_TaskSparkInfrastructureSpec_GetTypes,
} from "./Dataplex_TaskSparkInfrastructureSpec";

export interface Dataplex_TaskSpark {
  // The Cloud Storage URI of the jar file that contains the main class. The execution args are passed in as a sequence of named process arguments (--key=value).
  MainJarFileUri?: string;

  // The Gcloud Storage URI of the main Python file to use as the driver. Must be a .py file. The execution args are passed in as a sequence of named process arguments (--key=value).
  PythonScriptFile?: string;

  // The query text. The execution args are used to declare a set of script variables (set key='value';).
  SqlScript?: string;

  // A reference to a query file. This can be the Cloud Storage URI of the query file or it can the path to a SqlScript Content. The execution args are used to declare a set of script variables (set key='value';).
  SqlScriptFile?: string;

  // Cloud Storage URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
  ArchiveUris?: Array<string>;

  // Cloud Storage URIs of files to be placed in the working directory of each executor.
  FileUris?: Array<string>;

  /*
Infrastructure specification for the execution.
Structure is documented below.
*/
  InfrastructureSpec?: Dataplex_TaskSparkInfrastructureSpec;

  // The name of the driver's main class. The jar file that contains the class must be in the default CLASSPATH or specified in jar_file_uris. The execution args are passed in as a sequence of named process arguments (--key=value).
  MainClass?: string;
}

export function Dataplex_TaskSpark_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "MainClass",
      "The name of the driver's main class. The jar file that contains the class must be in the default CLASSPATH or specified in jar_file_uris. The execution args are passed in as a sequence of named process arguments (--key=value).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MainJarFileUri",
      "The Cloud Storage URI of the jar file that contains the main class. The execution args are passed in as a sequence of named process arguments (--key=value).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PythonScriptFile",
      "The Gcloud Storage URI of the main Python file to use as the driver. Must be a .py file. The execution args are passed in as a sequence of named process arguments (--key=value).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SqlScript",
      "The query text. The execution args are used to declare a set of script variables (set key='value';).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SqlScriptFile",
      "A reference to a query file. This can be the Cloud Storage URI of the query file or it can the path to a SqlScript Content. The execution args are used to declare a set of script variables (set key='value';).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ArchiveUris",
      "Cloud Storage URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "FileUris",
      "Cloud Storage URIs of files to be placed in the working directory of each executor.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "InfrastructureSpec",
      "Infrastructure specification for the execution.\nStructure is documented below.",
      Dataplex_TaskSparkInfrastructureSpec_GetTypes(),
      false,
      false,
    ),
  ];
}
