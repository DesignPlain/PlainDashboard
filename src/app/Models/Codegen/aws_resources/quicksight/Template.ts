import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  quicksight_TemplatePermission,
  quicksight_TemplatePermission_GetTypes,
} from "../types/quicksight_TemplatePermission";
import {
  quicksight_TemplateSourceEntity,
  quicksight_TemplateSourceEntity_GetTypes,
} from "../types/quicksight_TemplateSourceEntity";

export interface TemplateArgs {
  // AWS account ID.
  awsAccountId?: string;

  // Display name for the template.
  name?: string;

  // A set of resource permissions on the template. Maximum of 64 items. See permissions.
  permissions?: Array<quicksight_TemplatePermission>;

  // The entity that you are using as a source when you create the template (analysis or template). Only one of `definition` or `source_entity` should be configured. See source_entity.
  sourceEntity?: quicksight_TemplateSourceEntity;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Identifier for the template.
  templateId?: string;

  /*
A description of the current template version being created/updated.

The following arguments are optional:
*/
  versionDescription?: string;
}
export class Template extends Resource {
  // The time that the template was created.
  public createdTime?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The Amazon Resource Name (ARN) of the resource.
  public arn?: string;

  // AWS account ID.
  public awsAccountId?: string;

  // Display name for the template.
  public name?: string;

  // Amazon Resource Name (ARN) of an analysis or template that was used to create this template.
  public sourceEntityArn?: string;

  // The template creation status.
  public status?: string;

  /*
A description of the current template version being created/updated.

The following arguments are optional:
*/
  public versionDescription?: string;

  // A set of resource permissions on the template. Maximum of 64 items. See permissions.
  public permissions?: Array<quicksight_TemplatePermission>;

  // The entity that you are using as a source when you create the template (analysis or template). Only one of `definition` or `source_entity` should be configured. See source_entity.
  public sourceEntity?: quicksight_TemplateSourceEntity;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Identifier for the template.
  public templateId?: string;

  // The version number of the template version.
  public versionNumber?: number;

  // The time that the template was last updated.
  public lastUpdatedTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "templateId",
        "Identifier for the template.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "versionDescription",
        "A description of the current template version being created/updated.\n\nThe following arguments are optional:",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "awsAccountId",
        "AWS account ID.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Display name for the template.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "permissions",
        "A set of resource permissions on the template. Maximum of 64 items. See permissions.",
        quicksight_TemplatePermission_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "sourceEntity",
        "The entity that you are using as a source when you create the template (analysis or template). Only one of `definition` or `source_entity` should be configured. See source_entity.",
        quicksight_TemplateSourceEntity_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
