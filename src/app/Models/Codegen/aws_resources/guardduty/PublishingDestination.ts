import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface PublishingDestinationArgs {
  /*
Currently there is only "S3" available as destination type which is also the default value

> --Note:-- In case of missing permissions (S3 Bucket Policy _or_ KMS Key permissions) the resource will fail to create. If the permissions are changed after resource creation, this can be asked from the AWS API via the "DescribePublishingDestination" call (https://docs.aws.amazon.com/cli/latest/reference/guardduty/describe-publishing-destination.html).
*/
  destinationType?: string;

  // The detector ID of the GuardDuty.
  detectorId?: string;

  // The ARN of the KMS key used to encrypt GuardDuty findings. GuardDuty enforces this to be encrypted.
  kmsKeyArn?: string;

  // The bucket arn and prefix under which the findings get exported. Bucket-ARN is required, the prefix is optional and will be `AWSLogs/[Account-ID]/GuardDuty/[Region]/` if not provided
  destinationArn?: string;
}
export class PublishingDestination extends Resource {
  // The bucket arn and prefix under which the findings get exported. Bucket-ARN is required, the prefix is optional and will be `AWSLogs/[Account-ID]/GuardDuty/[Region]/` if not provided
  public destinationArn?: string;

  /*
Currently there is only "S3" available as destination type which is also the default value

> --Note:-- In case of missing permissions (S3 Bucket Policy _or_ KMS Key permissions) the resource will fail to create. If the permissions are changed after resource creation, this can be asked from the AWS API via the "DescribePublishingDestination" call (https://docs.aws.amazon.com/cli/latest/reference/guardduty/describe-publishing-destination.html).
*/
  public destinationType?: string;

  // The detector ID of the GuardDuty.
  public detectorId?: string;

  // The ARN of the KMS key used to encrypt GuardDuty findings. GuardDuty enforces this to be encrypted.
  public kmsKeyArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "destinationType",
        'Currently there is only "S3" available as destination type which is also the default value\n\n> **Note:** In case of missing permissions (S3 Bucket Policy _or_ KMS Key permissions) the resource will fail to create. If the permissions are changed after resource creation, this can be asked from the AWS API via the "DescribePublishingDestination" call (https://docs.aws.amazon.com/cli/latest/reference/guardduty/describe-publishing-destination.html).',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "detectorId",
        "The detector ID of the GuardDuty.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyArn",
        "The ARN of the KMS key used to encrypt GuardDuty findings. GuardDuty enforces this to be encrypted.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "destinationArn",
        "The bucket arn and prefix under which the findings get exported. Bucket-ARN is required, the prefix is optional and will be `AWSLogs/[Account-ID]/GuardDuty/[Region]/` if not provided",
        [],
        true,
        false,
      ),
    ];
  }
}
