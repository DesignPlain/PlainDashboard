import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ActiveDirectoryArgs {
  /*
The resource name of the Active Directory pool. Needs to be unique per location.


- - -
*/
  name?: string;

  /*
NetBIOS name prefix of the server to be created.
A five-character random ID is generated automatically, for example, -6f9a, and appended to the prefix. The full UNC share path will have the following format:
`\\NetBIOS_PREFIX-ABCD.DOMAIN_NAME\SHARE_NAME`
*/
  netBiosPrefix?: string;

  // Username for the Active Directory account with permissions to create the compute account within the specified organizational unit.
  username?: string;

  // Name of the region for the policy to apply to.
  location?: string;

  /*
Name of the Organizational Unit where you intend to create the computer account for NetApp Volumes.
Defaults to `CN=Computers` if left empty.
*/
  organizationalUnit?: string;

  // Enables AES-128 and AES-256 encryption for Kerberos-based communication with Active Directory.
  aesEncryption?: boolean;

  // If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted.
  encryptDcConnections?: boolean;

  // Hostname of the Active Directory server used as Kerberos Key Distribution Center. Only requried for volumes using kerberized NFSv4.1
  kdcHostname?: string;

  // IP address of the Active Directory server used as Kerberos Key Distribution Center.
  kdcIp?: string;

  /*
Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // An optional description of this resource.
  description?: string;

  /*
Local UNIX users on clients without valid user information in Active Directory are blocked from access to LDAP enabled volumes.
This option can be used to temporarily switch such volumes to AUTH_SYS authentication (user ID + 1-16 groups).
*/
  nfsUsersWithLdap?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // Domain accounts that require elevated privileges such as `SeSecurityPrivilege` to manage security logs. Comma-separated list.
  securityOperators?: Array<string>;

  /*
Specifies an Active Directory site to manage domain controller selection.
Use when Active Directory domain controllers in multiple regions are configured. Defaults to `Default-First-Site-Name` if left empty.
*/
  site?: string;

  // Domain user/group accounts to be added to the Backup Operators group of the SMB service. The Backup Operators group allows members to backup and restore files regardless of whether they have read or write access to the files. Comma-separated list.
  backupOperators?: Array<string>;

  // Comma separated list of DNS server IP addresses for the Active Directory domain.
  dns?: string;

  // Fully qualified domain name for the Active Directory domain.
  domain?: string;

  // Specifies whether or not the LDAP traffic needs to be signed.
  ldapSigning?: boolean;

  /*
Password for specified username. Note - Manual changes done to the password will not be detected. Terraform will not
re-apply the password, unless you use a new password in Terraform.
*/
  password?: string;
}
export class ActiveDirectory extends DS_Resource {
  // Domain user/group accounts to be added to the Backup Operators group of the SMB service. The Backup Operators group allows members to backup and restore files regardless of whether they have read or write access to the files. Comma-separated list.
  public backupOperators?: Array<string>;

  // An optional description of this resource.
  public description?: string;

  // Comma separated list of DNS server IP addresses for the Active Directory domain.
  public dns?: string;

  // Fully qualified domain name for the Active Directory domain.
  public domain?: string;

  // If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted.
  public encryptDcConnections?: boolean;

  /*
NetBIOS name prefix of the server to be created.
A five-character random ID is generated automatically, for example, -6f9a, and appended to the prefix. The full UNC share path will have the following format:
`\\NetBIOS_PREFIX-ABCD.DOMAIN_NAME\SHARE_NAME`
*/
  public netBiosPrefix?: string;

  /*
Name of the Organizational Unit where you intend to create the computer account for NetApp Volumes.
Defaults to `CN=Computers` if left empty.
*/
  public organizationalUnit?: string;

  // The state details of the Active Directory.
  public stateDetails?: string;

  // Create time of the active directory. A timestamp in RFC3339 UTC "Zulu" format. Examples: "2023-06-22T09:13:01.617Z".
  public createTime?: string;

