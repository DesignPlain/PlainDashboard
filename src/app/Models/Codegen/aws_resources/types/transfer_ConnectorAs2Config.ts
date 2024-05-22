import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface transfer_ConnectorAs2Config {
  // Used for outbound requests to determine if a partner response for transfers is synchronous or asynchronous. The valid values are SYNC and NONE.
  mdnResponse?: string;

  // The signing algorithm for the Mdn response. The valid values are SHA256 | SHA384 | SHA512 | SHA1 | NONE | DEFAULT.
  mdnSigningAlgorithm?: string;

  // Used as the subject HTTP header attribute in AS2 messages that are being sent with the connector.
  messageSubject?: string;

  // The unique identifier for the AS2 partner profile.
  partnerProfileId?: string;

  // The algorithm that is used to sign AS2 messages sent with the connector. The valid values are SHA256 | SHA384 | SHA512 | SHA1 | NONE .
  signingAlgorithm?: string;

  // Specifies weather AS2 file is compressed. The valud values are ZLIB and  DISABLED.
  compression?: string;

  // The algorithm that is used to encrypt the file. The valid values are AES128_CBC | AES192_CBC | AES256_CBC | NONE.
  encryptionAlgorithm?: string;

  // The unique identifier for the AS2 local profile.
  localProfileId?: string;
}

export function transfer_ConnectorAs2Config_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "mdnResponse",
      "Used for outbound requests to determine if a partner response for transfers is synchronous or asynchronous. The valid values are SYNC and NONE.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mdnSigningAlgorithm",
      "The signing algorithm for the Mdn response. The valid values are SHA256 | SHA384 | SHA512 | SHA1 | NONE | DEFAULT.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "messageSubject",
      "Used as the subject HTTP header attribute in AS2 messages that are being sent with the connector.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "partnerProfileId",
      "The unique identifier for the AS2 partner profile.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "signingAlgorithm",
      "The algorithm that is used to sign AS2 messages sent with the connector. The valid values are SHA256 | SHA384 | SHA512 | SHA1 | NONE .",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "compression",
      "Specifies weather AS2 file is compressed. The valud values are ZLIB and  DISABLED.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "encryptionAlgorithm",
      "The algorithm that is used to encrypt the file. The valid values are AES128_CBC | AES192_CBC | AES256_CBC | NONE.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "localProfileId",
      "The unique identifier for the AS2 local profile.",
      [],
      true,
      false,
    ),
  ];
}
