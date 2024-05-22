import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface codedeploy_DeploymentGroupEcsService {
  // The name of the ECS cluster.
  clusterName?: string;

  // The name of the ECS service.
  serviceName?: string;
}

export function codedeploy_DeploymentGroupEcsService_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "clusterName",
      "The name of the ECS cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceName",
      "The name of the ECS service.",
      [],
      true,
      false,
    ),
  ];
}
