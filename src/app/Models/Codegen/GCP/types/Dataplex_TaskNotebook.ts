import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataplex_TaskNotebookInfrastructureSpec,
  Dataplex_TaskNotebookInfrastructureSpec_GetTypes,
} from "./Dataplex_TaskNotebookInfrastructureSpec";

export interface Dataplex_TaskNotebook {
  /*
Infrastructure specification for the execution.
Structure is documented below.
*/
  InfrastructureSpec?: Dataplex_TaskNotebookInfrastructureSpec;

  // Path to input notebook. This can be the Cloud Storage URI of the notebook file or the path to a Notebook Content. The execution args are accessible as environment variables (TASK_key=value).
  Notebook?: string;

  // Cloud Storage URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
  ArchiveUris?: Array<string>;

  // Cloud Storage URIs of files to be placed in the working directory of each executor.
  FileUris?: Array<string>;
}

export function Dataplex_TaskNotebook_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "InfrastructureSpec",
      "Infrastructure specification for the execution.\nStructure is documented below.",
      Dataplex_TaskNotebookInfrastructureSpec_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Notebook",
      "Path to input notebook. This can be the Cloud Storage URI of the notebook file or the path to a Notebook Content. The execution args are accessible as environment variables (TASK_key=value).",
      [],
      true,
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
  ];
}
