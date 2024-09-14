import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ec2_LaunchTemplatePrivateDnsNameOptions,
  ec2_LaunchTemplatePrivateDnsNameOptions_GetTypes,
} from "../types/ec2_LaunchTemplatePrivateDnsNameOptions";
import {
  ec2_LaunchTemplateMetadataOptions,
  ec2_LaunchTemplateMetadataOptions_GetTypes,
} from "../types/ec2_LaunchTemplateMetadataOptions";
import {
  ec2_LaunchTemplateElasticInferenceAccelerator,
  ec2_LaunchTemplateElasticInferenceAccelerator_GetTypes,
} from "../types/ec2_LaunchTemplateElasticInferenceAccelerator";
import {
  ec2_LaunchTemplateInstanceRequirements,
  ec2_LaunchTemplateInstanceRequirements_GetTypes,
} from "../types/ec2_LaunchTemplateInstanceRequirements";
import {
  ec2_LaunchTemplateElasticGpuSpecification,
  ec2_LaunchTemplateElasticGpuSpecification_GetTypes,
} from "../types/ec2_LaunchTemplateElasticGpuSpecification";
import {
  ec2_LaunchTemplateTagSpecification,
  ec2_LaunchTemplateTagSpecification_GetTypes,
} from "../types/ec2_LaunchTemplateTagSpecification";
import {
  ec2_LaunchTemplatePlacement,
  ec2_LaunchTemplatePlacement_GetTypes,
} from "../types/ec2_LaunchTemplatePlacement";
import {
  ec2_LaunchTemplateInstanceMarketOptions,
  ec2_LaunchTemplateInstanceMarketOptions_GetTypes,
} from "../types/ec2_LaunchTemplateInstanceMarketOptions";
import {
  ec2_LaunchTemplateMonitoring,
  ec2_LaunchTemplateMonitoring_GetTypes,
} from "../types/ec2_LaunchTemplateMonitoring";
import {
  ec2_LaunchTemplateCreditSpecification,
  ec2_LaunchTemplateCreditSpecification_GetTypes,
} from "../types/ec2_LaunchTemplateCreditSpecification";
import {
  ec2_LaunchTemplateLicenseSpecification,
  ec2_LaunchTemplateLicenseSpecification_GetTypes,
} from "../types/ec2_LaunchTemplateLicenseSpecification";
import {
  ec2_LaunchTemplateIamInstanceProfile,
  ec2_LaunchTemplateIamInstanceProfile_GetTypes,
} from "../types/ec2_LaunchTemplateIamInstanceProfile";
import {
  ec2_LaunchTemplateCapacityReservationSpecification,
  ec2_LaunchTemplateCapacityReservationSpecification_GetTypes,
} from "../types/ec2_LaunchTemplateCapacityReservationSpecification";
import {
  ec2_LaunchTemplateNetworkInterface,
  ec2_LaunchTemplateNetworkInterface_GetTypes,
} from "../types/ec2_LaunchTemplateNetworkInterface";
import {
  ec2_LaunchTemplateBlockDeviceMapping,
  ec2_LaunchTemplateBlockDeviceMapping_GetTypes,
} from "../types/ec2_LaunchTemplateBlockDeviceMapping";
import {
  ec2_LaunchTemplateMaintenanceOptions,
  ec2_LaunchTemplateMaintenanceOptions_GetTypes,
} from "../types/ec2_LaunchTemplateMaintenanceOptions";
import {
  ec2_LaunchTemplateCpuOptions,
  ec2_LaunchTemplateCpuOptions_GetTypes,
} from "../types/ec2_LaunchTemplateCpuOptions";
import {
  ec2_LaunchTemplateHibernationOptions,
  ec2_LaunchTemplateHibernationOptions_GetTypes,
} from "../types/ec2_LaunchTemplateHibernationOptions";
import {
  ec2_LaunchTemplateEnclaveOptions,
  ec2_LaunchTemplateEnclaveOptions_GetTypes,
} from "../types/ec2_LaunchTemplateEnclaveOptions";

