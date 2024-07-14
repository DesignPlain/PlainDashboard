import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dataplex_TaskNotebookInfrastructureSpec,
  dataplex_TaskNotebookInfrastructureSpec_GetTypes,
} from "./dataplex_TaskNotebookInfrastructureSpec";

export interface dataplex_TaskNotebook {
  // Cloud Storage URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
  archiveUris?: Array<string>;

  // Cloud Storage URIs of files to be placed in the working directory of each executor.
  fileUris?: Array<string>;

  /*
Infrastructure specification for the execution.
Structure is documented below.
*/
  infrastructureSpec?: dataplex_TaskNotebookInfrastructureSpec;

  // Path to input notebook. This can be the Cloud Storage URI of the notebook file or the path to a Notebook Content. The execution args are accessible as environment variables (TASK_key=value).
  notebook?: string;
}

export function dataplex_TaskNotebook_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "archiveUris",
      "Cloud Storage URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "fileUris",
      "Cloud Storage URIs of files to be placed in the working directory of each executor.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "infrastructureSpec",
      "Infrastructure specification for the execution.\nStructure is documented below.",
      dataplex_TaskNotebookInfrastructureSpec_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "notebook",
      "Path to input notebook. This can be the Cloud Storage URI of the notebook file or the path to a Notebook Content. The execution args are accessible as environment variables (TASK_key=value).",
      [],
      true,
      false,
    ),
  ];
}
