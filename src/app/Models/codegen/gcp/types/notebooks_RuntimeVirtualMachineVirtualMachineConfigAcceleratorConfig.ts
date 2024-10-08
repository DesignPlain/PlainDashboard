import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface notebooks_RuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig {
  // Count of cores of this accelerator.
  coreCount?: number;

  /*
Accelerator model. For valid values, see
`https://cloud.google.com/vertex-ai/docs/workbench/reference/
rest/v1/projects.locations.runtimes#AcceleratorType`
*/
  type?: string;
}

export function notebooks_RuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'coreCount',
      'Count of cores of this accelerator.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'Accelerator model. For valid values, see\n`https://cloud.google.com/vertex-ai/docs/workbench/reference/\nrest/v1/projects.locations.runtimes#AcceleratorType`',
      () => [],
      false,
      false,
    ),
  ];
}
