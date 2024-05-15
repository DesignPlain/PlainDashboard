import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Apigee_EnvironmentNodeConfig,
  Apigee_EnvironmentNodeConfig_GetTypes,
} from "../types/Apigee_EnvironmentNodeConfig";

export interface EnvironmentArgs {
  /*
NodeConfig for setting the min/max number of nodes associated with the environment.
Structure is documented below.
*/
  NodeConfig?: Apigee_EnvironmentNodeConfig;

  /*
The Apigee Organization associated with the Apigee environment,
in the format `organizations/{{org_name}}`.


- - -
*/
  OrgId?: string;

  /*
Types that can be selected for an Environment. Each of the types are
limited by capability and capacity. Refer to Apigee's public documentation
to understand about each of these types in details.
An Apigee org can support heterogeneous Environments.
Possible values are: `ENVIRONMENT_TYPE_UNSPECIFIED`, `BASE`, `INTERMEDIATE`, `COMPREHENSIVE`.
*/
  Type?: string;

  /*
Optional. API Proxy type supported by the environment. The type can be set when creating
the Environment and cannot be changed.
Possible values are: `API_PROXY_TYPE_UNSPECIFIED`, `PROGRAMMABLE`, `CONFIGURABLE`.
*/
  ApiProxyType?: string;

  /*
Optional. Deployment type supported by the environment. The deployment type can be
set when creating the environment and cannot be changed. When you enable archive
deployment, you will be prevented from performing a subset of actions within the
environment, including:
Managing the deployment of API proxy or shared flow revisions;
Creating, updating, or deleting resource files;
Creating, updating, or deleting target servers.
Possible values are: `DEPLOYMENT_TYPE_UNSPECIFIED`, `PROXY`, `ARCHIVE`.
*/
  DeploymentType?: string;

  // Description of the environment.
  Description?: string;

  // Display name of the environment.
  DisplayName?: string;

  // The resource ID of the environment.
  Name?: string;
}
export class Environment extends Resource {
  /*
Optional. Deployment type supported by the environment. The deployment type can be
set when creating the environment and cannot be changed. When you enable archive
deployment, you will be prevented from performing a subset of actions within the
environment, including:
Managing the deployment of API proxy or shared flow revisions;
Creating, updating, or deleting resource files;
Creating, updating, or deleting target servers.
Possible values are: `DEPLOYMENT_TYPE_UNSPECIFIED`, `PROXY`, `ARCHIVE`.
*/
  public DeploymentType?: string;

  // Description of the environment.
  public Description?: string;

  // Display name of the environment.
  public DisplayName?: string;

  // The resource ID of the environment.
  public Name?: string;

  /*
NodeConfig for setting the min/max number of nodes associated with the environment.
Structure is documented below.
*/
  public NodeConfig?: Apigee_EnvironmentNodeConfig;

  /*
The Apigee Organization associated with the Apigee environment,
in the format `organizations/{{org_name}}`.


- - -
*/
  public OrgId?: string;

  /*
Types that can be selected for an Environment. Each of the types are
limited by capability and capacity. Refer to Apigee's public documentation
to understand about each of these types in details.
An Apigee org can support heterogeneous Environments.
Possible values are: `ENVIRONMENT_TYPE_UNSPECIFIED`, `BASE`, `INTERMEDIATE`, `COMPREHENSIVE`.
*/
  public Type?: string;

  /*
Optional. API Proxy type supported by the environment. The type can be set when creating
the Environment and cannot be changed.
Possible values are: `API_PROXY_TYPE_UNSPECIFIED`, `PROGRAMMABLE`, `CONFIGURABLE`.
*/
  public ApiProxyType?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "NodeConfig",
        "NodeConfig for setting the min/max number of nodes associated with the environment.\nStructure is documented below.",
        Apigee_EnvironmentNodeConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "OrgId",
        "The Apigee Organization associated with the Apigee environment,\nin the format `organizations/{{org_name}}`.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "Types that can be selected for an Environment. Each of the types are\nlimited by capability and capacity. Refer to Apigee's public documentation\nto understand about each of these types in details.\nAn Apigee org can support heterogeneous Environments.\nPossible values are: `ENVIRONMENT_TYPE_UNSPECIFIED`, `BASE`, `INTERMEDIATE`, `COMPREHENSIVE`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ApiProxyType",
        "Optional. API Proxy type supported by the environment. The type can be set when creating\nthe Environment and cannot be changed.\nPossible values are: `API_PROXY_TYPE_UNSPECIFIED`, `PROGRAMMABLE`, `CONFIGURABLE`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "DeploymentType",
        "Optional. Deployment type supported by the environment. The deployment type can be\nset when creating the environment and cannot be changed. When you enable archive\ndeployment, you will be prevented from performing a subset of actions within the\nenvironment, including:\nManaging the deployment of API proxy or shared flow revisions;\nCreating, updating, or deleting resource files;\nCreating, updating, or deleting target servers.\nPossible values are: `DEPLOYMENT_TYPE_UNSPECIFIED`, `PROXY`, `ARCHIVE`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Description of the environment.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Display name of the environment.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource ID of the environment.",
        [],
        false,
        true,
      ),
    ];
  }
}
