export interface BareMetalClusterLoadBalancerVipConfig {
  // The VIP which you previously set aside for the Kubernetes API of this Bare Metal User Cluster.
  ControlPlaneVip?: string;

  // The VIP which you previously set aside for ingress traffic into this Bare Metal User Cluster.
  IngressVip?: string;
}
