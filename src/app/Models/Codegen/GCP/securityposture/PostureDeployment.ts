import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface PostureDeploymentArgs {
  // The parent of the resource, an organization. Format should be `organizations/{organization_id}`.
  parent?: string;

  /*
ID of the posture deployment.


- - -
*/
  postureDeploymentId?: string;

  /*
Relative name of the posture which needs to be deployed. It should be in the format:
organizations/{organization_id}/locations/{location}/postures/{posture_id}
*/
  postureId?: string;

  // Revision_id the posture which needs to be deployed.
  postureRevisionId?: string;

  /*
The resource on which the posture should be deployed. This can be in one of the following formats:
projects/{project_number},
folders/{folder_number},
organizations/{organization_id}
*/
  targetResource?: string;

  // Description of the posture deployment.
  description?: string;

  // The location of the resource, eg. global`.
  location?: string;
}
export class PostureDeployment extends Resource {
  // Name of the posture deployment instance.
  public name?: string;

  /*
State of the posture deployment. A posture deployment can be in the following terminal states:
ACTIVE, CREATE_FAILED, UPDATE_FAILED, DELETE_FAILED.
*/
  public state?: string;

  // The parent of the resource, an organization. Format should be `organizations/{organization_id}`.
  public parent?: string;

  // Time the posture deployment was created in UTC.
  public createTime?: string;

  // Description of the posture deployment.
  public description?: string;

  /*
This is an output only optional field which will be filled in case when
PostureDeployment state is UPDATE_FAILED or CREATE_FAILED or DELETE_FAILED.
It denotes the desired posture to be deployed.
*/
  public desiredPostureId?: string;

  /*
This is an output only optional field which will be filled in case when
PostureDeployment state is UPDATE_FAILED or CREATE_FAILED or DELETE_FAILED.
It denotes the desired posture revision_id to be deployed.
*/
  public desiredPostureRevisionId?: string;

  // For Resource freshness validation (https://google.aip.dev/154)
  public etag?: string;

  /*
This is a output only optional field which will be filled in case where
PostureDeployment enters a failure state like UPDATE_FAILED or
CREATE_FAILED or DELETE_FAILED. It will have the failure message for posture deployment's
CREATE/UPDATE/DELETE methods.
*/
  public failureMessage?: string;

  // The location of the resource, eg. global`.
  public location?: string;

  // Revision_id the posture which needs to be deployed.
  public postureRevisionId?: string;

  // If set, there are currently changes in flight to the posture deployment.
  public reconciling?: boolean;

  /*
Relative name of the posture which needs to be deployed. It should be in the format:
organizations/{organization_id}/locations/{location}/postures/{posture_id}
*/
  public postureId?: string;

  /*
The resource on which the posture should be deployed. This can be in one of the following formats:
projects/{project_number},
folders/{folder_number},
organizations/{organization_id}
*/
  public targetResource?: string;

  // Time the posture deployment was updated in UTC.
  public updateTime?: string;

  /*
ID of the posture deployment.


- - -
*/
  public postureDeploymentId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "targetResource",
        "The resource on which the posture should be deployed. This can be in one of the following formats:\nprojects/{project_number},\nfolders/{folder_number},\norganizations/{organization_id}",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the posture deployment.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location of the resource, eg. global`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "parent",
        "The parent of the resource, an organization. Format should be `organizations/{organization_id}`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "postureDeploymentId",
        "ID of the posture deployment.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "postureId",
        "Relative name of the posture which needs to be deployed. It should be in the format:\norganizations/{organization_id}/locations/{location}/postures/{posture_id}",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "postureRevisionId",
        "Revision_id the posture which needs to be deployed.",
        [],
        true,
        false,
      ),
    ];
  }
}
