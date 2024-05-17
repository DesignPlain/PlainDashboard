import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface PostureDeploymentArgs {
  /*
The resource on which the posture should be deployed. This can be in one of the following formats:
projects/{project_number},
folders/{folder_number},
organizations/{organization_id}
*/
  TargetResource?: string;

  // Description of the posture deployment.
  Description?: string;

  // The location of the resource, eg. global`.
  Location?: string;

  // The parent of the resource, an organization. Format should be `organizations/{organization_id}`.
  Parent?: string;

  /*
ID of the posture deployment.


- - -
*/
  PostureDeploymentId?: string;

  /*
Relative name of the posture which needs to be deployed. It should be in the format:
organizations/{organization_id}/locations/{location}/postures/{posture_id}
*/
  PostureId?: string;

  // Revision_id the posture which needs to be deployed.
  PostureRevisionId?: string;
}
export class PostureDeployment extends Resource {
  // Name of the posture deployment instance.
  public Name?: string;

  /*
ID of the posture deployment.


- - -
*/
  public PostureDeploymentId?: string;

  /*
State of the posture deployment. A posture deployment can be in the following terminal states:
ACTIVE, CREATE_FAILED, UPDATE_FAILED, DELETE_FAILED.
*/
  public State?: string;

  // If set, there are currently changes in flight to the posture deployment.
  public Reconciling?: boolean;

  // Description of the posture deployment.
  public Description?: string;

  /*
This is an output only optional field which will be filled in case when
PostureDeployment state is UPDATE_FAILED or CREATE_FAILED or DELETE_FAILED.
It denotes the desired posture to be deployed.
*/
  public DesiredPostureId?: string;

  // The parent of the resource, an organization. Format should be `organizations/{organization_id}`.
  public Parent?: string;

  // Revision_id the posture which needs to be deployed.
  public PostureRevisionId?: string;

  // Time the posture deployment was updated in UTC.
  public UpdateTime?: string;

  // Time the posture deployment was created in UTC.
  public CreateTime?: string;

  /*
This is an output only optional field which will be filled in case when
PostureDeployment state is UPDATE_FAILED or CREATE_FAILED or DELETE_FAILED.
It denotes the desired posture revision_id to be deployed.
*/
  public DesiredPostureRevisionId?: string;

  // For Resource freshness validation (https://google.aip.dev/154)
  public Etag?: string;

  /*
This is a output only optional field which will be filled in case where
PostureDeployment enters a failure state like UPDATE_FAILED or
CREATE_FAILED or DELETE_FAILED. It will have the failure message for posture deployment's
CREATE/UPDATE/DELETE methods.
*/
  public FailureMessage?: string;

  // The location of the resource, eg. global`.
  public Location?: string;

  /*
Relative name of the posture which needs to be deployed. It should be in the format:
organizations/{organization_id}/locations/{location}/postures/{posture_id}
*/
  public PostureId?: string;

  /*
The resource on which the posture should be deployed. This can be in one of the following formats:
projects/{project_number},
folders/{folder_number},
organizations/{organization_id}
*/
  public TargetResource?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "PostureDeploymentId",
        "ID of the posture deployment.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "PostureId",
        "Relative name of the posture which needs to be deployed. It should be in the format:\norganizations/{organization_id}/locations/{location}/postures/{posture_id}",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "PostureRevisionId",
        "Revision_id the posture which needs to be deployed.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "TargetResource",
        "The resource on which the posture should be deployed. This can be in one of the following formats:\nprojects/{project_number},\nfolders/{folder_number},\norganizations/{organization_id}",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Description of the posture deployment.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the resource, eg. global`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The parent of the resource, an organization. Format should be `organizations/{organization_id}`.",
        [],
        true,
        true,
      ),
    ];
  }
}