export interface LaunchTemplateArgs {
  // Description of the launch template.
  description?: string;

  // If `true`, the launched EC2 instance will be EBS-optimized.
  ebsOptimized?: string;

  // The maintenance options for the instance. See Maintenance Options below for more details.
  maintenanceOptions?: ec2_LaunchTemplateMaintenanceOptions;

  // The monitoring option for the instance. See Monitoring below for more details.
  monitoring?: ec2_LaunchTemplateMonitoring;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  namePrefix?: string;

  // Default Version of the launch template.
  defaultVersion?: number;

  // The options for the instance hostname. The default values are inherited from the subnet. See Private DNS Name Options below for more details.
  privateDnsNameOptions?: ec2_LaunchTemplatePrivateDnsNameOptions;

  // If true, enables [EC2 Instance Stop Protection](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-stop-protection.html).
  disableApiStop?: boolean;

  /*
Customize the credit specification of the instance. See Credit
Specification below for more details.
*/
  creditSpecification?: ec2_LaunchTemplateCreditSpecification;

  // The AMI from which to launch the instance or use a Systems Manager parameter convention e.g. `resolve:ssm:parameter-name`. See [docs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-launch-template.html#use-an-ssm-parameter-instead-of-an-ami-id) for more details.
  imageId?: string;

  // The kernel ID.
  kernelId?: string;

  /*
A list of security group names to associate with. If you are creating Instances in a VPC, use
`vpc_security_group_ids` instead.
*/
  securityGroupNames?: Array<string>;

  // A map of tags to assign to the launch template. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The CPU options for the instance. See CPU Options below for more details.
  cpuOptions?: ec2_LaunchTemplateCpuOptions;

  // A list of license specifications to associate with. See License Specification below for more details.
  licenseSpecifications?: Array<ec2_LaunchTemplateLicenseSpecification>;

  // A list of security group IDs to associate with. Conflicts with `network_interfaces.security_groups`
  vpcSecurityGroupIds?: Array<string>;

  // Configuration block containing an Elastic Inference Accelerator to attach to the instance. See Elastic Inference Accelerator below for more details.
  elasticInferenceAccelerator?: ec2_LaunchTemplateElasticInferenceAccelerator;

  // The attribute requirements for the type of instance. If present then `instance_type` cannot be present.
  instanceRequirements?: ec2_LaunchTemplateInstanceRequirements;

  // Customize the metadata options for the instance. See Metadata Options below for more details.
  metadataOptions?: ec2_LaunchTemplateMetadataOptions;

  /*
The elastic GPU to attach to the instance. See Elastic GPU
below for more details.
*/
  elasticGpuSpecifications?: Array<ec2_LaunchTemplateElasticGpuSpecification>;

  // The hibernation options for the instance. See Hibernation Options below for more details.
  hibernationOptions?: ec2_LaunchTemplateHibernationOptions;

  /*
The IAM Instance Profile to launch the instance with. See Instance Profile
below for more details.
*/
  iamInstanceProfile?: ec2_LaunchTemplateIamInstanceProfile;

  /*
Shutdown behavior for the instance. Can be `stop` or `terminate`.
(Default: `stop`).
*/
  instanceInitiatedShutdownBehavior?: string;

  // The name of the launch template. If you leave this blank, the provider will auto-generate a unique name.
  name?: string;

  // The base64-encoded user data to provide when launching the instance.
  userData?: string;

  // Enable Nitro Enclaves on launched instances. See Enclave Options below for more details.
  enclaveOptions?: ec2_LaunchTemplateEnclaveOptions;

  // Targeting for EC2 capacity reservations. See Capacity Reservation Specification below for more details.
  capacityReservationSpecification?: ec2_LaunchTemplateCapacityReservationSpecification;

  /*
If `true`, enables [EC2 Instance
Termination Protection](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_ChangingDisableAPITermination.html)
*/
  disableApiTermination?: boolean;

