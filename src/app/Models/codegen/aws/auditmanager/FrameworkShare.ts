import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface FrameworkShareArgs {
  // Comment from the sender about the share request.
  comment?: string;

  // Amazon Web Services account of the recipient.
  destinationAccount?: string;

  // Amazon Web Services region of the recipient.
  destinationRegion?: string;

  /*
Unique identifier for the shared custom framework.

The following arguments are optional:
*/
  frameworkId?: string;
}
export class FrameworkShare extends DS_Resource {
  // Comment from the sender about the share request.
  public comment?: string;

  // Amazon Web Services account of the recipient.
  public destinationAccount?: string;

  // Amazon Web Services region of the recipient.
  public destinationRegion?: string;

  /*
Unique identifier for the shared custom framework.

The following arguments are optional:
*/
  public frameworkId?: string;

  // Status of the share request.
  public status?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "comment",
        "Comment from the sender about the share request.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "destinationAccount",
        "Amazon Web Services account of the recipient.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "destinationRegion",
        "Amazon Web Services region of the recipient.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "frameworkId",
        "Unique identifier for the shared custom framework.\n\nThe following arguments are optional:",
        () => [],
        true,
        false,
      ),
    ];
  }
}
