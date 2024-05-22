import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DevEndpointArgs {
  // The number of AWS Glue Data Processing Units (DPUs) to allocate to this endpoint. Conflicts with `worker_type`.
  numberOfNodes?: number;

  // The public key to be used by this endpoint for authentication.
  publicKey?: string;

  // The subnet ID for the new endpoint to use.
  subnetId?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Specifies the versions of Python and Apache Spark to use. Defaults to AWS Glue version 0.9.
  glueVersion?: string;

  // A list of public keys to be used by this endpoint for authentication.
  publicKeys?: Array<string>;

  // The name of this endpoint. It must be unique in your account.
  name?: string;

  // The IAM role for this endpoint.
  roleArn?: string;

  // Security group IDs for the security groups to be used by this endpoint.
  securityGroupIds?: Array<string>;

  // Path to one or more Java Jars in an S3 bucket that should be loaded in this endpoint.
  extraJarsS3Path?: string;

  // Path(s) to one or more Python libraries in an S3 bucket that should be loaded in this endpoint. Multiple values must be complete paths separated by a comma.
  extraPythonLibsS3Path?: string;

  // The name of the Security Configuration structure to be used with this endpoint.
  securityConfiguration?: string;

  // The type of predefined worker that is allocated to this endpoint. Accepts a value of Standard, G.1X, or G.2X.
  workerType?: string;

  // A map of arguments used to configure the endpoint.
  arguments?: Map<string, string>;

  // The number of workers of a defined worker type that are allocated to this endpoint. This field is available only when you choose worker type G.1X or G.2X.
  numberOfWorkers?: number;
}
export class DevEndpoint extends Resource {
  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The type of predefined worker that is allocated to this endpoint. Accepts a value of Standard, G.1X, or G.2X.
  public workerType?: string;

  // Path(s) to one or more Python libraries in an S3 bucket that should be loaded in this endpoint. Multiple values must be complete paths separated by a comma.
  public extraPythonLibsS3Path?: string;

  // Specifies the versions of Python and Apache Spark to use. Defaults to AWS Glue version 0.9.
  public glueVersion?: string;

  // A private IP address to access the endpoint within a VPC, if this endpoint is created within one.
  public privateAddress?: string;

  // The public IP address used by this endpoint. The PublicAddress field is present only when you create a non-VPC endpoint.
  public publicAddress?: string;

  // Security group IDs for the security groups to be used by this endpoint.
  public securityGroupIds?: Array<string>;

  // A list of public keys to be used by this endpoint for authentication.
  public publicKeys?: Array<string>;

  // The current status of this endpoint.
  public status?: string;

  // The YARN endpoint address used by this endpoint.
  public yarnEndpointAddress?: string;

  // The ARN of the endpoint.
  public arn?: string;

  // The reason for a current failure in this endpoint.
  public failureReason?: string;

  // The number of AWS Glue Data Processing Units (DPUs) to allocate to this endpoint. Conflicts with `worker_type`.
  public numberOfNodes?: number;

  // The number of workers of a defined worker type that are allocated to this endpoint. This field is available only when you choose worker type G.1X or G.2X.
  public numberOfWorkers?: number;

  // The public key to be used by this endpoint for authentication.
  public publicKey?: string;

  // he ID of the VPC used by this endpoint.
  public vpcId?: string;

  // A map of arguments used to configure the endpoint.
  public arguments?: Map<string, string>;

  // The AWS availability zone where this endpoint is located.
  public availabilityZone?: string;

  // Path to one or more Java Jars in an S3 bucket that should be loaded in this endpoint.
  public extraJarsS3Path?: string;

  // The IAM role for this endpoint.
  public roleArn?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The name of this endpoint. It must be unique in your account.
  public name?: string;

  // The name of the Security Configuration structure to be used with this endpoint.
  public securityConfiguration?: string;

  // The subnet ID for the new endpoint to use.
  public subnetId?: string;

  // The Apache Zeppelin port for the remote Apache Spark interpreter.
  public zeppelinRemoteSparkInterpreterPort?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "publicKeys",
        "A list of public keys to be used by this endpoint for authentication.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "extraPythonLibsS3Path",
        "Path(s) to one or more Python libraries in an S3 bucket that should be loaded in this endpoint. Multiple values must be complete paths separated by a comma.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "subnetId",
        "The subnet ID for the new endpoint to use.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "extraJarsS3Path",
        "Path to one or more Java Jars in an S3 bucket that should be loaded in this endpoint.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "workerType",
        "The type of predefined worker that is allocated to this endpoint. Accepts a value of Standard, G.1X, or G.2X.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "numberOfNodes",
        "The number of AWS Glue Data Processing Units (DPUs) to allocate to this endpoint. Conflicts with `worker_type`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of this endpoint. It must be unique in your account.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "securityConfiguration",
        "The name of the Security Configuration structure to be used with this endpoint.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "arguments",
        "A map of arguments used to configure the endpoint.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "publicKey",
        "The public key to be used by this endpoint for authentication.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "The IAM role for this endpoint.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "securityGroupIds",
        "Security group IDs for the security groups to be used by this endpoint.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "numberOfWorkers",
        "The number of workers of a defined worker type that are allocated to this endpoint. This field is available only when you choose worker type G.1X or G.2X.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "glueVersion",
        "Specifies the versions of Python and Apache Spark to use. Defaults to AWS Glue version 0.9.",
        [],
        false,
        true,
      ),
    ];
  }
}
