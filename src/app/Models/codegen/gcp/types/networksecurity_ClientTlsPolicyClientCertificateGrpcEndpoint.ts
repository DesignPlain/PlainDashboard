import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface networksecurity_ClientTlsPolicyClientCertificateGrpcEndpoint {
  // The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:".
  targetUri?: string;
}

export function networksecurity_ClientTlsPolicyClientCertificateGrpcEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'targetUri',
      'The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:".',
      () => [],
      true,
      false,
    ),
  ];
}
