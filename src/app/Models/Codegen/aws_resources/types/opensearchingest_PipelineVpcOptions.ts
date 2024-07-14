import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface opensearchingest_PipelineVpcOptions {
  // A list of subnet IDs associated with the VPC endpoint.
  subnetIds?: Array<string>;

  // A list of security groups associated with the VPC endpoint.
  securityGroupIds?: Array<string>;
}

export function opensearchingest_PipelineVpcOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "subnetIds",
      "A list of subnet IDs associated with the VPC endpoint.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "securityGroupIds",
      "A list of security groups associated with the VPC endpoint.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
