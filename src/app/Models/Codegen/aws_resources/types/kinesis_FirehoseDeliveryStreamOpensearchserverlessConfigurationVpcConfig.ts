import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfig {
  // The ARN of the IAM role to be assumed by Firehose for calling the Amazon EC2 configuration API and for creating network interfaces. Make sure role has necessary [IAM permissions](https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-es-vpc)
  roleArn?: string;

  // A list of security group IDs to associate with Kinesis Firehose.
  securityGroupIds?: Array<string>;

  // A list of subnet IDs to associate with Kinesis Firehose.
  subnetIds?: Array<string>;

  //
  vpcId?: string;
}

export function kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The ARN of the IAM role to be assumed by Firehose for calling the Amazon EC2 configuration API and for creating network interfaces. Make sure role has necessary [IAM permissions](https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-es-vpc)",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "securityGroupIds",
      "A list of security group IDs to associate with Kinesis Firehose.",
      InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subnetIds",
      "A list of subnet IDs to associate with Kinesis Firehose.",
      InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(InputType.String, "vpcId", "", [], false, false),
  ];
}
