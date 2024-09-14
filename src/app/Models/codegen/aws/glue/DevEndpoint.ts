import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface DevEndpointArgs {
  // Path to one or more Java Jars in an S3 bucket that should be loaded in this endpoint.
  extraJarsS3Path?: string;

  // Specifies the versions of Python and Apache Spark to use. Defaults to AWS Glue version 0.9.
  glueVersion?: string;

  // The public key to be used by this endpoint for authentication.
  publicKey?: string;

  // Security group IDs for the security groups to be used by this endpoint.
  securityGroupIds?: Array<string>;

  // A map of arguments used to configure the endpoint.
  arguments?: Map<string, string>;

  // The number of workers of a defined worker type that are allocated to this endpoint. This field is available only when you choose worker type G.1X or G.2X.
  numberOfWorkers?: number;

  // A list of public keys to be used by this endpoint for authentication.
  publicKeys?: Array<string>;

  // The name of this endpoint. It must be unique in your account.
  name?: string;

  // The name of the Security Configuration structure to be used with this endpoint.
  securityConfiguration?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Path(s) to one or more Python libraries in an S3 bucket that should be loaded in this endpoint. Multiple values must be complete paths separated by a comma.
  extraPythonLibsS3Path?: string;

  // The number of AWS Glue Data Processing Units (DPUs) to allocate to this endpoint. Conflicts with `worker_type`.
  numberOfNodes?: number;

  // The IAM role for this endpoint.
  roleArn?: string;

  // The subnet ID for the new endpoint to use.
  subnetId?: string;

  // The type of predefined worker that is allocated to this endpoint. Accepts a value of Standard, G.1X, or G.2X.
  workerType?: string;
}
export class DevEndpoint extends DS_Resource {
  // A map of arguments used to configure the endpoint.
  public arguments?: Map<string, string>;

  // The ARN of the endpoint.
  public arn?: string;

  // The AWS availability zone where this endpoint is located.
  public availabilityZone?: string;

  // The current status of this endpoint.
  public status?: string;

  // The IAM role for this endpoint.
  public roleArn?: string;

  // The name of the Security Configuration structure to be used with this endpoint.
  public securityConfiguration?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // he ID of the VPC used by this endpoint.
  public vpcId?: string;

  // Specifies the versions of Python and Apache Spark to use. Defaults to AWS Glue version 0.9.
  public glueVersion?: string;

  // The number of AWS Glue Data Processing Units (DPUs) to allocate to this endpoint. Conflicts with `worker_type`.
  public numberOfNodes?: number;

  // The public IP address used by this endpoint. The PublicAddress field is present only when you create a non-VPC endpoint.
  public publicAddress?: string;

  // The public key to be used by this endpoint for authentication.
  public publicKey?: string;

  // The subnet ID for the new endpoint to use.
  public subnetId?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The YARN endpoint address used by this endpoint.
  public yarnEndpointAddress?: string;

  // The Apache Zeppelin port for the remote Apache Spark interpreter.
  public zeppelinRemoteSparkInterpreterPort?: number;

  // Path to one or more Java Jars in an S3 bucket that should be loaded in this endpoint.
  public extraJarsS3Path?: string;

  // The reason for a current failure in this endpoint.
  public failureReason?: string;

  // The name of this endpoint. It must be unique in your account.
  public name?: string;

  // Security group IDs for the security groups to be used by this endpoint.
  public securityGroupIds?: Array<string>;

  // The type of predefined worker that is allocated to this endpoint. Accepts a value of Standard, G.1X, or G.2X.
  public workerType?: string;

  // Path(s) to one or more Python libraries in an S3 bucket that should be loaded in this endpoint. Multiple values must be complete paths separated by a comma.
  public extraPythonLibsS3Path?: string;

  // The number of workers of a defined worker type that are allocated to this endpoint. This field is available only when you choose worker type G.1X or G.2X.
  public numberOfWorkers?: number;

  // A private IP address to access the endpoint within a VPC, if this endpoint is created within one.
  public privateAddress?: string;

  // A list of public keys to be used by this endpoint for authentication.
  public publicKeys?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "arguments",
        "A map of arguments used to configure the endpoint.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "securityConfiguration",
        "The name of the Security Configuration structure to be used with this endpoint.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "extraPythonLibsS3Path",
        "Path(s) to one or more Python libraries in an S3 bucket that should be loaded in this endpoint. Multiple values must be complete paths separated by a comma.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "securityGroupIds",
        "Security group IDs for the security groups to be used by this endpoint.",
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "subnetId",
        "The subnet ID for the new endpoint to use.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "workerType",
        "The type of predefined worker that is allocated to this endpoint. Accepts a value of Standard, G.1X, or G.2X.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "numberOfNodes",
        "The number of AWS Glue Data Processing Units (DPUs) to allocate to this endpoint. Conflicts with `worker_type`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "glueVersion",
        "Specifies the versions of Python and Apache Spark to use. Defaults to AWS Glue version 0.9.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "numberOfWorkers",
        "The number of workers of a defined worker type that are allocated to this endpoint. This field is available only when you choose worker type G.1X or G.2X.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "publicKeys",
        "A list of public keys to be used by this endpoint for authentication.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of this endpoint. It must be unique in your account.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "The IAM role for this endpoint.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "extraJarsS3Path",
        "Path to one or more Java Jars in an S3 bucket that should be loaded in this endpoint.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "publicKey",
        "The public key to be used by this endpoint for authentication.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
