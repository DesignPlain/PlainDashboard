import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface apigatewayv2_DomainNameMutualTlsAuthentication {
  // Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example, `s3://bucket-name/key-name`. The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version.
  truststoreUri?: string;

  // Version of the S3 object that contains the truststore. To specify a version, you must have versioning enabled for the S3 bucket.
  truststoreVersion?: string;
}

export function apigatewayv2_DomainNameMutualTlsAuthentication_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "truststoreUri",
      "Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example, `s3://bucket-name/key-name`. The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "truststoreVersion",
      "Version of the S3 object that contains the truststore. To specify a version, you must have versioning enabled for the S3 bucket.",
      [],
      false,
      false,
    ),
  ];
}
