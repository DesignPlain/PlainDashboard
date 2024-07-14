import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  connect_UserIdentityInfo,
  connect_UserIdentityInfo_GetTypes,
} from "../types/connect_UserIdentityInfo";
import {
  connect_UserPhoneConfig,
  connect_UserPhoneConfig_GetTypes,
} from "../types/connect_UserPhoneConfig";

export interface UserArgs {
  // The identifier of the hierarchy group for the user.
  hierarchyGroupId?: string;

  // The password for the user account. A password is required if you are using Amazon Connect for identity management. Otherwise, it is an error to include a password.
  password?: string;

  // A list of identifiers for the security profiles for the user. Specify a minimum of 1 and maximum of 10 security profile ids. For more information, see [Best Practices for Security Profiles](https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-best-practices.html) in the Amazon Connect Administrator Guide.
  securityProfileIds?: Array<string>;

  // The identifier of the routing profile for the user.
  routingProfileId?: string;

  /*
Tags to apply to the user. If configured with a provider
`default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
*/
  tags?: Map<string, string>;

  // The identifier of the user account in the directory used for identity management. If Amazon Connect cannot access the directory, you can specify this identifier to authenticate users. If you include the identifier, we assume that Amazon Connect cannot access the directory. Otherwise, the identity information is used to authenticate users from your directory. This parameter is required if you are using an existing directory for identity management in Amazon Connect when Amazon Connect cannot access your directory to authenticate users. If you are using SAML for identity management and include this parameter, an error is returned.
  directoryUserId?: string;

  // A block that contains information about the identity of the user. Documented below.
  identityInfo?: connect_UserIdentityInfo;

  // Specifies the identifier of the hosting Amazon Connect Instance.
  instanceId?: string;

  // The user name for the account. For instances not using SAML for identity management, the user name can include up to 20 characters. If you are using SAML for identity management, the user name can include up to 64 characters from `[a-zA-Z0-9_-.\@]+`.
  name?: string;

  // A block that contains information about the phone settings for the user. Documented below.
  phoneConfig?: connect_UserPhoneConfig;
}
export class User extends Resource {
  // Specifies the identifier of the hosting Amazon Connect Instance.
  public instanceId?: string;

  // The password for the user account. A password is required if you are using Amazon Connect for identity management. Otherwise, it is an error to include a password.
  public password?: string;

  /*
Tags to apply to the user. If configured with a provider
`default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
*/
  public tags?: Map<string, string>;

  // The identifier for the user.
  public userId?: string;

  // The Amazon Resource Name (ARN) of the user.
  public arn?: string;

  // The identifier of the user account in the directory used for identity management. If Amazon Connect cannot access the directory, you can specify this identifier to authenticate users. If you include the identifier, we assume that Amazon Connect cannot access the directory. Otherwise, the identity information is used to authenticate users from your directory. This parameter is required if you are using an existing directory for identity management in Amazon Connect when Amazon Connect cannot access your directory to authenticate users. If you are using SAML for identity management and include this parameter, an error is returned.
  public directoryUserId?: string;

  // A block that contains information about the identity of the user. Documented below.
  public identityInfo?: connect_UserIdentityInfo;

  // The identifier of the routing profile for the user.
  public routingProfileId?: string;

  // A list of identifiers for the security profiles for the user. Specify a minimum of 1 and maximum of 10 security profile ids. For more information, see [Best Practices for Security Profiles](https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-best-practices.html) in the Amazon Connect Administrator Guide.
  public securityProfileIds?: Array<string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The identifier of the hierarchy group for the user.
  public hierarchyGroupId?: string;

  // The user name for the account. For instances not using SAML for identity management, the user name can include up to 20 characters. If you are using SAML for identity management, the user name can include up to 64 characters from `[a-zA-Z0-9_-.\@]+`.
  public name?: string;

  // A block that contains information about the phone settings for the user. Documented below.
  public phoneConfig?: connect_UserPhoneConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "hierarchyGroupId",
        "The identifier of the hierarchy group for the user.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "securityProfileIds",
        "A list of identifiers for the security profiles for the user. Specify a minimum of 1 and maximum of 10 security profile ids. For more information, see [Best Practices for Security Profiles](https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-best-practices.html) in the Amazon Connect Administrator Guide.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "routingProfileId",
        "The identifier of the routing profile for the user.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The user name for the account. For instances not using SAML for identity management, the user name can include up to 20 characters. If you are using SAML for identity management, the user name can include up to 64 characters from `[a-zA-Z0-9_-.\\@]+`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "phoneConfig",
        "A block that contains information about the phone settings for the user. Documented below.",
        connect_UserPhoneConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "password",
        "The password for the user account. A password is required if you are using Amazon Connect for identity management. Otherwise, it is an error to include a password.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Tags to apply to the user. If configured with a provider\n`default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "directoryUserId",
        "The identifier of the user account in the directory used for identity management. If Amazon Connect cannot access the directory, you can specify this identifier to authenticate users. If you include the identifier, we assume that Amazon Connect cannot access the directory. Otherwise, the identity information is used to authenticate users from your directory. This parameter is required if you are using an existing directory for identity management in Amazon Connect when Amazon Connect cannot access your directory to authenticate users. If you are using SAML for identity management and include this parameter, an error is returned.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "identityInfo",
        "A block that contains information about the identity of the user. Documented below.",
        connect_UserIdentityInfo_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceId",
        "Specifies the identifier of the hosting Amazon Connect Instance.",
        [],
        true,
        true,
      ),
    ];
  }
}
