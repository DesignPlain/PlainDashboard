export interface PrivateCloudVcenter {
  /*
State of the appliance.
Possible values are: `ACTIVE`, `CREATING`.
*/
  State?: string;

  // Version of the appliance.
  Version?: string;

  // Fully qualified domain name of the appliance.
  Fqdn?: string;

  // Internal IP address of the appliance.
  InternalIp?: string;
}
