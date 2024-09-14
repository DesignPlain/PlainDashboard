import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  batch_getJobDefinitionEksPropertyPodPropertyContainer,
  batch_getJobDefinitionEksPropertyPodPropertyContainer_GetTypes,
} from "./batch_getJobDefinitionEksPropertyPodPropertyContainer";
import {
  batch_getJobDefinitionEksPropertyPodPropertyMetadata,
  batch_getJobDefinitionEksPropertyPodPropertyMetadata_GetTypes,
} from "./batch_getJobDefinitionEksPropertyPodPropertyMetadata";
import {
  batch_getJobDefinitionEksPropertyPodPropertyVolume,
  batch_getJobDefinitionEksPropertyPodPropertyVolume_GetTypes,
} from "./batch_getJobDefinitionEksPropertyPodPropertyVolume";

export interface batch_getJobDefinitionEksPropertyPodProperty {
  // The properties of the container that's used on the Amazon EKS pod. Array of EksContainer objects.
  containers?: Array<batch_getJobDefinitionEksPropertyPodPropertyContainer>;

  // The DNS policy for the pod. The default value is ClusterFirst. If the hostNetwork parameter is not specified, the default is ClusterFirstWithHostNet. ClusterFirst indicates that any DNS query that does not match the configured cluster domain suffix is forwarded to the upstream nameserver inherited from the node.
  dnsPolicy?: string;

  // Indicates if the pod uses the hosts' network IP address. The default value is true. Setting this to false enables the Kubernetes pod networking model. Most AWS Batch workloads are egress-only and don't require the overhead of IP allocation for each pod for incoming connections.
  hostNetwork?: boolean;

  // Metadata about the Kubernetes pod.
  metadatas?: Array<batch_getJobDefinitionEksPropertyPodPropertyMetadata>;

  // The name of the service account that's used to run the pod.
  serviceAccountName?: boolean;

  // A list of data volumes used in a job.
  volumes?: Array<batch_getJobDefinitionEksPropertyPodPropertyVolume>;
}

export function batch_getJobDefinitionEksPropertyPodProperty_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "metadatas",
      "Metadata about the Kubernetes pod.",
      () => batch_getJobDefinitionEksPropertyPodPropertyMetadata_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "serviceAccountName",
      "The name of the service account that's used to run the pod.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "volumes",
      "A list of data volumes used in a job.",
      () => batch_getJobDefinitionEksPropertyPodPropertyVolume_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "containers",
      "The properties of the container that's used on the Amazon EKS pod. Array of EksContainer objects.",
      () => batch_getJobDefinitionEksPropertyPodPropertyContainer_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dnsPolicy",
      "The DNS policy for the pod. The default value is ClusterFirst. If the hostNetwork parameter is not specified, the default is ClusterFirstWithHostNet. ClusterFirst indicates that any DNS query that does not match the configured cluster domain suffix is forwarded to the upstream nameserver inherited from the node.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "hostNetwork",
      "Indicates if the pod uses the hosts' network IP address. The default value is true. Setting this to false enables the Kubernetes pod networking model. Most AWS Batch workloads are egress-only and don't require the overhead of IP allocation for each pod for incoming connections.",
      () => [],
      true,
      false,
    ),
  ];
}
