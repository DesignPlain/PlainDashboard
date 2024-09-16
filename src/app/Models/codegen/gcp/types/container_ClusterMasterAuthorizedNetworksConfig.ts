import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  container_ClusterMasterAuthorizedNetworksConfigCidrBlock,
  container_ClusterMasterAuthorizedNetworksConfigCidrBlock_GetTypes,
} from './container_ClusterMasterAuthorizedNetworksConfigCidrBlock';

export interface container_ClusterMasterAuthorizedNetworksConfig {
  /*
External networks that can access the
Kubernetes cluster master through HTTPS.
*/
  cidrBlocks?: Array<container_ClusterMasterAuthorizedNetworksConfigCidrBlock>;

  /*
Whether Kubernetes master is
accessible via Google Compute Engine Public IPs.
*/
  gcpPublicCidrsAccessEnabled?: boolean;
}

export function container_ClusterMasterAuthorizedNetworksConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'gcpPublicCidrsAccessEnabled',
      'Whether Kubernetes master is\naccessible via Google Compute Engine Public IPs.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'cidrBlocks',
      'External networks that can access the\nKubernetes cluster master through HTTPS.',
      () => container_ClusterMasterAuthorizedNetworksConfigCidrBlock_GetTypes(),
      false,
      false,
    ),
  ];
}
