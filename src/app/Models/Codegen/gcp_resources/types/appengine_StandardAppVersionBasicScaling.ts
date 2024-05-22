import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appengine_StandardAppVersionBasicScaling {
  /*
Duration of time after the last request that an instance must wait before the instance is shut down.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". Defaults to 900s.
*/
  idleTimeout?: string;

  // Maximum number of instances to create for this version. Must be in the range [1.0, 200.0].
  maxInstances?: number;
}

export function appengine_StandardAppVersionBasicScaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "idleTimeout",
      "Duration of time after the last request that an instance must wait before the instance is shut down.\nA duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\". Defaults to 900s.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxInstances",
      "Maximum number of instances to create for this version. Must be in the range [1.0, 200.0].",
      [],
      true,
      false,
    ),
  ];
}
