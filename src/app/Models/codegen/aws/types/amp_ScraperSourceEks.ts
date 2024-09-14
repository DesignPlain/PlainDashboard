import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface amp_ScraperSourceEks {
  //
  clusterArn?: string;

  // List of the security group IDs for the Amazon EKS cluster VPC configuration.
  securityGroupIds?: Array<string>;

  // List of subnet IDs. Must be in at least two different availability zones.
  subnetIds?: Array<string>;
}

export function amp_ScraperSourceEks_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "subnetIds",
      "List of subnet IDs. Must be in at least two different availability zones.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clusterArn",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "securityGroupIds",
      "List of the security group IDs for the Amazon EKS cluster VPC configuration.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
