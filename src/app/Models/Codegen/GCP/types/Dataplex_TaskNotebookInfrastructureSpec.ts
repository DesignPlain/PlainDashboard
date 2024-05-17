import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataplex_TaskNotebookInfrastructureSpecContainerImage,
  Dataplex_TaskNotebookInfrastructureSpecContainerImage_GetTypes,
} from "./Dataplex_TaskNotebookInfrastructureSpecContainerImage";
import {
  Dataplex_TaskNotebookInfrastructureSpecVpcNetwork,
  Dataplex_TaskNotebookInfrastructureSpecVpcNetwork_GetTypes,
} from "./Dataplex_TaskNotebookInfrastructureSpecVpcNetwork";
import {
  Dataplex_TaskNotebookInfrastructureSpecBatch,
  Dataplex_TaskNotebookInfrastructureSpecBatch_GetTypes,
} from "./Dataplex_TaskNotebookInfrastructureSpecBatch";

export interface Dataplex_TaskNotebookInfrastructureSpec {
  /*
Container Image Runtime Configuration.
Structure is documented below.
*/
  ContainerImage?: Dataplex_TaskNotebookInfrastructureSpecContainerImage;

  /*
Vpc network.
Structure is documented below.
*/
  VpcNetwork?: Dataplex_TaskNotebookInfrastructureSpecVpcNetwork;

  /*
Compute resources needed for a Task when using Dataproc Serverless.
Structure is documented below.
*/
  Batch?: Dataplex_TaskNotebookInfrastructureSpecBatch;
}

export function Dataplex_TaskNotebookInfrastructureSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ContainerImage",
      "Container Image Runtime Configuration.\nStructure is documented below.",
      Dataplex_TaskNotebookInfrastructureSpecContainerImage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "VpcNetwork",
      "Vpc network.\nStructure is documented below.",
      Dataplex_TaskNotebookInfrastructureSpecVpcNetwork_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Batch",
      "Compute resources needed for a Task when using Dataproc Serverless.\nStructure is documented below.",
      Dataplex_TaskNotebookInfrastructureSpecBatch_GetTypes(),
      false,
      false,
    ),
  ];
}
