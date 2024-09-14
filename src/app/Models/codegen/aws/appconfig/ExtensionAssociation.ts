import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ExtensionAssociationArgs {
  // The ARN of the extension defined in the association.
  extensionArn?: string;

  // The parameter names and values defined for the association.
  parameters?: Map<string, string>;

  // The ARN of the application, configuration profile, or environment to associate with the extension.
  resourceArn?: string;
}
export class ExtensionAssociation extends DS_Resource {
  // The parameter names and values defined for the association.
  public parameters?: Map<string, string>;

  // The ARN of the application, configuration profile, or environment to associate with the extension.
  public resourceArn?: string;

  // ARN of the AppConfig Extension Association.
  public arn?: string;

  // The ARN of the extension defined in the association.
  public extensionArn?: string;

  // The version number for the extension defined in the association.
  public extensionVersion?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "resourceArn",
        "The ARN of the application, configuration profile, or environment to associate with the extension.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "extensionArn",
        "The ARN of the extension defined in the association.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "parameters",
        "The parameter names and values defined for the association.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
