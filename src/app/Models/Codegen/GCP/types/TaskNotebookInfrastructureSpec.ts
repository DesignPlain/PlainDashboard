import { TaskNotebookInfrastructureSpecVpcNetwork } from "./TaskNotebookInfrastructureSpecVpcNetwork";
import { TaskNotebookInfrastructureSpecBatch } from "./TaskNotebookInfrastructureSpecBatch";
import { TaskNotebookInfrastructureSpecContainerImage } from "./TaskNotebookInfrastructureSpecContainerImage";

export interface TaskNotebookInfrastructureSpec {
  /*
Vpc network.
Structure is documented below.
*/
  VpcNetwork?: TaskNotebookInfrastructureSpecVpcNetwork;

  /*
Compute resources needed for a Task when using Dataproc Serverless.
Structure is documented below.
*/
  Batch?: TaskNotebookInfrastructureSpecBatch;

  /*
Container Image Runtime Configuration.
Structure is documented below.
*/
  ContainerImage?: TaskNotebookInfrastructureSpecContainerImage;
}