  // The key name to use for the instance.
  keyName?: string;

  /*
Customize network interfaces to be attached at instance boot time. See Network
Interfaces below for more details.
*/
  networkInterfaces?: Array<ec2_LaunchTemplateNetworkInterface>;

  // The tags to apply to the resources during launch. See Tag Specifications below for more details. Default tags are currently not propagated to ASG created resources so you may wish to inject your default tags into this variable against the relevant child resource types created.
  tagSpecifications?: Array<ec2_LaunchTemplateTagSpecification>;

  // Whether to update Default Version each update. Conflicts with `default_version`.
  updateDefaultVersion?: boolean;

  /*
Specify volumes to attach to the instance besides the volumes specified by the AMI.
See Block Devices below for details.
*/
  blockDeviceMappings?: Array<ec2_LaunchTemplateBlockDeviceMapping>;

  // The type of the instance. If present then `instance_requirements` cannot be present.
  instanceType?: string;

  // The placement of the instance. See Placement below for more details.
  placement?: ec2_LaunchTemplatePlacement;

  // The ID of the RAM disk.
  ramDiskId?: string;

  /*
The market (purchasing) option for the instance. See Market Options
below for details.
*/
  instanceMarketOptions?: ec2_LaunchTemplateInstanceMarketOptions;
}
export class LaunchTemplate extends DS_Resource {
  // The tags to apply to the resources during launch. See Tag Specifications below for more details. Default tags are currently not propagated to ASG created resources so you may wish to inject your default tags into this variable against the relevant child resource types created.
  public tagSpecifications?: Array<ec2_LaunchTemplateTagSpecification>;

  // The CPU options for the instance. See CPU Options below for more details.
  public cpuOptions?: ec2_LaunchTemplateCpuOptions;

  /*
Customize the credit specification of the instance. See Credit
Specification below for more details.
*/
  public creditSpecification?: ec2_LaunchTemplateCreditSpecification;

  // Default Version of the launch template.
  public defaultVersion?: number;

  /*
The IAM Instance Profile to launch the instance with. See Instance Profile
below for more details.
*/
  public iamInstanceProfile?: ec2_LaunchTemplateIamInstanceProfile;

  /*
The market (purchasing) option for the instance. See Market Options
below for details.
*/
  public instanceMarketOptions?: ec2_LaunchTemplateInstanceMarketOptions;

  // The key name to use for the instance.
  public keyName?: string;

  // The placement of the instance. See Placement below for more details.
  public placement?: ec2_LaunchTemplatePlacement;

  /*
Specify volumes to attach to the instance besides the volumes specified by the AMI.
See Block Devices below for details.
*/
  public blockDeviceMappings?: Array<ec2_LaunchTemplateBlockDeviceMapping>;

  // If true, enables [EC2 Instance Stop Protection](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-stop-protection.html).
  public disableApiStop?: boolean;

  // If `true`, the launched EC2 instance will be EBS-optimized.
  public ebsOptimized?: string;

  // Configuration block containing an Elastic Inference Accelerator to attach to the instance. See Elastic Inference Accelerator below for more details.
  public elasticInferenceAccelerator?: ec2_LaunchTemplateElasticInferenceAccelerator;

  // A list of license specifications to associate with. See License Specification below for more details.
  public licenseSpecifications?: Array<ec2_LaunchTemplateLicenseSpecification>;

  // Customize the metadata options for the instance. See Metadata Options below for more details.
  public metadataOptions?: ec2_LaunchTemplateMetadataOptions;

  // Amazon Resource Name (ARN) of the launch template.
  public arn?: string;

  // Targeting for EC2 capacity reservations. See Capacity Reservation Specification below for more details.
  public capacityReservationSpecification?: ec2_LaunchTemplateCapacityReservationSpecification;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  public namePrefix?: string;

