import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ReservationAssignmentArgs {
  // The project for the resource
  project?: string;

  /*
The reservation for the resource



- - -
*/
  reservation?: string;

  // The resource which will use the reservation. E.g. projects/myproject, folders/123, organizations/456.
  assignee?: string;

  // Types of job, which could be specified when using the reservation. Possible values: JOB_TYPE_UNSPECIFIED, PIPELINE, QUERY
  jobType?: string;

  // The location for the resource
  location?: string;
}
export class ReservationAssignment extends DS_Resource {
  // The resource which will use the reservation. E.g. projects/myproject, folders/123, organizations/456.
  public assignee?: string;

  // Types of job, which could be specified when using the reservation. Possible values: JOB_TYPE_UNSPECIFIED, PIPELINE, QUERY
  public jobType?: string;

  // The location for the resource
  public location?: string;

  // Output only. The resource name of the assignment.
  public name?: string;

  // The project for the resource
  public project?: string;

  /*
The reservation for the resource



- - -
*/
  public reservation?: string;

  // Assignment will remain in PENDING state if no active capacity commitment is present. It will become ACTIVE when some capacity commitment becomes active. Possible values: STATE_UNSPECIFIED, PENDING, ACTIVE
  public state?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'project',
        'The project for the resource',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'reservation',
        'The reservation for the resource\n\n\n\n- - -',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'assignee',
        'The resource which will use the reservation. E.g. projects/myproject, folders/123, organizations/456.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'jobType',
        'Types of job, which could be specified when using the reservation. Possible values: JOB_TYPE_UNSPECIFIED, PIPELINE, QUERY',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'location',
        'The location for the resource',
        () => [],
        false,
        true,
      ),
    ];
  }
}
