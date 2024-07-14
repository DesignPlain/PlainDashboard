import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
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
export class Trigger extends Resource {
  // System-generated unique identifier.
  public configurationId?: string;

  // The name for the repository. This needs to be less than 100 characters.
  public repositoryName?: string;

  // The name of the trigger.
  public triggers?: Array<codecommit_TriggerTrigger>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "repositoryName",
        "The name for the repository. This needs to be less than 100 characters.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "triggers",
        "The name of the trigger.",
        codecommit_TriggerTrigger_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
