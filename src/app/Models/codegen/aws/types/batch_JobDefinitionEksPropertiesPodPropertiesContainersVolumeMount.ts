import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface batch_JobDefinitionEksPropertiesPodPropertiesContainersVolumeMount {
  // Name of the job definition.
  name?: string;

  //
  readOnly?: boolean;

  //
  mountPath?: string;
}

export function batch_JobDefinitionEksPropertiesPodPropertiesContainersVolumeMount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the job definition.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.Bool, "readOnly", "", () => [], false, false),
    new DynamicUIProps(
      InputType.String,
      "mountPath",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
