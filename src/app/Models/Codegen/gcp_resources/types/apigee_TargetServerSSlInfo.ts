import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  apigee_TargetServerSSlInfoCommonName,
  apigee_TargetServerSSlInfoCommonName_GetTypes,
} from "./apigee_TargetServerSSlInfoCommonName";

export interface apigee_TargetServerSSlInfo {
  // Required if clientAuthEnabled is true. The resource ID for the alias containing the private key and cert.
  keyAlias?: string;

  // The TLS versioins to be used.
  protocols?: Array<string>;

  // The resource ID of the truststore.
  trustStore?: string;

  // The SSL/TLS cipher suites to be used. For programmable proxies, it must be one of the cipher suite names listed in: http://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#ciphersuites. For configurable proxies, it must follow the configuration specified in: https://commondatastorage.googleapis.com/chromium-boringssl-docs/ssl.h.html#Cipher-suite-configuration. This setting has no effect for configurable proxies when negotiating TLS 1.3.
  ciphers?: Array<string>;

  // Enables TLS. If false, neither one-way nor two-way TLS will be enabled.
  enabled?: boolean;

  // If true, Edge ignores TLS certificate errors. Valid when configuring TLS for target servers and target endpoints, and when configuring virtual hosts that use 2-way TLS. When used with a target endpoint/target server, if the backend system uses SNI and returns a cert with a subject Distinguished Name (DN) that does not match the hostname, there is no way to ignore the error and the connection fails.
  ignoreValidationErrors?: boolean;

  // Required if clientAuthEnabled is true. The resource ID of the keystore.
  keyStore?: string;

  // Enables two-way TLS.
  clientAuthEnabled?: boolean;

  /*
The TLS Common Name of the certificate.
Structure is documented below.
*/
  commonName?: apigee_TargetServerSSlInfoCommonName;
}

export function apigee_TargetServerSSlInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "clientAuthEnabled",
      "Enables two-way TLS.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "keyAlias",
      "Required if clientAuthEnabled is true. The resource ID for the alias containing the private key and cert.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Enables TLS. If false, neither one-way nor two-way TLS will be enabled.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ciphers",
      "The SSL/TLS cipher suites to be used. For programmable proxies, it must be one of the cipher suite names listed in: http://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#ciphersuites. For configurable proxies, it must follow the configuration specified in: https://commondatastorage.googleapis.com/chromium-boringssl-docs/ssl.h.html#Cipher-suite-configuration. This setting has no effect for configurable proxies when negotiating TLS 1.3.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ignoreValidationErrors",
      "If true, Edge ignores TLS certificate errors. Valid when configuring TLS for target servers and target endpoints, and when configuring virtual hosts that use 2-way TLS. When used with a target endpoint/target server, if the backend system uses SNI and returns a cert with a subject Distinguished Name (DN) that does not match the hostname, there is no way to ignore the error and the connection fails.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "keyStore",
      "Required if clientAuthEnabled is true. The resource ID of the keystore.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "commonName",
      "The TLS Common Name of the certificate.\nStructure is documented below.",
      apigee_TargetServerSSlInfoCommonName_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "protocols",
      "The TLS versioins to be used.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "trustStore",
      "The resource ID of the truststore.",
      [],
      false,
      false,
    ),
  ];
}
