import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface quicksight_DataSourceVpcConnectionProperties {
  // The Amazon Resource Name (ARN) for the VPC connection.
  vpcConnectionArn?: string;
}

export function quicksight_DataSourceVpcConnectionProperties_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "vpcConnectionArn",
      "The Amazon Resource Name (ARN) for the VPC connection.",
      () => [],
      true,
      false,
    ),
  ];
}
