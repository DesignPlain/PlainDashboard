import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { PreventionDeidentifyTemplateDeidentifyConfig } from "../types/PreventionDeidentifyTemplateDeidentifyConfig";

export interface PreventionDeidentifyTemplateArgs {
  /*
Configuration of the deidentify template
Structure is documented below.
*/
  DeidentifyConfig?: PreventionDeidentifyTemplateDeidentifyConfig;

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
  // The last update timestamp of an deidentifyTemplate. Set by the server.
  public UpdateTime?: string;

  // The creation timestamp of an deidentifyTemplate. Set by the server.
  public CreateTime?: string;

  /*
Configuration of the deidentify template
Structure is documented below.
*/
  public DeidentifyConfig?: PreventionDeidentifyTemplateDeidentifyConfig;

  // A description of the template.
  public Description?: string;

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

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The parent of the template in any of the following formats:\n* `projects/{{project}}`\n* `projects/{{project}}/locations/{{location}}`\n* `organizations/{{organization_id}}`\n* `organizations/{{organization_id}}/locations/{{location}}`",
      ),
      new DynamicUIProps(
        InputType.String,
        "TemplateId",
        "The template id can contain uppercase and lowercase letters, numbers, and hyphens;\nthat is, it must match the regular expression: [a-zA-Z\\d-_]+. The maximum length is\n100 characters. Can be empty to allow the system to generate one.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DeidentifyConfig",
        "Configuration of the deidentify template\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A description of the template.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "User set display name of the template.",
      ),
    ];
  }
}
