import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ActiveDirectoryArgs {
  // Domain accounts that require elevated privileges such as `SeSecurityPrivilege` to manage security logs. Comma-separated list.
  SecurityOperators?: Array<string>;

  /*
The resource name of the Active Directory pool. Needs to be unique per location.


- - -
*/
  Name?: string;

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

  // IP address of the Active Directory server used as Kerberos Key Distribution Center.
  KdcIp?: string;

  /*
Specifies an Active Directory site to manage domain controller selection.
Use when Active Directory domain controllers in multiple regions are configured. Defaults to `Default-First-Site-Name` if left empty.
*/
  Site?: string;

  // Username for the Active Directory account with permissions to create the compute account within the specified organizational unit.
  Username?: string;

  // Fully qualified domain name for the Active Directory domain.
  Domain?: string;

  // If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted.
  EncryptDcConnections?: boolean;

  // Hostname of the Active Directory server used as Kerberos Key Distribution Center. Only requried for volumes using kerberized NFSv4.1
  KdcHostname?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // Enables AES-128 and AES-256 encryption for Kerberos-based communication with Active Directory.
  AesEncryption?: boolean;

  // Comma separated list of DNS server IP addresses for the Active Directory domain.
  Dns?: string;

  // Specifies whether or not the LDAP traffic needs to be signed.
  LdapSigning?: boolean;

  // Name of the region for the policy to apply to.
  Location?: string;

  /*
NetBIOS name prefix of the server to be created.
A five-character random ID is generated automatically, for example, -6f9a, and appended to the prefix. The full UNC share path will have the following format:
`\\NetBIOS_PREFIX-ABCD.DOMAIN_NAME\SHARE_NAME`
*/
  NetBiosPrefix?: string;

  /*
Name of the Organizational Unit where you intend to create the computer account for NetApp Volumes.
Defaults to `CN=Computers` if left empty.
*/
  OrganizationalUnit?: string;

  // Domain user/group accounts to be added to the Backup Operators group of the SMB service. The Backup Operators group allows members to backup and restore files regardless of whether they have read or write access to the files. Comma-separated list.
  BackupOperators?: Array<string>;

  // An optional description of this resource.
  Description?: string;

  /*
Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;
}
export class ActiveDirectory extends Resource {
  // Fully qualified domain name for the Active Directory domain.
  public Domain?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // Specifies whether or not the LDAP traffic needs to be signed.
  public LdapSigning?: boolean;

  // Name of the region for the policy to apply to.
  public Location?: string;

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

  // Domain user/group accounts to be added to the Backup Operators group of the SMB service. The Backup Operators group allows members to backup and restore files regardless of whether they have read or write access to the files. Comma-separated list.
  public BackupOperators?: Array<string>;

  // An optional description of this resource.
  public Description?: string;

  // Comma separated list of DNS server IP addresses for the Active Directory domain.
  public Dns?: string;

  // IP address of the Active Directory server used as Kerberos Key Distribution Center.
  public KdcIp?: string;

  /*
Password for specified username. Note - Manual changes done to the password will not be detected. Terraform will not
re-apply the password, unless you use a new password in Terraform.
*/
  public Password?: string;

  // Enables AES-128 and AES-256 encryption for Kerberos-based communication with Active Directory.
  public AesEncryption?: boolean;

  // Create time of the active directory. A timestamp in RFC3339 UTC "Zulu" format. Examples: "2023-06-22T09:13:01.617Z".
  public CreateTime?: string;

  // If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted.
  public EncryptDcConnections?: boolean;

  /*
Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
Name of the Organizational Unit where you intend to create the computer account for NetApp Volumes.
Defaults to `CN=Computers` if left empty.
*/
  public OrganizationalUnit?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Specifies an Active Directory site to manage domain controller selection.
Use when Active Directory domain controllers in multiple regions are configured. Defaults to `Default-First-Site-Name` if left empty.
*/
  public Site?: string;

  // The state of the Active Directory policy (not the Active Directory itself).
  public State?: string;

  // The state details of the Active Directory.
  public StateDetails?: string;

  // Hostname of the Active Directory server used as Kerberos Key Distribution Center. Only requried for volumes using kerberized NFSv4.1
  public KdcHostname?: string;

  /*
The resource name of the Active Directory pool. Needs to be unique per location.


- - -
*/
  public Name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // Domain accounts that require elevated privileges such as `SeSecurityPrivilege` to manage security logs. Comma-separated list.
  public SecurityOperators?: Array<string>;

  // Username for the Active Directory account with permissions to create the compute account within the specified organizational unit.
  public Username?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource name of the Active Directory pool. Needs to be unique per location.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Domain",
        "Fully qualified domain name for the Active Directory domain.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "Name of the region for the policy to apply to.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NetBiosPrefix",
        "NetBIOS name prefix of the server to be created.\nA five-character random ID is generated automatically, for example, -6f9a, and appended to the prefix. The full UNC share path will have the following format:\n`\\\\NetBIOS_PREFIX-ABCD.DOMAIN_NAME\\SHARE_NAME`",
      ),
      new DynamicUIProps(
        InputType.String,
        "OrganizationalUnit",
        "Name of the Organizational Unit where you intend to create the computer account for NetApp Volumes.\nDefaults to `CN=Computers` if left empty.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        'Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "SecurityOperators",
        "Domain accounts that require elevated privileges such as `SeSecurityPrivilege` to manage security logs. Comma-separated list.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "NfsUsersWithLdap",
        "Local UNIX users on clients without valid user information in Active Directory are blocked from access to LDAP enabled volumes.\nThis option can be used to temporarily switch such volumes to AUTH_SYS authentication (user ID + 1-16 groups).",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "EncryptDcConnections",
        "If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "AesEncryption",
        "Enables AES-128 and AES-256 encryption for Kerberos-based communication with Active Directory.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Dns",
        "Comma separated list of DNS server IP addresses for the Active Directory domain.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "LdapSigning",
        "Specifies whether or not the LDAP traffic needs to be signed.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Password",
        "Password for specified username. Note - Manual changes done to the password will not be detected. Terraform will not\nre-apply the password, unless you use a new password in Terraform.",
      ),
      new DynamicUIProps(
        InputType.String,
        "KdcIp",
        "IP address of the Active Directory server used as Kerberos Key Distribution Center.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Site",
        "Specifies an Active Directory site to manage domain controller selection.\nUse when Active Directory domain controllers in multiple regions are configured. Defaults to `Default-First-Site-Name` if left empty.",
      ),
      new DynamicUIProps(
        InputType.String,
        "KdcHostname",
        "Hostname of the Active Directory server used as Kerberos Key Distribution Center. Only requried for volumes using kerberized NFSv4.1",
      ),
      new DynamicUIProps(
        InputType.String,
        "Username",
        "Username for the Active Directory account with permissions to create the compute account within the specified organizational unit.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "BackupOperators",
        "Domain user/group accounts to be added to the Backup Operators group of the SMB service. The Backup Operators group allows members to backup and restore files regardless of whether they have read or write access to the files. Comma-separated list.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource.",
      ),
    ];
  }
}
