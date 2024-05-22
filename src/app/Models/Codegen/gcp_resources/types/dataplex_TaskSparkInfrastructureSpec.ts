import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataplex_TaskSparkInfrastructureSpecContainerImage,
  dataplex_TaskSparkInfrastructureSpecContainerImage_GetTypes,
} from "./dataplex_TaskSparkInfrastructureSpecContainerImage";
import {
  dataplex_TaskSparkInfrastructureSpecVpcNetwork,
  dataplex_TaskSparkInfrastructureSpecVpcNetwork_GetTypes,
} from "./dataplex_TaskSparkInfrastructureSpecVpcNetwork";
import {
  dataplex_TaskSparkInfrastructureSpecBatch,
  dataplex_TaskSparkInfrastructureSpecBatch_GetTypes,
} from "./dataplex_TaskSparkInfrastructureSpecBatch";

export interface dataplex_TaskSparkInfrastructureSpec {
  /*
Vpc network.
Structure is documented below.
*/
  vpcNetwork?: dataplex_TaskSparkInfrastructureSpecVpcNetwork;

  /*
Compute resources needed for a Task when using Dataproc Serverless.
Structure is documented below.
*/
  batch?: dataplex_TaskSparkInfrastructureSpecBatch;

  /*
Container Image Runtime Configuration.
Structure is documented below.
*/
  containerImage?: dataplex_TaskSparkInfrastructureSpecContainerImage;
}

export function dataplex_TaskSparkInfrastructureSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "containerImage",
      "Container Image Runtime Configuration.\nStructure is documented below.",
      dataplex_TaskSparkInfrastructureSpecContainerImage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "vpcNetwork",
      "Vpc network.\nStructure is documented below.",
      dataplex_TaskSparkInfrastructureSpecVpcNetwork_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "batch",
      "Compute resources needed for a Task when using Dataproc Serverless.\nStructure is documented below.",
      dataplex_TaskSparkInfrastructureSpecBatch_GetTypes(),
      false,
      false,
    ),
  ];
}
