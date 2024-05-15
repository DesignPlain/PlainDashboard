import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Deploymentmanager_DeploymentLabel,
  Deploymentmanager_DeploymentLabel_GetTypes,
} from "../types/Deploymentmanager_DeploymentLabel";
import {
  Deploymentmanager_DeploymentTarget,
  Deploymentmanager_DeploymentTarget_GetTypes,
} from "../types/Deploymentmanager_DeploymentTarget";

export interface DeploymentArgs {
  /*
Set the policy to use for creating new resources. Only used on
create and update. Valid values are `CREATE_OR_ACQUIRE` (default) or
`ACQUIRE`. If set to `ACQUIRE` and resources do not already exist,
the deployment will fail. Note that updating this field does not
actually affect the deployment, just how it is updated.
Default value is `CREATE_OR_ACQUIRE`.
Possible values are: `ACQUIRE`, `CREATE_OR_ACQUIRE`.
*/
  CreatePolicy?: string;

  /*
Set the policy to use for deleting new resources on update/delete.
Valid values are `DELETE` (default) or `ABANDON`. If `DELETE`,
resource is deleted after removal from Deployment Manager. If
`ABANDON`, the resource is only removed from Deployment Manager
and is not actually deleted. Note that updating this field does not
actually change the deployment, just how it is updated.
Default value is `DELETE`.
Possible values are: `ABANDON`, `DELETE`.
*/
  DeletePolicy?: string;

  // Optional user-provided description of deployment.
  Description?: string;

  /*
Key-value pairs to apply to this labels.
Structure is documented below.
*/
  Labels?: Array<Deploymentmanager_DeploymentLabel>;

  // Unique name for the deployment
  Name?: string;

  /*
If set to true, a deployment is created with "shell" resources
that are not actually instantiated. This allows you to preview a
deployment. It can be updated to false to actually deploy
with real resources.
~>--NOTE:-- Deployment Manager does not allow update
of a deployment in preview (unless updating to preview=false). Thus,
the provider will force-recreate deployments if either preview is updated
to true or if other fields are updated while preview is true.
*/
  Preview?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Parameters that define your deployment, including the deployment
configuration and relevant templates.
Structure is documented below.
*/
  Target?: Deploymentmanager_DeploymentTarget;
}
export class Deployment extends Resource {
  /*
Set the policy to use for deleting new resources on update/delete.
Valid values are `DELETE` (default) or `ABANDON`. If `DELETE`,
resource is deleted after removal from Deployment Manager. If
`ABANDON`, the resource is only removed from Deployment Manager
and is not actually deleted. Note that updating this field does not
actually change the deployment, just how it is updated.
Default value is `DELETE`.
Possible values are: `ABANDON`, `DELETE`.
*/
  public DeletePolicy?: string;

  // Optional user-provided description of deployment.
  public Description?: string;

  /*
Key-value pairs to apply to this labels.
Structure is documented below.
*/
  public Labels?: Array<Deploymentmanager_DeploymentLabel>;

  // Unique name for the deployment
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Output only. Server defined URL for the resource.
  public SelfLink?: string;

  /*
Parameters that define your deployment, including the deployment
configuration and relevant templates.
Structure is documented below.
*/
  public Target?: Deploymentmanager_DeploymentTarget;

  /*
Set the policy to use for creating new resources. Only used on
create and update. Valid values are `CREATE_OR_ACQUIRE` (default) or
`ACQUIRE`. If set to `ACQUIRE` and resources do not already exist,
the deployment will fail. Note that updating this field does not
actually affect the deployment, just how it is updated.
Default value is `CREATE_OR_ACQUIRE`.
Possible values are: `ACQUIRE`, `CREATE_OR_ACQUIRE`.
*/
  public CreatePolicy?: string;

  // Unique identifier for deployment. Output only.
  public DeploymentId?: string;

  /*
Output only. URL of the manifest representing the last manifest that
was successfully deployed.
*/
  public Manifest?: string;

  /*
If set to true, a deployment is created with "shell" resources
that are not actually instantiated. This allows you to preview a
deployment. It can be updated to false to actually deploy
with real resources.
~>--NOTE:-- Deployment Manager does not allow update
of a deployment in preview (unless updating to preview=false). Thus,
the provider will force-recreate deployments if either preview is updated
to true or if other fields are updated while preview is true.
*/
  public Preview?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Optional user-provided description of deployment.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Labels",
        "Key-value pairs to apply to this labels.\nStructure is documented below.",
        Deploymentmanager_DeploymentLabel_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Unique name for the deployment",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "Preview",
        'If set to true, a deployment is created with "shell" resources\nthat are not actually instantiated. This allows you to preview a\ndeployment. It can be updated to false to actually deploy\nwith real resources.\n~>**NOTE:** Deployment Manager does not allow update\nof a deployment in preview (unless updating to preview=false). Thus,\nthe provider will force-recreate deployments if either preview is updated\nto true or if other fields are updated while preview is true.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Target",
        "Parameters that define your deployment, including the deployment\nconfiguration and relevant templates.\nStructure is documented below.",
        Deploymentmanager_DeploymentTarget_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "CreatePolicy",
        "Set the policy to use for creating new resources. Only used on\ncreate and update. Valid values are `CREATE_OR_ACQUIRE` (default) or\n`ACQUIRE`. If set to `ACQUIRE` and resources do not already exist,\nthe deployment will fail. Note that updating this field does not\nactually affect the deployment, just how it is updated.\nDefault value is `CREATE_OR_ACQUIRE`.\nPossible values are: `ACQUIRE`, `CREATE_OR_ACQUIRE`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "DeletePolicy",
        "Set the policy to use for deleting new resources on update/delete.\nValid values are `DELETE` (default) or `ABANDON`. If `DELETE`,\nresource is deleted after removal from Deployment Manager. If\n`ABANDON`, the resource is only removed from Deployment Manager\nand is not actually deleted. Note that updating this field does not\nactually change the deployment, just how it is updated.\nDefault value is `DELETE`.\nPossible values are: `ABANDON`, `DELETE`.",
        [],
        false,
        true,
      ),
    ];
  }
}
