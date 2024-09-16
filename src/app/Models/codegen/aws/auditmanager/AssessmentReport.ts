import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface AssessmentReportArgs {
  /*
Unique identifier of the assessment to create the report from.

The following arguments are optional:
*/
  assessmentId?: string;

  // Description of the assessment report.
  description?: string;

  // Name of the assessment report.
  name?: string;
}
export class AssessmentReport extends DS_Resource {
  /*
Unique identifier of the assessment to create the report from.

The following arguments are optional:
*/
  public assessmentId?: string;

  // Name of the user who created the assessment report.
  public author?: string;

  // Description of the assessment report.
  public description?: string;

  // Name of the assessment report.
  public name?: string;

  // Current status of the specified assessment report. Valid values are `COMPLETE`, `IN_PROGRESS`, and `FAILED`.
  public status?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'assessmentId',
        'Unique identifier of the assessment to create the report from.\n\nThe following arguments are optional:',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the assessment report.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the assessment report.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
