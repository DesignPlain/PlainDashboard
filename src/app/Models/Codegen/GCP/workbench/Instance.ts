import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { InstanceGceSetup } from "../types/InstanceGceSetup";
import { InstanceUpgradeHistory } from "../types/InstanceUpgradeHistory";
import { InstanceHealthInfo } from "../types/InstanceHealthInfo";

export interface InstanceArgs {
  // Desired state of the Workbench Instance. Set this field to `ACTIVE` to start the Instance, and `STOPPED` to stop the Instance.
  DesiredState?: string;

  /*
Part of `parent`. See documentation of `projectsId`.


- - -
*/
  Location?: string;

  // The name of this workbench instance. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Optional. Labels to apply to this instance. These can be later modified
by the UpdateInstance method.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // Optional. If true, the workbench instance will not register with the proxy.
  DisableProxyAccess?: boolean;

  /*
The definition of how to configure a VM instance outside of Resources and Identity.
Structure is documented below.
*/
  GceSetup?: InstanceGceSetup;

  // Required. User-defined unique ID of this instance.
  InstanceId?: string;

  /*
'Optional. Input only. The owner of this instance after creation. Format:
`alias@example.com` Currently supports one owner only. If not specified, all of
the service account users of your VM instance''s service account can use the instance.'
*/
  InstanceOwners?: Array<string>;
}
export class Instance extends Resource {
  // Desired state of the Workbench Instance. Set this field to `ACTIVE` to start the Instance, and `STOPPED` to stop the Instance.
  public DesiredState?: string;

  /*
(Output)
Output only. The state of this instance upgrade history entry.
*/
  public State?: string;

  /*
Output only. The upgrade history of this instance.
Structure is documented below.
*/
  public UpgradeHistories?: Array<InstanceUpgradeHistory>;

  // Output only. Email address of entity that sent original CreateInstance request.
  public Creator?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // The name of this workbench instance. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
  public Name?: string;

  // Output only. The proxy endpoint that is used to access the Jupyter notebook.
  public ProxyUri?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
An RFC3339 timestamp in UTC time. This in the format of yyyy-MM-ddTHH:mm:ss.SSSZ.
The milliseconds portion (".SSS") is optional.
*/
  public CreateTime?: string;

  // Output only. Instance health_state.
  public HealthState?: string;

  /*
Optional. Labels to apply to this instance. These can be later modified
by the UpdateInstance method.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
An RFC3339 timestamp in UTC time. This in the format of yyyy-MM-ddTHH:mm:ss.SSSZ.
The milliseconds portion (".SSS") is optional.
*/
  public UpdateTime?: string;

  /*
Part of `parent`. See documentation of `projectsId`.


- - -
*/
  public Location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Optional. If true, the workbench instance will not register with the proxy.
  public DisableProxyAccess?: boolean;

  /*
The definition of how to configure a VM instance outside of Resources and Identity.
Structure is documented below.
*/
  public GceSetup?: InstanceGceSetup;

  /*
'Output only. Additional information about instance health. Example:
healthInfo": { "docker_proxy_agent_status": "1", "docker_status": "1", "jupyterlab_api_status":
"-1", "jupyterlab_status": "-1", "updated": "2020-10-18 09:40:03.573409" }'
*/
  public HealthInfos?: Array<InstanceHealthInfo>;

  // Required. User-defined unique ID of this instance.
  public InstanceId?: string;

  /*
'Optional. Input only. The owner of this instance after creation. Format:
`alias@example.com` Currently supports one owner only. If not specified, all of
the service account users of your VM instance''s service account can use the instance.'
*/
  public InstanceOwners?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.DropDown,
        "InstanceOwners",
        "'Optional. Input only. The owner of this instance after creation. Format:\n`alias@example.com` Currently supports one owner only. If not specified, all of\nthe service account users of your VM instance''s service account can use the instance.'",
      ),
      new DynamicUIProps(
        InputType.String,
        "DesiredState",
        "Desired state of the Workbench Instance. Set this field to `ACTIVE` to start the Instance, and `STOPPED` to stop the Instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "Part of `parent`. See documentation of `projectsId`.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "DisableProxyAccess",
        "Optional. If true, the workbench instance will not register with the proxy.",
      ),
      new DynamicUIProps(
        InputType.String,
        "GceSetup",
        "The definition of how to configure a VM instance outside of Resources and Identity.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "InstanceId",
        "Required. User-defined unique ID of this instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of this workbench instance. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Optional. Labels to apply to this instance. These can be later modified\nby the UpdateInstance method.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
    ];
  }
}
