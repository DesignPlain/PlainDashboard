import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface codedeploy_DeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption {
  // The method used to add instances to a replacement environment.
  action?: string;
}

export function codedeploy_DeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "action",
      "The method used to add instances to a replacement environment.",
      [],
      false,
      false,
    ),
  ];
}
