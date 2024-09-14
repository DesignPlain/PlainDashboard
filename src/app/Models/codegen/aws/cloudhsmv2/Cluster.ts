import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudhsmv2_ClusterClusterCertificate,
  cloudhsmv2_ClusterClusterCertificate_GetTypes,
} from "../types/cloudhsmv2_ClusterClusterCertificate";

export interface ClusterArgs {
  // The type of HSM module in the cluster. Currently, only `hsm1.medium` is supported.
  hsmType?: string;

  // ID of Cloud HSM v2 cluster backup to be restored.
  sourceBackupIdentifier?: string;

  // The IDs of subnets in which cluster will operate.
  subnetIds?: Array<string>;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Cluster extends DS_Resource {
  // The list of cluster certificates.
  public clusterCertificates?: Array<cloudhsmv2_ClusterClusterCertificate>;

  // ID of Cloud HSM v2 cluster backup to be restored.
  public sourceBackupIdentifier?: string;

  // The IDs of subnets in which cluster will operate.
  public subnetIds?: Array<string>;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The id of the VPC that the CloudHSM cluster resides in.
  public vpcId?: string;

  // The id of the CloudHSM cluster.
  public clusterId?: string;

  // The state of the CloudHSM cluster.
  public clusterState?: string;

  // The type of HSM module in the cluster. Currently, only `hsm1.medium` is supported.
  public hsmType?: string;

  // The ID of the security group associated with the CloudHSM cluster.
  public securityGroupId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "hsmType",
        "The type of HSM module in the cluster. Currently, only `hsm1.medium` is supported.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceBackupIdentifier",
        "ID of Cloud HSM v2 cluster backup to be restored.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "subnetIds",
        "The IDs of subnets in which cluster will operate.",
        () => InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
