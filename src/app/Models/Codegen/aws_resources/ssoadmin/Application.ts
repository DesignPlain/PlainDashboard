import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ssoadmin_ApplicationPortalOptions,
  ssoadmin_ApplicationPortalOptions_GetTypes,
} from "../types/ssoadmin_ApplicationPortalOptions";

export interface ApplicationArgs {
  // ARN of the instance of IAM Identity Center.
  instanceArn?: string;

  /*
Name of the application.

The following arguments are optional:
*/
  name?: string;

  // Options for the portal associated with an application. See `portal_options` below.
  portalOptions?: ssoadmin_ApplicationPortalOptions;

  // Status of the application. Valid values are `ENABLED` and `DISABLED`.
  status?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // ARN of the application provider.
  applicationProviderArn?: string;

  // A unique, case-sensitive ID that you provide to ensure the idempotency of the request. AWS generates a random value when not provided.
  clientToken?: string;

  // Description of the application.
  description?: string;
}
export class Application extends Resource {
  // AWS account ID.
  public applicationAccount?: string;

  // ARN of the application.
  public applicationArn?: string;

  // A unique, case-sensitive ID that you provide to ensure the idempotency of the request. AWS generates a random value when not provided.
  public clientToken?: string;

  // Options for the portal associated with an application. See `portal_options` below.
  public portalOptions?: ssoadmin_ApplicationPortalOptions;

  // ARN of the application provider.
  public applicationProviderArn?: string;

  // Description of the application.
  public description?: string;

  // ARN of the instance of IAM Identity Center.
  public instanceArn?: string;

  /*
Name of the application.

The following arguments are optional:
*/
  public name?: string;

  // Status of the application. Valid values are `ENABLED` and `DISABLED`.
  public status?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "portalOptions",
        "Options for the portal associated with an application. See `portal_options` below.",
        ssoadmin_ApplicationPortalOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "status",
        "Status of the application. Valid values are `ENABLED` and `DISABLED`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "applicationProviderArn",
        "ARN of the application provider.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "clientToken",
        "A unique, case-sensitive ID that you provide to ensure the idempotency of the request. AWS generates a random value when not provided.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the application.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceArn",
        "ARN of the instance of IAM Identity Center.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the application.\n\nThe following arguments are optional:",
        [],
        false,
        false,
      ),
    ];
  }
}
