import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint {
  // The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:".
  targetUri?: string;
}

export function networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "targetUri",
      'The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:".',
      [],
      true,
      false,
    ),
  ];
}
