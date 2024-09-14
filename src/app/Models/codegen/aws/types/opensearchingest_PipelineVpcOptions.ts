import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface opensearchingest_PipelineVpcOptions {
  // A list of security groups associated with the VPC endpoint.
  securityGroupIds?: Array<string>;

  // A list of subnet IDs associated with the VPC endpoint.
  subnetIds?: Array<string>;
}

export function opensearchingest_PipelineVpcOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "securityGroupIds",
      "A list of security groups associated with the VPC endpoint.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subnetIds",
      "A list of subnet IDs associated with the VPC endpoint.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
