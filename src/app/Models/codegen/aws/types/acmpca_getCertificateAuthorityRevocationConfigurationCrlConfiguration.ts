import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface acmpca_getCertificateAuthorityRevocationConfigurationCrlConfiguration {
  // Whether the CRL is publicly readable or privately held in the CRL Amazon S3 bucket.
  s3ObjectAcl?: string;

  // Name inserted into the certificate CRL Distribution Points extension that enables the use of an alias for the CRL distribution point.
  customCname?: string;

  // Boolean value that specifies whether certificate revocation lists (CRLs) are enabled.
  enabled?: boolean;

  // Number of days until a certificate expires.
  expirationInDays?: number;

  // Name of the S3 bucket that contains the CRL.
  s3BucketName?: string;
}

export function acmpca_getCertificateAuthorityRevocationConfigurationCrlConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "s3ObjectAcl",
      "Whether the CRL is publicly readable or privately held in the CRL Amazon S3 bucket.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "customCname",
      "Name inserted into the certificate CRL Distribution Points extension that enables the use of an alias for the CRL distribution point.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Boolean value that specifies whether certificate revocation lists (CRLs) are enabled.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "expirationInDays",
      "Number of days until a certificate expires.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3BucketName",
      "Name of the S3 bucket that contains the CRL.",
      () => [],
      true,
      false,
    ),
  ];
}
