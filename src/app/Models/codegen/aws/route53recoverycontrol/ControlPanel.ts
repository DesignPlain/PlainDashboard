import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ControlPanelArgs {
  // ARN of the cluster in which this control panel will reside.
  clusterArn?: string;

  // Name describing the control panel.
  name?: string;
}
export class ControlPanel extends DS_Resource {
  // ARN of the control panel.
  public arn?: string;

  // ARN of the cluster in which this control panel will reside.
  public clusterArn?: string;

  // Whether a control panel is default.
  public defaultControlPanel?: boolean;

  // Name describing the control panel.
  public name?: string;

  // Number routing controls in a control panel.
  public routingControlCount?: number;

  // Status of control panel: `PENDING` when it is being created/updated, `PENDING_DELETION` when it is being deleted, and `DEPLOYED` otherwise.
  public status?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "clusterArn",
        "ARN of the cluster in which this control panel will reside.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name describing the control panel.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
