import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ConfigSignIn } from "../types/ConfigSignIn";
import { ConfigSmsRegionConfig } from "../types/ConfigSmsRegionConfig";
import { ConfigMfa } from "../types/ConfigMfa";
import { ConfigMonitoring } from "../types/ConfigMonitoring";
import { ConfigMultiTenant } from "../types/ConfigMultiTenant";
import { ConfigQuota } from "../types/ConfigQuota";
import { ConfigBlockingFunctions } from "../types/ConfigBlockingFunctions";
import { ConfigClient } from "../types/ConfigClient";

export interface ConfigArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Configures the regions where users are allowed to send verification SMS for the project or tenant. This is based on the calling code of the destination phone number.
Structure is documented below.
*/
  SmsRegionConfig?: ConfigSmsRegionConfig;

  /*
Options related to how clients making requests on behalf of a project should be configured.
Structure is documented below.
*/
  Mfa?: ConfigMfa;

  /*
Configuration related to monitoring project activity.
Structure is documented below.
*/
  Monitoring?: ConfigMonitoring;

  /*
Configuration related to multi-tenant functionality.
Structure is documented below.
*/
  MultiTenant?: ConfigMultiTenant;

  /*
Configuration related to quotas.
Structure is documented below.
*/
  Quota?: ConfigQuota;

  // List of domains authorized for OAuth redirects.
  AuthorizedDomains?: Array<string>;

  // Whether anonymous users will be auto-deleted after a period of 30 days
  AutodeleteAnonymousUsers?: boolean;

  /*
Configuration related to blocking functions.
Structure is documented below.
*/
  BlockingFunctions?: ConfigBlockingFunctions;

  /*
Options related to how clients making requests on behalf of a project should be configured.
Structure is documented below.
*/
  Client?: ConfigClient;

  /*
Configuration related to local sign in methods.
Structure is documented below.
*/
  SignIn?: ConfigSignIn;
}
export class Config extends Resource {
  // List of domains authorized for OAuth redirects.
  public AuthorizedDomains?: Array<string>;

  /*
Configuration related to blocking functions.
Structure is documented below.
*/
  public BlockingFunctions?: ConfigBlockingFunctions;

  /*
Options related to how clients making requests on behalf of a project should be configured.
Structure is documented below.
*/
  public Mfa?: ConfigMfa;

  /*
Configuration related to monitoring project activity.
Structure is documented below.
*/
  public Monitoring?: ConfigMonitoring;

  /*
Configuration related to multi-tenant functionality.
Structure is documented below.
*/
  public MultiTenant?: ConfigMultiTenant;

  // The name of the Config resource
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Whether anonymous users will be auto-deleted after a period of 30 days
  public AutodeleteAnonymousUsers?: boolean;

  /*
Options related to how clients making requests on behalf of a project should be configured.
Structure is documented below.
*/
  public Client?: ConfigClient;

  /*
Configuration related to quotas.
Structure is documented below.
*/
  public Quota?: ConfigQuota;

  /*
Configuration related to local sign in methods.
Structure is documented below.
*/
  public SignIn?: ConfigSignIn;

  /*
Configures the regions where users are allowed to send verification SMS for the project or tenant. This is based on the calling code of the destination phone number.
Structure is documented below.
*/
  public SmsRegionConfig?: ConfigSmsRegionConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "BlockingFunctions",
        "Configuration related to blocking functions.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Client",
        "Options related to how clients making requests on behalf of a project should be configured.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SignIn",
        "Configuration related to local sign in methods.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SmsRegionConfig",
        "Configures the regions where users are allowed to send verification SMS for the project or tenant. This is based on the calling code of the destination phone number.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MultiTenant",
        "Configuration related to multi-tenant functionality.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Quota",
        "Configuration related to quotas.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "AuthorizedDomains",
        "List of domains authorized for OAuth redirects.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "AutodeleteAnonymousUsers",
        "Whether anonymous users will be auto-deleted after a period of 30 days",
      ),
      new DynamicUIProps(
        InputType.String,
        "Mfa",
        "Options related to how clients making requests on behalf of a project should be configured.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Monitoring",
        "Configuration related to monitoring project activity.\nStructure is documented below.",
      ),
    ];
  }
}
