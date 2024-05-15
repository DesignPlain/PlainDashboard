import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Netapp_VolumeExportPolicyRule {
  // If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'privacy' kerberos security mode. The 'kerberos5pReadOnly' value is ignored if this is enabled.
  Kerberos5pReadWrite?: boolean;

  // Enable to apply the export rule to NFSV4.1 clients.
  Nfsv4?: boolean;

  // Defines the client ingress specification (allowed clients) as a comma seperated list with IPv4 CIDRs or IPv4 host addresses.
  AllowedClients?: string;

  // If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'authentication' kerberos security mode.
  Kerberos5ReadOnly?: boolean;

  // If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'integrity' kerberos security mode.
  Kerberos5iReadOnly?: boolean;

  // If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'integrity' kerberos security mode. The 'kerberos5iReadOnly' value is ignored if this is enabled.
  Kerberos5iReadWrite?: boolean;

  // Enable to apply the export rule to NFSV3 clients.
  Nfsv3?: boolean;

  /*
Defines the access type for clients matching the `allowedClients` specification.
Possible values are: `READ_ONLY`, `READ_WRITE`, `READ_NONE`.
*/
  AccessType?: string;

  // If enabled, the root user (UID = 0) of the specified clients doesn't get mapped to nobody (UID = 65534). This is also known as no_root_squash.
  HasRootAccess?: string;

  // If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'authentication' kerberos security mode. The 'kerberos5ReadOnly' value is ignored if this is enabled.
  Kerberos5ReadWrite?: boolean;

  // If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'privacy' kerberos security mode.
  Kerberos5pReadOnly?: boolean;
}

export function Netapp_VolumeExportPolicyRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Kerberos5pReadWrite",
      "If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'privacy' kerberos security mode. The 'kerberos5pReadOnly' value is ignored if this is enabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Nfsv4",
      "Enable to apply the export rule to NFSV4.1 clients.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "AllowedClients",
      "Defines the client ingress specification (allowed clients) as a comma seperated list with IPv4 CIDRs or IPv4 host addresses.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Kerberos5iReadOnly",
      "If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'integrity' kerberos security mode.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Kerberos5pReadOnly",
      "If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'privacy' kerberos security mode.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Kerberos5ReadWrite",
      "If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'authentication' kerberos security mode. The 'kerberos5ReadOnly' value is ignored if this is enabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Kerberos5ReadOnly",
      "If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'authentication' kerberos security mode.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Kerberos5iReadWrite",
      "If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'integrity' kerberos security mode. The 'kerberos5iReadOnly' value is ignored if this is enabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Nfsv3",
      "Enable to apply the export rule to NFSV3 clients.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "AccessType",
      "Defines the access type for clients matching the `allowedClients` specification.\nPossible values are: `READ_ONLY`, `READ_WRITE`, `READ_NONE`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "HasRootAccess",
      "If enabled, the root user (UID = 0) of the specified clients doesn't get mapped to nobody (UID = 65534). This is also known as no_root_squash.",
      [],
      false,
      false,
    ),
  ];
}
