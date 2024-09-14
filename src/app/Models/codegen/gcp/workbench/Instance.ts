import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  workbench_InstanceGceSetup,
  workbench_InstanceGceSetup_GetTypes,
} from "../types/workbench_InstanceGceSetup";
import {
  workbench_InstanceHealthInfo,
  workbench_InstanceHealthInfo_GetTypes,
} from "../types/workbench_InstanceHealthInfo";
import {
  workbench_InstanceUpgradeHistory,
  workbench_InstanceUpgradeHistory_GetTypes,
} from "../types/workbench_InstanceUpgradeHistory";

export interface InstanceArgs {
  // Desired state of the Workbench Instance. Set this field to `ACTIVE` to start the Instance, and `STOPPED` to stop the Instance.
  desiredState?: string;

  // Optional. If true, the workbench instance will not register with the proxy.
  disableProxyAccess?: boolean;

  // Required. User-defined unique ID of this instance.
  instanceId?: string;

  /*
'Optional. Input only. The owner of this instance after creation. Format:
`alias@example.com` Currently supports one owner only. If not specified, all of
the service account users of your VM instance''s service account can use the instance.'
*/
  instanceOwners?: Array<string>;

  /*
Part of `parent`. See documentation of `projectsId`.


- - -
*/
  location?: string;

  // The name of this workbench instance. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
  name?: string;

  /*
The definition of how to configure a VM instance outside of Resources and Identity.
Structure is documented below.
*/
  gceSetup?: workbench_InstanceGceSetup;

  /*
Optional. Labels to apply to this instance. These can be later modified
by the UpdateInstance method.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class Instance extends DS_Resource {
  // Output only. Email address of entity that sent original CreateInstance request.
  public creator?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Optional. Labels to apply to this instance. These can be later modified
by the UpdateInstance method.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
'Optional. Input only. The owner of this instance after creation. Format:
`alias@example.com` Currently supports one owner only. If not specified, all of
the service account users of your VM instance''s service account can use the instance.'
*/
  public instanceOwners?: Array<string>;

  /*
Part of `parent`. See documentation of `projectsId`.


- - -
*/
  public location?: string;

  // Output only. The proxy endpoint that is used to access the Jupyter notebook.
  public proxyUri?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
(Output)
Output only. The state of this instance upgrade history entry.
*/
  public state?: string;

  /*
An RFC3339 timestamp in UTC time. This in the format of yyyy-MM-ddTHH:mm:ss.SSSZ.
The milliseconds portion (".SSS") is optional.
*/
  public createTime?: string;

  // Optional. If true, the workbench instance will not register with the proxy.
  public disableProxyAccess?: boolean;

  /*
'Output only. Additional information about instance health. Example:
healthInfo": { "docker_proxy_agent_status": "1", "docker_status": "1", "jupyterlab_api_status":
"-1", "jupyterlab_status": "-1", "updated": "2020-10-18 09:40:03.573409" }'
*/
  public healthInfos?: Array<workbench_InstanceHealthInfo>;

  /*
An RFC3339 timestamp in UTC time. This in the format of yyyy-MM-ddTHH:mm:ss.SSSZ.
The milliseconds portion (".SSS") is optional.
*/
  public updateTime?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Required. User-defined unique ID of this instance.
  public instanceId?: string;

  // The name of this workbench instance. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
  public name?: string;

  /*
Output only. The upgrade history of this instance.
Structure is documented below.
*/
  public upgradeHistories?: Array<workbench_InstanceUpgradeHistory>;

  // Desired state of the Workbench Instance. Set this field to `ACTIVE` to start the Instance, and `STOPPED` to stop the Instance.
  public desiredState?: string;

  /*
The definition of how to configure a VM instance outside of Resources and Identity.
Structure is documented below.
*/
  public gceSetup?: workbench_InstanceGceSetup;

  // Output only. Instance health_state.
  public healthState?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "instanceOwners",
        "'Optional. Input only. The owner of this instance after creation. Format:\n`alias@example.com` Currently supports one owner only. If not specified, all of\nthe service account users of your VM instance''s service account can use the instance.'",
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "Part of `parent`. See documentation of `projectsId`.\n\n\n- - -",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "gceSetup",
        "The definition of how to configure a VM instance outside of Resources and Identity.\nStructure is documented below.",
        () => workbench_InstanceGceSetup_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Optional. Labels to apply to this instance. These can be later modified\nby the UpdateInstance method.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "disableProxyAccess",
        "Optional. If true, the workbench instance will not register with the proxy.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceId",
        "Required. User-defined unique ID of this instance.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of this workbench instance. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "desiredState",
        "Desired state of the Workbench Instance. Set this field to `ACTIVE` to start the Instance, and `STOPPED` to stop the Instance.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
