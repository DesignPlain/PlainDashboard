import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface EnvironmentEC2Args {
  // The connection type used for connecting to an Amazon EC2 environment. Valid values are `CONNECT_SSH` and `CONNECT_SSM`. For more information please refer [AWS documentation for Cloud9](https://docs.aws.amazon.com/cloud9/latest/user-guide/ec2-ssm.html).
  connectionType?: string;

  // The type of instance to connect to the environment, e.g., `t2.micro`.
  instanceType?: string;

  // The ID of the subnet in Amazon VPC that AWS Cloud9 will use to communicate with the Amazon EC2 instance.
  subnetId?: string;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The number of minutes until the running instance is shut down after the environment has last been used.
  automaticStopTimeMinutes?: number;

  // The description of the environment.
  description?: string;

  /*
The identifier for the Amazon Machine Image (AMI) that's used to create the EC2 instance. Valid values are
- `amazonlinux-1-x86_64`
- `amazonlinux-2-x86_64`
- `amazonlinux-2023-x86_64`
- `ubuntu-18.04-x86_64`
- `ubuntu-22.04-x86_64`
- `resolve:ssm:/aws/service/cloud9/amis/amazonlinux-1-x86_64`
- `resolve:ssm:/aws/service/cloud9/amis/amazonlinux-2-x86_64`
- `resolve:ssm:/aws/service/cloud9/amis/amazonlinux-2023-x86_64`
- `resolve:ssm:/aws/service/cloud9/amis/ubuntu-18.04-x86_64`
- `resolve:ssm:/aws/service/cloud9/amis/ubuntu-22.04-x86_64`
*/
  imageId?: string;

  // The name of the environment.
  name?: string;

  // The ARN of the environment owner. This can be ARN of any AWS IAM principal. Defaults to the environment's creator.
  ownerArn?: string;
}
export class EnvironmentEC2 extends Resource {
  /*
The identifier for the Amazon Machine Image (AMI) that's used to create the EC2 instance. Valid values are
- `amazonlinux-1-x86_64`
- `amazonlinux-2-x86_64`
- `amazonlinux-2023-x86_64`
- `ubuntu-18.04-x86_64`
- `ubuntu-22.04-x86_64`
- `resolve:ssm:/aws/service/cloud9/amis/amazonlinux-1-x86_64`
- `resolve:ssm:/aws/service/cloud9/amis/amazonlinux-2-x86_64`
- `resolve:ssm:/aws/service/cloud9/amis/amazonlinux-2023-x86_64`
- `resolve:ssm:/aws/service/cloud9/amis/ubuntu-18.04-x86_64`
- `resolve:ssm:/aws/service/cloud9/amis/ubuntu-22.04-x86_64`
*/
  public imageId?: string;

  // The type of instance to connect to the environment, e.g., `t2.micro`.
  public instanceType?: string;

  // The name of the environment.
  public name?: string;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The type of the environment (e.g., `ssh` or `ec2`).
  public type?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN of the environment.
  public arn?: string;

  // The number of minutes until the running instance is shut down after the environment has last been used.
  public automaticStopTimeMinutes?: number;

  // The connection type used for connecting to an Amazon EC2 environment. Valid values are `CONNECT_SSH` and `CONNECT_SSM`. For more information please refer [AWS documentation for Cloud9](https://docs.aws.amazon.com/cloud9/latest/user-guide/ec2-ssm.html).
  public connectionType?: string;

  // The description of the environment.
  public description?: string;

  // The ARN of the environment owner. This can be ARN of any AWS IAM principal. Defaults to the environment's creator.
  public ownerArn?: string;

  // The ID of the subnet in Amazon VPC that AWS Cloud9 will use to communicate with the Amazon EC2 instance.
  public subnetId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "connectionType",
        "The connection type used for connecting to an Amazon EC2 environment. Valid values are `CONNECT_SSH` and `CONNECT_SSM`. For more information please refer [AWS documentation for Cloud9](https://docs.aws.amazon.com/cloud9/latest/user-guide/ec2-ssm.html).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceType",
        "The type of instance to connect to the environment, e.g., `t2.micro`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description of the environment.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "imageId",
        "The identifier for the Amazon Machine Image (AMI) that's used to create the EC2 instance. Valid values are\n* `amazonlinux-1-x86_64`\n* `amazonlinux-2-x86_64`\n* `amazonlinux-2023-x86_64`\n* `ubuntu-18.04-x86_64`\n* `ubuntu-22.04-x86_64`\n* `resolve:ssm:/aws/service/cloud9/amis/amazonlinux-1-x86_64`\n* `resolve:ssm:/aws/service/cloud9/amis/amazonlinux-2-x86_64`\n* `resolve:ssm:/aws/service/cloud9/amis/amazonlinux-2023-x86_64`\n* `resolve:ssm:/aws/service/cloud9/amis/ubuntu-18.04-x86_64`\n* `resolve:ssm:/aws/service/cloud9/amis/ubuntu-22.04-x86_64`",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the environment.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "subnetId",
        "The ID of the subnet in Amazon VPC that AWS Cloud9 will use to communicate with the Amazon EC2 instance.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "automaticStopTimeMinutes",
        "The number of minutes until the running instance is shut down after the environment has last been used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ownerArn",
        "The ARN of the environment owner. This can be ARN of any AWS IAM principal. Defaults to the environment's creator.",
        [],
        false,
        true,
      ),
    ];
  }
}
