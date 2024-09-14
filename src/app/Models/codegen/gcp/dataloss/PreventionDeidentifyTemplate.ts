import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dataloss_PreventionDeidentifyTemplateDeidentifyConfig,
  dataloss_PreventionDeidentifyTemplateDeidentifyConfig_GetTypes,
} from "../types/dataloss_PreventionDeidentifyTemplateDeidentifyConfig";

export interface PreventionDeidentifyTemplateArgs {
  /*
The template id can contain uppercase and lowercase letters, numbers, and hyphens;
that is, it must match the regular expression: [a-zA-Z\d-_]+. The maximum length is
100 characters. Can be empty to allow the system to generate one.
*/
  templateId?: string;

  /*
Configuration of the deidentify template
Structure is documented below.
*/
  deidentifyConfig?: dataloss_PreventionDeidentifyTemplateDeidentifyConfig;

  // A description of the template.
  description?: string;

  // User set display name of the template.
  displayName?: string;

  /*
The parent of the template in any of the following formats:
- `projects/{{project}}`
- `projects/{{project}}/locations/{{location}}`
- `organizations/{{organization_id}}`
- `organizations/{{organization_id}}/locations/{{location}}`
*/
  parent?: string;
}
export class PreventionDeidentifyTemplate extends DS_Resource {
  // User set display name of the template.
  public displayName?: string;

  // Name describing the field.
  public name?: string;

  /*
The parent of the template in any of the following formats:
- `projects/{{project}}`
- `projects/{{project}}/locations/{{location}}`
- `organizations/{{organization_id}}`
- `organizations/{{organization_id}}/locations/{{location}}`
*/
  public parent?: string;

  /*
The template id can contain uppercase and lowercase letters, numbers, and hyphens;
that is, it must match the regular expression: [a-zA-Z\d-_]+. The maximum length is
100 characters. Can be empty to allow the system to generate one.
*/
  public templateId?: string;

  // The last update timestamp of an deidentifyTemplate. Set by the server.
  public updateTime?: string;

  // The creation timestamp of an deidentifyTemplate. Set by the server.
  public createTime?: string;

  /*
Configuration of the deidentify template
Structure is documented below.
*/
  public deidentifyConfig?: dataloss_PreventionDeidentifyTemplateDeidentifyConfig;

  // A description of the template.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "parent",
        "The parent of the template in any of the following formats:\n* `projects/{{project}}`\n* `projects/{{project}}/locations/{{location}}`\n* `organizations/{{organization_id}}`\n* `organizations/{{organization_id}}/locations/{{location}}`",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "templateId",
        "The template id can contain uppercase and lowercase letters, numbers, and hyphens;\nthat is, it must match the regular expression: [a-zA-Z\\d-_]+. The maximum length is\n100 characters. Can be empty to allow the system to generate one.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "deidentifyConfig",
        "Configuration of the deidentify template\nStructure is documented below.",
        () => dataloss_PreventionDeidentifyTemplateDeidentifyConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description of the template.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "User set display name of the template.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
