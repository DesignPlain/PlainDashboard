import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dataloss_PreventionInspectTemplateInspectConfig,
  dataloss_PreventionInspectTemplateInspectConfig_GetTypes,
} from '../types/dataloss_PreventionInspectTemplateInspectConfig';

export interface PreventionInspectTemplateArgs {
  /*
The parent of the inspect template in any of the following formats:
- `projects/{{project}}`
- `projects/{{project}}/locations/{{location}}`
- `organizations/{{organization_id}}`
- `organizations/{{organization_id}}/locations/{{location}}`


- - -
*/
  parent?: string;

  /*
The template id can contain uppercase and lowercase letters, numbers, and hyphens;
that is, it must match the regular expression: [a-zA-Z\d-_]+. The maximum length is
100 characters. Can be empty to allow the system to generate one.
*/
  templateId?: string;

  // A description of the inspect template.
  description?: string;

  // User set display name of the inspect template.
  displayName?: string;

  /*
The core content of the template.
Structure is documented below.
*/
  inspectConfig?: dataloss_PreventionInspectTemplateInspectConfig;
}
export class PreventionInspectTemplate extends DS_Resource {
  /*
The template id can contain uppercase and lowercase letters, numbers, and hyphens;
that is, it must match the regular expression: [a-zA-Z\d-_]+. The maximum length is
100 characters. Can be empty to allow the system to generate one.
*/
  public templateId?: string;

  // A description of the inspect template.
  public description?: string;

  // User set display name of the inspect template.
  public displayName?: string;

  /*
The core content of the template.
Structure is documented below.
*/
  public inspectConfig?: dataloss_PreventionInspectTemplateInspectConfig;

  /*
Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names
listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
*/
  public name?: string;

  /*
The parent of the inspect template in any of the following formats:
- `projects/{{project}}`
- `projects/{{project}}/locations/{{location}}`
- `organizations/{{organization_id}}`
- `organizations/{{organization_id}}/locations/{{location}}`


- - -
*/
  public parent?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'templateId',
        'The template id can contain uppercase and lowercase letters, numbers, and hyphens;\nthat is, it must match the regular expression: [a-zA-Z\\d-_]+. The maximum length is\n100 characters. Can be empty to allow the system to generate one.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'A description of the inspect template.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'displayName',
        'User set display name of the inspect template.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'inspectConfig',
        'The core content of the template.\nStructure is documented below.',
        () => dataloss_PreventionInspectTemplateInspectConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'parent',
        'The parent of the inspect template in any of the following formats:\n* `projects/{{project}}`\n* `projects/{{project}}/locations/{{location}}`\n* `organizations/{{organization_id}}`\n* `organizations/{{organization_id}}/locations/{{location}}`\n\n\n- - -',
        () => [],
        true,
        true,
      ),
    ];
  }
}
