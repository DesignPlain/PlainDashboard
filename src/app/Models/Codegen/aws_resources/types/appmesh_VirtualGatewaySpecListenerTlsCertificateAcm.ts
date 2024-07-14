import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appmesh_VirtualGatewaySpecListenerTlsCertificateAcm {
  // ARN for the certificate.
  certificateArn?: string;
}

export function appmesh_VirtualGatewaySpecListenerTlsCertificateAcm_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "certificateArn",
      "ARN for the certificate.",
      [],
      true,
      false,
    ),
  ];
}
