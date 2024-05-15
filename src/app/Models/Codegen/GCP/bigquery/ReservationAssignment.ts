import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ReservationAssignmentArgs {
  // The resource which will use the reservation. E.g. projects/myproject, folders/123, organizations/456.
  Assignee?: string;

  // Types of job, which could be specified when using the reservation. Possible values: JOB_TYPE_UNSPECIFIED, PIPELINE, QUERY
  JobType?: string;

  // The location for the resource
  Location?: string;

  // The project for the resource
  Project?: string;

  /*
The reservation for the resource



- - -
*/
  Reservation?: string;
}
export class ReservationAssignment extends Resource {
  // Output only. The resource name of the assignment.
  public Name?: string;

  // The project for the resource
  public Project?: string;

  /*
The reservation for the resource



- - -
*/
  public Reservation?: string;

  // Assignment will remain in PENDING state if no active capacity commitment is present. It will become ACTIVE when some capacity commitment becomes active. Possible values: STATE_UNSPECIFIED, PENDING, ACTIVE
  public State?: string;

  // The resource which will use the reservation. E.g. projects/myproject, folders/123, organizations/456.
  public Assignee?: string;

  // Types of job, which could be specified when using the reservation. Possible values: JOB_TYPE_UNSPECIFIED, PIPELINE, QUERY
  public JobType?: string;

  // The location for the resource
  public Location?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Assignee",
        "The resource which will use the reservation. E.g. projects/myproject, folders/123, organizations/456.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "JobType",
        "Types of job, which could be specified when using the reservation. Possible values: JOB_TYPE_UNSPECIFIED, PIPELINE, QUERY",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project for the resource",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Reservation",
        "The reservation for the resource\n\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
