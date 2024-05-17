import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Workbench_InstanceGceSetup,
  Workbench_InstanceGceSetup_GetTypes,
} from "../types/Workbench_InstanceGceSetup";
import {
  Workbench_InstanceHealthInfo,
  Workbench_InstanceHealthInfo_GetTypes,
} from "../types/Workbench_InstanceHealthInfo";
import {
  Workbench_InstanceUpgradeHistory,
  Workbench_InstanceUpgradeHistory_GetTypes,
} from "../types/Workbench_InstanceUpgradeHistory";

export interface InstanceArgs {
  // Required. User-defined unique ID of this instance.
  InstanceId?: string;

  /*
'Optional. Input only. The owner of this instance after creation. Format:
`alias@example.com` Currently supports one owner only. If not specified, all of
the service account users of your VM instance''s service account can use the instance.'
*/
  InstanceOwners?: Array<string>;

  /*
Part of `parent`. See documentation of `projectsId`.


- - -
*/
  Location?: string;

  // Desired state of the Workbench Instance. Set this field to `ACTIVE` to start the Instance, and `STOPPED` to stop the Instance.
  DesiredState?: string;

  // Optional. If true, the workbench instance will not register with the proxy.
  DisableProxyAccess?: boolean;

  /*
The definition of how to configure a VM instance outside of Resources and Identity.
Structure is documented below.
*/
  GceSetup?: Workbench_InstanceGceSetup;

  /*
Optional. Labels to apply to this instance. These can be later modified
by the UpdateInstance method.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The name of this workbench instance. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class Instance extends Resource {
  // Output only. Email address of entity that sent original CreateInstance request.
  public Creator?: string;

  // Desired state of the Workbench Instance. Set this field to `ACTIVE` to start the Instance, and `STOPPED` to stop the Instance.
  public DesiredState?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // Required. User-defined unique ID of this instance.
  public InstanceId?: string;

  // Output only. The proxy endpoint that is used to access the Jupyter notebook.
  public ProxyUri?: string;

  /*
An RFC3339 timestamp in UTC time. This in the format of yyyy-MM-ddTHH:mm:ss.SSSZ.
The milliseconds portion (".SSS") is optional.
*/
  public CreateTime?: string;

  /*
'Output only. Additional information about instance health. Example:
healthInfo": { "docker_proxy_agent_status": "1", "docker_status": "1", "jupyterlab_api_status":
"-1", "jupyterlab_status": "-1", "updated": "2020-10-18 09:40:03.573409" }'
*/
  public HealthInfos?: Array<Workbench_InstanceHealthInfo>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // Optional. If true, the workbench instance will not register with the proxy.
  public DisableProxyAccess?: boolean;

  /*
(Output)
Output only. The state of this instance upgrade history entry.
*/
  public State?: string;

  // The name of this workbench instance. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
  public Name?: string;

  // Output only. Instance health_state.
  public HealthState?: string;

  /*
'Optional. Input only. The owner of this instance after creation. Format:
`alias@example.com` Currently supports one owner only. If not specified, all of
the service account users of your VM instance''s service account can use the instance.'
*/
  public InstanceOwners?: Array<string>;

  /*
Optional. Labels to apply to this instance. These can be later modified
by the UpdateInstance method.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
Part of `parent`. See documentation of `projectsId`.


- - -
*/
  public Location?: string;

  /*
An RFC3339 timestamp in UTC time. This in the format of yyyy-MM-ddTHH:mm:ss.SSSZ.
The milliseconds portion (".SSS") is optional.
*/
  public UpdateTime?: string;

  /*
Output only. The upgrade history of this instance.
Structure is documented below.
*/
  public UpgradeHistories?: Array<Workbench_InstanceUpgradeHistory>;

  /*
The definition of how to configure a VM instance outside of Resources and Identity.
Structure is documented below.
*/
  public GceSetup?: Workbench_InstanceGceSetup;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Location",
        "Part of `parent`. See documentation of `projectsId`.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "DisableProxyAccess",
        "Optional. If true, the workbench instance will not register with the proxy.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Optional. Labels to apply to this instance. These can be later modified\nby the UpdateInstance method.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
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
        InputType.String,
        "Name",
        "The name of this workbench instance. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "InstanceId",
        "Required. User-defined unique ID of this instance.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "InstanceOwners",
        "'Optional. Input only. The owner of this instance after creation. Format:\n`alias@example.com` Currently supports one owner only. If not specified, all of\nthe service account users of your VM instance''s service account can use the instance.'",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "DesiredState",
        "Desired state of the Workbench Instance. Set this field to `ACTIVE` to start the Instance, and `STOPPED` to stop the Instance.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "GceSetup",
        "The definition of how to configure a VM instance outside of Resources and Identity.\nStructure is documented below.",
        Workbench_InstanceGceSetup_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
