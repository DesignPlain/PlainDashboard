import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfig,
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfig_GetTypes,
} from "../types/Dataloss_PreventionDeidentifyTemplateDeidentifyConfig";

export interface PreventionDeidentifyTemplateArgs {
  /*
Configuration of the deidentify template
Structure is documented below.
*/
  DeidentifyConfig?: Dataloss_PreventionDeidentifyTemplateDeidentifyConfig;

  // A description of the template.
  Description?: string;

  // User set display name of the template.
  DisplayName?: string;

  /*
The parent of the template in any of the following formats:
- `projects/{{project}}`
- `projects/{{project}}/locations/{{location}}`
- `organizations/{{organization_id}}`
- `organizations/{{organization_id}}/locations/{{location}}`
*/
  Parent?: string;

  /*
The template id can contain uppercase and lowercase letters, numbers, and hyphens;
that is, it must match the regular expression: [a-zA-Z\d-_]+. The maximum length is
100 characters. Can be empty to allow the system to generate one.
*/
  TemplateId?: string;
}
export class PreventionDeidentifyTemplate extends Resource {
  // User set display name of the template.
  public DisplayName?: string;

  // Name describing the field.
  public Name?: string;

  /*
The parent of the template in any of the following formats:
- `projects/{{project}}`
- `projects/{{project}}/locations/{{location}}`
- `organizations/{{organization_id}}`
- `organizations/{{organization_id}}/locations/{{location}}`
*/
  public Parent?: string;

  /*
The template id can contain uppercase and lowercase letters, numbers, and hyphens;
that is, it must match the regular expression: [a-zA-Z\d-_]+. The maximum length is
100 characters. Can be empty to allow the system to generate one.
*/
  public TemplateId?: string;

  // The last update timestamp of an deidentifyTemplate. Set by the server.
  public UpdateTime?: string;

  // The creation timestamp of an deidentifyTemplate. Set by the server.
  public CreateTime?: string;

  /*
Configuration of the deidentify template
Structure is documented below.
*/
  public DeidentifyConfig?: Dataloss_PreventionDeidentifyTemplateDeidentifyConfig;

  // A description of the template.
  public Description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "User set display name of the template.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The parent of the template in any of the following formats:\n* `projects/{{project}}`\n* `projects/{{project}}/locations/{{location}}`\n* `organizations/{{organization_id}}`\n* `organizations/{{organization_id}}/locations/{{location}}`",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "TemplateId",
        "The template id can contain uppercase and lowercase letters, numbers, and hyphens;\nthat is, it must match the regular expression: [a-zA-Z\\d-_]+. The maximum length is\n100 characters. Can be empty to allow the system to generate one.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "DeidentifyConfig",
        "Configuration of the deidentify template\nStructure is documented below.",
        Dataloss_PreventionDeidentifyTemplateDeidentifyConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A description of the template.",
        [],
        false,
        false,
      ),
    ];
  }
}
