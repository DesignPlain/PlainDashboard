import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface identityplatform_TenantInboundSamlConfigSpConfigSpCertificate {
  // The x509 certificate
  x509Certificate?: string;
}

export function identityplatform_TenantInboundSamlConfigSpConfigSpCertificate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "x509Certificate",
      "The x509 certificate",
      [],
      false,
      false,
    ),
  ];
}
