import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ActiveDirectoryArgs {
  // Domain accounts that require elevated privileges such as `SeSecurityPrivilege` to manage security logs. Comma-separated list.
  SecurityOperators?: Array<string>;

  // Username for the Active Directory account with permissions to create the compute account within the specified organizational unit.
  Username?: string;

  // Name of the region for the policy to apply to.
  Location?: string;

  /*
Name of the Organizational Unit where you intend to create the computer account for NetApp Volumes.
Defaults to `CN=Computers` if left empty.
*/
  OrganizationalUnit?: string;

  // If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted.
  EncryptDcConnections?: boolean;

  /*
Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // Specifies whether or not the LDAP traffic needs to be signed.
  LdapSigning?: boolean;

  /*
Local UNIX users on clients without valid user information in Active Directory are blocked from access to LDAP enabled volumes.
This option can be used to temporarily switch such volumes to AUTH_SYS authentication (user ID + 1-16 groups).
*/
  NfsUsersWithLdap?: boolean;

  /*
Password for specified username. Note - Manual changes done to the password will not be detected. Terraform will not
re-apply the password, unless you use a new password in Terraform.
*/
  Password?: string;

  // Domain user/group accounts to be added to the Backup Operators group of the SMB service. The Backup Operators group allows members to backup and restore files regardless of whether they have read or write access to the files. Comma-separated list.
  BackupOperators?: Array<string>;

  // An optional description of this resource.
  Description?: string;

  // Hostname of the Active Directory server used as Kerberos Key Distribution Center. Only requried for volumes using kerberized NFSv4.1
  KdcHostname?: string;

  /*
The resource name of the Active Directory pool. Needs to be unique per location.


- - -
*/
  Name?: string;

  /*
NetBIOS name prefix of the server to be created.
A five-character random ID is generated automatically, for example, -6f9a, and appended to the prefix. The full UNC share path will have the following format:
`\\NetBIOS_PREFIX-ABCD.DOMAIN_NAME\SHARE_NAME`
*/
  NetBiosPrefix?: string;

  /*
Specifies an Active Directory site to manage domain controller selection.
Use when Active Directory domain controllers in multiple regions are configured. Defaults to `Default-First-Site-Name` if left empty.
*/
  Site?: string;

  // Enables AES-128 and AES-256 encryption for Kerberos-based communication with Active Directory.
  AesEncryption?: boolean;

  // Fully qualified domain name for the Active Directory domain.
  Domain?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // Comma separated list of DNS server IP addresses for the Active Directory domain.
  Dns?: string;

  // IP address of the Active Directory server used as Kerberos Key Distribution Center.
  KdcIp?: string;
}
export class ActiveDirectory extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Create time of the active directory. A timestamp in RFC3339 UTC "Zulu" format. Examples: "2023-06-22T09:13:01.617Z".
  public CreateTime?: string;

  // An optional description of this resource.
  public Description?: string;

  // IP address of the Active Directory server used as Kerberos Key Distribution Center.
  public KdcIp?: string;

  /*
NetBIOS name prefix of the server to be created.
A five-character random ID is generated automatically, for example, -6f9a, and appended to the prefix. The full UNC share path will have the following format:
`\\NetBIOS_PREFIX-ABCD.DOMAIN_NAME\SHARE_NAME`
*/
  public NetBiosPrefix?: string;

  /*
Local UNIX users on clients without valid user information in Active Directory are blocked from access to LDAP enabled volumes.
This option can be used to temporarily switch such volumes to AUTH_SYS authentication (user ID + 1-16 groups).
*/
  public NfsUsersWithLdap?: boolean;

  /*
The resource name of the Active Directory pool. Needs to be unique per location.


- - -
*/
  public Name?: string;

  /*
Password for specified username. Note - Manual changes done to the password will not be detected. Terraform will not
re-apply the password, unless you use a new password in Terraform.
*/
  public Password?: string;

  // Domain accounts that require elevated privileges such as `SeSecurityPrivilege` to manage security logs. Comma-separated list.
  public SecurityOperators?: Array<string>;

  // Enables AES-128 and AES-256 encryption for Kerberos-based communication with Active Directory.
  public AesEncryption?: boolean;

  // Domain user/group accounts to be added to the Backup Operators group of the SMB service. The Backup Operators group allows members to backup and restore files regardless of whether they have read or write access to the files. Comma-separated list.
  public BackupOperators?: Array<string>;

  // Comma separated list of DNS server IP addresses for the Active Directory domain.
  public Dns?: string;

  // Hostname of the Active Directory server used as Kerberos Key Distribution Center. Only requried for volumes using kerberized NFSv4.1
  public KdcHostname?: string;

  /*
Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The state of the Active Directory policy (not the Active Directory itself).
  public State?: string;

  // Fully qualified domain name for the Active Directory domain.
  public Domain?: string;

  // Specifies whether or not the LDAP traffic needs to be signed.
  public LdapSigning?: boolean;

  // Name of the region for the policy to apply to.
  public Location?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
Specifies an Active Directory site to manage domain controller selection.
Use when Active Directory domain controllers in multiple regions are configured. Defaults to `Default-First-Site-Name` if left empty.
*/
  public Site?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted.
  public EncryptDcConnections?: boolean;

  /*
Name of the Organizational Unit where you intend to create the computer account for NetApp Volumes.
Defaults to `CN=Computers` if left empty.
*/
  public OrganizationalUnit?: string;

  // The state details of the Active Directory.
  public StateDetails?: string;

  // Username for the Active Directory account with permissions to create the compute account within the specified organizational unit.
  public Username?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Password",
        "Password for specified username. Note - Manual changes done to the password will not be detected. Terraform will not\nre-apply the password, unless you use a new password in Terraform.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "AesEncryption",
        "Enables AES-128 and AES-256 encryption for Kerberos-based communication with Active Directory.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Dns",
        "Comma separated list of DNS server IP addresses for the Active Directory domain.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "OrganizationalUnit",
        "Name of the Organizational Unit where you intend to create the computer account for NetApp Volumes.\nDefaults to `CN=Computers` if left empty.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "EncryptDcConnections",
        "If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "KdcHostname",
        "Hostname of the Active Directory server used as Kerberos Key Distribution Center. Only requried for volumes using kerberized NFSv4.1",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "NetBiosPrefix",
        "NetBIOS name prefix of the server to be created.\nA five-character random ID is generated automatically, for example, -6f9a, and appended to the prefix. The full UNC share path will have the following format:\n`\\\\NetBIOS_PREFIX-ABCD.DOMAIN_NAME\\SHARE_NAME`",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Domain",
        "Fully qualified domain name for the Active Directory domain.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "KdcIp",
        "IP address of the Active Directory server used as Kerberos Key Distribution Center.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Username",
        "Username for the Active Directory account with permissions to create the compute account within the specified organizational unit.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "Name of the region for the policy to apply to.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "BackupOperators",
        "Domain user/group accounts to be added to the Backup Operators group of the SMB service. The Backup Operators group allows members to backup and restore files regardless of whether they have read or write access to the files. Comma-separated list.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource name of the Active Directory pool. Needs to be unique per location.\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "SecurityOperators",
        "Domain accounts that require elevated privileges such as `SeSecurityPrivilege` to manage security logs. Comma-separated list.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        'Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "LdapSigning",
        "Specifies whether or not the LDAP traffic needs to be signed.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "NfsUsersWithLdap",
        "Local UNIX users on clients without valid user information in Active Directory are blocked from access to LDAP enabled volumes.\nThis option can be used to temporarily switch such volumes to AUTH_SYS authentication (user ID + 1-16 groups).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Site",
        "Specifies an Active Directory site to manage domain controller selection.\nUse when Active Directory domain controllers in multiple regions are configured. Defaults to `Default-First-Site-Name` if left empty.",
        [],
        false,
        false,
      ),
    ];
  }
}