  // A list of security group IDs to associate with. Conflicts with `network_interfaces.security_groups`
  public vpcSecurityGroupIds?: Array<string>;

  // The hibernation options for the instance. See Hibernation Options below for more details.
  public hibernationOptions?: ec2_LaunchTemplateHibernationOptions;

  // The name of the launch template. If you leave this blank, the provider will auto-generate a unique name.
  public name?: string;

  /*
Customize network interfaces to be attached at instance boot time. See Network
Interfaces below for more details.
*/
  public networkInterfaces?: Array<ec2_LaunchTemplateNetworkInterface>;

  // The options for the instance hostname. The default values are inherited from the subnet. See Private DNS Name Options below for more details.
  public privateDnsNameOptions?: ec2_LaunchTemplatePrivateDnsNameOptions;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  /*
Shutdown behavior for the instance. Can be `stop` or `terminate`.
(Default: `stop`).
*/
  public instanceInitiatedShutdownBehavior?: string;

  // The attribute requirements for the type of instance. If present then `instance_type` cannot be present.
  public instanceRequirements?: ec2_LaunchTemplateInstanceRequirements;

  // The type of the instance. If present then `instance_requirements` cannot be present.
  public instanceType?: string;

  // Whether to update Default Version each update. Conflicts with `default_version`.
  public updateDefaultVersion?: boolean;

  // The base64-encoded user data to provide when launching the instance.
  public userData?: string;

  // Description of the launch template.
  public description?: string;

  // Enable Nitro Enclaves on launched instances. See Enclave Options below for more details.
  public enclaveOptions?: ec2_LaunchTemplateEnclaveOptions;

  // The AMI from which to launch the instance or use a Systems Manager parameter convention e.g. `resolve:ssm:parameter-name`. See [docs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-launch-template.html#use-an-ssm-parameter-instead-of-an-ami-id) for more details.
  public imageId?: string;

  // The latest version of the launch template.
  public latestVersion?: number;

  // The maintenance options for the instance. See Maintenance Options below for more details.
  public maintenanceOptions?: ec2_LaunchTemplateMaintenanceOptions;

  /*
If `true`, enables [EC2 Instance
Termination Protection](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_ChangingDisableAPITermination.html)
*/
  public disableApiTermination?: boolean;

  /*
The elastic GPU to attach to the instance. See Elastic GPU
below for more details.
*/
  public elasticGpuSpecifications?: Array<ec2_LaunchTemplateElasticGpuSpecification>;

  // The kernel ID.
  public kernelId?: string;

  // The monitoring option for the instance. See Monitoring below for more details.
  public monitoring?: ec2_LaunchTemplateMonitoring;

  // The ID of the RAM disk.
  public ramDiskId?: string;

  /*
A list of security group names to associate with. If you are creating Instances in a VPC, use
`vpc_security_group_ids` instead.
*/
  public securityGroupNames?: Array<string>;

