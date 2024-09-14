import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  apigee_EnvironmentNodeConfig,
  apigee_EnvironmentNodeConfig_GetTypes,
} from "../types/apigee_EnvironmentNodeConfig";

export interface EnvironmentArgs {
  /*
The Apigee Organization associated with the Apigee environment,
in the format `organizations/{{org_name}}`.


- - -
*/
  orgId?: string;

  /*
Types that can be selected for an Environment. Each of the types are
limited by capability and capacity. Refer to Apigee's public documentation
to understand about each of these types in details.
An Apigee org can support heterogeneous Environments.
Possible values are: `ENVIRONMENT_TYPE_UNSPECIFIED`, `BASE`, `INTERMEDIATE`, `COMPREHENSIVE`.
*/
  type?: string;

  /*
Optional. API Proxy type supported by the environment. The type can be set when creating
the Environment and cannot be changed.
Possible values are: `API_PROXY_TYPE_UNSPECIFIED`, `PROGRAMMABLE`, `CONFIGURABLE`.
*/
  apiProxyType?: string;

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
  deploymentType?: string;

  // Description of the environment.
  description?: string;

  // Display name of the environment.
  displayName?: string;

  // The resource ID of the environment.
  name?: string;

  /*
NodeConfig for setting the min/max number of nodes associated with the environment.
Structure is documented below.
*/
  nodeConfig?: apigee_EnvironmentNodeConfig;
}
export class Environment extends DS_Resource {
  // The resource ID of the environment.
  public name?: string;

  /*
NodeConfig for setting the min/max number of nodes associated with the environment.
Structure is documented below.
*/
  public nodeConfig?: apigee_EnvironmentNodeConfig;

  /*
The Apigee Organization associated with the Apigee environment,
in the format `organizations/{{org_name}}`.


- - -
*/
  public orgId?: string;

  /*
Types that can be selected for an Environment. Each of the types are
limited by capability and capacity. Refer to Apigee's public documentation
to understand about each of these types in details.
An Apigee org can support heterogeneous Environments.
Possible values are: `ENVIRONMENT_TYPE_UNSPECIFIED`, `BASE`, `INTERMEDIATE`, `COMPREHENSIVE`.
*/
  public type?: string;

  /*
Optional. API Proxy type supported by the environment. The type can be set when creating
the Environment and cannot be changed.
Possible values are: `API_PROXY_TYPE_UNSPECIFIED`, `PROGRAMMABLE`, `CONFIGURABLE`.
*/
  public apiProxyType?: string;

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
  public deploymentType?: string;

  // Description of the environment.
  public description?: string;

  // Display name of the environment.
  public displayName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the environment.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "Display name of the environment.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The resource ID of the environment.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "nodeConfig",
        "NodeConfig for setting the min/max number of nodes associated with the environment.\nStructure is documented below.",
        () => apigee_EnvironmentNodeConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "orgId",
        "The Apigee Organization associated with the Apigee environment,\nin the format `organizations/{{org_name}}`.\n\n\n- - -",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "Types that can be selected for an Environment. Each of the types are\nlimited by capability and capacity. Refer to Apigee's public documentation\nto understand about each of these types in details.\nAn Apigee org can support heterogeneous Environments.\nPossible values are: `ENVIRONMENT_TYPE_UNSPECIFIED`, `BASE`, `INTERMEDIATE`, `COMPREHENSIVE`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "apiProxyType",
        "Optional. API Proxy type supported by the environment. The type can be set when creating\nthe Environment and cannot be changed.\nPossible values are: `API_PROXY_TYPE_UNSPECIFIED`, `PROGRAMMABLE`, `CONFIGURABLE`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "deploymentType",
        "Optional. Deployment type supported by the environment. The deployment type can be\nset when creating the environment and cannot be changed. When you enable archive\ndeployment, you will be prevented from performing a subset of actions within the\nenvironment, including:\nManaging the deployment of API proxy or shared flow revisions;\nCreating, updating, or deleting resource files;\nCreating, updating, or deleting target servers.\nPossible values are: `DEPLOYMENT_TYPE_UNSPECIFIED`, `PROXY`, `ARCHIVE`.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
