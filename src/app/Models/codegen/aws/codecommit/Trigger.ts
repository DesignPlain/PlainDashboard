import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  codecommit_TriggerTrigger,
  codecommit_TriggerTrigger_GetTypes,
} from "../types/codecommit_TriggerTrigger";

export interface TriggerArgs {
  // The name for the repository. This needs to be less than 100 characters.
  repositoryName?: string;

  // The name of the trigger.
  triggers?: Array<codecommit_TriggerTrigger>;
}
export class Trigger extends DS_Resource {
  // The name of the trigger.
  public triggers?: Array<codecommit_TriggerTrigger>;

  // System-generated unique identifier.
  public configurationId?: string;

  // The name for the repository. This needs to be less than 100 characters.
  public repositoryName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "repositoryName",
        "The name for the repository. This needs to be less than 100 characters.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "triggers",
        "The name of the trigger.",
        () => codecommit_TriggerTrigger_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
