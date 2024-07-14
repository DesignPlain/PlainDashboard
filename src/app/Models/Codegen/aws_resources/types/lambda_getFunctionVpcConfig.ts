import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lambda_getFunctionVpcConfig {
  //
  ipv6AllowedForDualStack?: boolean;

  //
  securityGroupIds?: Array<string>;

  //
  subnetIds?: Array<string>;

  //
  vpcId?: string;
}

export function lambda_getFunctionVpcConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "subnetIds",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "vpcId", "", [], true, false),
    new DynamicUIProps(
      InputType.Bool,
      "ipv6AllowedForDualStack",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "securityGroupIds",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
