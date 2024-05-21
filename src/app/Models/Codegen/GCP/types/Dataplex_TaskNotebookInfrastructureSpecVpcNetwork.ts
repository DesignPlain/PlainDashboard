import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataplex_TaskNotebookInfrastructureSpecVpcNetwork {
  // The Cloud VPC sub-network in which the job is run.
  subNetwork?: string;

  // The Cloud VPC network in which the job is run. By default, the Cloud VPC network named Default within the project is used.
  network?: string;

  // List of network tags to apply to the job.
  networkTags?: Array<string>;
}

export function dataplex_TaskNotebookInfrastructureSpecVpcNetwork_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "subNetwork",
      "The Cloud VPC sub-network in which the job is run.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "network",
      "The Cloud VPC network in which the job is run. By default, the Cloud VPC network named Default within the project is used.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "networkTags",
      "List of network tags to apply to the job.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
