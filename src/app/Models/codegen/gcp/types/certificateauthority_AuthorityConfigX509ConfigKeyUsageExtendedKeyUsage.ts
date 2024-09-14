import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface certificateauthority_AuthorityConfigX509ConfigKeyUsageExtendedKeyUsage {
  // Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS.
  clientAuth?: boolean;

  // Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication".
  codeSigning?: boolean;

  // Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection".
  emailProtection?: boolean;

  // Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses".
  ocspSigning?: boolean;

  // Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS.
  serverAuth?: boolean;

  // Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time".
  timeStamping?: boolean;
}

export function certificateauthority_AuthorityConfigX509ConfigKeyUsageExtendedKeyUsage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "codeSigning",
      'Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication".',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "emailProtection",
      'Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection".',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ocspSigning",
      'Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses".',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "serverAuth",
      'Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "timeStamping",
      'Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time".',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "clientAuth",
      'Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS.',
      () => [],
      false,
      true,
    ),
  ];
}
