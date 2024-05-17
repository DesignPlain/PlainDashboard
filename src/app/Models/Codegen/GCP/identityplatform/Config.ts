import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Identityplatform_ConfigMultiTenant,
  Identityplatform_ConfigMultiTenant_GetTypes,
} from "../types/Identityplatform_ConfigMultiTenant";
import {
  Identityplatform_ConfigSmsRegionConfig,
  Identityplatform_ConfigSmsRegionConfig_GetTypes,
} from "../types/Identityplatform_ConfigSmsRegionConfig";
import {
  Identityplatform_ConfigBlockingFunctions,
  Identityplatform_ConfigBlockingFunctions_GetTypes,
} from "../types/Identityplatform_ConfigBlockingFunctions";
import {
  Identityplatform_ConfigMonitoring,
  Identityplatform_ConfigMonitoring_GetTypes,
} from "../types/Identityplatform_ConfigMonitoring";
import {
  Identityplatform_ConfigQuota,
  Identityplatform_ConfigQuota_GetTypes,
} from "../types/Identityplatform_ConfigQuota";
import {
  Identityplatform_ConfigSignIn,
  Identityplatform_ConfigSignIn_GetTypes,
} from "../types/Identityplatform_ConfigSignIn";
import {
  Identityplatform_ConfigClient,
  Identityplatform_ConfigClient_GetTypes,
} from "../types/Identityplatform_ConfigClient";
import {
  Identityplatform_ConfigMfa,
  Identityplatform_ConfigMfa_GetTypes,
} from "../types/Identityplatform_ConfigMfa";

export interface ConfigArgs {
  /*
Configuration related to blocking functions.
Structure is documented below.
*/
  BlockingFunctions?: Identityplatform_ConfigBlockingFunctions;

  /*
Configuration related to monitoring project activity.
Structure is documented below.
*/
  Monitoring?: Identityplatform_ConfigMonitoring;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Configuration related to quotas.
Structure is documented below.
*/
  Quota?: Identityplatform_ConfigQuota;

  /*
Configuration related to local sign in methods.
Structure is documented below.
*/
  SignIn?: Identityplatform_ConfigSignIn;

  // List of domains authorized for OAuth redirects.
  AuthorizedDomains?: Array<string>;

  // Whether anonymous users will be auto-deleted after a period of 30 days
  AutodeleteAnonymousUsers?: boolean;

  /*
Options related to how clients making requests on behalf of a project should be configured.
Structure is documented below.
*/
  Client?: Identityplatform_ConfigClient;

  /*
Options related to how clients making requests on behalf of a project should be configured.
Structure is documented below.
*/
  Mfa?: Identityplatform_ConfigMfa;

  /*
Configuration related to multi-tenant functionality.
Structure is documented below.
*/
  MultiTenant?: Identityplatform_ConfigMultiTenant;

  /*
Configures the regions where users are allowed to send verification SMS for the project or tenant. This is based on the calling code of the destination phone number.
Structure is documented below.
*/
  SmsRegionConfig?: Identityplatform_ConfigSmsRegionConfig;
}
export class Config extends Resource {
  /*
Configuration related to monitoring project activity.
Structure is documented below.
*/
  public Monitoring?: Identityplatform_ConfigMonitoring;

  // The name of the Config resource
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Configuration related to quotas.
Structure is documented below.
*/
  public Quota?: Identityplatform_ConfigQuota;

  // List of domains authorized for OAuth redirects.
  public AuthorizedDomains?: Array<string>;

  /*
Configuration related to blocking functions.
Structure is documented below.
*/
  public BlockingFunctions?: Identityplatform_ConfigBlockingFunctions;

  /*
Options related to how clients making requests on behalf of a project should be configured.
Structure is documented below.
*/
  public Client?: Identityplatform_ConfigClient;

  /*
Options related to how clients making requests on behalf of a project should be configured.
Structure is documented below.
*/
  public Mfa?: Identityplatform_ConfigMfa;

  // Whether anonymous users will be auto-deleted after a period of 30 days
  public AutodeleteAnonymousUsers?: boolean;

  /*
Configuration related to multi-tenant functionality.
Structure is documented below.
*/
  public MultiTenant?: Identityplatform_ConfigMultiTenant;

  /*
Configuration related to local sign in methods.
Structure is documented below.
*/
  public SignIn?: Identityplatform_ConfigSignIn;

  /*
Configures the regions where users are allowed to send verification SMS for the project or tenant. This is based on the calling code of the destination phone number.
Structure is documented below.
*/
  public SmsRegionConfig?: Identityplatform_ConfigSmsRegionConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "Monitoring",
        "Configuration related to monitoring project activity.\nStructure is documented below.",
        Identityplatform_ConfigMonitoring_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Quota",
        "Configuration related to quotas.\nStructure is documented below.",
        Identityplatform_ConfigQuota_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Client",
        "Options related to how clients making requests on behalf of a project should be configured.\nStructure is documented below.",
        Identityplatform_ConfigClient_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Mfa",
        "Options related to how clients making requests on behalf of a project should be configured.\nStructure is documented below.",
        Identityplatform_ConfigMfa_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "MultiTenant",
        "Configuration related to multi-tenant functionality.\nStructure is documented below.",
        Identityplatform_ConfigMultiTenant_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "BlockingFunctions",
        "Configuration related to blocking functions.\nStructure is documented below.",
        Identityplatform_ConfigBlockingFunctions_GetTypes(),
        false,
        false,
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
        InputType.Object,
        "SignIn",
        "Configuration related to local sign in methods.\nStructure is documented below.",
        Identityplatform_ConfigSignIn_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "AuthorizedDomains",
        "List of domains authorized for OAuth redirects.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "AutodeleteAnonymousUsers",
        "Whether anonymous users will be auto-deleted after a period of 30 days",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "SmsRegionConfig",
        "Configures the regions where users are allowed to send verification SMS for the project or tenant. This is based on the calling code of the destination phone number.\nStructure is documented below.",
        Identityplatform_ConfigSmsRegionConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
