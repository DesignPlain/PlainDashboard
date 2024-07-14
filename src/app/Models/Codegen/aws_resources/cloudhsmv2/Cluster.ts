import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudhsmv2_ClusterClusterCertificate,
  cloudhsmv2_ClusterClusterCertificate_GetTypes,
} from "../types/cloudhsmv2_ClusterClusterCertificate";

export interface ClusterArgs {
  // ID of Cloud HSM v2 cluster backup to be restored.
  sourceBackupIdentifier?: string;

  // The IDs of subnets in which cluster will operate.
  subnetIds?: Array<string>;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The type of HSM module in the cluster. Currently, only `hsm1.medium` is supported.
  hsmType?: string;
}
export class Cluster extends Resource {
  // The id of the CloudHSM cluster.
  public clusterId?: string;

  // The type of HSM module in the cluster. Currently, only `hsm1.medium` is supported.
  public hsmType?: string;

  // The ID of the security group associated with the CloudHSM cluster.
  public securityGroupId?: string;

  // ID of Cloud HSM v2 cluster backup to be restored.
  public sourceBackupIdentifier?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  /*
The list of cluster certificates.
- `cluster_certificates.0.cluster_certificate` - The cluster certificate issued (signed) by the issuing certificate authority (CA) of the cluster's owner.
- `cluster_certificates.0.cluster_csr` - The certificate signing request (CSR). Available only in `UNINITIALIZED` state after an HSM instance is added to the cluster.
- `cluster_certificates.0.aws_hardware_certificate` - The HSM hardware certificate issued (signed) by AWS CloudHSM.
- `cluster_certificates.0.hsm_certificate` - The HSM certificate issued (signed) by the HSM hardware.
- `cluster_certificates.0.manufacturer_hardware_certificate` - The HSM hardware certificate issued (signed) by the hardware manufacturer.
*/
  public clusterCertificates?: Array<cloudhsmv2_ClusterClusterCertificate>;

  // The state of the CloudHSM cluster.
  public clusterState?: string;

  // The IDs of subnets in which cluster will operate.
  public subnetIds?: Array<string>;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The id of the VPC that the CloudHSM cluster resides in.
  public vpcId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "subnetIds",
        "The IDs of subnets in which cluster will operate.",
        InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "hsmType",
        "The type of HSM module in the cluster. Currently, only `hsm1.medium` is supported.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceBackupIdentifier",
        "ID of Cloud HSM v2 cluster backup to be restored.",
        [],
        false,
        true,
      ),
    ];
  }
}
