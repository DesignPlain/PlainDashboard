import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  batch_ComputeEnvironmentComputeResourcesLaunchTemplate,
  batch_ComputeEnvironmentComputeResourcesLaunchTemplate_GetTypes,
} from "./batch_ComputeEnvironmentComputeResourcesLaunchTemplate";
import {
  batch_ComputeEnvironmentComputeResourcesEc2Configuration,
  batch_ComputeEnvironmentComputeResourcesEc2Configuration_GetTypes,
} from "./batch_ComputeEnvironmentComputeResourcesEc2Configuration";

export interface batch_ComputeEnvironmentComputeResources {
  // The EC2 key pair that is used for instances launched in the compute environment. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.
  ec2KeyPair?: string;

  // The Amazon Machine Image (AMI) ID used for instances launched in the compute environment. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified. (Deprecated, use `ec2_configuration` `image_id_override` instead)
  imageId?: string;

  // The Amazon ECS instance role applied to Amazon EC2 instances in a compute environment. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.
  instanceRole?: string;

  // A list of EC2 security group that are associated with instances launched in the compute environment. This parameter is required for Fargate compute environments.
  securityGroupIds?: Array<string>;

  // A list of VPC subnets into which the compute resources are launched.
  subnets?: Array<string>;

  // The type of compute environment. Valid items are `EC2`, `SPOT`, `FARGATE` or `FARGATE_SPOT`.
  type?: string;

  // The desired number of EC2 vCPUS in the compute environment. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.
  desiredVcpus?: number;

  // The launch template to use for your compute resources. See details below. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.
  launchTemplate?: batch_ComputeEnvironmentComputeResourcesLaunchTemplate;

  // The minimum number of EC2 vCPUs that an environment should maintain. For `EC2` or `SPOT` compute environments, if the parameter is not explicitly defined, a `0` default value will be set. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.
  minVcpus?: number;

  // The Amazon Resource Name (ARN) of the Amazon EC2 Spot Fleet IAM role applied to a SPOT compute environment. This parameter is required for SPOT compute environments. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.
  spotIamFleetRole?: string;

  // The allocation strategy to use for the compute resource in case not enough instances of the best fitting instance type can be allocated. For valid values, refer to the [AWS documentation](https://docs.aws.amazon.com/batch/latest/APIReference/API_ComputeResource.html#Batch-Type-ComputeResource-allocationStrategy). Defaults to `BEST_FIT`. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.
  allocationStrategy?: string;

  // The Amazon EC2 placement group to associate with your compute resources.
  placementGroup?: string;

  // A list of instance types that may be launched. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.
  instanceTypes?: Array<string>;

  // Provides information used to select Amazon Machine Images (AMIs) for EC2 instances in the compute environment. If Ec2Configuration isn't specified, the default is ECS_AL2. This parameter isn't applicable to jobs that are running on Fargate resources, and shouldn't be specified.
  ec2Configurations?: Array<batch_ComputeEnvironmentComputeResourcesEc2Configuration>;

  // The maximum number of EC2 vCPUs that an environment can reach.
  maxVcpus?: number;

  // Key-value pair tags to be applied to resources that are launched in the compute environment. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.
  tags?: Map<string, string>;

  // Integer of maximum percentage that a Spot Instance price can be when compared with the On-Demand price for that instance type before instances are launched. For example, if your bid percentage is 20%!((MISSING)`20`), then the Spot price must be below 20%!o(MISSING)f the current On-Demand price for that EC2 instance. If you leave this field empty, the default value is 100%!o(MISSING)f the On-Demand price. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.
  bidPercentage?: number;
}

export function batch_ComputeEnvironmentComputeResources_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ec2KeyPair",
      "The EC2 key pair that is used for instances launched in the compute environment. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "securityGroupIds",
      "A list of EC2 security group that are associated with instances launched in the compute environment. This parameter is required for Fargate compute environments.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of compute environment. Valid items are `EC2`, `SPOT`, `FARGATE` or `FARGATE_SPOT`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "allocationStrategy",
      "The allocation strategy to use for the compute resource in case not enough instances of the best fitting instance type can be allocated. For valid values, refer to the [AWS documentation](https://docs.aws.amazon.com/batch/latest/APIReference/API_ComputeResource.html#Batch-Type-ComputeResource-allocationStrategy). Defaults to `BEST_FIT`. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "imageId",
      "The Amazon Machine Image (AMI) ID used for instances launched in the compute environment. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified. (Deprecated, use `ec2_configuration` `image_id_override` instead)",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceRole",
      "The Amazon ECS instance role applied to Amazon EC2 instances in a compute environment. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "desiredVcpus",
      "The desired number of EC2 vCPUS in the compute environment. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minVcpus",
      "The minimum number of EC2 vCPUs that an environment should maintain. For `EC2` or `SPOT` compute environments, if the parameter is not explicitly defined, a `0` default value will be set. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "tags",
      "Key-value pair tags to be applied to resources that are launched in the compute environment. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "launchTemplate",
      "The launch template to use for your compute resources. See details below. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.",
      () => batch_ComputeEnvironmentComputeResourcesLaunchTemplate_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "spotIamFleetRole",
      "The Amazon Resource Name (ARN) of the Amazon EC2 Spot Fleet IAM role applied to a SPOT compute environment. This parameter is required for SPOT compute environments. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "placementGroup",
      "The Amazon EC2 placement group to associate with your compute resources.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subnets",
      "A list of VPC subnets into which the compute resources are launched.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "instanceTypes",
      "A list of instance types that may be launched. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ec2Configurations",
      "Provides information used to select Amazon Machine Images (AMIs) for EC2 instances in the compute environment. If Ec2Configuration isn't specified, the default is ECS_AL2. This parameter isn't applicable to jobs that are running on Fargate resources, and shouldn't be specified.",
      () => batch_ComputeEnvironmentComputeResourcesEc2Configuration_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxVcpus",
      "The maximum number of EC2 vCPUs that an environment can reach.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "bidPercentage",
      "Integer of maximum percentage that a Spot Instance price can be when compared with the On-Demand price for that instance type before instances are launched. For example, if your bid percentage is 20% (`20`), then the Spot price must be below 20% of the current On-Demand price for that EC2 instance. If you leave this field empty, the default value is 100% of the On-Demand price. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.",
      () => [],
      false,
      false,
    ),
  ];
}
