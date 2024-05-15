import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Notebooks_RuntimeSoftwareConfig,
  Notebooks_RuntimeSoftwareConfig_GetTypes,
} from "../types/Notebooks_RuntimeSoftwareConfig";
import {
  Notebooks_RuntimeVirtualMachine,
  Notebooks_RuntimeVirtualMachine_GetTypes,
} from "../types/Notebooks_RuntimeVirtualMachine";
import {
  Notebooks_RuntimeAccessConfig,
  Notebooks_RuntimeAccessConfig_GetTypes,
} from "../types/Notebooks_RuntimeAccessConfig";
import {
  Notebooks_RuntimeMetric,
  Notebooks_RuntimeMetric_GetTypes,
} from "../types/Notebooks_RuntimeMetric";

export interface RuntimeArgs {
  /*
A reference to the zone where the machine resides.


- - -
*/
  Location?: string;

  // The name specified for the Notebook runtime.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The config settings for software inside the runtime.
Structure is documented below.
*/
  SoftwareConfig?: Notebooks_RuntimeSoftwareConfig;

  /*
Use a Compute Engine VM image to start the managed notebook instance.
Structure is documented below.
*/
  VirtualMachine?: Notebooks_RuntimeVirtualMachine;

  /*
The config settings for accessing runtime.
Structure is documented below.
*/
  AccessConfig?: Notebooks_RuntimeAccessConfig;

  /*
The labels to associate with this runtime. Label --keys-- must
contain 1 to 63 characters, and must conform to [RFC 1035]
(https://www.ietf.org/rfc/rfc1035.txt). Label --values-- may be
empty, but, if present, must contain 1 to 63 characters, and must
conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No
more than 32 labels can be associated with a cluster.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;
}
export class Runtime extends Resource {
  // The name specified for the Notebook runtime.
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The config settings for software inside the runtime.
Structure is documented below.
*/
  public SoftwareConfig?: Notebooks_RuntimeSoftwareConfig;

  // The state of this runtime.
  public State?: string;

  /*
The config settings for accessing runtime.
Structure is documented below.
*/
  public AccessConfig?: Notebooks_RuntimeAccessConfig;

  /*
A reference to the zone where the machine resides.


- - -
*/
  public Location?: string;

  /*
The labels to associate with this runtime. Label --keys-- must
contain 1 to 63 characters, and must conform to [RFC 1035]
(https://www.ietf.org/rfc/rfc1035.txt). Label --values-- may be
empty, but, if present, must contain 1 to 63 characters, and must
conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No
more than 32 labels can be associated with a cluster.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
Contains Runtime daemon metrics such as Service status and JupyterLab
status
Structure is documented below.
*/
  public Metrics?: Array<Notebooks_RuntimeMetric>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
Use a Compute Engine VM image to start the managed notebook instance.
Structure is documented below.
*/
  public VirtualMachine?: Notebooks_RuntimeVirtualMachine;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
The health state of this runtime. For a list of possible output
values, see `https://cloud.google.com/vertex-ai/docs/workbench/
reference/rest/v1/projects.locations.runtimes#healthstate`.
*/
  public HealthState?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Location",
        "A reference to the zone where the machine resides.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name specified for the Notebook runtime.",
        [],
        false,
        true,
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
        "SoftwareConfig",
        "The config settings for software inside the runtime.\nStructure is documented below.",
        Notebooks_RuntimeSoftwareConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "VirtualMachine",
        "Use a Compute Engine VM image to start the managed notebook instance.\nStructure is documented below.",
        Notebooks_RuntimeVirtualMachine_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "AccessConfig",
        "The config settings for accessing runtime.\nStructure is documented below.",
        Notebooks_RuntimeAccessConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "The labels to associate with this runtime. Label **keys** must\ncontain 1 to 63 characters, and must conform to [RFC 1035]\n(https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be\nempty, but, if present, must contain 1 to 63 characters, and must\nconform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No\nmore than 32 labels can be associated with a cluster.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
