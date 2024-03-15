import { TaskSparkInfrastructureSpecBatch } from "./TaskSparkInfrastructureSpecBatch";
import { TaskSparkInfrastructureSpecContainerImage } from "./TaskSparkInfrastructureSpecContainerImage";
import { TaskSparkInfrastructureSpecVpcNetwork } from "./TaskSparkInfrastructureSpecVpcNetwork";

export interface TaskSparkInfrastructureSpec {
  /*
Compute resources needed for a Task when using Dataproc Serverless.
Structure is documented below.
*/
  Batch?: TaskSparkInfrastructureSpecBatch;

  /*
Container Image Runtime Configuration.
Structure is documented below.
*/
  ContainerImage?: TaskSparkInfrastructureSpecContainerImage;

  /*
Vpc network.
Structure is documented below.
*/
  VpcNetwork?: TaskSparkInfrastructureSpecVpcNetwork;
}
