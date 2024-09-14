import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  lightsail_ContainerServicePrivateRegistryAccess,
  lightsail_ContainerServicePrivateRegistryAccess_GetTypes,
} from "../types/lightsail_ContainerServicePrivateRegistryAccess";
import {
  lightsail_ContainerServicePublicDomainNames,
  lightsail_ContainerServicePublicDomainNames_GetTypes,
} from "../types/lightsail_ContainerServicePublicDomainNames";

export interface ContainerServiceArgs {
  /*
The name for the container service. Names must be of length 1 to 63, and be
unique within each AWS Region in your Lightsail account.
*/
  name?: string;

  /*
The power specification for the container service. The power specifies the amount of memory,
the number of vCPUs, and the monthly price of each node of the container service.
Possible values: `nano`, `micro`, `small`, `medium`, `large`, `xlarge`.
*/
  power?: string;

  // An object to describe the configuration for the container service to access private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories. See Private Registry Access below for more details.
  privateRegistryAccess?: lightsail_ContainerServicePrivateRegistryAccess;

  /*
The public domain names to use with the container service, such as example.com
and www.example.com. You can specify up to four public domain names for a container service. The domain names that you
specify are used when you create a deployment with a container configured as the public endpoint of your container
service. If you don't specify public domain names, then you can use the default domain of the container service.
Defined below.
*/
  publicDomainNames?: lightsail_ContainerServicePublicDomainNames;

  /*
The scale specification for the container service. The scale specifies the allocated compute
nodes of the container service.
*/
  scale?: number;

  /*
Map of container service tags. To create a key-only tag, use an empty string as the value. To tag at launch, specify the tags in the Launch Template. If
configured with a provider
`default_tags` configuration block
present, tags with matching keys will overwrite those defined at the provider-level.
*/
  tags?: Map<string, string>;

  // A Boolean value indicating whether the container service is disabled. Defaults to `false`.
  isDisabled?: boolean;
}
export class ContainerService extends DS_Resource {
  /*
The private domain name of the container service. The private domain name is accessible only
by other resources within the default virtual private cloud (VPC) of your Lightsail account.
*/
  public privateDomainName?: string;

  /*
The scale specification for the container service. The scale specifies the allocated compute
nodes of the container service.
*/
  public scale?: number;

  /*
Map of container service tags. To create a key-only tag, use an empty string as the value. To tag at launch, specify the tags in the Launch Template. If
configured with a provider
`default_tags` configuration block
present, tags with matching keys will overwrite those defined at the provider-level.
*/
  public tags?: Map<string, string>;

  /*
A map of tags assigned to the resource, including those inherited from the provider
`default_tags` configuration block.
*/
  public tagsAll?: Map<string, string>;

  /*
The publicly accessible URL of the container service. If no public endpoint is specified in the
currentDeployment, this URL returns a 404 response.
*/
  public url?: string;

  // The Availability Zone. Follows the format us-east-2a (case-sensitive).
  public availabilityZone?: string;

  // A Boolean value indicating whether the container service is disabled. Defaults to `false`.
  public isDisabled?: boolean;

  /*
The name for the container service. Names must be of length 1 to 63, and be
unique within each AWS Region in your Lightsail account.
*/
  public name?: string;

  //
  public createdAt?: string;

  /*
The power specification for the container service. The power specifies the amount of memory,
the number of vCPUs, and the monthly price of each node of the container service.
Possible values: `nano`, `micro`, `small`, `medium`, `large`, `xlarge`.
*/
  public power?: string;

  /*
The principal ARN of the container service. The principal ARN can be used to create a trust
relationship between your standard AWS account and your Lightsail container service. This allows you to give your
service permission to access resources in your standard AWS account.
*/
  public principalArn?: string;

  // The current state of the container service.
  public state?: string;

  // The Amazon Resource Name (ARN) of the container service.
  public arn?: string;

  // The ID of the power of the container service.
  public powerId?: string;

  // An object to describe the configuration for the container service to access private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories. See Private Registry Access below for more details.
  public privateRegistryAccess?: lightsail_ContainerServicePrivateRegistryAccess;

  /*
The public domain names to use with the container service, such as example.com
and www.example.com. You can specify up to four public domain names for a container service. The domain names that you
specify are used when you create a deployment with a container configured as the public endpoint of your container
service. If you don't specify public domain names, then you can use the default domain of the container service.
Defined below.
*/
  public publicDomainNames?: lightsail_ContainerServicePublicDomainNames;

  // The Lightsail resource type of the container service (i.e., ContainerService).
  public resourceType?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of container service tags. To create a key-only tag, use an empty string as the value. To tag at launch, specify the tags in the Launch Template. If\nconfigured with a provider\n`default_tags` configuration block\npresent, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "isDisabled",
        "A Boolean value indicating whether the container service is disabled. Defaults to `false`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name for the container service. Names must be of length 1 to 63, and be\nunique within each AWS Region in your Lightsail account.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "power",
        "The power specification for the container service. The power specifies the amount of memory,\nthe number of vCPUs, and the monthly price of each node of the container service.\nPossible values: `nano`, `micro`, `small`, `medium`, `large`, `xlarge`.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "privateRegistryAccess",
        "An object to describe the configuration for the container service to access private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories. See Private Registry Access below for more details.",
        () => lightsail_ContainerServicePrivateRegistryAccess_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "publicDomainNames",
        "The public domain names to use with the container service, such as example.com\nand www.example.com. You can specify up to four public domain names for a container service. The domain names that you\nspecify are used when you create a deployment with a container configured as the public endpoint of your container\nservice. If you don't specify public domain names, then you can use the default domain of the container service.\nDefined below.",
        () => lightsail_ContainerServicePublicDomainNames_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "scale",
        "The scale specification for the container service. The scale specifies the allocated compute\nnodes of the container service.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