  // A map of tags to assign to the launch template. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "licenseSpecifications",
        "A list of license specifications to associate with. See License Specification below for more details.",
        () => ec2_LaunchTemplateLicenseSpecification_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the launch template.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "namePrefix",
        "Creates a unique name beginning with the specified prefix. Conflicts with `name`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "defaultVersion",
        "Default Version of the launch template.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "elasticInferenceAccelerator",
        "Configuration block containing an Elastic Inference Accelerator to attach to the instance. See Elastic Inference Accelerator below for more details.",
        () => ec2_LaunchTemplateElasticInferenceAccelerator_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "tagSpecifications",
        "The tags to apply to the resources during launch. See Tag Specifications below for more details. Default tags are currently not propagated to ASG created resources so you may wish to inject your default tags into this variable against the relevant child resource types created.",
        () => ec2_LaunchTemplateTagSpecification_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "maintenanceOptions",
        "The maintenance options for the instance. See Maintenance Options below for more details.",
        () => ec2_LaunchTemplateMaintenanceOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "vpcSecurityGroupIds",
        "A list of security group IDs to associate with. Conflicts with `network_interfaces.security_groups`",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "instanceRequirements",
        "The attribute requirements for the type of instance. If present then `instance_type` cannot be present.",
        () => ec2_LaunchTemplateInstanceRequirements_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceInitiatedShutdownBehavior",
        "Shutdown behavior for the instance. Can be `stop` or `terminate`.\n(Default: `stop`).",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "disableApiTermination",
        "If `true`, enables [EC2 Instance\nTermination Protection](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_ChangingDisableAPITermination.html)",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "networkInterfaces",
        "Customize network interfaces to be attached at instance boot time. See Network\nInterfaces below for more details.",
        () => ec2_LaunchTemplateNetworkInterface_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceType",
        "The type of the instance. If present then `instance_requirements` cannot be present.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ebsOptimized",
        "If `true`, the launched EC2 instance will be EBS-optimized.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "disableApiStop",
        "If true, enables [EC2 Instance Stop Protection](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-stop-protection.html).",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "capacityReservationSpecification",
        "Targeting for EC2 capacity reservations. See Capacity Reservation Specification below for more details.",
        () => ec2_LaunchTemplateCapacityReservationSpecification_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "privateDnsNameOptions",
        "The options for the instance hostname. The default values are inherited from the subnet. See Private DNS Name Options below for more details.",
        () => ec2_LaunchTemplatePrivateDnsNameOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "userData",
        "The base64-encoded user data to provide when launching the instance.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "blockDeviceMappings",
        "Specify volumes to attach to the instance besides the volumes specified by the AMI.\nSee Block Devices below for details.",
        () => ec2_LaunchTemplateBlockDeviceMapping_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "placement",
        "The placement of the instance. See Placement below for more details.",
        () => ec2_LaunchTemplatePlacement_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "elasticGpuSpecifications",
        "The elastic GPU to attach to the instance. See Elastic GPU\nbelow for more details.",
        () => ec2_LaunchTemplateElasticGpuSpecification_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kernelId",
        "The kernel ID.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "metadataOptions",
        "Customize the metadata options for the instance. See Metadata Options below for more details.",
        () => ec2_LaunchTemplateMetadataOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the launch template. If you leave this blank, the provider will auto-generate a unique name.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ramDiskId",
        "The ID of the RAM disk.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "instanceMarketOptions",
        "The market (purchasing) option for the instance. See Market Options\nbelow for details.",
        () => ec2_LaunchTemplateInstanceMarketOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "creditSpecification",
        "Customize the credit specification of the instance. See Credit\nSpecification below for more details.",
        () => ec2_LaunchTemplateCreditSpecification_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "imageId",
        "The AMI from which to launch the instance or use a Systems Manager parameter convention e.g. `resolve:ssm:parameter-name`. See [docs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-launch-template.html#use-an-ssm-parameter-instead-of-an-ami-id) for more details.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "securityGroupNames",
        "A list of security group names to associate with. If you are creating Instances in a VPC, use\n`vpc_security_group_ids` instead.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the launch template. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "cpuOptions",
        "The CPU options for the instance. See CPU Options below for more details.",
        () => ec2_LaunchTemplateCpuOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "hibernationOptions",
        "The hibernation options for the instance. See Hibernation Options below for more details.",
        () => ec2_LaunchTemplateHibernationOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "iamInstanceProfile",
        "The IAM Instance Profile to launch the instance with. See Instance Profile\nbelow for more details.",
        () => ec2_LaunchTemplateIamInstanceProfile_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "enclaveOptions",
        "Enable Nitro Enclaves on launched instances. See Enclave Options below for more details.",
        () => ec2_LaunchTemplateEnclaveOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "monitoring",
        "The monitoring option for the instance. See Monitoring below for more details.",
        () => ec2_LaunchTemplateMonitoring_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "updateDefaultVersion",
        "Whether to update Default Version each update. Conflicts with `default_version`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "keyName",
        "The key name to use for the instance.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
