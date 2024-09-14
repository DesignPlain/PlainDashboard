import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface lightsail_ContainerServicePrivateRegistryAccessEcrImagePullerRole {
  // A Boolean value that indicates whether to activate the role. The default is `false`.
  isActive?: boolean;

  /*
The principal ARN of the container service. The principal ARN can be used to create a trust
relationship between your standard AWS account and your Lightsail container service. This allows you to give your
service permission to access resources in your standard AWS account.
*/
  principalArn?: string;
}

export function lightsail_ContainerServicePrivateRegistryAccessEcrImagePullerRole_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "isActive",
      "A Boolean value that indicates whether to activate the role. The default is `false`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "principalArn",
      "The principal ARN of the container service. The principal ARN can be used to create a trust\nrelationship between your standard AWS account and your Lightsail container service. This allows you to give your\nservice permission to access resources in your standard AWS account.",
      () => [],
      false,
      false,
    ),
  ];
}
