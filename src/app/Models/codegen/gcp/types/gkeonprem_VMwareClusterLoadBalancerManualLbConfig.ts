import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface gkeonprem_VMwareClusterLoadBalancerManualLbConfig {
  /*
NodePort for ingress service's https. The ingress service in the admin
cluster is implemented as a Service of type NodePort (ex. 30139).
*/
  ingressHttpsNodePort?: number;

  /*
NodePort for konnectivity server service running as a sidecar in each
kube-apiserver pod (ex. 30564).
*/
  konnectivityServerNodePort?: number;

  /*
NodePort for control plane service. The Kubernetes API server in the admin
cluster is implemented as a Service of type NodePort (ex. 30968).
*/
  controlPlaneNodePort?: number;

  /*
NodePort for ingress service's http. The ingress service in the admin
cluster is implemented as a Service of type NodePort (ex. 32527).
*/
  ingressHttpNodePort?: number;
}

export function gkeonprem_VMwareClusterLoadBalancerManualLbConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "ingressHttpsNodePort",
      "NodePort for ingress service's https. The ingress service in the admin\ncluster is implemented as a Service of type NodePort (ex. 30139).",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "konnectivityServerNodePort",
      "NodePort for konnectivity server service running as a sidecar in each\nkube-apiserver pod (ex. 30564).",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "controlPlaneNodePort",
      "NodePort for control plane service. The Kubernetes API server in the admin\ncluster is implemented as a Service of type NodePort (ex. 30968).",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ingressHttpNodePort",
      "NodePort for ingress service's http. The ingress service in the admin\ncluster is implemented as a Service of type NodePort (ex. 32527).",
      () => [],
      false,
      false,
    ),
  ];
}
