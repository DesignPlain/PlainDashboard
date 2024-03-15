import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { PreventionInspectTemplateInspectConfig } from "../types/PreventionInspectTemplateInspectConfig";

export interface PreventionInspectTemplateArgs {
  // A description of the inspect template.
  Description?: string;

  // User set display name of the inspect template.
  DisplayName?: string;

  /*
The core content of the template.
Structure is documented below.
*/
  InspectConfig?: PreventionInspectTemplateInspectConfig;

  /*
The parent of the inspect template in any of the following formats:
- `projects/{{project}}`
- `projects/{{project}}/locations/{{location}}`
- `organizations/{{organization_id}}`
- `organizations/{{organization_id}}/locations/{{location}}`


- - -
*/
  Parent?: string;

  /*
The template id can contain uppercase and lowercase letters, numbers, and hyphens;
that is, it must match the regular expression: [a-zA-Z\d-_]+. The maximum length is
100 characters. Can be empty to allow the system to generate one.
*/
  TemplateId?: string;
}
export class PreventionInspectTemplate extends Resource {
  // A description of the inspect template.
  public Description?: string;

  // User set display name of the inspect template.
  public DisplayName?: string;

  /*
The core content of the template.
Structure is documented below.
*/
  public InspectConfig?: PreventionInspectTemplateInspectConfig;

  /*
Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names
listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
*/
  public Name?: string;

  /*
The parent of the inspect template in any of the following formats:
- `projects/{{project}}`
- `projects/{{project}}/locations/{{location}}`
- `organizations/{{organization_id}}`
- `organizations/{{organization_id}}/locations/{{location}}`


- - -
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
        "The parent of the inspect template in any of the following formats:\n* `projects/{{project}}`\n* `projects/{{project}}/locations/{{location}}`\n* `organizations/{{organization_id}}`\n* `organizations/{{organization_id}}/locations/{{location}}`\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "TemplateId",
        "The template id can contain uppercase and lowercase letters, numbers, and hyphens;\nthat is, it must match the regular expression: [a-zA-Z\\d-_]+. The maximum length is\n100 characters. Can be empty to allow the system to generate one.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A description of the inspect template.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "User set display name of the inspect template.",
      ),
      new DynamicUIProps(
        InputType.String,
        "InspectConfig",
        "The core content of the template.\nStructure is documented below.",
      ),
    ];
  }
}
