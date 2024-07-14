import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appflow_FlowSourceFlowConfigSourceConnectorPropertiesVeeva {
  // Boolean value to include All Versions of files in Veeva document extract flow.
  includeAllVersions?: boolean;

  // Boolean value to include file renditions in Veeva document extract flow.
  includeRenditions?: boolean;

  // Boolean value to include source files in Veeva document extract flow.
  includeSourceFiles?: boolean;

  // Object specified in the flow destination.
  object?: string;

  // Document type specified in the Veeva document extract flow.
  documentType?: string;
}

export function appflow_FlowSourceFlowConfigSourceConnectorPropertiesVeeva_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "includeAllVersions",
      "Boolean value to include All Versions of files in Veeva document extract flow.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "includeRenditions",
      "Boolean value to include file renditions in Veeva document extract flow.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "includeSourceFiles",
      "Boolean value to include source files in Veeva document extract flow.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "object",
      "Object specified in the flow destination.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "documentType",
      "Document type specified in the Veeva document extract flow.",
      [],
      false,
      false,
    ),
  ];
}
