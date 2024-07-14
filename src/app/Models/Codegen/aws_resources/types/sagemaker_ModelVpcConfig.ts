import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sagemaker_ModelVpcConfig {
  //
  securityGroupIds?: Array<string>;

  //
  subnets?: Array<string>;
}

export function sagemaker_ModelVpcConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "securityGroupIds",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subnets",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
