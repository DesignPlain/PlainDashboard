import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appflow_FlowSourceFlowConfigSourceConnectorPropertiesVeeva {
  // Boolean value to include file renditions in Veeva document extract flow.
  includeRenditions?: boolean;

  // Boolean value to include source files in Veeva document extract flow.
  includeSourceFiles?: boolean;

  //
  object?: string;

  // Document type specified in the Veeva document extract flow.
  documentType?: string;

  // Boolean value to include All Versions of files in Veeva document extract flow.
  includeAllVersions?: boolean;
}

export function appflow_FlowSourceFlowConfigSourceConnectorPropertiesVeeva_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'includeRenditions',
      'Boolean value to include file renditions in Veeva document extract flow.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'includeSourceFiles',
      'Boolean value to include source files in Veeva document extract flow.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, 'object', '', () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      'documentType',
      'Document type specified in the Veeva document extract flow.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'includeAllVersions',
      'Boolean value to include All Versions of files in Veeva document extract flow.',
      () => [],
      false,
      false,
    ),
  ];
}
