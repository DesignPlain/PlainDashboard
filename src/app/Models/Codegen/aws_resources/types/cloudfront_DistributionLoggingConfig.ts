import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudfront_DistributionLoggingConfig {
  // Whether to include cookies in access logs (default: `false`).
  includeCookies?: boolean;

  // Prefix to the access log filenames for this distribution, for example, `myprefix/`.
  prefix?: string;

  // Amazon S3 bucket to store the access logs in, for example, `myawslogbucket.s3.amazonaws.com`.
  bucket?: string;
}

export function cloudfront_DistributionLoggingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "includeCookies",
      "Whether to include cookies in access logs (default: `false`).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "Prefix to the access log filenames for this distribution, for example, `myprefix/`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucket",
      "Amazon S3 bucket to store the access logs in, for example, `myawslogbucket.s3.amazonaws.com`.",
      [],
      true,
      false,
    ),
  ];
}
