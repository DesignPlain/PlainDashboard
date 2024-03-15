export interface PrivateConnectionVpcPeeringConfig {
  /*
A free subnet for peering. (CIDR of /29)

- - -
*/
  Subnet?: string;

  /*
Fully qualified name of the VPC that Datastream will peer to.
Format: projects/{project}/global/{networks}/{name}
*/
  Vpc?: string;
}
