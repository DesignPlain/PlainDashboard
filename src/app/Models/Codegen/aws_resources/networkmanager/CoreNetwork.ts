import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  networkmanager_CoreNetworkSegment,
  networkmanager_CoreNetworkSegment_GetTypes,
} from "../types/networkmanager_CoreNetworkSegment";
import {
  networkmanager_CoreNetworkEdge,
  networkmanager_CoreNetworkEdge_GetTypes,
} from "../types/networkmanager_CoreNetworkEdge";

export interface CoreNetworkArgs {
  // Specifies whether to create a base policy when a core network is created or updated. A base policy is created and set to `LIVE` to allow attachments to the core network (e.g. VPC Attachments) before applying a policy document provided using the `aws.networkmanager.CoreNetworkPolicyAttachment` resource. This base policy is needed if your core network does not have any `LIVE` policies and your policy document has static routes pointing to VPC attachments and you want to attach your VPCs to the core network before applying the desired policy document. Valid values are `true` or `false`. An example of this Pulumi snippet can be found above for VPC Attachment in a single region and for VPC Attachment multi-region. An example base policy is shown below. This base policy is overridden with the policy that you specify in the `aws.networkmanager.CoreNetworkPolicyAttachment` resource.
  createBasePolicy?: boolean;

  // Description of the Core Network.
  description?: string;

  // The ID of the global network that a core network will be a part of.
  globalNetworkId?: string;

  // Key-value tags for the Core Network. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Sets the base policy document for the core network. Refer to the [Core network policies documentation](https://docs.aws.amazon.com/network-manager/latest/cloudwan/cloudwan-policy-change-sets.html) for more information.
  basePolicyDocument?: string;

  // The base policy created by setting the `create_base_policy` argument to `true` requires a region to be set in the `edge-locations`, `location` key. If `base_policy_region` is not specified, the region used in the base policy defaults to the region specified in the `provider` block.
  basePolicyRegion?: string;

  // A list of regions to add to the base policy. The base policy created by setting the `create_base_policy` argument to `true` requires one or more regions to be set in the `edge-locations`, `location` key. If `base_policy_regions` is not specified, the region used in the base policy defaults to the region specified in the `provider` block.
  basePolicyRegions?: Array<string>;
}
export class CoreNetwork extends Resource {
  // The base policy created by setting the `create_base_policy` argument to `true` requires a region to be set in the `edge-locations`, `location` key. If `base_policy_region` is not specified, the region used in the base policy defaults to the region specified in the `provider` block.
  public basePolicyRegion?: string;

  // Specifies whether to create a base policy when a core network is created or updated. A base policy is created and set to `LIVE` to allow attachments to the core network (e.g. VPC Attachments) before applying a policy document provided using the `aws.networkmanager.CoreNetworkPolicyAttachment` resource. This base policy is needed if your core network does not have any `LIVE` policies and your policy document has static routes pointing to VPC attachments and you want to attach your VPCs to the core network before applying the desired policy document. Valid values are `true` or `false`. An example of this Pulumi snippet can be found above for VPC Attachment in a single region and for VPC Attachment multi-region. An example base policy is shown below. This base policy is overridden with the policy that you specify in the `aws.networkmanager.CoreNetworkPolicyAttachment` resource.
  public createBasePolicy?: boolean;

  // Description of the Core Network.
  public description?: string;

  // The ID of the global network that a core network will be a part of.
  public globalNetworkId?: string;

  // One or more blocks detailing the segments within a core network. Detailed below.
  public segments?: Array<networkmanager_CoreNetworkSegment>;

  // Key-value tags for the Core Network. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Core Network Amazon Resource Name (ARN).
  public arn?: string;

  // A list of regions to add to the base policy. The base policy created by setting the `create_base_policy` argument to `true` requires one or more regions to be set in the `edge-locations`, `location` key. If `base_policy_regions` is not specified, the region used in the base policy defaults to the region specified in the `provider` block.
  public basePolicyRegions?: Array<string>;

  // Timestamp when a core network was created.
  public createdAt?: string;

  // One or more blocks detailing the edges within a core network. Detailed below.
  public edges?: Array<networkmanager_CoreNetworkEdge>;

  // Current state of a core network.
  public state?: string;

  // Sets the base policy document for the core network. Refer to the [Core network policies documentation](https://docs.aws.amazon.com/network-manager/latest/cloudwan/cloudwan-policy-change-sets.html) for more information.
  public basePolicyDocument?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "createBasePolicy",
        "Specifies whether to create a base policy when a core network is created or updated. A base policy is created and set to `LIVE` to allow attachments to the core network (e.g. VPC Attachments) before applying a policy document provided using the `aws.networkmanager.CoreNetworkPolicyAttachment` resource. This base policy is needed if your core network does not have any `LIVE` policies and your policy document has static routes pointing to VPC attachments and you want to attach your VPCs to the core network before applying the desired policy document. Valid values are `true` or `false`. An example of this Pulumi snippet can be found above for VPC Attachment in a single region and for VPC Attachment multi-region. An example base policy is shown below. This base policy is overridden with the policy that you specify in the `aws.networkmanager.CoreNetworkPolicyAttachment` resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the Core Network.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "globalNetworkId",
        "The ID of the global network that a core network will be a part of.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value tags for the Core Network. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "basePolicyDocument",
        "Sets the base policy document for the core network. Refer to the [Core network policies documentation](https://docs.aws.amazon.com/network-manager/latest/cloudwan/cloudwan-policy-change-sets.html) for more information.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "basePolicyRegion",
        "The base policy created by setting the `create_base_policy` argument to `true` requires a region to be set in the `edge-locations`, `location` key. If `base_policy_region` is not specified, the region used in the base policy defaults to the region specified in the `provider` block.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "basePolicyRegions",
        "A list of regions to add to the base policy. The base policy created by setting the `create_base_policy` argument to `true` requires one or more regions to be set in the `edge-locations`, `location` key. If `base_policy_regions` is not specified, the region used in the base policy defaults to the region specified in the `provider` block.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
