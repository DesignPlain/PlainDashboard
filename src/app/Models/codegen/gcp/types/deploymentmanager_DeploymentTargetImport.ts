import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface deploymentmanager_DeploymentTargetImport {
  // The full contents of the template that you want to import.
  content?: string;

  /*
The name of the template to import, as declared in the YAML
configuration.

- - -
*/
  name?: string;
}

export function deploymentmanager_DeploymentTargetImport_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "content",
      "The full contents of the template that you want to import.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the template to import, as declared in the YAML\nconfiguration.\n\n- - -",
      () => [],
      false,
      false,
    ),
  ];
}
