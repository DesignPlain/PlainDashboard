import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface securitylake_CustomLogSourceProviderDetail {
  // The location of the partition in the Amazon S3 bucket for Security Lake.
  location?: string;

  // The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role to be used by the AWS Glue crawler.
  roleArn?: string;
}

export function securitylake_CustomLogSourceProviderDetail_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role to be used by the AWS Glue crawler.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "location",
      "The location of the partition in the Amazon S3 bucket for Security Lake.",
      [],
      true,
      false,
    ),
  ];
}
