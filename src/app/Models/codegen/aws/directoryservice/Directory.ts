import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  directoryservice_DirectoryConnectSettings,
  directoryservice_DirectoryConnectSettings_GetTypes,
} from '../types/directoryservice_DirectoryConnectSettings';
import {
  directoryservice_DirectoryVpcSettings,
  directoryservice_DirectoryVpcSettings_GetTypes,
} from '../types/directoryservice_DirectoryVpcSettings';

export interface DirectoryArgs {
  // The alias for the directory (must be unique amongst all aliases in AWS). Required for `enable_sso`.
  alias?: string;

  // A textual description for the directory.
  description?: string;

  // Whether to enable single-sign on for the directory. Requires `alias`. Defaults to `false`.
  enableSso?: boolean;

  // The password for the directory administrator or connector user.
  password?: string;

  // The short name of the directory, such as `CORP`.
  shortName?: string;

  // (For `SimpleAD` and `ADConnector` types) The size of the directory (`Small` or `Large` are accepted values). `Large` by default.
  size?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Connector related information about the directory. Fields documented below.
  connectSettings?: directoryservice_DirectoryConnectSettings;

  // The number of domain controllers desired in the directory. Minimum value of `2`. Scaling of domain controllers is only supported for `MicrosoftAD` directories.
  desiredNumberOfDomainControllers?: number;

  // The MicrosoftAD edition (`Standard` or `Enterprise`). Defaults to `Enterprise`.
  edition?: string;

  // The fully qualified name for the directory, such as `corp.example.com`
  name?: string;

  // The directory type (`SimpleAD`, `ADConnector` or `MicrosoftAD` are accepted values). Defaults to `SimpleAD`.
  type?: string;

  // VPC related information about the directory. Fields documented below.
  vpcSettings?: directoryservice_DirectoryVpcSettings;
}
export class Directory extends DS_Resource {
  // A textual description for the directory.
  public description?: string;

  // A list of IP addresses of the DNS servers for the directory or connector.
  public dnsIpAddresses?: Array<string>;

  // The MicrosoftAD edition (`Standard` or `Enterprise`). Defaults to `Enterprise`.
  public edition?: string;

  // (For `SimpleAD` and `ADConnector` types) The size of the directory (`Small` or `Large` are accepted values). `Large` by default.
  public size?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // VPC related information about the directory. Fields documented below.
  public vpcSettings?: directoryservice_DirectoryVpcSettings;

  // The alias for the directory (must be unique amongst all aliases in AWS). Required for `enable_sso`.
  public alias?: string;

  // The password for the directory administrator or connector user.
  public password?: string;

  // The number of domain controllers desired in the directory. Minimum value of `2`. Scaling of domain controllers is only supported for `MicrosoftAD` directories.
  public desiredNumberOfDomainControllers?: number;

  // Whether to enable single-sign on for the directory. Requires `alias`. Defaults to `false`.
  public enableSso?: boolean;

  // The fully qualified name for the directory, such as `corp.example.com`
  public name?: string;

  // The short name of the directory, such as `CORP`.
  public shortName?: string;

  // The access URL for the directory, such as `http://alias.awsapps.com`.
  public accessUrl?: string;

  // The ID of the security group created by the directory.
  public securityGroupId?: string;

  // The directory type (`SimpleAD`, `ADConnector` or `MicrosoftAD` are accepted values). Defaults to `SimpleAD`.
  public type?: string;

  // Connector related information about the directory. Fields documented below.
  public connectSettings?: directoryservice_DirectoryConnectSettings;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'size',
        '(For `SimpleAD` and `ADConnector` types) The size of the directory (`Small` or `Large` are accepted values). `Large` by default.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'desiredNumberOfDomainControllers',
        'The number of domain controllers desired in the directory. Minimum value of `2`. Scaling of domain controllers is only supported for `MicrosoftAD` directories.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'edition',
        'The MicrosoftAD edition (`Standard` or `Enterprise`). Defaults to `Enterprise`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'type',
        'The directory type (`SimpleAD`, `ADConnector` or `MicrosoftAD` are accepted values). Defaults to `SimpleAD`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'alias',
        'The alias for the directory (must be unique amongst all aliases in AWS). Required for `enable_sso`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enableSso',
        'Whether to enable single-sign on for the directory. Requires `alias`. Defaults to `false`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'shortName',
        'The short name of the directory, such as `CORP`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'vpcSettings',
        'VPC related information about the directory. Fields documented below.',
        () => directoryservice_DirectoryVpcSettings_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The fully qualified name for the directory, such as `corp.example.com`',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'A textual description for the directory.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'password',
        'The password for the directory administrator or connector user.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'connectSettings',
        'Connector related information about the directory. Fields documented below.',
        () => directoryservice_DirectoryConnectSettings_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
