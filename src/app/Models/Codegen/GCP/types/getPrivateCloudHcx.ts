export interface getPrivateCloudHcx {
  // Internal IP address of the appliance.
  InternalIp?: string;

  // State of the appliance. Possible values: ["ACTIVE", "CREATING"]
  State?: string;

  // Version of the appliance.
  Version?: string;

  // Fully qualified domain name of the appliance.
  Fqdn?: string;
}
