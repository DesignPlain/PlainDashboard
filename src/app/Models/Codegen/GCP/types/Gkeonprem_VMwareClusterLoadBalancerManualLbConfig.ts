import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_VMwareClusterLoadBalancerManualLbConfig {
  /*
NodePort for konnectivity server service running as a sidecar in each
kube-apiserver pod (ex. 30564).
*/
  KonnectivityServerNodePort?: number;

  /*
NodePort for control plane service. The Kubernetes API server in the admin
cluster is implemented as a Service of type NodePort (ex. 30968).
*/
  ControlPlaneNodePort?: number;

  /*
NodePort for ingress service's http. The ingress service in the admin
cluster is implemented as a Service of type NodePort (ex. 32527).
*/
  IngressHttpNodePort?: number;

  /*
NodePort for ingress service's https. The ingress service in the admin
cluster is implemented as a Service of type NodePort (ex. 30139).
*/
  IngressHttpsNodePort?: number;
}

export function Gkeonprem_VMwareClusterLoadBalancerManualLbConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "ControlPlaneNodePort",
      "NodePort for control plane service. The Kubernetes API server in the admin\ncluster is implemented as a Service of type NodePort (ex. 30968).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "IngressHttpNodePort",
      "NodePort for ingress service's http. The ingress service in the admin\ncluster is implemented as a Service of type NodePort (ex. 32527).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "IngressHttpsNodePort",
      "NodePort for ingress service's https. The ingress service in the admin\ncluster is implemented as a Service of type NodePort (ex. 30139).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "KonnectivityServerNodePort",
      "NodePort for konnectivity server service running as a sidecar in each\nkube-apiserver pod (ex. 30564).",
      [],
      false,
      false,
    ),
  ];
}
