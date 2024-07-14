import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  identityplatform_ConfigClient,
  identityplatform_ConfigClient_GetTypes,
} from "../types/identityplatform_ConfigClient";
import {
  identityplatform_ConfigMonitoring,
  identityplatform_ConfigMonitoring_GetTypes,
} from "../types/identityplatform_ConfigMonitoring";
import {
  identityplatform_ConfigBlockingFunctions,
  identityplatform_ConfigBlockingFunctions_GetTypes,
} from "../types/identityplatform_ConfigBlockingFunctions";
import {
  identityplatform_ConfigMfa,
  identityplatform_ConfigMfa_GetTypes,
} from "../types/identityplatform_ConfigMfa";
import {
  identityplatform_ConfigMultiTenant,
  identityplatform_ConfigMultiTenant_GetTypes,
} from "../types/identityplatform_ConfigMultiTenant";
import {
  identityplatform_ConfigQuota,
  identityplatform_ConfigQuota_GetTypes,
} from "../types/identityplatform_ConfigQuota";
import {
  identityplatform_ConfigSignIn,
  identityplatform_ConfigSignIn_GetTypes,
} from "../types/identityplatform_ConfigSignIn";
import {
  identityplatform_ConfigSmsRegionConfig,
  identityplatform_ConfigSmsRegionConfig_GetTypes,
} from "../types/identityplatform_ConfigSmsRegionConfig";

export interface ConfigArgs {
  /*
Configuration related to blocking functions.
Structure is documented below.
*/
  blockingFunctions?: identityplatform_ConfigBlockingFunctions;

  /*
Options related to how clients making requests on behalf of a project should be configured.
Structure is documented below.
*/
  mfa?: identityplatform_ConfigMfa;

  /*
Configuration related to multi-tenant functionality.
Structure is documented below.
*/
  multiTenant?: identityplatform_ConfigMultiTenant;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Configuration related to quotas.
Structure is documented below.
*/
  quota?: identityplatform_ConfigQuota;

  /*
Configuration related to local sign in methods.
Structure is documented below.
*/
  signIn?: identityplatform_ConfigSignIn;

  // List of domains authorized for OAuth redirects.
  authorizedDomains?: Array<string>;

  // Whether anonymous users will be auto-deleted after a period of 30 days
  autodeleteAnonymousUsers?: boolean;

  /*
Configures the regions where users are allowed to send verification SMS for the project or tenant. This is based on the calling code of the destination phone number.
Structure is documented below.
*/
  smsRegionConfig?: identityplatform_ConfigSmsRegionConfig;

  /*
Options related to how clients making requests on behalf of a project should be configured.
Structure is documented below.
*/
  client?: identityplatform_ConfigClient;

  /*
Configuration related to monitoring project activity.
Structure is documented below.
*/
  monitoring?: identityplatform_ConfigMonitoring;
}
export class Config extends Resource {
  // Whether anonymous users will be auto-deleted after a period of 30 days
  public autodeleteAnonymousUsers?: boolean;

  /*
Options related to how clients making requests on behalf of a project should be configured.
Structure is documented below.
*/
  public mfa?: identityplatform_ConfigMfa;

  /*
Configuration related to monitoring project activity.
Structure is documented below.
*/
  public monitoring?: identityplatform_ConfigMonitoring;

  // The name of the Config resource
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
Configuration related to local sign in methods.
Structure is documented below.
*/
  public signIn?: identityplatform_ConfigSignIn;

  // List of domains authorized for OAuth redirects.
  public authorizedDomains?: Array<string>;

  /*
Configuration related to blocking functions.
Structure is documented below.
*/
  public blockingFunctions?: identityplatform_ConfigBlockingFunctions;

  /*
Options related to how clients making requests on behalf of a project should be configured.
Structure is documented below.
*/
  public client?: identityplatform_ConfigClient;

  /*
Configuration related to multi-tenant functionality.
Structure is documented below.
*/
  public multiTenant?: identityplatform_ConfigMultiTenant;

  /*
Configuration related to quotas.
Structure is documented below.
*/
  public quota?: identityplatform_ConfigQuota;

  /*
Configures the regions where users are allowed to send verification SMS for the project or tenant. This is based on the calling code of the destination phone number.
Structure is documented below.
*/
  public smsRegionConfig?: identityplatform_ConfigSmsRegionConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "authorizedDomains",
        "List of domains authorized for OAuth redirects.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "autodeleteAnonymousUsers",
        "Whether anonymous users will be auto-deleted after a period of 30 days",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "monitoring",
        "Configuration related to monitoring project activity.\nStructure is documented below.",
        identityplatform_ConfigMonitoring_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "blockingFunctions",
        "Configuration related to blocking functions.\nStructure is documented below.",
        identityplatform_ConfigBlockingFunctions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "mfa",
        "Options related to how clients making requests on behalf of a project should be configured.\nStructure is documented below.",
        identityplatform_ConfigMfa_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "quota",
        "Configuration related to quotas.\nStructure is documented below.",
        identityplatform_ConfigQuota_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "signIn",
        "Configuration related to local sign in methods.\nStructure is documented below.",
        identityplatform_ConfigSignIn_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "smsRegionConfig",
        "Configures the regions where users are allowed to send verification SMS for the project or tenant. This is based on the calling code of the destination phone number.\nStructure is documented below.",
        identityplatform_ConfigSmsRegionConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "client",
        "Options related to how clients making requests on behalf of a project should be configured.\nStructure is documented below.",
        identityplatform_ConfigClient_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "multiTenant",
        "Configuration related to multi-tenant functionality.\nStructure is documented below.",
        identityplatform_ConfigMultiTenant_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
