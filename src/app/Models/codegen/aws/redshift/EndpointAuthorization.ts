import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface EndpointAuthorizationArgs {
  // The Amazon Web Services account ID to grant access to.
  account?: string;

  // The cluster identifier of the cluster to grant access to.
  clusterIdentifier?: string;

  // Indicates whether to force the revoke action. If true, the Redshift-managed VPC endpoints associated with the endpoint authorization are also deleted. Default value is `false`.
  forceDelete?: boolean;

  // The virtual private cloud (VPC) identifiers to grant access to. If none are specified all VPCs in shared account are allowed.
  vpcIds?: Array<string>;
}
export class EndpointAuthorization extends DS_Resource {
  // The Amazon Web Services account ID of the cluster owner.
  public grantor?: string;

  // The virtual private cloud (VPC) identifiers to grant access to. If none are specified all VPCs in shared account are allowed.
  public vpcIds?: Array<string>;

  // The Amazon Web Services account ID to grant access to.
  public account?: string;

  // Indicates whether all VPCs in the grantee account are allowed access to the cluster.
  public allowedAllVpcs?: boolean;

  // The cluster identifier of the cluster to grant access to.
  public clusterIdentifier?: string;

  // The number of Redshift-managed VPC endpoints created for the authorization.
  public endpointCount?: number;

  // Indicates whether to force the revoke action. If true, the Redshift-managed VPC endpoints associated with the endpoint authorization are also deleted. Default value is `false`.
  public forceDelete?: boolean;

  // The Amazon Web Services account ID of the grantee of the cluster.
  public grantee?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'account',
        'The Amazon Web Services account ID to grant access to.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'clusterIdentifier',
        'The cluster identifier of the cluster to grant access to.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'forceDelete',
        'Indicates whether to force the revoke action. If true, the Redshift-managed VPC endpoints associated with the endpoint authorization are also deleted. Default value is `false`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'vpcIds',
        'The virtual private cloud (VPC) identifiers to grant access to. If none are specified all VPCs in shared account are allowed.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
