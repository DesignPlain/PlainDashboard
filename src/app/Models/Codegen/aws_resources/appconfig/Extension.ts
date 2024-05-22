import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appconfig_ExtensionActionPoint,
  appconfig_ExtensionActionPoint_GetTypes,
} from "../types/appconfig_ExtensionActionPoint";
import {
  appconfig_ExtensionParameter,
  appconfig_ExtensionParameter_GetTypes,
} from "../types/appconfig_ExtensionParameter";

export interface ExtensionArgs {
  // The action points defined in the extension. Detailed below.
  actionPoints?: Array<appconfig_ExtensionActionPoint>;

  // Information about the extension.
  description?: string;

  // A name for the extension. Each extension name in your account must be unique. Extension versions use the same name.
  name?: string;

  // The parameters accepted by the extension. You specify parameter values when you associate the extension to an AppConfig resource by using the CreateExtensionAssociation API action. For Lambda extension actions, these parameters are included in the Lambda request object. Detailed below.
  parameters?: Array<appconfig_ExtensionParameter>;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Extension extends Resource {
  // ARN of the AppConfig Extension.
  public arn?: string;

  // Information about the extension.
  public description?: string;

  // A name for the extension. Each extension name in your account must be unique. Extension versions use the same name.
  public name?: string;

  // The parameters accepted by the extension. You specify parameter values when you associate the extension to an AppConfig resource by using the CreateExtensionAssociation API action. For Lambda extension actions, these parameters are included in the Lambda request object. Detailed below.
  public parameters?: Array<appconfig_ExtensionParameter>;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  // The version number for the extension.
  public version?: number;

  // The action points defined in the extension. Detailed below.
  public actionPoints?: Array<appconfig_ExtensionActionPoint>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "actionPoints",
        "The action points defined in the extension. Detailed below.",
        appconfig_ExtensionActionPoint_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Information about the extension.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A name for the extension. Each extension name in your account must be unique. Extension versions use the same name.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "parameters",
        "The parameters accepted by the extension. You specify parameter values when you associate the extension to an AppConfig resource by using the CreateExtensionAssociation API action. For Lambda extension actions, these parameters are included in the Lambda request object. Detailed below.",
        appconfig_ExtensionParameter_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
