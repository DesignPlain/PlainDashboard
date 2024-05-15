import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Apigee_TargetServerSSlInfoCommonName,
  Apigee_TargetServerSSlInfoCommonName_GetTypes,
} from "./Apigee_TargetServerSSlInfoCommonName";

export interface Apigee_TargetServerSSlInfo {
  // Required if clientAuthEnabled is true. The resource ID of the keystore.
  KeyStore?: string;

  // The TLS versioins to be used.
  Protocols?: Array<string>;

  // The resource ID of the truststore.
  TrustStore?: string;

  // Enables TLS. If false, neither one-way nor two-way TLS will be enabled.
  Enabled?: boolean;

  // If true, Edge ignores TLS certificate errors. Valid when configuring TLS for target servers and target endpoints, and when configuring virtual hosts that use 2-way TLS. When used with a target endpoint/target server, if the backend system uses SNI and returns a cert with a subject Distinguished Name (DN) that does not match the hostname, there is no way to ignore the error and the connection fails.
  IgnoreValidationErrors?: boolean;

  // Required if clientAuthEnabled is true. The resource ID for the alias containing the private key and cert.
  KeyAlias?: string;

  // The SSL/TLS cipher suites to be used. For programmable proxies, it must be one of the cipher suite names listed in: http://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#ciphersuites. For configurable proxies, it must follow the configuration specified in: https://commondatastorage.googleapis.com/chromium-boringssl-docs/ssl.h.html#Cipher-suite-configuration. This setting has no effect for configurable proxies when negotiating TLS 1.3.
  Ciphers?: Array<string>;

  // Enables two-way TLS.
  ClientAuthEnabled?: boolean;

  /*
The TLS Common Name of the certificate.
Structure is documented below.
*/
  CommonName?: Apigee_TargetServerSSlInfoCommonName;
}

export function Apigee_TargetServerSSlInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "KeyStore",
      "Required if clientAuthEnabled is true. The resource ID of the keystore.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Protocols",
      "The TLS versioins to be used.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TrustStore",
      "The resource ID of the truststore.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Enables TLS. If false, neither one-way nor two-way TLS will be enabled.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "CommonName",
      "The TLS Common Name of the certificate.\nStructure is documented below.",
      Apigee_TargetServerSSlInfoCommonName_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "IgnoreValidationErrors",
      "If true, Edge ignores TLS certificate errors. Valid when configuring TLS for target servers and target endpoints, and when configuring virtual hosts that use 2-way TLS. When used with a target endpoint/target server, if the backend system uses SNI and returns a cert with a subject Distinguished Name (DN) that does not match the hostname, there is no way to ignore the error and the connection fails.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "KeyAlias",
      "Required if clientAuthEnabled is true. The resource ID for the alias containing the private key and cert.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Ciphers",
      "The SSL/TLS cipher suites to be used. For programmable proxies, it must be one of the cipher suite names listed in: http://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#ciphersuites. For configurable proxies, it must follow the configuration specified in: https://commondatastorage.googleapis.com/chromium-boringssl-docs/ssl.h.html#Cipher-suite-configuration. This setting has no effect for configurable proxies when negotiating TLS 1.3.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ClientAuthEnabled",
      "Enables two-way TLS.",
      [],
      false,
      false,
    ),
  ];
}
