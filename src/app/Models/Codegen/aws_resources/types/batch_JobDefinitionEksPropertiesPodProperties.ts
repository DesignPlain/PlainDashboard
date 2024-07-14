import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  batch_JobDefinitionEksPropertiesPodPropertiesMetadata,
  batch_JobDefinitionEksPropertiesPodPropertiesMetadata_GetTypes,
} from "./batch_JobDefinitionEksPropertiesPodPropertiesMetadata";
import {
  batch_JobDefinitionEksPropertiesPodPropertiesVolume,
  batch_JobDefinitionEksPropertiesPodPropertiesVolume_GetTypes,
} from "./batch_JobDefinitionEksPropertiesPodPropertiesVolume";
import {
  batch_JobDefinitionEksPropertiesPodPropertiesContainers,
  batch_JobDefinitionEksPropertiesPodPropertiesContainers_GetTypes,
} from "./batch_JobDefinitionEksPropertiesPodPropertiesContainers";

export interface batch_JobDefinitionEksPropertiesPodProperties {
  // The DNS policy for the pod. The default value is `ClusterFirst`. If the `host_network` argument is not specified, the default is `ClusterFirstWithHostNet`. `ClusterFirst` indicates that any DNS query that does not match the configured cluster domain suffix is forwarded to the upstream nameserver inherited from the node. For more information, see Pod's DNS policy in the Kubernetes documentation.
  dnsPolicy?: string;

  // Indicates if the pod uses the hosts' network IP address. The default value is `true`. Setting this to `false` enables the Kubernetes pod networking model. Most AWS Batch workloads are egress-only and don't require the overhead of IP allocation for each pod for incoming connections.
  hostNetwork?: boolean;

  // Metadata about the Kubernetes pod.
  metadata?: batch_JobDefinitionEksPropertiesPodPropertiesMetadata;

  // The name of the service account that's used to run the pod.
  serviceAccountName?: string;

  // Specifies the volumes for a job definition that uses Amazon EKS resources. AWS Batch supports emptyDir, hostPath, and secret volume types.
  volumes?: Array<batch_JobDefinitionEksPropertiesPodPropertiesVolume>;

  // The properties of the container that's used on the Amazon EKS pod. See containers below.
  containers?: batch_JobDefinitionEksPropertiesPodPropertiesContainers;
}

export function batch_JobDefinitionEksPropertiesPodProperties_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "dnsPolicy",
      "The DNS policy for the pod. The default value is `ClusterFirst`. If the `host_network` argument is not specified, the default is `ClusterFirstWithHostNet`. `ClusterFirst` indicates that any DNS query that does not match the configured cluster domain suffix is forwarded to the upstream nameserver inherited from the node. For more information, see Pod's DNS policy in the Kubernetes documentation.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "hostNetwork",
      "Indicates if the pod uses the hosts' network IP address. The default value is `true`. Setting this to `false` enables the Kubernetes pod networking model. Most AWS Batch workloads are egress-only and don't require the overhead of IP allocation for each pod for incoming connections.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "metadata",
      "Metadata about the Kubernetes pod.",
      batch_JobDefinitionEksPropertiesPodPropertiesMetadata_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceAccountName",
      "The name of the service account that's used to run the pod.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "volumes",
      "Specifies the volumes for a job definition that uses Amazon EKS resources. AWS Batch supports emptyDir, hostPath, and secret volume types.",
      batch_JobDefinitionEksPropertiesPodPropertiesVolume_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "containers",
      "The properties of the container that's used on the Amazon EKS pod. See containers below.",
      batch_JobDefinitionEksPropertiesPodPropertiesContainers_GetTypes(),
      true,
      false,
    ),
  ];
}
