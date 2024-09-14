import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface mwaa_EnvironmentNetworkConfiguration {
  // Security groups IDs for the environment. At least one of the security group needs to allow MWAA resources to talk to each other, otherwise MWAA cannot be provisioned.
  securityGroupIds?: Array<string>;

  // The private subnet IDs in which the environment should be created. MWAA requires two subnets.
  subnetIds?: Array<string>;
}

export function mwaa_EnvironmentNetworkConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "securityGroupIds",
      "Security groups IDs for the environment. At least one of the security group needs to allow MWAA resources to talk to each other, otherwise MWAA cannot be provisioned.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subnetIds",
      "The private subnet IDs in which the environment should be created. MWAA requires two subnets.",
      () => InputType_String_GetTypes(),
      true,
      true,
    ),
  ];
}
