export interface VMwareClusterLoadBalancerF5Config {
  /*
(Output)
The vCenter IP address.
*/
  Address?: string;

  /*
he preexisting partition to be used by the load balancer. T
his partition is usually created for the admin cluster for example:
'my-f5-admin-partition'.
*/
  Partition?: string;

  // The pool name. Only necessary, if using SNAT.
  SnatPool?: string;
}
