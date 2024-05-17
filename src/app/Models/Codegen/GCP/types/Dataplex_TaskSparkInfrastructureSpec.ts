import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataplex_TaskSparkInfrastructureSpecBatch,
  Dataplex_TaskSparkInfrastructureSpecBatch_GetTypes,
} from "./Dataplex_TaskSparkInfrastructureSpecBatch";
import {
  Dataplex_TaskSparkInfrastructureSpecContainerImage,
  Dataplex_TaskSparkInfrastructureSpecContainerImage_GetTypes,
} from "./Dataplex_TaskSparkInfrastructureSpecContainerImage";
import {
  Dataplex_TaskSparkInfrastructureSpecVpcNetwork,
  Dataplex_TaskSparkInfrastructureSpecVpcNetwork_GetTypes,
} from "./Dataplex_TaskSparkInfrastructureSpecVpcNetwork";

export interface Dataplex_TaskSparkInfrastructureSpec {
  /*
Compute resources needed for a Task when using Dataproc Serverless.
Structure is documented below.
*/
  Batch?: Dataplex_TaskSparkInfrastructureSpecBatch;

  /*
Container Image Runtime Configuration.
Structure is documented below.
*/
  ContainerImage?: Dataplex_TaskSparkInfrastructureSpecContainerImage;

  /*
Vpc network.
Structure is documented below.
*/
  VpcNetwork?: Dataplex_TaskSparkInfrastructureSpecVpcNetwork;
}

export function Dataplex_TaskSparkInfrastructureSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Batch",
      "Compute resources needed for a Task when using Dataproc Serverless.\nStructure is documented below.",
      Dataplex_TaskSparkInfrastructureSpecBatch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ContainerImage",
      "Container Image Runtime Configuration.\nStructure is documented below.",
      Dataplex_TaskSparkInfrastructureSpecContainerImage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "VpcNetwork",
      "Vpc network.\nStructure is documented below.",
      Dataplex_TaskSparkInfrastructureSpecVpcNetwork_GetTypes(),
      false,
      false,
    ),
  ];
}
