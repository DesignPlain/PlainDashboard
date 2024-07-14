import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface apprunner_ServiceNetworkConfigurationEgressConfiguration {
  // The type of egress configuration. Valid values are: `DEFAULT` and `VPC`.
  egressType?: string;

  // The Amazon Resource Name (ARN) of the App Runner VPC connector that you want to associate with your App Runner service. Only valid when `EgressType = VPC`.
  vpcConnectorArn?: string;
}

export function apprunner_ServiceNetworkConfigurationEgressConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "egressType",
      "The type of egress configuration. Valid values are: `DEFAULT` and `VPC`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vpcConnectorArn",
      "The Amazon Resource Name (ARN) of the App Runner VPC connector that you want to associate with your App Runner service. Only valid when `EgressType = VPC`.",
      [],
      false,
      false,
    ),
  ];
}
