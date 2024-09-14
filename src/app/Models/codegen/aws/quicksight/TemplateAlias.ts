import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface TemplateAliasArgs {
  // Display name of the template alias.
  aliasName?: string;

  // AWS account ID.
  awsAccountId?: string;

  // ID of the template.
  templateId?: string;

  /*
Version number of the template.

The following arguments are optional:
*/
  templateVersionNumber?: number;
}
export class TemplateAlias extends DS_Resource {
  // AWS account ID.
  public awsAccountId?: string;

  // ID of the template.
  public templateId?: string;

  /*
Version number of the template.

The following arguments are optional:
*/
  public templateVersionNumber?: number;

  // Display name of the template alias.
  public aliasName?: string;

  // Amazon Resource Name (ARN) of the template alias.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "aliasName",
        "Display name of the template alias.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "awsAccountId",
        "AWS account ID.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "templateId",
        "ID of the template.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "templateVersionNumber",
        "Version number of the template.\n\nThe following arguments are optional:",
        () => [],
        true,
        false,
      ),
    ];
  }
}
