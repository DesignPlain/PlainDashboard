export interface VMwareClusterLoadBalancerManualLbConfig {
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
