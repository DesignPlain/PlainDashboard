import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Certificateauthority_getAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage {
  // Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS.
  ClientAuth?: boolean;

  // Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication".
  CodeSigning?: boolean;

  // Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection".
  EmailProtection?: boolean;

  // Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses".
  OcspSigning?: boolean;

  // Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS.
  ServerAuth?: boolean;

  // Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time".
  TimeStamping?: boolean;
}

export function Certificateauthority_getAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "EmailProtection",
      'Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection".',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "OcspSigning",
      'Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses".',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ServerAuth",
      'Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "TimeStamping",
      'Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time".',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ClientAuth",
      'Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "CodeSigning",
      'Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication".',
      [],
      true,
      false,
    ),
  ];
}
