import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface transfer_getConnectorAs2Config {
  // Unique identifier for AS2 local profile.
  localProfileId?: string;

  // Used for outbound requests to tell if response is asynchronous or not. Will be either SYNC or NONE.
  mdnResponse?: string;

  // Unique identifier used by connector for partner profile.
  partnerProfileId?: string;

  //
  singingAlgorithm?: string;

  // Basic authentication for AS2 connector API. Returns a null value if not set.
  basicAuthSecretId?: string;

  // Specifies whether AS2 file is compressed. Will be ZLIB or DISABLED
  compression?: string;

  // Algorithm used to encrypt file. Will be AES128_CBC or AES192_CBC or AES256_CBC or DES_EDE3_CBC or NONE.
  encryptionAlgorithm?: string;

  // Signing algorithm for MDN response. Will be SHA256 or SHA384 or SHA512 or SHA1 or NONE or DEFAULT.
  mdnSigningAlgorithm?: string;

  // Subject HTTP header attribute in outbound AS2 messages to the connector.
  messageSubject?: string;
}

export function transfer_getConnectorAs2Config_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "localProfileId",
      "Unique identifier for AS2 local profile.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "partnerProfileId",
      "Unique identifier used by connector for partner profile.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "singingAlgorithm",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "compression",
      "Specifies whether AS2 file is compressed. Will be ZLIB or DISABLED",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "encryptionAlgorithm",
      "Algorithm used to encrypt file. Will be AES128_CBC or AES192_CBC or AES256_CBC or DES_EDE3_CBC or NONE.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mdnResponse",
      "Used for outbound requests to tell if response is asynchronous or not. Will be either SYNC or NONE.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "basicAuthSecretId",
      "Basic authentication for AS2 connector API. Returns a null value if not set.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mdnSigningAlgorithm",
      "Signing algorithm for MDN response. Will be SHA256 or SHA384 or SHA512 or SHA1 or NONE or DEFAULT.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "messageSubject",
      "Subject HTTP header attribute in outbound AS2 messages to the connector.",
      () => [],
      true,
      false,
    ),
  ];
}
