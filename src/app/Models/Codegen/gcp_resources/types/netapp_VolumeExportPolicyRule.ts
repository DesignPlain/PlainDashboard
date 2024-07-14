import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface netapp_VolumeExportPolicyRule {
  // If enabled, the root user (UID = 0) of the specified clients doesn't get mapped to nobody (UID = 65534). This is also known as no_root_squash.
  hasRootAccess?: string;

  // If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'authentication' kerberos security mode. The 'kerberos5ReadOnly' value is ignored if this is enabled.
  kerberos5ReadWrite?: boolean;

  // Enable to apply the export rule to NFSV3 clients.
  nfsv3?: boolean;

  // Enable to apply the export rule to NFSV4.1 clients.
  nfsv4?: boolean;

  /*
Defines the access type for clients matching the `allowedClients` specification.
Possible values are: `READ_ONLY`, `READ_WRITE`, `READ_NONE`.
*/
  accessType?: string;

  // Defines the client ingress specification (allowed clients) as a comma seperated list with IPv4 CIDRs or IPv4 host addresses.
  allowedClients?: string;

  // If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'authentication' kerberos security mode.
  kerberos5ReadOnly?: boolean;

  // If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'integrity' kerberos security mode.
  kerberos5iReadOnly?: boolean;

  // If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'integrity' kerberos security mode. The 'kerberos5iReadOnly' value is ignored if this is enabled.
  kerberos5iReadWrite?: boolean;

  // If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'privacy' kerberos security mode.
  kerberos5pReadOnly?: boolean;

  // If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'privacy' kerberos security mode. The 'kerberos5pReadOnly' value is ignored if this is enabled.
  kerberos5pReadWrite?: boolean;
}

export function netapp_VolumeExportPolicyRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "accessType",
      "Defines the access type for clients matching the `allowedClients` specification.\nPossible values are: `READ_ONLY`, `READ_WRITE`, `READ_NONE`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "allowedClients",
      "Defines the client ingress specification (allowed clients) as a comma seperated list with IPv4 CIDRs or IPv4 host addresses.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "kerberos5ReadOnly",
      "If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'authentication' kerberos security mode.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "kerberos5iReadOnly",
      "If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'integrity' kerberos security mode.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "kerberos5iReadWrite",
      "If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'integrity' kerberos security mode. The 'kerberos5iReadOnly' value is ignored if this is enabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "hasRootAccess",
      "If enabled, the root user (UID = 0) of the specified clients doesn't get mapped to nobody (UID = 65534). This is also known as no_root_squash.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "kerberos5ReadWrite",
      "If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'authentication' kerberos security mode. The 'kerberos5ReadOnly' value is ignored if this is enabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "nfsv4",
      "Enable to apply the export rule to NFSV4.1 clients.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "nfsv3",
      "Enable to apply the export rule to NFSV3 clients.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "kerberos5pReadOnly",
      "If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'privacy' kerberos security mode.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "kerberos5pReadWrite",
      "If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'privacy' kerberos security mode. The 'kerberos5pReadOnly' value is ignored if this is enabled.",
      [],
      false,
      false,
    ),
  ];
}
