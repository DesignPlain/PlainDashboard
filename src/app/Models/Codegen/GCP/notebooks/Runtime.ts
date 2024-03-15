import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { RuntimeSoftwareConfig } from "../types/RuntimeSoftwareConfig";
import { RuntimeVirtualMachine } from "../types/RuntimeVirtualMachine";
import { RuntimeAccessConfig } from "../types/RuntimeAccessConfig";
import { RuntimeMetric } from "../types/RuntimeMetric";

export interface RuntimeArgs {
  /*
The config settings for software inside the runtime.
Structure is documented below.
*/
  SoftwareConfig?: RuntimeSoftwareConfig;

  /*
Use a Compute Engine VM image to start the managed notebook instance.
Structure is documented below.
*/
  VirtualMachine?: RuntimeVirtualMachine;

  /*
The config settings for accessing runtime.
Structure is documented below.
*/
  AccessConfig?: RuntimeAccessConfig;

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
}
export class Runtime extends Resource {
  /*
A reference to the zone where the machine resides.


- - -
*/
  public Location?: string;

  /*
Contains Runtime daemon metrics such as Service status and JupyterLab
status
Structure is documented below.
*/
  public Metrics?: Array<RuntimeMetric>;

  // The name specified for the Notebook runtime.
  public Name?: string;

  /*
Use a Compute Engine VM image to start the managed notebook instance.
Structure is documented below.
*/
  public VirtualMachine?: RuntimeVirtualMachine;

  /*
The config settings for accessing runtime.
Structure is documented below.
*/
  public AccessConfig?: RuntimeAccessConfig;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
The health state of this runtime. For a list of possible output
values, see `https://cloud.google.com/vertex-ai/docs/workbench/
reference/rest/v1/projects.locations.runtimes#healthstate`.
*/
  public HealthState?: string;

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
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
The config settings for software inside the runtime.
Structure is documented below.
*/
  public SoftwareConfig?: RuntimeSoftwareConfig;

  // The state of this runtime.
  public State?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Location",
        "A reference to the zone where the machine resides.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name specified for the Notebook runtime.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SoftwareConfig",
        "The config settings for software inside the runtime.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "VirtualMachine",
        "Use a Compute Engine VM image to start the managed notebook instance.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AccessConfig",
        "The config settings for accessing runtime.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "The labels to associate with this runtime. Label **keys** must\ncontain 1 to 63 characters, and must conform to [RFC 1035]\n(https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be\nempty, but, if present, must contain 1 to 63 characters, and must\nconform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No\nmore than 32 labels can be associated with a cluster.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
    ];
  }
}
