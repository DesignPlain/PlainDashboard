import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface batch_JobDefinitionEksPropertiesPodPropertiesContainersEnv {
  // Specifies the name of the job definition.
  name?: string;

  // The value of the environment variable.
  value?: string;
}

export function batch_JobDefinitionEksPropertiesPodPropertiesContainersEnv_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Specifies the name of the job definition.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The value of the environment variable.",
      [],
      true,
      false,
    ),
  ];
}
