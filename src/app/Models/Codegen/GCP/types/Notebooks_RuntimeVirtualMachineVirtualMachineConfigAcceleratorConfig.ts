import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Notebooks_RuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig {
  // Count of cores of this accelerator.
  CoreCount?: number;

  /*
Accelerator model. For valid values, see
`https://cloud.google.com/vertex-ai/docs/workbench/reference/
rest/v1/projects.locations.runtimes#AcceleratorType`
*/
  Type?: string;
}

export function Notebooks_RuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "CoreCount",
      "Count of cores of this accelerator.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "Accelerator model. For valid values, see\n`https://cloud.google.com/vertex-ai/docs/workbench/reference/\nrest/v1/projects.locations.runtimes#AcceleratorType`",
      [],
      false,
      false,
    ),
  ];
}
