import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Appengine_StandardAppVersionBasicScaling {
  /*
Duration of time after the last request that an instance must wait before the instance is shut down.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". Defaults to 900s.
*/
  IdleTimeout?: string;

  // Maximum number of instances to create for this version. Must be in the range [1.0, 200.0].
  MaxInstances?: number;
}

export function Appengine_StandardAppVersionBasicScaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "MaxInstances",
      "Maximum number of instances to create for this version. Must be in the range [1.0, 200.0].",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "IdleTimeout",
      "Duration of time after the last request that an instance must wait before the instance is shut down.\nA duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\". Defaults to 900s.",
      [],
      false,
      false,
    ),
  ];
}
