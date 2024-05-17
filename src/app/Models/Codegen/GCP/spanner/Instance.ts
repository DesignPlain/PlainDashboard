import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Spanner_InstanceAutoscalingConfig,
  Spanner_InstanceAutoscalingConfig_GetTypes,
} from "../types/Spanner_InstanceAutoscalingConfig";

export interface InstanceArgs {
  /*
The autoscaling configuration. Autoscaling is enabled if this field is set.
When autoscaling is enabled, num_nodes and processing_units are treated as,
OUTPUT_ONLY fields and reflect the current compute capacity allocated to
the instance.
Structure is documented below.
*/
  AutoscalingConfig?: Spanner_InstanceAutoscalingConfig;

  /*
When deleting a spanner instance, this boolean option will delete all backups of this instance.
This must be set to true if you created a backup manually in the console.
*/
  ForceDestroy?: boolean;

  /*
A unique identifier for the instance, which cannot be changed after
the instance is created. The name must be between 6 and 30 characters
in length.

If not provided, a random string starting with `tf-` will be selected.
*/
  Name?: string;

  /*
The number of nodes allocated to this instance. Exactly one of either node_count or processing_units must be present in
terraform.
*/
  NumNodes?: number;

  /*
The number of processing units allocated to this instance. Exactly one of processing_units or node_count must be present
in terraform.
*/
  ProcessingUnits?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The name of the instance's configuration (similar but not
quite the same as a region) which defines the geographic placement and
replication of your databases in this instance. It determines where your data
is stored. Values are typically of the form `regional-europe-west1` , `us-central` etc.
In order to obtain a valid list please consult the
[Configuration section of the docs](https://cloud.google.com/spanner/docs/instances).
*/
  Config?: string;

  /*
The descriptive name for this instance as it appears in UIs. Must be
unique per project and between 4 and 30 characters in length.


- - -
*/
  DisplayName?: string;

  /*
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;
}
export class Instance extends Resource {
  /*
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Instance status: `CREATING` or `READY`.
  public State?: string;

  /*
The autoscaling configuration. Autoscaling is enabled if this field is set.
When autoscaling is enabled, num_nodes and processing_units are treated as,
OUTPUT_ONLY fields and reflect the current compute capacity allocated to
the instance.
Structure is documented below.
*/
  public AutoscalingConfig?: Spanner_InstanceAutoscalingConfig;

  /*
The name of the instance's configuration (similar but not
quite the same as a region) which defines the geographic placement and
replication of your databases in this instance. It determines where your data
is stored. Values are typically of the form `regional-europe-west1` , `us-central` etc.
In order to obtain a valid list please consult the
[Configuration section of the docs](https://cloud.google.com/spanner/docs/instances).
*/
  public Config?: string;

  /*
The descriptive name for this instance as it appears in UIs. Must be
unique per project and between 4 and 30 characters in length.


- - -
*/
  public DisplayName?: string;

  /*
When deleting a spanner instance, this boolean option will delete all backups of this instance.
This must be set to true if you created a backup manually in the console.
*/
  public ForceDestroy?: boolean;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
A unique identifier for the instance, which cannot be changed after
the instance is created. The name must be between 6 and 30 characters
in length.

If not provided, a random string starting with `tf-` will be selected.
*/
  public Name?: string;

  /*
The number of nodes allocated to this instance. Exactly one of either node_count or processing_units must be present in
terraform.
*/
  public NumNodes?: number;

  /*
The number of processing units allocated to this instance. Exactly one of processing_units or node_count must be present
in terraform.
*/
  public ProcessingUnits?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "ProcessingUnits",
        "The number of processing units allocated to this instance. Exactly one of processing_units or node_count must be present\nin terraform.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Config",
        "The name of the instance's configuration (similar but not\nquite the same as a region) which defines the geographic placement and\nreplication of your databases in this instance. It determines where your data\nis stored. Values are typically of the form `regional-europe-west1` , `us-central` etc.\nIn order to obtain a valid list please consult the\n[Configuration section of the docs](https://cloud.google.com/spanner/docs/instances).",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        'An object containing a list of "key": value pairs.\nExample: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "AutoscalingConfig",
        "The autoscaling configuration. Autoscaling is enabled if this field is set.\nWhen autoscaling is enabled, num_nodes and processing_units are treated as,\nOUTPUT_ONLY fields and reflect the current compute capacity allocated to\nthe instance.\nStructure is documented below.",
        Spanner_InstanceAutoscalingConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "NumNodes",
        "The number of nodes allocated to this instance. Exactly one of either node_count or processing_units must be present in\nterraform.",
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
        InputType.String,
        "DisplayName",
        "The descriptive name for this instance as it appears in UIs. Must be\nunique per project and between 4 and 30 characters in length.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "ForceDestroy",
        "When deleting a spanner instance, this boolean option will delete all backups of this instance.\nThis must be set to true if you created a backup manually in the console.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "A unique identifier for the instance, which cannot be changed after\nthe instance is created. The name must be between 6 and 30 characters\nin length.\n\nIf not provided, a random string starting with `tf-` will be selected.",
        [],
        false,
        true,
      ),
    ];
  }
}
