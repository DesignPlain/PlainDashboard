import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2clientvpn_EndpointClientConnectOptions {
  // Indicates whether client connect options are enabled. The default is `false` (not enabled).
  enabled?: boolean;

  // The Amazon Resource Name (ARN) of the Lambda function used for connection authorization.
  lambdaFunctionArn?: string;
}

export function ec2clientvpn_EndpointClientConnectOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Indicates whether client connect options are enabled. The default is `false` (not enabled).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lambdaFunctionArn",
      "The Amazon Resource Name (ARN) of the Lambda function used for connection authorization.",
      [],
      false,
      false,
    ),
  ];
}
