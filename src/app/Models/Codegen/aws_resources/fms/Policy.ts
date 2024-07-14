import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  fms_PolicyIncludeMap,
  fms_PolicyIncludeMap_GetTypes,
} from "../types/fms_PolicyIncludeMap";
import {
  fms_PolicySecurityServicePolicyData,
  fms_PolicySecurityServicePolicyData_GetTypes,
} from "../types/fms_PolicySecurityServicePolicyData";
import {
  fms_PolicyExcludeMap,
  fms_PolicyExcludeMap_GetTypes,
} from "../types/fms_PolicyExcludeMap";

export interface PolicyArgs {
  // The description of the AWS Network Firewall firewall policy.
  description?: string;

  // A boolean value, if true the tags that are specified in the `resource_tags` are not protected by this policy. If set to false and resource_tags are populated, resources that contain tags will be protected by this policy.
  excludeResourceTags?: boolean;

  // A map of lists of accounts and OU's to include in the policy.
  includeMap?: fms_PolicyIncludeMap;

  // A boolean value, indicates if the policy should automatically applied to resources that already exist in the account.
  remediationEnabled?: boolean;

  // A map of resource tags, that if present will filter protections on resources based on the exclude_resource_tags.
  resourceTags?: Map<string, string>;

  // A list of resource types to protect. Conflicts with `resource_type`. See the [FMS API Reference](https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_Policy.html#fms-Type-Policy-ResourceType) for more information about supported values. Lists with only one element are not supported, instead use `resource_type`.
  resourceTypeLists?: Array<string>;

  // The objects to include in Security Service Policy Data. Documented below.
  securityServicePolicyData?: fms_PolicySecurityServicePolicyData;

  // If true, Firewall Manager will automatically remove protections from resources that leave the policy scope. Defaults to `false`. More information can be found here [AWS Firewall Manager policy contents](https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_Policy.html)
  deleteUnusedFmManagedResources?: boolean;

  // A map of lists of accounts and OU's to exclude from the policy.
  excludeMap?: fms_PolicyExcludeMap;

  // The friendly name of the AWS Firewall Manager Policy.
  name?: string;

  // A resource type to protect. Conflicts with `resource_type_list`. See the [FMS API Reference](https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_Policy.html#fms-Type-Policy-ResourceType) for more information about supported values.
  resourceType?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level
  tags?: Map<string, string>;

  // If true, the request will also perform a clean-up process. Defaults to `true`. More information can be found here [AWS Firewall Manager delete policy](https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DeletePolicy.html)
  deleteAllPolicyResources?: boolean;
}
export class Policy extends Resource {
  // A resource type to protect. Conflicts with `resource_type_list`. See the [FMS API Reference](https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_Policy.html#fms-Type-Policy-ResourceType) for more information about supported values.
  public resourceType?: string;

  // The description of the AWS Network Firewall firewall policy.
  public description?: string;

  // A boolean value, if true the tags that are specified in the `resource_tags` are not protected by this policy. If set to false and resource_tags are populated, resources that contain tags will be protected by this policy.
  public excludeResourceTags?: boolean;

  // A unique identifier for each update to the policy.
  public policyUpdateToken?: string;

  // If true, Firewall Manager will automatically remove protections from resources that leave the policy scope. Defaults to `false`. More information can be found here [AWS Firewall Manager policy contents](https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_Policy.html)
  public deleteUnusedFmManagedResources?: boolean;

  // A map of lists of accounts and OU's to exclude from the policy.
  public excludeMap?: fms_PolicyExcludeMap;

  // A map of lists of accounts and OU's to include in the policy.
  public includeMap?: fms_PolicyIncludeMap;

  // A boolean value, indicates if the policy should automatically applied to resources that already exist in the account.
  public remediationEnabled?: boolean;

  // A map of resource tags, that if present will filter protections on resources based on the exclude_resource_tags.
  public resourceTags?: Map<string, string>;

  // The objects to include in Security Service Policy Data. Documented below.
  public securityServicePolicyData?: fms_PolicySecurityServicePolicyData;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  //
  public arn?: string;

  // If true, the request will also perform a clean-up process. Defaults to `true`. More information can be found here [AWS Firewall Manager delete policy](https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DeletePolicy.html)
  public deleteAllPolicyResources?: boolean;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level
  public tags?: Map<string, string>;

  // The friendly name of the AWS Firewall Manager Policy.
  public name?: string;

  // A list of resource types to protect. Conflicts with `resource_type`. See the [FMS API Reference](https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_Policy.html#fms-Type-Policy-ResourceType) for more information about supported values. Lists with only one element are not supported, instead use `resource_type`.
  public resourceTypeLists?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "resourceTypeLists",
        "A list of resource types to protect. Conflicts with `resource_type`. See the [FMS API Reference](https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_Policy.html#fms-Type-Policy-ResourceType) for more information about supported values. Lists with only one element are not supported, instead use `resource_type`.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "deleteAllPolicyResources",
        "If true, the request will also perform a clean-up process. Defaults to `true`. More information can be found here [AWS Firewall Manager delete policy](https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DeletePolicy.html)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description of the AWS Network Firewall firewall policy.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "excludeResourceTags",
        "A boolean value, if true the tags that are specified in the `resource_tags` are not protected by this policy. If set to false and resource_tags are populated, resources that contain tags will be protected by this policy.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "includeMap",
        "A map of lists of accounts and OU's to include in the policy.",
        fms_PolicyIncludeMap_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "deleteUnusedFmManagedResources",
        "If true, Firewall Manager will automatically remove protections from resources that leave the policy scope. Defaults to `false`. More information can be found here [AWS Firewall Manager policy contents](https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_Policy.html)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "excludeMap",
        "A map of lists of accounts and OU's to exclude from the policy.",
        fms_PolicyExcludeMap_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The friendly name of the AWS Firewall Manager Policy.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "resourceType",
        "A resource type to protect. Conflicts with `resource_type_list`. See the [FMS API Reference](https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_Policy.html#fms-Type-Policy-ResourceType) for more information about supported values.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "remediationEnabled",
        "A boolean value, indicates if the policy should automatically applied to resources that already exist in the account.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "resourceTags",
        "A map of resource tags, that if present will filter protections on resources based on the exclude_resource_tags.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "securityServicePolicyData",
        "The objects to include in Security Service Policy Data. Documented below.",
        fms_PolicySecurityServicePolicyData_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
