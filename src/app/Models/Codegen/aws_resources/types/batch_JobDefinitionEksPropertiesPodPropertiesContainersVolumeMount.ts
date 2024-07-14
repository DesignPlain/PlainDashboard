import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface batch_JobDefinitionEksPropertiesPodPropertiesContainersVolumeMount {
  //
  mountPath?: string;

  // Specifies the name of the job definition.
  name?: string;

  //
  readOnly?: boolean;
}

export function batch_JobDefinitionEksPropertiesPodPropertiesContainersVolumeMount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "mountPath", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Specifies the name of the job definition.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.Bool, "readOnly", "", [], false, false),
  ];
}
