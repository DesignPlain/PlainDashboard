export interface VolumeExportPolicyRule {
  // If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'integrity' kerberos security mode.
  Kerberos5iReadOnly?: boolean;

  // If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'integrity' kerberos security mode. The 'kerberos5iReadOnly' value is ignored if this is enabled.
  Kerberos5iReadWrite?: boolean;

  // If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'privacy' kerberos security mode.
  Kerberos5pReadOnly?: boolean;

  // Enable to apply the export rule to NFSV4.1 clients.
  Nfsv4?: boolean;

  /*
Defines the access type for clients matching the `allowedClients` specification.
Possible values are: `READ_ONLY`, `READ_WRITE`, `READ_NONE`.
*/
  AccessType?: string;

  // If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'authentication' kerberos security mode.
  Kerberos5ReadOnly?: boolean;

  // If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'authentication' kerberos security mode. The 'kerberos5ReadOnly' value is ignored if this is enabled.
  Kerberos5ReadWrite?: boolean;

  // Enable to apply the export rule to NFSV3 clients.
  Nfsv3?: boolean;

  // Defines the client ingress specification (allowed clients) as a comma seperated list with IPv4 CIDRs or IPv4 host addresses.
  AllowedClients?: string;

  // If enabled, the root user (UID = 0) of the specified clients doesn't get mapped to nobody (UID = 65534). This is also known as no_root_squash.
  HasRootAccess?: string;

  // If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'privacy' kerberos security mode. The 'kerberos5pReadOnly' value is ignored if this is enabled.
  Kerberos5pReadWrite?: boolean;
}
