import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  batch_JobDefinitionEksPropertiesPodPropertiesMetadata,
  batch_JobDefinitionEksPropertiesPodPropertiesMetadata_GetTypes,
} from './batch_JobDefinitionEksPropertiesPodPropertiesMetadata';
import {
  batch_JobDefinitionEksPropertiesPodPropertiesVolume,
  batch_JobDefinitionEksPropertiesPodPropertiesVolume_GetTypes,
} from './batch_JobDefinitionEksPropertiesPodPropertiesVolume';
import {
  batch_JobDefinitionEksPropertiesPodPropertiesContainers,
  batch_JobDefinitionEksPropertiesPodPropertiesContainers_GetTypes,
} from './batch_JobDefinitionEksPropertiesPodPropertiesContainers';
import {
  batch_JobDefinitionEksPropertiesPodPropertiesImagePullSecret,
  batch_JobDefinitionEksPropertiesPodPropertiesImagePullSecret_GetTypes,
} from './batch_JobDefinitionEksPropertiesPodPropertiesImagePullSecret';

export interface batch_JobDefinitionEksPropertiesPodProperties {
  // Properties of the container that's used on the Amazon EKS pod. See containers below.
  containers?: batch_JobDefinitionEksPropertiesPodPropertiesContainers;

  // DNS policy for the pod. The default value is `ClusterFirst`. If the `host_network` argument is not specified, the default is `ClusterFirstWithHostNet`. `ClusterFirst` indicates that any DNS query that does not match the configured cluster domain suffix is forwarded to the upstream nameserver inherited from the node. For more information, see Pod's DNS policy in the Kubernetes documentation.
  dnsPolicy?: string;

  // Whether the pod uses the hosts' network IP address. The default value is `true`. Setting this to `false` enables the Kubernetes pod networking model. Most AWS Batch workloads are egress-only and don't require the overhead of IP allocation for each pod for incoming connections.
  hostNetwork?: boolean;

  // List of Kubernetes secret resources. See `image_pull_secret` below.
  imagePullSecrets?: Array<batch_JobDefinitionEksPropertiesPodPropertiesImagePullSecret>;

  // Metadata about the Kubernetes pod.
  metadata?: batch_JobDefinitionEksPropertiesPodPropertiesMetadata;

  // Name of the service account that's used to run the pod.
  serviceAccountName?: string;

  // Volumes for a job definition that uses Amazon EKS resources. AWS Batch supports emptyDir, hostPath, and secret volume types.
  volumes?: Array<batch_JobDefinitionEksPropertiesPodPropertiesVolume>;
}

export function batch_JobDefinitionEksPropertiesPodProperties_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'serviceAccountName',
      "Name of the service account that's used to run the pod.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'volumes',
      'Volumes for a job definition that uses Amazon EKS resources. AWS Batch supports emptyDir, hostPath, and secret volume types.',
      () => batch_JobDefinitionEksPropertiesPodPropertiesVolume_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'containers',
      "Properties of the container that's used on the Amazon EKS pod. See containers below.",
      () => batch_JobDefinitionEksPropertiesPodPropertiesContainers_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'dnsPolicy',
      "DNS policy for the pod. The default value is `ClusterFirst`. If the `host_network` argument is not specified, the default is `ClusterFirstWithHostNet`. `ClusterFirst` indicates that any DNS query that does not match the configured cluster domain suffix is forwarded to the upstream nameserver inherited from the node. For more information, see Pod's DNS policy in the Kubernetes documentation.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'hostNetwork',
      "Whether the pod uses the hosts' network IP address. The default value is `true`. Setting this to `false` enables the Kubernetes pod networking model. Most AWS Batch workloads are egress-only and don't require the overhead of IP allocation for each pod for incoming connections.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'imagePullSecrets',
      'List of Kubernetes secret resources. See `image_pull_secret` below.',
      () =>
        batch_JobDefinitionEksPropertiesPodPropertiesImagePullSecret_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'metadata',
      'Metadata about the Kubernetes pod.',
      () => batch_JobDefinitionEksPropertiesPodPropertiesMetadata_GetTypes(),
      false,
      false,
    ),
  ];
}
