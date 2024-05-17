import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataplex_TaskSparkInfrastructureSpecVpcNetwork {
  // The Cloud VPC network in which the job is run. By default, the Cloud VPC network named Default within the project is used.
  Network?: string;

  // List of network tags to apply to the job.
  NetworkTags?: Array<string>;

  // The Cloud VPC sub-network in which the job is run.
  SubNetwork?: string;
}

export function Dataplex_TaskSparkInfrastructureSpecVpcNetwork_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "NetworkTags",
      "List of network tags to apply to the job.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SubNetwork",
      "The Cloud VPC sub-network in which the job is run.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Network",
      "The Cloud VPC network in which the job is run. By default, the Cloud VPC network named Default within the project is used.",
      [],
      false,
      false,
    ),
  ];
}
