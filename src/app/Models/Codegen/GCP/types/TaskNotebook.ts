import { TaskNotebookInfrastructureSpec } from "./TaskNotebookInfrastructureSpec";

export interface TaskNotebook {
  /*
Infrastructure specification for the execution.
Structure is documented below.
*/
  InfrastructureSpec?: TaskNotebookInfrastructureSpec;

  // Path to input notebook. This can be the Cloud Storage URI of the notebook file or the path to a Notebook Content. The execution args are accessible as environment variables (TASK_key=value).
  Notebook?: string;

  // Cloud Storage URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
  ArchiveUris?: Array<string>;

  // Cloud Storage URIs of files to be placed in the working directory of each executor.
  FileUris?: Array<string>;
}
