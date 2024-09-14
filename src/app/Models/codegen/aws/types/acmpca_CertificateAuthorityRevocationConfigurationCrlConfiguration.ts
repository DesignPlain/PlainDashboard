import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface acmpca_CertificateAuthorityRevocationConfigurationCrlConfiguration {
  // Name inserted into the certificate CRL Distribution Points extension that enables the use of an alias for the CRL distribution point. Use this value if you don't want the name of your S3 bucket to be public. Must be less than or equal to 253 characters in length.
  customCname?: string;

  // Boolean value that specifies whether certificate revocation lists (CRLs) are enabled. Defaults to `false`.
  enabled?: boolean;

  // Number of days until a certificate expires. Must be between 1 and 5000.
  expirationInDays?: number;

  // Name of the S3 bucket that contains the CRL. If you do not provide a value for the `custom_cname` argument, the name of your S3 bucket is placed into the CRL Distribution Points extension of the issued certificate. You must specify a bucket policy that allows ACM PCA to write the CRL to your bucket. Must be between 3 and 255 characters in length.
  s3BucketName?: string;

  // Determines whether the CRL will be publicly readable or privately held in the CRL Amazon S3 bucket. Defaults to `PUBLIC_READ`.
  s3ObjectAcl?: string;
}

export function acmpca_CertificateAuthorityRevocationConfigurationCrlConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "customCname",
      "Name inserted into the certificate CRL Distribution Points extension that enables the use of an alias for the CRL distribution point. Use this value if you don't want the name of your S3 bucket to be public. Must be less than or equal to 253 characters in length.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Boolean value that specifies whether certificate revocation lists (CRLs) are enabled. Defaults to `false`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "expirationInDays",
      "Number of days until a certificate expires. Must be between 1 and 5000.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3BucketName",
      "Name of the S3 bucket that contains the CRL. If you do not provide a value for the `custom_cname` argument, the name of your S3 bucket is placed into the CRL Distribution Points extension of the issued certificate. You must specify a bucket policy that allows ACM PCA to write the CRL to your bucket. Must be between 3 and 255 characters in length.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3ObjectAcl",
      "Determines whether the CRL will be publicly readable or privately held in the CRL Amazon S3 bucket. Defaults to `PUBLIC_READ`.",
      () => [],
      false,
      false,
    ),
  ];
}
