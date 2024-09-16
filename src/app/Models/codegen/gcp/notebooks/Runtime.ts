import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  notebooks_RuntimeSoftwareConfig,
  notebooks_RuntimeSoftwareConfig_GetTypes,
} from '../types/notebooks_RuntimeSoftwareConfig';
import {
  notebooks_RuntimeVirtualMachine,
  notebooks_RuntimeVirtualMachine_GetTypes,
} from '../types/notebooks_RuntimeVirtualMachine';
import {
  notebooks_RuntimeAccessConfig,
  notebooks_RuntimeAccessConfig_GetTypes,
} from '../types/notebooks_RuntimeAccessConfig';
import {
  notebooks_RuntimeMetric,
  notebooks_RuntimeMetric_GetTypes,
} from '../types/notebooks_RuntimeMetric';

export interface RuntimeArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The config settings for software inside the runtime.
Structure is documented below.
*/
  softwareConfig?: notebooks_RuntimeSoftwareConfig;

  /*
Use a Compute Engine VM image to start the managed notebook instance.
Structure is documented below.
*/
  virtualMachine?: notebooks_RuntimeVirtualMachine;

  /*
The config settings for accessing runtime.
Structure is documented below.
*/
  accessConfig?: notebooks_RuntimeAccessConfig;

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
  labels?: Map<string, string>;

  /*
A reference to the zone where the machine resides.


- - -
*/
  location?: string;

  // The name specified for the Notebook runtime.
  name?: string;
}
export class Runtime extends DS_Resource {
  /*
The config settings for accessing runtime.
Structure is documented below.
*/
  public accessConfig?: notebooks_RuntimeAccessConfig;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
The health state of this runtime. For a list of possible output
values, see `https://cloud.google.com/vertex-ai/docs/workbench/
reference/rest/v1/projects.locations.runtimes#healthstate`.
*/
  public healthState?: string;

  // The state of this runtime.
  public state?: string;

  /*
Use a Compute Engine VM image to start the managed notebook instance.
Structure is documented below.
*/
  public virtualMachine?: notebooks_RuntimeVirtualMachine;

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
  public labels?: Map<string, string>;

  /*
A reference to the zone where the machine resides.


- - -
*/
  public location?: string;

  /*
Contains Runtime daemon metrics such as Service status and JupyterLab
status
Structure is documented below.
*/
  public metrics?: Array<notebooks_RuntimeMetric>;

  // The name specified for the Notebook runtime.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
The config settings for software inside the runtime.
Structure is documented below.
*/
  public softwareConfig?: notebooks_RuntimeSoftwareConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'accessConfig',
        'The config settings for accessing runtime.\nStructure is documented below.',
        () => notebooks_RuntimeAccessConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'labels',
        'The labels to associate with this runtime. Label **keys** must\ncontain 1 to 63 characters, and must conform to [RFC 1035]\n(https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be\nempty, but, if present, must contain 1 to 63 characters, and must\nconform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No\nmore than 32 labels can be associated with a cluster.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'location',
        'A reference to the zone where the machine resides.\n\n\n- - -',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name specified for the Notebook runtime.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'softwareConfig',
        'The config settings for software inside the runtime.\nStructure is documented below.',
        () => notebooks_RuntimeSoftwareConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'virtualMachine',
        'Use a Compute Engine VM image to start the managed notebook instance.\nStructure is documented below.',
        () => notebooks_RuntimeVirtualMachine_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
