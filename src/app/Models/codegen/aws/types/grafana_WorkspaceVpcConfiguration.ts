import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface grafana_WorkspaceVpcConfiguration {
  // The list of Amazon EC2 security group IDs attached to the Amazon VPC for your Grafana workspace to connect.
  securityGroupIds?: Array<string>;

  // The list of Amazon EC2 subnet IDs created in the Amazon VPC for your Grafana workspace to connect.
  subnetIds?: Array<string>;
}

export function grafana_WorkspaceVpcConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "securityGroupIds",
      "The list of Amazon EC2 security group IDs attached to the Amazon VPC for your Grafana workspace to connect.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subnetIds",
      "The list of Amazon EC2 subnet IDs created in the Amazon VPC for your Grafana workspace to connect.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
