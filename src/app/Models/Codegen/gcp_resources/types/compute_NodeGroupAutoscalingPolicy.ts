import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_NodeGroupAutoscalingPolicy {
  /*
Minimum size of the node group. Must be less
than or equal to max-nodes. The default value is 0.
*/
  minNodes?: number;

  /*
The autoscaling mode. Set to one of the following:
- OFF: Disables the autoscaler.
- ON: Enables scaling in and scaling out.
- ONLY_SCALE_OUT: Enables only scaling out.
You must use this mode if your node groups are configured to
restart their hosted VMs on minimal servers.
Possible values are: `OFF`, `ON`, `ONLY_SCALE_OUT`.
*/
  mode?: string;

  /*
Maximum size of the node group. Set to a value less than or equal
to 100 and greater than or equal to min-nodes.
*/
  maxNodes?: number;
}

export function compute_NodeGroupAutoscalingPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "minNodes",
      "Minimum size of the node group. Must be less\nthan or equal to max-nodes. The default value is 0.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mode",
      "The autoscaling mode. Set to one of the following:\n- OFF: Disables the autoscaler.\n- ON: Enables scaling in and scaling out.\n- ONLY_SCALE_OUT: Enables only scaling out.\nYou must use this mode if your node groups are configured to\nrestart their hosted VMs on minimal servers.\nPossible values are: `OFF`, `ON`, `ONLY_SCALE_OUT`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxNodes",
      "Maximum size of the node group. Set to a value less than or equal\nto 100 and greater than or equal to min-nodes.",
      [],
      false,
      false,
    ),
  ];
}
