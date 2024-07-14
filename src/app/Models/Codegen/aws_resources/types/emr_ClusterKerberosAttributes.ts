import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface emr_ClusterKerberosAttributes {
  // Active Directory password for `ad_domain_join_user`. This provider cannot perform drift detection of this configuration.
  adDomainJoinPassword?: string;

  // Required only when establishing a cross-realm trust with an Active Directory domain. A user with sufficient privileges to join resources to the domain. This provider cannot perform drift detection of this configuration.
  adDomainJoinUser?: string;

  // Required only when establishing a cross-realm trust with a KDC in a different realm. The cross-realm principal password, which must be identical across realms. This provider cannot perform drift detection of this configuration.
  crossRealmTrustPrincipalPassword?: string;

  // Password used within the cluster for the kadmin service on the cluster-dedicated KDC, which maintains Kerberos principals, password policies, and keytabs for the cluster. This provider cannot perform drift detection of this configuration.
  kdcAdminPassword?: string;

  // Name of the Kerberos realm to which all nodes in a cluster belong. For example, `EC2.INTERNAL`
  realm?: string;
}

export function emr_ClusterKerberosAttributes_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "adDomainJoinPassword",
      "Active Directory password for `ad_domain_join_user`. This provider cannot perform drift detection of this configuration.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "adDomainJoinUser",
      "Required only when establishing a cross-realm trust with an Active Directory domain. A user with sufficient privileges to join resources to the domain. This provider cannot perform drift detection of this configuration.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "crossRealmTrustPrincipalPassword",
      "Required only when establishing a cross-realm trust with a KDC in a different realm. The cross-realm principal password, which must be identical across realms. This provider cannot perform drift detection of this configuration.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "kdcAdminPassword",
      "Password used within the cluster for the kadmin service on the cluster-dedicated KDC, which maintains Kerberos principals, password policies, and keytabs for the cluster. This provider cannot perform drift detection of this configuration.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "realm",
      "Name of the Kerberos realm to which all nodes in a cluster belong. For example, `EC2.INTERNAL`",
      [],
      true,
      true,
    ),
  ];
}