  /*
Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
The resource name of the Active Directory pool. Needs to be unique per location.


- - -
*/
  public name?: string;

  // IP address of the Active Directory server used as Kerberos Key Distribution Center.
  public kdcIp?: string;

  // Name of the region for the policy to apply to.
  public location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // Domain accounts that require elevated privileges such as `SeSecurityPrivilege` to manage security logs. Comma-separated list.
  public securityOperators?: Array<string>;

  // The state of the Active Directory policy (not the Active Directory itself).
  public state?: string;

  // Username for the Active Directory account with permissions to create the compute account within the specified organizational unit.
  public username?: string;

  // Enables AES-128 and AES-256 encryption for Kerberos-based communication with Active Directory.
  public aesEncryption?: boolean;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // Hostname of the Active Directory server used as Kerberos Key Distribution Center. Only requried for volumes using kerberized NFSv4.1
  public kdcHostname?: string;

  // Specifies whether or not the LDAP traffic needs to be signed.
  public ldapSigning?: boolean;

  /*
Local UNIX users on clients without valid user information in Active Directory are blocked from access to LDAP enabled volumes.
This option can be used to temporarily switch such volumes to AUTH_SYS authentication (user ID + 1-16 groups).
*/
  public nfsUsersWithLdap?: boolean;

  /*
Password for specified username. Note - Manual changes done to the password will not be detected. Terraform will not
re-apply the password, unless you use a new password in Terraform.
*/
  public password?: string;

  /*
Specifies an Active Directory site to manage domain controller selection.
Use when Active Directory domain controllers in multiple regions are configured. Defaults to `Default-First-Site-Name` if left empty.
*/
  public site?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'site',
        'Specifies an Active Directory site to manage domain controller selection.\nUse when Active Directory domain controllers in multiple regions are configured. Defaults to `Default-First-Site-Name` if left empty.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'backupOperators',
        'Domain user/group accounts to be added to the Backup Operators group of the SMB service. The Backup Operators group allows members to backup and restore files regardless of whether they have read or write access to the files. Comma-separated list.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'domain',
        'Fully qualified domain name for the Active Directory domain.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The resource name of the Active Directory pool. Needs to be unique per location.\n\n\n- - -',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'location',
        'Name of the region for the policy to apply to.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'kdcIp',
        'IP address of the Active Directory server used as Kerberos Key Distribution Center.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'An optional description of this resource.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'username',
        'Username for the Active Directory account with permissions to create the compute account within the specified organizational unit.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'aesEncryption',
        'Enables AES-128 and AES-256 encryption for Kerberos-based communication with Active Directory.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'encryptDcConnections',
        'If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'ldapSigning',
        'Specifies whether or not the LDAP traffic needs to be signed.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'netBiosPrefix',
        'NetBIOS name prefix of the server to be created.\nA five-character random ID is generated automatically, for example, -6f9a, and appended to the prefix. The full UNC share path will have the following format:\n`\\\\NetBIOS_PREFIX-ABCD.DOMAIN_NAME\\SHARE_NAME`',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'organizationalUnit',
        'Name of the Organizational Unit where you intend to create the computer account for NetApp Volumes.\nDefaults to `CN=Computers` if left empty.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'kdcHostname',
        'Hostname of the Active Directory server used as Kerberos Key Distribution Center. Only requried for volumes using kerberized NFSv4.1',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'securityOperators',
        'Domain accounts that require elevated privileges such as `SeSecurityPrivilege` to manage security logs. Comma-separated list.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'password',
        'Password for specified username. Note - Manual changes done to the password will not be detected. Terraform will not\nre-apply the password, unless you use a new password in Terraform.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'labels',
        'Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'nfsUsersWithLdap',
        'Local UNIX users on clients without valid user information in Active Directory are blocked from access to LDAP enabled volumes.\nThis option can be used to temporarily switch such volumes to AUTH_SYS authentication (user ID + 1-16 groups).',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'dns',
        'Comma separated list of DNS server IP addresses for the Active Directory domain.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
