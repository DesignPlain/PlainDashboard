import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataplex_TaskNotebookInfrastructureSpecBatch,
  dataplex_TaskNotebookInfrastructureSpecBatch_GetTypes,
} from "./dataplex_TaskNotebookInfrastructureSpecBatch";
import {
  dataplex_TaskNotebookInfrastructureSpecContainerImage,
  dataplex_TaskNotebookInfrastructureSpecContainerImage_GetTypes,
} from "./dataplex_TaskNotebookInfrastructureSpecContainerImage";
import {
  dataplex_TaskNotebookInfrastructureSpecVpcNetwork,
  dataplex_TaskNotebookInfrastructureSpecVpcNetwork_GetTypes,
} from "./dataplex_TaskNotebookInfrastructureSpecVpcNetwork";

export interface dataplex_TaskNotebookInfrastructureSpec {
  /*
Compute resources needed for a Task when using Dataproc Serverless.
Structure is documented below.
*/
  batch?: dataplex_TaskNotebookInfrastructureSpecBatch;

  /*
Container Image Runtime Configuration.
Structure is documented below.
*/
  containerImage?: dataplex_TaskNotebookInfrastructureSpecContainerImage;

  /*
Vpc network.
Structure is documented below.
*/
  vpcNetwork?: dataplex_TaskNotebookInfrastructureSpecVpcNetwork;
}

export function dataplex_TaskNotebookInfrastructureSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "containerImage",
      "Container Image Runtime Configuration.\nStructure is documented below.",
      dataplex_TaskNotebookInfrastructureSpecContainerImage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "vpcNetwork",
      "Vpc network.\nStructure is documented below.",
      dataplex_TaskNotebookInfrastructureSpecVpcNetwork_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "batch",
      "Compute resources needed for a Task when using Dataproc Serverless.\nStructure is documented below.",
      dataplex_TaskNotebookInfrastructureSpecBatch_GetTypes(),
      false,
      false,
    ),
  ];
}
