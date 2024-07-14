import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface macie2_ClassificationExportConfigurationS3Destination {
  // The Amazon S3 bucket name in which Amazon Macie exports the data classification results.
  bucketName?: string;

  // The object key for the bucket in which Amazon Macie exports the data classification results.
  keyPrefix?: string;

  /*
Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.

Additional information can be found in the [Storing and retaining sensitive data discovery results with Amazon Macie for AWS Macie documentation](https://docs.aws.amazon.com/macie/latest/user/discovery-results-repository-s3.html).
*/
  kmsKeyArn?: string;
}

export function macie2_ClassificationExportConfigurationS3Destination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "keyPrefix",
      "The object key for the bucket in which Amazon Macie exports the data classification results.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyArn",
      "Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.\n\nAdditional information can be found in the [Storing and retaining sensitive data discovery results with Amazon Macie for AWS Macie documentation](https://docs.aws.amazon.com/macie/latest/user/discovery-results-repository-s3.html).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketName",
      "The Amazon S3 bucket name in which Amazon Macie exports the data classification results.",
      [],
      true,
      false,
    ),
  ];
}
