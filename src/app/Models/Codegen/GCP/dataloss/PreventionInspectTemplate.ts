import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionInspectTemplateInspectConfig,
  Dataloss_PreventionInspectTemplateInspectConfig_GetTypes,
} from "../types/Dataloss_PreventionInspectTemplateInspectConfig";

export interface PreventionInspectTemplateArgs {
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

  // A description of the inspect template.
  Description?: string;

  // User set display name of the inspect template.
  DisplayName?: string;

  /*
The core content of the template.
Structure is documented below.
*/
  InspectConfig?: Dataloss_PreventionInspectTemplateInspectConfig;
}
export class PreventionInspectTemplate extends Resource {
  /*
The core content of the template.
Structure is documented below.
*/
  public InspectConfig?: Dataloss_PreventionInspectTemplateInspectConfig;

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

  // A description of the inspect template.
  public Description?: string;

  // User set display name of the inspect template.
  public DisplayName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "User set display name of the inspect template.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "InspectConfig",
        "The core content of the template.\nStructure is documented below.",
        Dataloss_PreventionInspectTemplateInspectConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The parent of the inspect template in any of the following formats:\n* `projects/{{project}}`\n* `projects/{{project}}/locations/{{location}}`\n* `organizations/{{organization_id}}`\n* `organizations/{{organization_id}}/locations/{{location}}`\n\n\n- - -",
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
        InputType.String,
        "Description",
        "A description of the inspect template.",
        [],
        false,
        false,
      ),
    ];
  }
}
